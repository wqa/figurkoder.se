import React, { PropTypes } from 'react';
import { Button, Grid, Cell, Icon, FABButton } from 'react-mdl';
import Presentation from './presentation';

const Playground = (props) => {
  const { description } = props;

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
        <Button raised>Visa <Icon name="done" /></Button>
        <Button raised>Nästa <Icon name="skip_next" /></Button>
      </div>
    </div>
  );
};

Playground.propTypes = {
    description: PropTypes.string
};

export default Playground;
