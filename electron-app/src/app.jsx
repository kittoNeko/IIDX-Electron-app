import * as React from 'react';
import Select from 'react-select'
import { createRoot } from 'react-dom/client';
import Input from '@mui/material/Input';
import { InputLabel } from '@mui/material';
import { Grid } from '@mui/material';
import "./index.css";



const root = createRoot(document.body);

const optionsMachen = [
  { label: "A", value: "a" },
  { label: "B", value: "a" },
  { label: "C", value: "a" },
  { label: "D", value: "a" },
  { label: "E", value: "a" },
  { label: "F", value: "a" },
  { label: "G", value: "a" },
  { label: "H", value: "a" },
  { label: "I", value: "a" },
  { label: "J", value: "a" },
  { label: "K", value: "a" },
  { label: "L", value: "a" },
  { label: "M", value: "a" },
  { label: "N", value: "a" },
  { label: "O", value: "a" },
  { label: "P", value: "a" },
  { label: "Q", value: "a" },
  { label: "R", value: "a" },
  { label: "S", value: "a" },
  { label: "T", value: "a" },
  { label: "U", value: "a" },
  { label: "Y", value: "a" },
  { label: "Z", value: "a" },
  { label: "left-arrow", value: "a" },
  { label: "right-arrow", value: "a" },
  { label: "down-arrow", value: "a" },
  { label: "up-arrow", value: "a" },
  { label: "spacebar", value: "a" },
  { label: "left-shift", value: "a" },
  { label: "caps-lock", value: "a" },
  { label: "left-ctrl", value: "a" },
  { label: "right-ctrl", value: "a" },
  { label: "left-alt", value: "a" },
  { label: "right-alt", value: "a" }
]

root.render(
  <div>
    <div className="buttonsConfig">
      <h2>Button config</h2>
      <div class="functionButtons">
        <h4> Function buttons</h4>
        <Grid container spacing={2}>
          <Grid size={6}>
            <div className="input">
              <InputLabel> Function Button 1 </InputLabel>
              <Select options={optionsMachen} />
            </div>
          </Grid>
          <Grid size={6}>
            <div className="input">
              <InputLabel> Function Button 2 </InputLabel>
              <Select options={optionsMachen} />
            </div>
          </Grid>
        </Grid>
      </div>
      <div class="gameButtons">
        <h4> Game buttons</h4>
        <Grid container spacing={2}>
          {/* 3 buttons */}
          <Grid size={1}> </Grid>
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 2 </InputLabel>
              <Select options={optionsMachen} />
            </div>
          </Grid>
          <Grid size={4}>
            <div className="input">
              <InputLabel> Button 4  </InputLabel>
              <Select options={optionsMachen} />
            </div>
          </Grid>
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 6  </InputLabel>
              <Select options={optionsMachen} />
            </div>
          </Grid>
          <Grid size={1}> </Grid>
          {/* 4 buttons */}
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 1  </InputLabel>
              <Select options={optionsMachen} />
            </div>
          </Grid>
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 3  </InputLabel>
              <Select options={optionsMachen} />
            </div>
          </Grid>
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 5  </InputLabel>
              <Select options={optionsMachen} />
            </div>
          </Grid>
          <Grid size={3}>
            <div className="input">
              <InputLabel> Button 7 </InputLabel>
              <Select options={optionsMachen} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
    <div class="encoderConfig">
      <h2>Rotation encoder config</h2>
      <Grid container spacing={2}>
        <Grid size={6}>
          <div className="input">
            <InputLabel> Clockwise </InputLabel>
            <Select options={optionsMachen} />
          </div>
        </Grid>
        <Grid size={6}>
          <div className="input">
            <InputLabel> Counterclockwise </InputLabel>
            <Select options={optionsMachen} />
          </div>
        </Grid>
      </Grid>
    </div>
  </div>
);

