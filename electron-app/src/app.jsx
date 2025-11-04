import * as React from 'react';
import Select from 'react-selecnpmt'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.body);

const optionsMachen = [
    { label: "A", value: "a"},
    { label:  "B", value: "a"},
    { label:  "C", value:  "a"},
    { label:  "D", value: "a"},
    { label:  "E", value: "a"},
    { label:  "F", value: "a"},
    { label:  "G", value: "a"},
    { label:  "H", value: "a"},
    { label:  "I", value: "a"},
    { label:  "J", value: "a"},
    { label:  "K", value: "a"},
    { label:  "L", value: "a"},
    { label:  "M", value: "a"},
    { label:  "N", value: "a"},
    { label:  "O", value: "a"},
    { label:  "P", value: "a"},
    { label:  "Q", value: "a"},
    { label:  "R", value: "a"},
    { label:  "S", value:  "a"},
    { label:  "T", value:  "a"},
    { label:  "U", value:  "a"},
    { label:  "Y", value:  "a"},
    { label:  "Z", value:  "a"},
    { label:  "left-arrow", value:  "a"},
    { label:  "right-arrow", value:  "a"},
    { label:  "down-arrow", value:  "a"},
    { label:  "up-arrow", value:  "a"},
    { label:  "spacebar", value:  "a"},
    { label:  "left-shift", value:  "a"},
    { label:  "left-ctrl", value:  "a"}
]

  function Car() {
    return (
        <Select options={optionsMachen} />
    );
  }

root.render(
<div>
    <h2>Button config</h2>
    <div className="input"> Przycisk 1 <input type="text"/> </div>
    <div className="input"> Przycisk 1 <input type="text"/> </div>
    <div className="input"> Przycisk 1 <input type="text"/> </div>
    <div className="input"> Przycisk 1 <input type="text"/> </div>
    <div className="input"> Przycisk 1 <input type="text"/> </div>
    <div className="input"> Przycisk 1 <input type="text"/> </div>
    <div className="input"> Przycisk 1 <input type="text"/> </div>
    <div className="input"> Przycisk 1 <input type="text"/> </div>
    <div className="input"> Przycisk 1 <input type="text"/> </div>
    <h2>Rotation encoder config</h2>
    {/* <Select options={optionsMachen}/> */}
    <Select options={optionsMachen}/>
    
</div>
);

