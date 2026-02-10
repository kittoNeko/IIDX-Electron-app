#ifndef _BUTTONS_H_
#define _BUTTONS_H_
#include <stdint.h>
#ifdef __cplusplus
extern "C" {
#endif

void initialise_buttons();
uint16_t get_button_state();
void set_debounce_interval();

#ifdef __cplusplus
}
#endif

#endif
