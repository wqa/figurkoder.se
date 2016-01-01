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
	COUNTDOWN,
} = ActionTypes

let timer
let countdown

const GameActions = {
	resetGame: () => {
		if (timer) clearTimeout(timer)
		if (countdown) clearTimeout(countdown)

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
			if (timer) clearTimeout(timer)
			if (countdown) clearTimeout(countdown)

      dispatch({
				type: STOP_GAME,
				countdown: +getState().settings.interval - 1,
      })
		}
	},
	pauseGame: () => {
		return (dispatch, getState) => {
			if (timer) clearTimeout(timer)
			if (countdown) clearTimeout(countdown)

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
			if (timer) clearTimeout(timer)
			if (countdown) clearTimeout(countdown)

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

			let lastCountdownTimeout = 0
			const countdownDispatchFunction = () => {
				// console.log('getState().game.hasBeenPaused:', getState().game.hasBeenPaused)
				// console.log('getState().game:', getState().game)
				dispatch({
					type: COUNTDOWN,
				})
				if (getState().game.hasBeenPaused) {
					const countdownTimeout = 1000 - +timeout.toString().slice(-3)
					// console.log('countdownTimeout:', countdownTimeout, 'timeout:', timeout)
					if (lastCountdownTimeout !== countdownTimeout) {
						console.log('Have been paused')
						countdown = setTimeout(() => countdownDispatchFunction(), countdownTimeout)
						lastCountdownTimeout = countdownTimeout
					} else {
						console.log('Have not been paused')
						countdown = setTimeout(() => countdownDispatchFunction(), 1000)
					}
				} else {
					countdown = setTimeout(() => countdownDispatchFunction(), 1000)
				}
			}

			const nextDispatchFunction = () => {
				clearTimeout(countdown)
				const timeout = !getState().game.hasBeenPaused ? getInterval : getInterval - +elapsedTime

				if (getState().game.data.length === 0) {
					if (timer) clearTimeout(timer)
					if (countdown) clearTimeout(countdown)

					throw Error('No data')
				}

				const newPair = +getState().game.currentPair < +getState().game.data.length - 1 ? +getState().game.currentPair + 1 : 0
				const nextTimestamp = new Date().getTime()
				const newElapsedTime = getElapsedTime(getState().game.status, false, +getState().game.elapsedTime, +getState().game.timestamp)

				const nextActionObject = {
					type: NEXT,
					hidden: !getState().settings.practice,
					newPair: newPair,
					elapsedTime: +newElapsedTime,
					countdown: +getState().settings.interval - 1,
				}

				if(+getState().game.currentPair + 1 === +getState().game.data.length && !getState().settings.practice) {
					clearTimeout(timer)
					dispatch({
						...nextActionObject,
						meta: {
							transition: (state, action) => ({
		          	path: `/result/${path}`,
			        }),
						},
					})
				} else {
		      dispatch({
						...nextActionObject,
						timestamp: +(new Date().getTime()),
		      })
					timer = setTimeout(() => nextDispatchFunction(), getInterval)
					countdown = setTimeout(() => countdownDispatchFunction(), 1000)
				}
			}

			if(auto) {
				timer = setTimeout(() => nextDispatchFunction(), timeout)
				countdown = setTimeout(() => countdownDispatchFunction(), 1000)
			} else {
				countdownDispatchFunction()
				nextDispatchFunction()
			}
		}
	},
}

export default GameActions
