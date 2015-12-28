import InitialState from '../initialState'
import { ActionTypesGame } from '../actionTypes'

const GameReducer = (state, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case ActionTypesGame.START_GAME:
      return newState
      break
    default:
      return state || InitialState()
  }
}

export default GameReducer
