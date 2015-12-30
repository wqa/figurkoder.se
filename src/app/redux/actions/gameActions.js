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
	setInterval: (interval) => {
		return (dispatch, getState) => {
      dispatch({
				type: ActionTypes.SET_INTERVAL,
				interval: interval,
      })
		}
	},
	setPractice: (practice) => {
		return (dispatch, getState) => {
      dispatch({
				type: ActionTypes.SET_PRACTICE,
				hidden: practice,
      })
		}
	},
	startGame: (type) => {
		return (dispatch, getState) => {
			const newTimestamp = new Date().getTime()
			const newData = GetMnemonicImages({
				begin: getState().settings.begin,
				end: getState().settings.end,
				type: type,
				random: !getState().settings.practice,
			})
      dispatch({
				type: ActionTypes.START_GAME,
				status: 'start',
				data: newData,
				timestamp: +newTimestamp,
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
			const pauseTimestamp = new Date().getTime()
			const newElapsedTime = +getState().game.elapsedTime + (+pauseTimestamp - +getState().game.timestamp)

			console.log(newElapsedTime)
			// console.log(pauseTimestamp)

      dispatch({
				type: ActionTypes.PAUSE_GAME,
				elapsedTime: +newElapsedTime,
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
			const nextTimestamp = new Date().getTime()
			const newElapsedTime = getState().game.status === 'pause' ? +getState().game.elapsedTime : +getState().game.elapsedTime + (+nextTimestamp - +getState().game.timestamp)

      dispatch({
				type: ActionTypes.NEXT,
        hidden: !getState().settings.practice,
				newPair: newPair,
				status: 'start',
				timestamp: +nextTimestamp,
				elapsedTime: +newElapsedTime,
      })
		}
	},
}

export default GameActions
