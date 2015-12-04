import React from 'react';
import { Button, Card, CardTitle, CardActions, Icon } from 'react-mdl';

const Tile = React.createClass({
  render(){
    let onClickEvent = function() {
      console.log("Tea time!");
    };

    return(
      <Card shadow={0} onClick={this.onClickEvent} onTouchTap={this.onClickEvent}
        style={{
          width: '140px',
          minHeight: '140px',
          maxHeight: '140px',
          height: '140px',
          display: 'inline-flex'
        }}>
        <CardTitle expand
          style={{
            alignItems: 'flex-start',
            color: '#fff',
            background: '#FFAB40'
          }}>
          <h4
            style={{
              marginTop: '0',
              marginBottom: '0'}}>
              000-9999999
          </h4>
        </CardTitle>
        <CardActions border
          style={{
            // borderColor: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            boxSizing: 'border-box',
            alignItems: 'center',
            color: '#fff',
            background: '#ffc882',
            height: '30px'
          }}>
            <span style={{fontSize: '16px', margin: '0 auto 2px auto'}}>Siffror</span>
        </CardActions>
      </Card>
    );
  }
});

module.exports = Tile;
