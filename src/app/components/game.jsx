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
    this.props.reset()
  }

  render() {
    const props = this.props, GameObject = Games[props.params.game],
    Type = props.params.game, currentPair = props.currentPair, data = props.data

    return(
      <div>
        <InGameHeader title={GameObject.title} />
        <Description description={GameObject.description} />
        <Playground
          mnemomicImage={data ? GetMnemonicImages({begin: 0, end: 0, type: Type})[0][0] : data[currentPair][0]}
          countdown={data ? GetMnemonicImages({begin: 0, end: 0, type: Type})[0][1] : data[currentPair][1]} />
          <GameOptions
            type={Type}
            data={GameObject.data}
            dropdown={GameObject.dropdown} />
      </div>
    )
  }
}

Game.propTypes = {
  currentPair: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  reset: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => state.game

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => { dispatch(Actions.reset()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
