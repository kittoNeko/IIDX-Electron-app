#ifndef _CONFIGURATION_H_
#define _CONFIGURATION_H_
#include <stdint.h>
const uint8_t button_pins[] = {13,12,11,10,9,8,7,6,5};
const char button_keys[] = ['i','h','g','f','e','d','c','b','a'];
const char rotation_keys
#define NUM_BUTTONS (sizeof(button_pins)/sizeof(button_pins[0]))
#define ENCODER_CLK_PIN 14
#define ENCODER_DT_PIN  15

typedef struct {
  uint16_t debounce_time;
} configuration_struct;

static configuration_struct global_config;

inline void initialise_configuration() {
  global_config.debounce_time = 10;
}

inline void get_configuration(configuration_struct **c) {
  *c = &global_config;
}

#endif
