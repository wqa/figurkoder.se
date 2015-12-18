import React from 'react'
import InGameHeader from './shared/inGameHeader'
import Description from './game/description'
import GameOptionsTextbox from './game/gameOptionsTextbox'
import GameOptionsDropdown from './game/gameOptionsDropdown'
import Playground from './game/playground'

import Games from '../data/games'

class Game extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      game: Games[this.props.params.game],
    }
  }

  render() {
    return(
      <div>
        <InGameHeader title={this.state.game.title} />
        <Description description={this.state.game.description} />
        <Playground
          mnemomicImage={this.state.game.get({begin: 0, end: 0})[0][0]}
          countdown={this.state.game.get({begin: 0, end: 0})[0][1]}
          options={this.state.game.option} />
          {(() => {
          switch (this.state.game.option) {
            case "textbox":
              return <GameOptionsTextbox data={this.state.game.get} />
              break
              case "dropdown":
                return <GameOptionsDropdown data={this.state.game.get} />
                break
            default:
              return null
          }
        })()}
      </div>
    )
  }
}

export default Game
