import React from 'react'
import { connect } from 'react-redux'
import Actions from '../redux/actions/'
import Tiles from './startPage/tiles'

class StartPage extends React.Component{
  componentWillUnmount(){
    this.props.resetGame()
    this.props.resetSettings()
  }

  render(){
    return(
      <div>
        <Tiles />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetGame: () => { dispatch(Actions.resetGame()) },
    resetSettings: () => { dispatch(Actions.resetSettings()) },
  }
}

export default connect(null, mapDispatchToProps)(StartPage)
