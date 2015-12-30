import React, { PropTypes } from 'react'
import { Textfield } from 'react-mdl'
import { connect } from 'react-redux'
import Actions from '../../../../redux/actions/'

class TimeInput extends React.Component {
  onTimeChange(e) {
    this.props.setInterval(e.target.value)
  }

  render(){
    return (
    <Textfield
      min="1" max="30"
      type="number"
      onChange={this.onTimeChange.bind(this)}
      pattern="-?[0-9]*(\.[0-9]+)?"
      error="Välj mellan 1-30!"
      label="Tid (sekunder):"
      floatingLabel
      value={this.props.interval}
      style={this.props.style}
      disabled={this.props.status !== 'stop'}
      />
    )
  }
}

TimeInput.propTypes = {
  interval: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  setInterval: PropTypes.func.isRequired,
  style: PropTypes.object,
}

const mapStateToProps = (state) => {return {
  interval: state.settings.interval,
  status: state.game.status,
}}

const mapDispatchToProps = (dispatch) => {
  return {
    setInterval: (newInterval) => { dispatch(Actions.setInterval(newInterval)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeInput)
