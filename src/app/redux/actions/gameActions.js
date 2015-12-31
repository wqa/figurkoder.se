import ActionTypes from "./actionTypes"
import GetMnemonicImages from '../../data/mnemonic/getMnemonicImages'

const {
	RESET,
	SET_INTERVAL,
	SET_PRACTICE,
	START_GAME,
	STOP_GAME,
	PAUSE_GAME,
	SHOW,
	NEXT,
} = ActionTypes

let timer

const GameActions = {
	resetGame: () => {
		if (timer) {
			clearTimeout(timer)
		}
		return (dispatch, getState) => {
      dispatch({
        type: RESET,
      })
		}
	},
	setInterval: (interval) => {
		return (dispatch, getState) => {
      dispatch({
				type: SET_INTERVAL,
				interval: interval,
      })
		}
	},
	setPractice: (practice) => {
		return (dispatch, getState) => {
      dispatch({
				type: SET_PRACTICE,
				hidden: practice,
      })
		}
	},
	startGame: (type) => {
		return (dispatch, getState) => {
			const newTimestamp = new Date().getTime()
      if (getState().game.data.length === 0) {
				const newData = GetMnemonicImages({
					begin: getState().settings.begin,
					end: getState().settings.end,
					type: type,
					random: !getState().settings.practice,
				})
				dispatch({
					type: START_GAME,
					data: newData,
					timestamp: +newTimestamp,
	      })
			} else {
				dispatch({
					type: START_GAME,
					timestamp: +newTimestamp,
	      })
			}
		}
	},
	stopGame: () => {
		return (dispatch, getState) => {
			if (timer) {
				clearTimeout(timer)
			}
      dispatch({
				type: STOP_GAME,
      })
		}
	},
	pauseGame: () => {
		return (dispatch, getState) => {
			if (timer) {
				clearTimeout(timer)
			}

			const pauseTimestamp = new Date().getTime()
			const newElapsedTime = +getState().game.elapsedTime + (+pauseTimestamp - +getState().game.timestamp)

      dispatch({
				type: PAUSE_GAME,
				elapsedTime: +newElapsedTime,
      })
		}
	},
  show: () => {
		return (dispatch, getState) => {
      if(getState().game.hidden) {
        dispatch({
          type: SHOW,
          hidden: false,
        })
      } else {
        dispatch({
  				type: SHOW,
          hidden: true,
        })
      }
		}
	},
  next: (path, auto) => {
		return (dispatch, getState) => {
			clearTimeout(timer)

			const getElapsedTime = (status, paused, elapsedTime, timestamp) => {
				if (status === 'pause') {
					return +elapsedTime
				} else {
					return paused === true ? +elapsedTime : +elapsedTime + ((new Date().getTime()) - +timestamp)
				}
			}
			const getInterval = +getState().settings.interval * 1000
			const elapsedTime = getElapsedTime(getState().game.status, getState().game.hasBeenPaused, +getState().game.elapsedTime, +getState().game.timestamp)
			const timeout = !getState().game.hasBeenPaused ? getInterval : getInterval - +elapsedTime

			const dispatchFunction = () => {
				const timeout = !getState().game.hasBeenPaused ? getInterval : getInterval - +elapsedTime

				if (getState().game.data.length === 0) {
					clearTimeout(timer)
					throw Error('No data')
				}

				const newPair = +getState().game.currentPair < +getState().game.data.length - 1 ? +getState().game.currentPair + 1 : 0
				const nextTimestamp = new Date().getTime()
				const newElapsedTime = getElapsedTime(getState().game.status, false, +getState().game.elapsedTime, +getState().game.timestamp)

				const actionObject = {
					type: NEXT,
					hidden: !getState().settings.practice,
					newPair: newPair,
					elapsedTime: +newElapsedTime,
				}

				if(+getState().game.currentPair + 1 === +getState().game.data.length && !getState().settings.practice) {
					clearTimeout(timer)
					dispatch({
						...actionObject,
						meta: {
							transition: (state, action) => ({
		          	path: `/result/${path}`,
			        }),
						},
					})
				} else {
		      dispatch({
						...actionObject,
						timestamp: +(new Date().getTime()),
		      })
					timer = setTimeout(() => dispatchFunction(), getInterval)
				}
			}

			if(auto) {
				timer = setTimeout(() => dispatchFunction(), timeout)
			} else {
				dispatchFunction()
			}
		}
	},
}

export default GameActions
