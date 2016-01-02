import InitialState from '../initialState'
import { ActionTypesGame } from '../../actions/actionTypes'

const {
  RESET,
  SET_INTERVAL,
  SET_PRACTICE,
  START_GAME,
  PAUSE_GAME,
  STOP_GAME,
  SHOW,
  NEXT,
  COUNTDOWN,
} = ActionTypesGame

const GameReducer = (state, action) => {
  switch (action.type) {
    case RESET:
      return InitialState().game
      break
    case SET_INTERVAL:
      return {
        ...state,
        countdown: +action.interval - 1,
      }
      break
    case SET_PRACTICE:
      return {
        ...state,
        hidden: !action.practice,
      }
      break
    case START_GAME:
      return {
        ...state,
        status: 'start',
        data: action.data || state.data,
        timestamp: +action.timestamp,
      }
      break
    case PAUSE_GAME:
      return {
        ...state,
        status: 'pause',
        timestamp: 0,
        elapsedTime: +action.elapsedTime,
        hasBeenPaused: true,
      }
      break
    case STOP_GAME:
      return {
        ...state,
				status: 'stop',
        currentPair: 0,
        elapsedTime: 0,
        timestamp: 0,
        data: [],
        countdown: +action.countdown,
      }
      break
    case SHOW:
      return {
        ...state,
        status: 'pause',
        hidden: action.hidden,
      }
      break
    case NEXT:
      const newResult = [...state.result]
      if (action.hidden) {
        newResult[state.currentPair] = [state.data[state.currentPair][0], state.hidden ? +action.elapsedTime / 1000 : state.data[state.currentPair][1]]
      }

      navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate

      if (navigator.vibrate && action.vibrate) {
      	navigator.vibrate(100)
      }

      return {
        ...state,
        hidden: action.hidden,
        currentPair: +action.newPair,
        status: 'start',
        timestamp: +action.timestamp || 0,
        elapsedTime: 0,
        result: newResult,
        hasBeenPaused: false,
        countdown: +action.countdown,
      }
      break
    case COUNTDOWN:
      return {
        ...state,
        countdown: +state.countdown > 0 ? +state.countdown - 1 : 0,
      }
      break
    default:
      return state || InitialState().game
  }
}

export default GameReducer
