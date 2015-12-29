import InitialState from '../initialState'
import { ActionTypesGame } from '../../actions/actionTypes'

const GameReducer = (state, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case ActionTypesGame.RESET:
      return InitialState().game
      break
    case ActionTypesGame.START_GAME:
      newState.status = action.status
      newState.data = action.data
      return newState
      break
    case ActionTypesGame.PAUSE_GAME:
      newState.status = action.status
      return newState
      break
    case ActionTypesGame.STOP_GAME:
      newState.status = action.status
      return newState
      break
    case ActionTypesGame.SHOW:
      newState.hidden = action.hidden
      return newState
      break
    case ActionTypesGame.NEXT:
      newState.hidden = action.hidden
      newState.currentPair = +action.newPair
      return newState
      break
    default:
      return state || InitialState().game
  }
}

export default GameReducer
