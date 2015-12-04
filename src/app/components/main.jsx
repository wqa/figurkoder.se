import React from 'react';
import { Layout, Navigation, Drawer, Content, Footer } from 'react-mdl';
import Menu from './shared/menu';
import CustomHeader from './shared/customHeader';
import Tiles from './startPage/tiles';
import Tile from './startPage/tile';


// let Layout = ReactMDL.Layout;
// let Header = ReactMDL.Header;
// let Navigation = ReactMDL.Navigation;
// let Drawer = ReactMDL.Drawer;
// let Content = ReactMDL.Content;

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

  // childContextTypes: {
  //   muiTheme: React.PropTypes.object,
  // },
  //
  // getInitialState () {
  //   return {
  //     muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
  //   };
  // },
  //
  // getChildContext() {
  //   return {
  //     muiTheme: this.state.muiTheme,
  //   };
  // },
  //
  // componentWillMount() {
  //   let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
  //     accent1Color: Colors.deepOrange500,
  //   });
  //
  //   this.setState({muiTheme: newMuiTheme});
  // },
  //
  // render() {
  //
  //   let containerStyle = {
  //     textAlign: 'center',
  //     paddingTop: '200px',
  //   };
  //
  //   let standardActions = [
  //     { text: 'Okay' },
  //   ];
  //
  //   return (
  //     <div style={containerStyle}>
  //       <Dialog
  //         title="This Is Not A Super Secret Password"
  //         actions={standardActions}
  //         ref="superSecretPasswordDialog">
  //         1-2-3-4-5
  //       </Dialog>
  //
  //       <h1>material-ui</h1>
  //       <h2>example project</h2>
  //
  //       <RaisedButton label="My Not So Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
  //
  //     </div>
  //   );
  // },
  //
  // _handleTouchTap() {
  //   this.refs.superSecretPasswordDialog.show();
  // },

});

module.exports = Main;
