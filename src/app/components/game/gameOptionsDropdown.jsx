import React from 'react'
import { Grid, Cell, Textfield } from 'react-mdl'

import TimeInput from './components/inputs/timeInput'
import OptionInput from './components/inputs/optionInput'
import StartStop from './components/inputs/startStop'
import DropdownInput from './components/inputs/dropdownInput'
import GameOptionCell from './components/gameOptionCell'

import GlobalStyles from '../shared/globalStyles'

class GameOptionsDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onMenuChange(e){
    console.log(e.target.value)
  }

  render(){
    let options = []
    for (let item of this.props.data) {
      options.push(item[0])
    }

    return(
      <div style={GlobalStyles.game.div}>
        <Grid style={GlobalStyles.game.grid}>
          <GameOptionCell>
            <DropdownInput
              description="Från"
              options={options} />
          </GameOptionCell>
          <GameOptionCell>
            <DropdownInput
              description="Till"
              options={options} />
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
    )
  }
}

GameOptionsDropdown.propTypes = {
  data: React.PropTypes.any,
}

export default GameOptionsDropdown
