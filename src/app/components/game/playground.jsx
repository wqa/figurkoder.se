import React, { PropTypes } from 'react';
import { Button, Grid, Cell, Card, CardTitle, Icon, FABButton } from 'react-mdl';

const Playground = (props) => {
  const { description } = props;

  return(
    <div style={{
        padding: '10px 10px 0 10px',
      }}>
      <Card shadow={0} style={{
          width: 'auto',
          height: '45px',
          minHeight: '45px',
          margin: 'auto auto 10px auto',
          display: 'flex'
        }}>
          <CardTitle expand style={{
              padding: '10px',
              color: '#000'
            }}>Update</CardTitle>
      </Card>
      <Card shadow={0} style={{
          width: 'auto',
          height: '45px',
          minHeight: '45px',
          margin: 'auto auto 10px auto',
          display: 'flex'
        }}>
          <CardTitle expand style={{
              padding: '10px',
              color: '#000'
            }}>Update</CardTitle>
      </Card>
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
