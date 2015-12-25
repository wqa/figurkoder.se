import React, { PropTypes } from 'react'
import { Textfield } from 'react-mdl'
import { connect } from 'react-redux'
import Actions from '../../../../redux/actions'

const styles = {
  Textfield: {
    paddingBottom: '10px',
  },
}

class TimeInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.props.interval,
    }
  }

  onTimeChange(e) {
    this.props.setInterval(e.target.value)
    this.setState({time: e.target.value})
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
      value={this.state.time}
      style={styles.Textfield}
      />
    )
  }
}

TimeInput.propTypes = {
  interval: PropTypes.number.isRequired,
  setInterval: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => state.settings

const mapDispatchToProps = (dispatch) => {
  return {
    setInterval(newInterval) {
      dispatch(Actions.setInterval(newInterval))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeInput)
