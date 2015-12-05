import React, { PropTypes } from 'react';
import { IconButton } from 'react-mdl';

const BackArrowButton = (props) => {
  const { history } = props;

  return(
    <IconButton name="arrow_back" style={{
        alignSelf: 'flex-end',
        marginBottom: '5px'
      }}/>
  );
};

BackArrowButton.propTypes = {
    history: PropTypes.string
};

export default BackArrowButton;
