import { createStore, compose, applyMiddleware } from 'redux'
import CombinedReducers from './reducers/combinedReducers'
import thunk from 'redux-thunk'

const finaleCreateStore = compose (
  applyMiddleware(thunk),
  persistState(getDebugSessionKey())
)((createStore))

export default function configureStore(initialState) {
  return finaleCreateStore(CombinedReducers, initialState)
}
