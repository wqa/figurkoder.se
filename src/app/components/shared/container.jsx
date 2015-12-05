import React from 'react';

const Container = props => {
  const { children, ...otherProps } = props;

  return(
    <div {...otherProps} style={{
        width: '90%',
        maxWidth: '400px',
        margin: '15px auto 15px auto',
        backgroundColor: 'rgb(241, 241, 241)'
      }}>
      {children}
    </div>
  );
};

export default Container;
