import * as React from 'react';
import Select from 'react-select'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.body);
const selectedButtons = ['','','','','','','','','','','']

const optionsMachen = [
    { label: "A", value: "a"},
    { label:  "B", value: "b"},
    { label:  "C", value:  "c"},
    { label:  "D", value: "d"},
    { label:  "E", value: "e"},
    { label:  "F", value: "f"},
    { label:  "G", value: "g"},
    { label:  "H", value: "h"},
    { label:  "I", value: "i"},
    { label:  "J", value: "j"},
    { label:  "K", value: "k"},
    { label:  "L", value: "l"},
    { label:  "M", value: "m"},
    { label:  "N", value: "n"},
    { label:  "O", value: "o"},
    { label:  "P", value: "p"},
    { label:  "Q", value: "q"},
    { label:  "R", value: "r"},
    { label:  "S", value:  "s"},
    { label:  "T", value:  "t"},
    { label:  "U", value:  "u"},
    { label:  "W", value:  "w"},
    { label:  "X", value:  "x"},
    { label:  "Y", value:  "y"},
    { label:  "Z", value:  "z"},
    { label:  "left arrow", value:  "KEY_LEFT_ARROW"},
    { label:  "right arrow", value:  "KEY_RIGHT_ARROW"},
    { label:  "down arrow", value:  "KEY_DOWN_ARROW"},
    { label:  "up arrow", value:  "KEY_UP_ARROW"},
    { label:  "spacebar", value:  " "},
    { label:  "left shift", value:  "KEY_LEFT_SHIFT"},
    { label:  "left ctrl", value:  "KEY_LEFT_CTRL"}
]
function updateKeyArray(id, value){ 
  selectedButtons[id] = value;
  console.log(selectedButtons)
}

root.render(
<div>
    <h2>Button config</h2>
    <div className="input"> Przycisk 1 <Select options={optionsMachen} onChange={(e) => updateKeyArray(0, e.value)}/></div>
    <div className="input"> Przycisk 1 <Select options={optionsMachen} onChange={(e) => updateKeyArray(1, e.value)}/></div>
    <div className="input"> Przycisk 1 <Select options={optionsMachen} onChange={(e) => updateKeyArray(2, e.value)}/></div>
    <div className="input"> Przycisk 1 <Select options={optionsMachen} onChange={(e) => updateKeyArray(3, e.value)}/></div>
    <div className="input"> Przycisk 1 <Select options={optionsMachen} onChange={(e) => updateKeyArray(4, e.value)}/></div>
    <div className="input"> Przycisk 1 <Select options={optionsMachen} onChange={(e) => updateKeyArray(5, e.value)}/></div>
    <div className="input"> Przycisk 1 <Select options={optionsMachen} onChange={(e) => updateKeyArray(6, e.value)}/></div>
    <div className="input"> Przycisk 1 <Select options={optionsMachen} onChange={(e) => updateKeyArray(7, e.value)}/></div>
    <div className="input"> Przycisk 1 <Select options={optionsMachen} onChange={(e) => updateKeyArray(8, e.value)}/></div>
    <h2>Rotation encoder config</h2>
    {/* <Select options={optionsMachen}/> */}
    <Select options={optionsMachen} onChange={(e) => updateKeyArray(9, e.value)}/>
    <Select options={optionsMachen} onChange={(e) => updateKeyArray(10, e.value)}/>
</div>
);

