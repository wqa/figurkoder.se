import ActionTypes from "./actionTypes"
import GetMnemonicImages from '../../data/mnemonic/getMnemonicImages'

const GameActions = {
	reset: () => {
		return (dispatch, getState) => {
      dispatch({
        type: ActionTypes.RESET,
      })
		}
	},
	startGame: (type) => {
		return (dispatch, getState) => {
			const newData = GetMnemonicImages({
				begin: getState().settings.begin,
				end: getState().settings.end,
				type: type,
			})
      dispatch({
				type: ActionTypes.START_GAME,
				status: 'start',
				data: newData,
      })
		}
	},
	stopGame: () => {
		return (dispatch, getState) => {
      dispatch({
				type: ActionTypes.STOP_GAME,
				status: 'stop',
      })
		}
	},
	pauseGame: () => {
		return (dispatch, getState) => {
      dispatch({
				type: ActionTypes.PAUSE_GAME,
				status: 'pause',
      })
		}
	},
  show: () => {
		return (dispatch, getState) => {
      if(getState().game.hidden) {
        dispatch({
          type: ActionTypes.SHOW,
          hidden: false,
        })
      } else {
        dispatch({
  				type: ActionTypes.SHOW,
          hidden: true,
        })
      }
		}
	},
  next: () => {
		return (dispatch, getState) => {
			const newPair = +getState().game.currentPair < +getState().game.data.length - 1 ? +getState().game.currentPair + 1 : 0

      dispatch({
				type: ActionTypes.NEXT,
        hidden: !getState().settings.practice,
				newPair: newPair,
      })
		}
	},
}

export default GameActions
