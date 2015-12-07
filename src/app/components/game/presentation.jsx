import React, { PropTypes } from 'react';
import { Card, CardTitle } from 'react-mdl';

const Presentation = (props) => {
  const { value } = props;

  return(
      <Card shadow={0} style={{
          width: 'auto',
          height: '45px',
          minHeight: '45px',
          margin: 'auto auto 10px auto',
          display: 'flex'
        }}>
          <CardTitle expand style={{
              padding: '10px',
              color: '#000',
              alignSelf: 'center'
            }}>{value}</CardTitle>
      </Card>
  );
};

Presentation.propTypes = {
    value: PropTypes.string.isRequired
};

export default Presentation;
