import React, { PropTypes } from 'react';
import { Grid, Cell, Textfield, Icon, FABButton } from 'react-mdl';

const GameOptions = (props) => {
  const { description } = props;

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
            onChange={() => {}}
            pattern="-?[0-9]*(\.[0-9]+)?"
            error="Input is not a number!"
            label="Från"
            floatingLabel
          />
        </Cell>
        <Cell col={6} tablet={4} phone={2} style={{
            margin:'0 auto 0 auto'
          }}>
          <Textfield
            onChange={() => {}}
            pattern="-?[0-9]*(\.[0-9]+)?"
            error="Input is not a number!"
            label="Till"
            floatingLabel
          />
        </Cell>
        <Cell col={6} tablet={4} phone={2} style={{
            margin:'0 auto 0 auto'
          }}>
          <Textfield
            onChange={() => {}}
            pattern="-?[0-9]*(\.[0-9]+)?"
            error="Input is not a number!"
            label="Tid"
            floatingLabel
          />
        </Cell>
        <Cell col={6} tablet={4} phone={2} style={{
            margin:'0 auto 0 auto'
          }}>
          <Textfield
            onChange={() => {}}
            pattern="-?[0-9]*(\.[0-9]+)?"
            error="Input is not a number!"
            label="Läge"
            floatingLabel
          />
        </Cell>
      </Grid>
      <div style={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-around',
          paddingBottom: '10px'
        }}>
        <FABButton  style={{
            height: '40px',
            width: '40px',
            minWidth: '40px'
          }}>
          <Icon name="play_arrow" />
        </FABButton>
        <FABButton  style={{
            height: '40px',
            width: '40px',
            minWidth: '40px'
          }}>
          <Icon name="pause" />
        </FABButton>
        <FABButton  style={{
            height: '40px',
            width: '40px',
            minWidth: '40px'
          }}>
          <Icon name="stop" />
        </FABButton>
      </div>
    </div>
  );
};

GameOptions.propTypes = {
    description: PropTypes.string
};

export default GameOptions;
