import React from 'react';
import { Grid, Cell, Textfield } from 'react-mdl';

import TimeInput from './inputs/timeInput';
import OptionInput from './inputs/optionInput';
import StartStop from './inputs/startStop';
import DropdownInput from './inputs/dropdownInput';

const GameOptions = React.createClass({
  render(){
    return(
      <div style={{
          padding: '0 10px 10px 10px',
          // display: 'flex'
        }}>
        <Grid style={{
            paddingBottom: '0'
          }}>
          <Cell col={6} tablet={4} phone={2} style={{
              margin:'0 auto 0 auto',
              alignSelf: "center",
              padding: '10px 0 10px 0'
            }}>
            <DropdownInput
              description="Första bokstaven"
              options={["A", "B"]} />
          </Cell>
          <Cell col={6} tablet={4} phone={2} style={{
              margin:'0 auto 0 auto',
              alignSelf: "center",
              padding: '10px 0 10px 0'
            }}>
            <DropdownInput
              description="Andra bokstaven"
              options={["A", "B", "C"]} />
          </Cell>
          <Cell col={6} tablet={4} phone={2} style={{
              margin:'0 auto 0 auto'
            }}>
            <TimeInput />
          </Cell>
          <Cell col={6} tablet={4} phone={2} style={{
              margin:'0 auto 0 auto',
              alignSelf: "center"
            }}>
            <OptionInput />
          </Cell>
        </Grid>
        <StartStop />
      </div>
    );
  }
});

export default GameOptions;
