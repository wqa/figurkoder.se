import React from 'react';
import Master from './shared/master';

import Tiles from './startPage/tiles';

const Main = React.createClass({
  render(){
    return(
      <Master>
        <Tiles />
      </Master>
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

export default Main;
