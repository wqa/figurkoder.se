import { createStore, compose, applyMiddleware } from 'redux'
import CombinedReducers from '../reducers/combinedReducers'
import Thunk from 'redux-thunk'

export default function configureStore(initialState) {
  return createStore(CombinedReducers, initialState)
}
