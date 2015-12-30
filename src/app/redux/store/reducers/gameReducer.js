import InitialState from '../initialState'
import { ActionTypesGame } from '../../actions/actionTypes'

const GameReducer = (state, action) => {
  switch (action.type) {
    case ActionTypesGame.RESET:
      return InitialState().game
      break
    case ActionTypesGame.START_GAME:
      return {
        ...state,
        status: action.status,
        data: action.data,
      }
      break
    case ActionTypesGame.PAUSE_GAME:
      return {
        ...state,
        status: action.status,
      }
      break
    case ActionTypesGame.STOP_GAME:
      return {
        ...state,
        status: action.status,
      }
      break
    case ActionTypesGame.SHOW:
      return {
        ...state,
        hidden: action.hidden,
      }
      break
    case ActionTypesGame.NEXT:
      return {
        ...state,
        hidden: action.hidden,
        currentPair: +action.newPair,
      }
      break
    default:
      return state || InitialState().game
  }
}

export default GameReducer
