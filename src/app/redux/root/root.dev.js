import React from 'react'

// React Router
import { Router } from 'react-router'
import routes from '../../routes'

// Redux
import { Provider } from 'react-redux'

// Redux DevTools
import devTools from '../../components/devTools'

const Root = (props) => {
  const { store } = props

  return (
    <Provider store={ store }>
      <div>
        <Router routes={ routes } />
        <devTools />
      </div>
    </Provider>
  )
}

export default Root
