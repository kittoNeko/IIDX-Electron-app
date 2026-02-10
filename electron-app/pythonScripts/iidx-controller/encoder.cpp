#include <Arduino.h>
#include "Encoder.h"
#include "config.h"

volatile int32_t encoder_position = 0;
volatile uint8_t last_clk_state = 0;
unsigned long last_encoder_change = 0;
const unsigned long ENCODER_DEBOUNCE_MS = 5;

void encoder_isr() {
  unsigned long now = millis();
  if (now - last_encoder_change < ENCODER_DEBOUNCE_MS) return;
  last_encoder_change = now;
  uint8_t clk = digitalRead(ENCODER_CLK_PIN);
  uint8_t dt  = digitalRead(ENCODER_DT_PIN);
  if (clk != last_clk_state) {
    if (dt != clk) encoder_position++;
    else encoder_position--;
  }
  last_clk_state = clk;
}

void initialise_encoder() {
  pinMode(ENCODER_CLK_PIN, INPUT_PULLUP);
  pinMode(ENCODER_DT_PIN, INPUT_PULLUP);
  last_clk_state = digitalRead(ENCODER_CLK_PIN);
  attachInterrupt(digitalPinToInterrupt(ENCODER_CLK_PIN), encoder_isr, CHANGE);
}

int32_t get_encoder_state() {
  noInterrupts();
  int32_t val = encoder_position;
  interrupts();
  return val;
}

int get_digital_encoder_state() {
  static int32_t last = 0;
  int32_t cur = get_encoder_state();
  int32_t diff = cur - last;
  if(diff > 0){ 
    last = cur; return 2; 
  }
  if(diff < 0){
     last = cur; return 1;
  }
  return 0;
}
