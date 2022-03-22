import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { Typography } from '@mui/material';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function ContinuousSlider(props) {
  const value = props.value
  const setValue = props.setValue
  const minValue = props.minValue

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < minValue) {
      setValue(minValue);
    } else if (value > 350) {
      setValue(350);
    }
  };

  return (
    <Box sx={{ width: 1000 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            min={minValue}
            max={350}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: minValue,
              max: 350,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        <Grid>
          <Typography>
            cm
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}