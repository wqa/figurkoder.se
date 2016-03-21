import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistStateSessionStorage from 'redux-sessionstorage'
import storeEnhancer from 'redux-history-transitions'
import CombinedReducers from './reducers/combinedReducers'
import C from '../../constants'

export default function configureStore(initialState, history) {
  const finaleCreateStore = compose (
    applyMiddleware(thunk),
    storeEnhancer(history),
    persistStateSessionStorage( null, { key: C.SESSION_STORAGE }),
  )((createStore))

  return finaleCreateStore(CombinedReducers, initialState)
}
