import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Actions from '../redux/actions/'
import InGameHeader from './shared/inGameHeader'
import Description from './game/description'
import GameOptions from './game/gameOptions'
import Playground from './game/playground'

import Games from '../data/games'
import GetMnemonicImages from '../data/mnemonic/getMnemonicImages'

class Game extends React.Component{
  componentDidMount() {
    this.props.resetGame()
    // this.props.resetSettings()
  }

  componentWillUnmount() {
    this.props.stopGame()
  }

  render() {
    const props = this.props, GameObject = Games[props.params.game],
    type = props.params.game, currentPair = props.currentPair, data = props.data

    return(
      <div>
        <InGameHeader title={GameObject.title} />
        <Description description={GameObject.description} />
        <Playground
          mnemomicImage={data.length ? data[currentPair][0] : GetMnemonicImages({begin: 0, end: 0, type: type})[0][0]}
          mnemomicAnswer={data.length ? data[currentPair][1] : GetMnemonicImages({begin: 0, end: 0, type: type})[0][1]}
          path={type} />
          <GameOptions
            type={type}
            data={GameObject.data}
            dropdown={GameObject.dropdown} />
      </div>
    )
  }
}

Game.propTypes = {
  currentPair: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  resetGame: PropTypes.func.isRequired,
  resetSettings: PropTypes.func.isRequired,
  stopGame: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => state.game

const mapDispatchToProps = (dispatch) => {
  return {
    resetGame: () => { dispatch(Actions.resetGame()) },
    resetSettings: () => { dispatch(Actions.resetSettings()) },
    stopGame: (path) => { dispatch(Actions.stopGame(path)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
