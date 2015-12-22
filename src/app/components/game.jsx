import React from 'react'
import InGameHeader from './shared/inGameHeader'
import Description from './game/description'
import GameOptionsTextbox from './game/gameOptionsTextbox'
import GameOptionsDropdown from './game/gameOptionsDropdown'
import Playground from './game/playground'

import Games from '../data/games'
import GetMnemonicImages from '../data/mnemonic/getMnemonicImages'

const Game = (props) => {
  let GameObject = Games[props.params.game],
  Type = props.params.game

  return(
    <div>
      <InGameHeader title={GameObject.title} />
      <Description description={GameObject.description} />
      <Playground
        mnemomicImage={GetMnemonicImages({begin: 0, end: 0, type: Type})[0][0]}
        countdown={GetMnemonicImages({begin: 0, end: 0, type: Type})[0][1]}
        options={GameObject.option} />
        {(() => {
        switch (GameObject.option) {
          case "textbox":
            return <GameOptionsTextbox data={GameObject.data} />
            break
            case "dropdown":
              return <GameOptionsDropdown data={GameObject.data} />
              break
          default:
            return null
        }
      })()}
    </div>
  )
}

export default Game
