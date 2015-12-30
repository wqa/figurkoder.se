import InitialState from '../initialState'
import { ActionTypesGame } from '../../actions/actionTypes'

const GameReducer = (state, action) => {
  switch (action.type) {
    case ActionTypesGame.RESET:
      return InitialState().game
      break
    case ActionTypesGame.SET_INTERVAL:
      return {
        ...state,
        countdown: +action.interval - 1,
      }
      break
    case ActionTypesGame.SET_PRACTICE:
      return {
        ...state,
        hidden: !action.practice,
      }
      break
    case ActionTypesGame.START_GAME:
      return {
        ...state,
        status: action.status,
        data: action.data,
        timestamp: +action.timestamp,
      }
      break
    case ActionTypesGame.PAUSE_GAME:
      return {
        ...state,
        status: 'pause',
        timestamp: 0,
        elapsedTime: +action.elapsedTime,
      }
      break
    case ActionTypesGame.STOP_GAME:
      return {
        ...state,
        status: action.status,
        currentPair: 0,
        elapsedTime: 0,
      }
      break
    case ActionTypesGame.SHOW:
      return {
        ...state,
        status: 'pause',
        hidden: action.hidden,
      }
      break
    case ActionTypesGame.NEXT:
      const newResult = [...state.result]
      newResult[state.currentPair] = state.hidden ? +action.elapsedTime : null

      return {
        ...state,
        hidden: action.hidden,
        currentPair: +action.newPair,
        status: action.status,
        timestamp: +action.timestamp,
        elapsedTime: 0,
        result: newResult,
      }
      break
    default:
      return state || InitialState().game
  }
}

export default GameReducer
