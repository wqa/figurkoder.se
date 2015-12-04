import React from 'react';
import { Button, Card, CardTitle, CardActions, Icon } from 'react-mdl';

import m from '../../scripts/m';
import InteractionAwareMixin from '../../scripts/interactionAwareMixin.js';

const Tile = React.createClass({
  styles: {
    card: {
      width: '140px',
      minHeight: '140px',
      maxHeight: '140px',
      height: '140px',
      display: 'inline-flex',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'rgba(255,255,255,0)',
      transition: 'box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)',
      WebkitTransition: 'box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)'
    },
    cardTitle: {
      alignItems: 'flex-start',
      color: '#fff',
      background: '#FFAB40'
    },
    hover: {
      backgroundColor: 'rgba(158,158,158,.2)'
    }
  },

  mixins: [InteractionAwareMixin],

  render(){
    let onClickEvent = function() {
      console.log("Tea time!");
    };

    return(
      <Card shadow={0} onClick={onClickEvent} onTouchTap={this.onClickEvent} 
        style={
          this.styles.card
          }>
        <CardTitle expand
          style={m(
            this.styles.cardTitle
            // this.state.hovered && this.styles.hover
          )}>
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

export default Tile;
