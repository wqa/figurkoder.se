import React, { PropTypes } from 'react'
import { Switch } from 'react-mdl'
import { connect } from 'react-redux'
import Actions from '../../../../redux/actions/'

class OptionInput extends React.Component {
  onSwitch(e) {
    this.props.setPractice(e.target.checked)
  }
  render() {
    return (
        <Switch
          ripple
          id="practice"
          onChange={this.onSwitch.bind(this)}
          disabled={this.props.status !== 'stop'}
          >Inlärning?</Switch>
    )
  }
}

OptionInput.propTypes = {
  practice: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  setPractice: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    practice: state.settings.practice,
    status: state.game.status,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPractice: (practice) => { dispatch(Actions.setPractice(practice)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionInput)
