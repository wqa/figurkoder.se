import React from 'react';
import { Header } from 'react-mdl';

const CustomHeader = React.createClass({
  render(){
    return(
      <Header waterfall scroll title={<span><span style={{ color: '#ddd' }}>Ursäkta röran, vi bygger om. / </span><strong>Figurkoder.se</strong></span>}>
      </Header>
    );
  }
});

export default CustomHeader;
