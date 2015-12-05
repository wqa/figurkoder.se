import React, { PropTypes } from 'react';
import { Header, Layout } from 'react-mdl';
import BackArrowButton from './backArrowButton';

const InGameHeader = (props) => {
  const { title } = props;

  return(
    <div style={{
        // backgroundColor: '#3f51b5',
        display: 'flex',
        // color: '#ddd'
        color: '#000'
      }}>
      <BackArrowButton />
      <h3 style={{
          margin: '10px auto 5px auto',
        }}>
        { title }
      </h3>
    </div>
  );
};

InGameHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default InGameHeader;
