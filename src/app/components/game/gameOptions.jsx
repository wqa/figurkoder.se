import React, { PropTypes } from 'react'
import { Grid, Cell, Textfield } from 'react-mdl'

import TimeInput from './components/inputs/timeInput'
import OptionInput from './components/inputs/optionInput'
import DropdownInput from './components/inputs/dropdownInput'
import TextInput from './components/inputs/textInput'
import StartStop from './components/inputs/startStop'
import GameOptionCell from './components/gameOptionCell'

import GlobalStyles from '../shared/globalStyles'

import { connect } from 'react-redux'
import Actions from '../../redux/actions/'

class GameOptions extends React.Component {
  onStartChange(e) {
    const value = +e.target.value, length = this.props.data.length - 1, add = this.props.add, setBegin = this.props.setBegin, setEnd = this.props.setEnd

    setBegin(value)
    let end = (value + add) <= length ? value + add : length

    setEnd(end)
  }

  onStopChange(e) {
    this.props.setEnd(e.target.value)
  }

  render() {
    const { setBegin, setEnd, type, dropdown } = this.props

    if(dropdown) {
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
                options={options}
                action={setBegin} />
            </GameOptionCell>
            <GameOptionCell>
              <DropdownInput
                description="Till"
                options={options}
                action={setEnd} />
            </GameOptionCell>
            <GameOptionCell>
              <TimeInput
                style={GlobalStyles.settings.textfield} />
            </GameOptionCell>
            <GameOptionCell>
              <OptionInput />
            </GameOptionCell>
          </Grid>
          <StartStop type={type} />
        </div>
      )
    } else {
      return (
        <div style={GlobalStyles.game.div}>
          <Grid style={GlobalStyles.game.div}>
            <GameOptionCell>
              <TextInput
                label={'Från:'}
                value={this.props.begin}
                style={GlobalStyles.settings.textfield}
                max={this.props.data.length - 1}
                action={this.onStartChange.bind(this)} />
            </GameOptionCell>
            <GameOptionCell>
              <TextInput
                label={'Till:'}
                value={this.props.end}
                style={GlobalStyles.settings.textfield}
                max={this.props.data.length - 1}
                action={this.onStopChange.bind(this)} />
            </GameOptionCell>
            <GameOptionCell>
              <TimeInput
                style={GlobalStyles.settings.textfield} />
            </GameOptionCell>
            <GameOptionCell>
              <OptionInput />
            </GameOptionCell>
          </Grid>
          <StartStop type={type} />
        </div>
      )
    }
  }
}

GameOptions.propTypes = {
  begin: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  add: PropTypes.number,
  data: PropTypes.any.isRequired,
  setBegin: PropTypes.func.isRequired,
  setEnd: PropTypes.func.isRequired,
  dropdown: PropTypes.bool.isRequired,
}

GameOptions.defaultProps = {
  add: 9,
}

const mapStateToProps = (state) => state.settings

const mapDispatchToProps = (dispatch) => {
  return {
    setBegin: (begin) => { dispatch(Actions.setBegin(begin)) },
    setEnd: (end) => { dispatch(Actions.setEnd(end)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOptions)

/*
{(() => {
switch (dropdown) {
  case true:
    return <GameOptionsDropdown type={Type} data={GameObject.data} />
    break
  case false:
    return <GameOptionsTextbox type={Type} data={GameObject.data} />
    break
  default:
    return null
}
*/
