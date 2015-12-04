import React from 'react';
import Tile from './Tile';
import { Grid, Cell } from 'react-mdl';

const Tiles = React.createClass({
  render(){
  let tiles = [];
  for (let i = 0; i < 10; i++) {
    tiles.push(<Cell col={2} tablet={2} phone={2}><Tile /></Cell>);
  }
    return(
      <div style={{ width: '90%', margin: 'auto' }}>
        <Grid>
          {tiles}
        </Grid>
      </div>
    );
  }
});

module.exports = Tiles;
