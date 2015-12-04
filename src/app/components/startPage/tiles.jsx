import React from 'react';
import Tile from './tile';
import { Grid, Cell } from 'react-mdl';

const Tiles = React.createClass({
  render(){
  let tiles = [];
  for (let i = 0; i < 10; i++) {
    tiles.push(<Cell col={2} tablet={2} phone={2}><Tile /></Cell>);
  }
    return(
        <Grid>
          {tiles}
        </Grid>
    );
  }
});

export default Tiles;
