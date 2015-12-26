import { createStore, compose, applyMiddleware } from 'redux'
import InitialState from '../initialState'
import CombinedReducers from '../reducers/combinedReducers'
import Thunk from 'redux-thunk'

// Redux DevTools store enhancers
import { persistState } from 'redux-devtools/lib'
import DevTools from '../../components/devTools'

const finaleCreateStore = compose (
  // Middleware you want to use in development:
applyMiddleware(Thunk),
// Required! Enable Redux DevTools with the monitors you chose
DevTools.instrument(),
// Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
persistState(getDebugSessionKey())
)((createStore))

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0)? matches[1] : null
}

// export default function configureStore(initialState) {
//   const store = finalCreateStore(CombinedReducers, initialState)
//
//   // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
//   if (module.hot) {
//     module.hot.accept(CombinedReducers, () =>
//       store.replaceReducer(CombinedReducers/*.default if you use Babel 6+ */)
//     )
//   }
//
//   return store
// }

const store = finaleCreateStore(CombinedReducers, InitialState())

export default store
