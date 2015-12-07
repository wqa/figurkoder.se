import React from 'react';
import Master from './shared/master';

import InGameHeader from './shared/inGameHeader';
import Description from './game/description';
import GameOptions from './game/gameOptions';
import Playground from './game/playground';

const Main = React.createClass({
  render(){
    return(
      <Master>
        <InGameHeader title="Siffror" />
        <Description description="Låt oss öva på lite siffror vetja! It be fun, they said..." />
        <Playground />
        <GameOptions />
      </Master>
    );
  }
});

export default Main;
