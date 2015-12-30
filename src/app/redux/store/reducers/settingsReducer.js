import InitialState from '../initialState'
import { ActionTypesSettings } from '../../actions/actionTypes'

const SettingsReducer = (state, action) => {
  switch (action.type) {
    case ActionTypesSettings.RESET:
      return InitialState().settings
      break
    case ActionTypesSettings.SET_INTERVAL:
      return {
        ...state,
        interval: +action.interval,
      }
      break
    case ActionTypesSettings.SET_BEGIN:
      return {
        ...state,
        begin: +action.begin,
      }
      break
    case ActionTypesSettings.SET_END:
      return {
        ...state,
        end: +action.end,
      }
      break
    case ActionTypesSettings.SET_PRACTICE:
      return {
        ...state,
        practice: action.practice,
      }
      break
    default:
      return state || InitialState().settings
  }
}

export default SettingsReducer
