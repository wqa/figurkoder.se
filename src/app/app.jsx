import Constants from './redux/constants'

// React
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

// React Router
import Root from './redux/root'
import configureStore from './redux/store'

import InitialState from './redux/initialState'

const Store = configureStore(InitialState())

//Needed for React Developer Tools
window.React = React

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
  <Root store={ Store } />
, document.getElementById('app'))
