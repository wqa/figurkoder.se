import React from 'react';
import { Grid, Cell, Textfield } from 'react-mdl';
import TimeInput from './inputs/timeInput';
import OptionInput from './inputs/optionInput';
import StartStop from './inputs/startStop';

const GameOptions = React.createClass({
  propTypes: {
    add: React.PropTypes.number
  },

  getDefaultProps(){
    return {
      add: 9
    };
  },

  getInitialState () {
    return {
      start: 0,
      stop: 9
    };
  },

  onStartChange(e){
    this.setState({start: e.target.value});
    let temp = (+e.target.value + this.props.add) <= 99 ? +e.target.value + this.props.add : 99;
    this.setState({stop: temp});
  },

  onStopChange(e){
    this.setState({stop: e.target.value});
  },

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
              margin:'0 auto 0 auto'
            }}>
            <Textfield
              min="0" max="99"
              autofocus
              autoComplete="off"
              type="number"
              onChange={this.onStartChange}
              pattern="-?[0-9]*(\.[0-9]+)?"
              error="Välj mellan 0-99!"
              label="Från:"
              floatingLabel
              value={this.state.start}
            />
          </Cell>
          <Cell col={6} tablet={4} phone={2} style={{
              margin:'0 auto 0 auto'
            }}>
            <Textfield
              min="0" max="99"
              autoComplete="off"
              type="number"
              onChange={this.onStopChange}
              pattern="-?[0-9]*(\.[0-9]+)?"
              error="Välj mellan 0-99!"
              label="Till:"
              floatingLabel
              value={this.state.stop}
            />
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
