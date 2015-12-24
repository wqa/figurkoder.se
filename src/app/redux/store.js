import { combineReducers, createStore } from 'redux'
import InitialState from './initialState'
import Game from './reducers/Game'

const reducers = combineReducers({
    Game: Game,
})

const store = createStore(reducers, InitialState)

export default store
