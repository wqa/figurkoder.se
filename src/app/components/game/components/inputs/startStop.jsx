import React, { PropTypes } from 'react'
import { Icon, FABButton } from 'react-mdl'
import { connect } from 'react-redux'
import Actions from '../../../../redux/actions/'

const styles = {
  div: {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      paddingBottom: '10px',
    },
  FABButton: {
    height: '40px',
    width: '40px',
    minWidth: '40px',
  },
}

class StartStop extends React.Component {
  start() {
    this.props.startGame(this.props.type)
  }
  pause() {
    this.props.pauseGame()
  }
  stop() {
    this.props.stopGame()
  }
  render() {
    return (
        <div style={styles.div}>
          <FABButton ripple
            onClick={this.start.bind(this)}
            style={styles.FABButton}
            disabled={this.props.status === 'start'}>
            <Icon name="play_arrow" />
          </FABButton>
          <FABButton ripple
            onClick={this.pause.bind(this)}
            style={styles.FABButton}
            disabled={this.props.status === 'pause'}>
            <Icon name="pause" />
          </FABButton>
          <FABButton ripple
            onClick={this.stop.bind(this)}
            style={styles.FABButton}
            disabled={this.props.status === 'stop'}>
            <Icon name="stop" />
          </FABButton>
        </div>
    )
  }
}

StartStop.propTypes = {
  status: PropTypes.string.isRequired,
  startGame: PropTypes.func.isRequired,
  pauseGame: PropTypes.func.isRequired,
  stopGame: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => state.game

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (type) => { dispatch(Actions.startGame(type)) },
    pauseGame: () => { dispatch(Actions.pauseGame()) },
    stopGame: () => { dispatch(Actions.stopGame()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartStop)
