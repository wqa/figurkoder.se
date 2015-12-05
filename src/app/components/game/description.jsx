import React, { PropTypes } from 'react';

const Description = (props) => {
  const { description } = props;

  return(
    <div style={{
        padding: '0 10px 0 10px'
      }}>
      { description }
    </div>

  );
};

Description.propTypes = {
    description: PropTypes.string.isRequired
};

export default Description;
