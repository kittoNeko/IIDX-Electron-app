#include <Arduino.h>
#include <Keyboard.h>
#include "config.h"
#include "buttons.h"
#include "encoder.h"

static configuration_struct *config;
uint16_t previous_button_state = 0;

void setup() {
  initialise_configuration();
  initialise_buttons();
  initialise_encoder();
  get_configuration(&config);
  delay(500);
  Keyboard.begin();
}

void send_keyboard_for_buttons(uint16_t buttons) {
  for (int i = 0; i < NUM_BUTTONS; ++i) {
    uint16_t mask = (uint16_t)1 << i;
    bool now = buttons & mask;
    bool prev = previous_button_state & mask;
    if (!now && prev) {
      char key = button_keys[i];
      Keyboard.release(key);
    }
    if (now && !prev) {
      char key = button_keys[i];
      Keyboard.press(key);
    }
  }
  previous_button_state = buttons;
}

void loop() {
  uint16_t buttons = get_button_state();
  if (buttons != previous_button_state) {
    send_keyboard_for_buttons(buttons);
  }
  int encoder_direction = get_digital_encoder_state();
  if (encoder_direction == 1) {
    Keyboard.press(KEY_LEFT_ARROW);
  }
  if (encoder_direction == 2) {
    Keyboard.press(KEY_RIGHT_ARROW);
  }
  if(encoder_direction == 0){
    Keyboard.release(KEY_RIGHT_ARROW);
    Keyboard.release(KEY_LEFT_ARROW);
  }
  delay(2);
}
