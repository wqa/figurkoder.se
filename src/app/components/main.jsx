import React from 'react';
import { Layout, Header, Navigation, Drawer, Content, Footer } from 'react-mdl';


// let Layout = ReactMDL.Layout;
// let Header = ReactMDL.Header;
// let Navigation = ReactMDL.Navigation;
// let Drawer = ReactMDL.Drawer;
// let Content = ReactMDL.Content;

const Main = React.createClass({
  render(){
    return(
      <Layout fixedHeader>
        <Header waterfall title={<span><span style={{ color: '#ddd' }}>Ursäkta röran, vi bygger om. / </span><strong>Figurkoder.se</strong></span>}>
        </Header>
        <Drawer title="Meny">
          <Navigation>
            <a href="">Hem</a>
            <a href="">Om sidan</a>
            <a href="">Vanliga frågor</a>
            <a href="">Kontakta mig</a>
          </Navigation>
        </Drawer>
        <Content />
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
