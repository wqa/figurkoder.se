import InitialState from '../initialState'
import { ActionTypesSettings } from '../actionTypes'

const SettingsReducer = (state, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case ActionTypesSettings.SET_INTERVAL:
      newState.interval = +action.interval
      return newState
      break
    default:
      return state || InitialState()
  }
}

export default SettingsReducer
