import React from 'react';
import { Switch } from 'react-mdl';

const OptionInput = React.createClass({
  // getInitialState(){
  //     return {
  //       practice: false
  //     };
  //   },

  onSwitch(e){
    console.log(e.target.checked);
  },

  render(){
    return (
        // <Textfield
        //   onChange={() => {}}
        //   pattern="-?[0-9]*(\.[0-9]+)?"
        //   error="Input is not a number!"
        //   label="Läge:"
        //   floatingLabel
        // />
        <Switch
          id="practice"
          onChange={this.onSwitch}
          >Inlärning?</Switch>
      );
    }
});

export default OptionInput;
