import React from 'react';
import { Navigation, Drawer } from 'react-mdl';

const Menu = React.createClass({
  render(){
    return(
      <Drawer title="Meny">
        <Navigation>
          <a href="">Hem</a>
          <a href="">Om sidan</a>
          <a href="">Vanliga frågor</a>
          <a href="">Kontakta mig</a>
        </Navigation>
      </Drawer>
    );
  }
});

module.exports = Menu;
