import InitialState from '../initialState'
import { ActionTypesSettings } from '../../actions/actionTypes'

const SettingsReducer = (state, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case ActionTypesSettings.RESET:
      return InitialState().settings
      break
    case ActionTypesSettings.SET_INTERVAL:
      newState.interval = +action.interval
      return newState
      break
    case ActionTypesSettings.SET_BEGIN:
      newState.begin = +action.begin
      return newState
      break
    case ActionTypesSettings.SET_END:
      newState.end = +action.end
      return newState
      break
    case ActionTypesSettings.SET_PRACTICE:
      newState.practice = action.practice
      return newState
      break
    default:
      return state || InitialState().settings
  }
}

export default SettingsReducer
