import { combineReducers } from 'redux'
import GameReducer from './GameReducer'
import SettingsReducer from './SettingsReducer'

const CombinedReducers = combineReducers({
    game: GameReducer,
    settings: SettingsReducer,
})

export default CombinedReducers
