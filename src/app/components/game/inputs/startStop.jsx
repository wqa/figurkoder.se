import React from 'react';
import { Icon, FABButton } from 'react-mdl';

const StartStop = () => {
  return(
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
  );
};

export default StartStop;
