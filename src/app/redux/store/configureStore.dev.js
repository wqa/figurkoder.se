import { createStore, compose, applyMiddleware } from 'redux'
import CombinedReducers from './reducers/combinedReducers'
import thunk from 'redux-thunk'

// Redux DevTools store enhancers
import { persistState } from 'redux-devtools/lib'
import DevTools from '../../components/devTools'

const finaleCreateStore = compose (
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)((createStore))

function getDebugSessionKey() {
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0)? matches[1] : null
}

export default function configureStore(initialState) {
  const store = finaleCreateStore(CombinedReducers, initialState)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept(CombinedReducers, () =>
      store.replaceReducer(CombinedReducers/*.default if you use Babel 6+ */)
    )
  }

  return store
}
