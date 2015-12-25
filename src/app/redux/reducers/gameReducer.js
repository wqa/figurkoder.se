import InitialState from '../initialState'
import ActionTypes from '../actionTypes'

const GameReducer = (state, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case ActionTypes.game.START_GAME:
      return newState
      break
    default:
      return state || InitialState()
  }
}

export default GameReducer
