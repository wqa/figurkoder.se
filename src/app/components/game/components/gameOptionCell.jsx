import React from 'react';
import { Cell } from 'react-mdl';

const GameOptionCell = props => {
  const { children } = props;

  return(
    <Cell col={6} tablet={4} phone={2} style={{
        margin:'0 auto 0 auto',
        alignSelf: "center",
        padding: '10px 0 10px 0'
      }}>
        {children}
    </Cell>
  );
};

export default GameOptionCell;
