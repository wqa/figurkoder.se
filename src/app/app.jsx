import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { Router } from 'react-router'
import routes from './routes'

import { Provider } from 'react-redux'
import Store from './redux/store'

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
  <Provider store={ Store }>
    <Router routes={ routes } />
  </Provider>
  , document.getElementById('app'))
