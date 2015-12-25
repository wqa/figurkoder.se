import { combineReducers, createStore } from 'redux'
import InitialState from './initialState'
import GameReducer from './reducers/GameReducer'
import SettingsReducer from './reducers/SettingsReducer'

const reducers = combineReducers({
    game: GameReducer,
    settings: SettingsReducer,
})

const store = createStore(reducers, InitialState())

export default store
