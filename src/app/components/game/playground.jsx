import React, { PropTypes } from 'react';
import { Button, Grid, Cell, Icon, FABButton } from 'react-mdl';
import Presentation from './components/presentation';

const Playground = React.createClass({
  show(){
    console.log("Show!");
  },

  next(){
    console.log("Next!");
  },

  render(){
    return(
      <div style={{
          padding: '10px 10px 0 10px',
        }}>
        <Presentation value="A" />
        <Presentation value="4..." />
        <div style={{
            paddingTop: '5px',
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'space-around'
          }}>
          <Button onClick={this.show} raised>Visa <Icon name="done" /></Button>
          <Button onClick={this.next} raised>Nästa <Icon name="skip_next" /></Button>
        </div>
      </div>
    );
  }
});

export default Playground;
