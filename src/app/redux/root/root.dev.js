import React from 'react'

// React Router
import { Router } from 'react-router'
import routes from '../../routes'

// Redux
import { Provider } from 'react-redux'
import Store from '../store/store'

// Redux DevTools
import DevTools from '../../components/devTools'

const Root = (props) => {
  const { store } = props

  return (
    <div>
      <Provider store={ Store }>
        <Router routes={ routes } />
      </Provider>
      <DevTools />
    </div>
  )
}

export default Root
