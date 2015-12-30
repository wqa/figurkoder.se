import InitialState from '../initialState'
import { ActionTypesGame } from '../../actions/actionTypes'

const {
  SET_INTERVAL,
  SET_PRACTICE,
  START_GAME,
  PAUSE_GAME,
  STOP_GAME,
  SHOW,
  NEXT,
} = ActionTypesGame

const GameReducer = (state, action) => {
  switch (action.type) {
    case ActionTypesGame.RESET:
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
        status: action.status,
        data: action.data,
        timestamp: +action.timestamp,
      }
      break
    case PAUSE_GAME:
      return {
        ...state,
        status: 'pause',
        timestamp: 0,
        elapsedTime: +action.elapsedTime,
      }
      break
    case STOP_GAME:
      return {
        ...state,
        status: action.status,
        currentPair: 0,
        elapsedTime: 0,
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
      newResult[state.currentPair] = [state.data[state.currentPair][0], state.hidden ? +action.elapsedTime / 1000 : state.data[state.currentPair][1]]

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
