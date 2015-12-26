import { createStore, compose, applyMiddleware } from 'redux'
import InitialState from '../initialState'
import CombinedReducers from '../reducers/combinedReducers'
import Thunk from 'redux-thunk'

const store = createStore(CombinedReducers, InitialState())

export default store
