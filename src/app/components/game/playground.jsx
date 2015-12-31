import React, { PropTypes } from 'react'
import { Button, Grid, Cell, Icon, FABButton } from 'react-mdl'
import Presentation from './components/presentation'
import { connect } from 'react-redux'
import Actions from '../../redux/actions/'

const styles = {
  div: {
    main: {
        padding: '10px 10px 0 10px',
      },
    nested: {
        paddingTop: '5px',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
      },
  },
}

class Playground extends React.Component {
  show() {
    this.props.show()
  }

  next(path) {
    this.props.next(path)
  }

  render() {
    const {mnemomicImage, mnemomicAnswer, countdown, hidden, status, path} = this.props

    const answer = hidden ? countdown : mnemomicAnswer

    return (
      <div style={styles.div.main}>
        <Presentation value={mnemomicImage} />
        <Presentation value={isNaN(answer) ? answer : answer + '...'} />
        <div style={styles.div.nested}>
          <Button
            onClick={this.show.bind(this)}
            disabled={!hidden || status === 'stop'}
            ripple
            raised
            >Visa <Icon name="done" /></Button>
          <Button
            onClick={this.next.bind(this, path)}
            disabled={status === 'stop'}
            ripple
            raised
            >Nästa <Icon name="skip_next" /></Button>
        </div>
      </div>
    )
  }
}

Playground.propTypes = {
  countdown: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
  next: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => state.game

const mapDispatchToProps = (dispatch) => {
  return {
    next: (path) => { dispatch(Actions.next(path)) },
    show: () => { dispatch(Actions.show()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playground)
