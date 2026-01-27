#include <Arduino.h>
#include <Bounce2.h>
#include "buttons.h"
#include "config.h"
Bounce buttons[NUM_BUTTONS];
uint16_t button_status = 0;
static configuration_struct *config;

void set_debounce_interval() {
  for(int i = 0; i < NUM_BUTTONS; i++){
    buttons[i].interval(config->debounce_time);
  }
}

void initialise_buttons() {
  get_configuration(&config);
  for(int i = 0; i < NUM_BUTTONS; i++){
    buttons[i] = Bounce();
    pinMode(button_pins[i], INPUT_PULLUP);
    buttons[i].attach(button_pins[i]);
    buttons[i].interval(config->debounce_time);
  }
  button_status = 0;
}

uint16_t get_button_state() {
  for(int i = 0; i < NUM_BUTTONS; i++){
    buttons[i].update();
    int state = buttons[i].read();
    if(state == LOW){
      button_status |= (uint16_t)1 << i;
    } 
    else{
      button_status &= ~((uint16_t)1 << i);
    }
  }
  return button_status;
}
