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
      type="number"
      onChange={this.onTimeChange.bind(this)}
      pattern="-?[0-9]*(\.[0-9]+)?"
      error="Input is not a number!"
      label="Tid (sekunder):"
      floatingLabel
      value={this.props.interval}
      style={this.props.style}
      />
    )
  }
}

TimeInput.propTypes = {
  interval: PropTypes.number.isRequired,
  setInterval: PropTypes.func.isRequired,
  style: PropTypes.object,
}

const mapStateToProps = (state) => state.settings

const mapDispatchToProps = (dispatch) => {
  return {
    setInterval: (newInterval) => { dispatch(Actions.setInterval(newInterval)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeInput)
