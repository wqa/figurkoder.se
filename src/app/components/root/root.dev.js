import React from 'react'
import { Router } from 'react-router'
import routes from '../../routes'
import { Provider } from 'react-redux'
import DevTools from '../devTools'

const Root = (props) => {
  const { store } = props

  return (
    <Provider store={ store }>
      <div>
        <Router routes={ routes } />
        <DevTools />
      </div>
    </Provider>
  )
}

export default Root
