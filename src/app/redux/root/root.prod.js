import React from 'react'

// React Router
import { Router } from 'react-router'
import routes from '../../routes'

// Redux
import { Provider } from 'react-redux'
import Store from '../store/store'

const Root = (props) => {
  const { store } = props

  return (
    <Provider store={ Store }>
      <Router routes={ routes } />
    </Provider>
  )
}

export default Root
