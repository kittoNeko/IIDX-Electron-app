import * as React from 'react';
import Select from 'react-select'
import { createRoot } from 'react-dom/client';
import Input from '@mui/material/Input';
import { InputLabel } from '@mui/material';
import { Grid } from '@mui/material';
import "./index.css";

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
function App(){
  React.useEffect(() => {
    window.electronAPI.onPythonLog((msg) => {
      console.log("Python:", msg);
    });
  }, []);

  function updateKeyArray(id, value){ 
    selectedButtons[id] = value;
    console.log(selectedButtons);
  }
  const saveJson = async () => {
    const path = await window.electronAPI.saveJson(selectedButtons);
    console.log("Zapisano w:", path);
    await window.electronAPI.runPython(path);
  };

  return(
    <div>
    <div className="buttonsConfig">
      <h2>Button config</h2>
      <div className="functionButtons">
        <h4> Function buttons</h4>
        <Grid container spacing={2}>
          <Grid size={6}>
            <div className="input">
              <InputLabel> Function Button 1 </InputLabel>
              <Select options={optionsMachen} onChange={(e) => updateKeyArray(0, e.value)}/>
            </div>
          </Grid>
          <Grid size={6}>
            <div className="input">
              <InputLabel> Function Button 2 </InputLabel>
              <Select options={optionsMachen} onChange={(e) => updateKeyArray(1, e.value)}/>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="gameButtons">
        <h4> Game buttons</h4>
        <Grid container spacing={2}>
          {/* 3 buttons */}
          <Grid size={1}> </Grid>
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 2 </InputLabel>
              <Select options={optionsMachen} onChange={(e) => updateKeyArray(2, e.value)}/>
            </div>
          </Grid>
          <Grid size={4}>
            <div className="input">
              <InputLabel> Button 4  </InputLabel>
              <Select options={optionsMachen} onChange={(e) => updateKeyArray(3, e.value)}/>
            </div>
          </Grid>
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 6  </InputLabel>
              <Select options={optionsMachen} onChange={(e) => updateKeyArray(4, e.value)}/>
            </div>
          </Grid>
          <Grid size={1}> </Grid>
          {/* 4 buttons */}
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 1  </InputLabel>
              <Select options={optionsMachen} onChange={(e) => updateKeyArray(5, e.value)}/>
            </div>
          </Grid>
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 3  </InputLabel>
              <Select options={optionsMachen} onChange={(e) => updateKeyArray(6, e.value)}/>
            </div>
          </Grid>
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 5  </InputLabel>
              <Select options={optionsMachen} onChange={(e) => updateKeyArray(7, e.value)}/>
            </div>
          </Grid>
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 7 </InputLabel>
              <Select options={optionsMachen} onChange={(e) => updateKeyArray(8, e.value)}/>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
    <div className="encoderConfig">
      <h2>Rotation encoder config</h2>
      <Grid container spacing={2}>
        <Grid size={6}>
          <div className="input">
            <InputLabel> Clockwise </InputLabel>
            <Select options={optionsMachen} onChange={(e) => updateKeyArray(9, e.value)}/>
          </div>
        </Grid>
        <Grid size={6}>
          <div className="input">
            <InputLabel> Counterclockwise </InputLabel>
            <Select options={optionsMachen} onChange={(e) => updateKeyArray(10, e.value)}/>
          </div>
        </Grid>
      </Grid>
    </div>
    <div className='saveButtons'>
      <button onClick={saveJson}>Save config to file</button>
    </div>
  </div>
  )
}
root.render(<App/>);