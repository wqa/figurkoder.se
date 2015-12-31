import InitialState from '../initialState'
import { ActionTypesSettings } from '../../actions/actionTypes'

const {
  RESET,
  STOP_GAME,
  SET_INTERVAL,
  SET_BEGIN,
  SET_END,
  SET_PRACTICE,
} = ActionTypesSettings

const SettingsReducer = (state, action) => {
  switch (action.type) {
    case RESET:
      return InitialState().settings
      break
    // case STOP_GAME:
    //   return InitialState().settings
    //   break
    case SET_INTERVAL:
      return {
        ...state,
        interval: +action.interval,
      }
      break
    case SET_BEGIN:
      return {
        ...state,
        begin: +action.begin,
      }
      break
    case SET_END:
      return {
        ...state,
        end: +action.end,
      }
      break
    case SET_PRACTICE:
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
