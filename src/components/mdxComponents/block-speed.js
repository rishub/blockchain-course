import React from 'react';
import { Fragment } from 'react';
import styled from '@emotion/styled';

import { makeStyles as useStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';;
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

import { HorizontalBar } from 'react-chartjs-2';

const InputSlider = ({ label, unit, value, setValue }) => {
  const classes = useStyles({
    root: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    input: {
      width: 42,
      outline: "none",
    },
    data: {
      width: 150,
    }
  })();

  const handleSliderChange = (event, newValue) => {
    setValue(newValue || 1);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 1) {
      setValue(1);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root}>
      {label}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 1}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item className={classes.data}>
          <Input
            className={classes.input}
            disableUnderline
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          <b>{unit}</b>
        </Grid>
      </Grid>
    </div>
  );
}

const BlockSpeed = () => {
  const [showResults, setShowResults] = React.useState(false);

  const options = {
    scales: {
         xAxes: [{
             type: 'logarithmic',
             ticks: {
                callback: function (value, index, values) {
                  if( value==10 || value==100 || value==1000 || value==10000 || value==2000 || value == 5000){
                      return Number(value.toString());;
                  }
                }
            },
         }],
     },
     title: {
        display: true,
        text: 'Transactions / second'
    },
    legend: {
      display: false,
    }
  }

 const [minutes, setMinutes] = React.useState(10);
 const [mb, setMb] = React.useState(1);

 let data ={ 
  datasets:[
    {
      label: 'Tx / sec',
      data: [1700, Math.round(mb / minutes * 50, 2)],
      backgroundColor: ["#669911", "#FFDF00" ],
    },
  ],
  labels:['Visa', 'Bitcoin']
}

const uploadSpeed = (mb * 1024 * 1024 * 8 / minutes / 60 * (8-1) * 4 / 1000 / 1000).toFixed(2)

  return (
    <Fragment>
      <h3 style={{ paddingBottom: "10px" }}>Transactions / second calculator</h3>
      <div style={{ border: "1px black solid", padding: "10px" }}>
        {!showResults && (
          <Fragment>
            <InputSlider label="Block frequency" unit="minutes" value={minutes} setValue={setMinutes} />
            <InputSlider label="Block size" unit="MB" value={mb} setValue={setMb} />
            <button style={{ padding: "10px" }} onClick={() => setShowResults(true)}>See results</button>
          </Fragment>
        )}
        {showResults && (
          <Fragment>
            <HorizontalBar  data={data} options={options} />
            <p style={{ color: uploadSpeed > 52 ? "red" : "green" }}>Bandwidth (upload speed) required: {uploadSpeed} mb/s</p>
            <p>Average Bandwidth in the US: 52 mb/s</p>
            <button style={{ padding: "10px", marginTop: "10px" }} onClick={() => setShowResults(false)}>Change filters</button>
          </Fragment>
        )}
      </div>
      </Fragment>
  )
};

export default BlockSpeed;
