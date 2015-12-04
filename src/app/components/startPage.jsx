import React from 'react';
import { Layout, Content, Footer } from 'react-mdl';
import Menu from './shared/menu';
import CustomHeader from './shared/customHeader';
import Tiles from './startPage/tiles';

const Main = React.createClass({
  render(){
    return(
      <Layout fixedHeader>
        <CustomHeader />
        <Menu />
        <Content>
          <Tiles />
        </Content>
        <Footer />
      </Layout>
    );
  }
});

export default Main;
