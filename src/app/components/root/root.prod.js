import React from 'react'

// React Router
import { Router } from 'react-router'
import routes from '../../routes'

// Redux
import { Provider } from 'react-redux'

const Root = (props) => {
  const { store } = props

  return (
    <Provider store={ store }>
      <Router routes={ routes } />
    </Provider>
  )
}

export default Root
