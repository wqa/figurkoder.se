import React from 'react';
import { Grid, Cell, Textfield } from 'react-mdl';

import TimeInput from './components/inputs/timeInput';
import OptionInput from './components/inputs/optionInput';
import StartStop from './components/inputs/startStop';
import DropdownInput from './components/inputs/dropdownInput';
import GameOptionCell from './components/gameOptionCell';

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
          <GameOptionCell>
            <DropdownInput
              description="Första bokstaven"
              options={["A", "B"]} />
          </GameOptionCell>
          <GameOptionCell>
            <DropdownInput
              description="Andra bokstaven"
              options={["A", "B", "C"]} />
          </GameOptionCell>
          <GameOptionCell>
            <TimeInput />
          </GameOptionCell>
          <GameOptionCell>
            <OptionInput />
          </GameOptionCell>
        </Grid>
        <StartStop />
      </div>
    );
  }
});

export default GameOptions;
