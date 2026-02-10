import * as React from 'react';
import Select from 'react-select'
import { createRoot } from 'react-dom/client';
import Input from '@mui/material/Input';
import { Button, InputLabel } from '@mui/material';
import { Grid } from '@mui/material';
import "./index.css";

const root = createRoot(document.body);
const selectedButtons = ['','','','','','','','','','','']
let areCollisions = false;
let areUnasigned = false;
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
   function DetectCollision(){
    let collisionDetector = selectedButtons.slice()
    collisionDetector.sort()
    areCollisions = false
    for(let i = 0; i< collisionDetector.length - 1; i++){
      if(collisionDetector[i] == collisionDetector[i+1]){
        areCollisions = true;
      }
   }
   if(areCollisions) console.log("collision detected")
 }


 function DetectUnasigned(){
  areUnasigned = false;
  for(let i = 0; i< selectedButtons.length; i++){
     if(selectedButtons[i] == ""){
      areUnasigned = true;
     }
  }
  if(areUnasigned) console.log("unasigned element detected")
 }

  return(
    <div>
    <div>
    <div className="encoderConfig">
      <h2>Rotation encoder config</h2>
      <Grid container spacing={2}>
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
      <Grid size={12}>
        <p> Key shortcuts may collide so be careful when assigning them! </p>
        <Button variant="contained" onClick={(e) => saveJson()}> Save to the file </Button>
        {/* <Button variant="contained" onClick={(e) => SaveSettings2()}> Save to the file 2</Button> */}
        <Button variant="contained" onClick={(e) => ImportSettings()}> Import settings </Button>
      </Grid>
    </Grid>
  </div>
  </div> );
}
root.render(<App/>)