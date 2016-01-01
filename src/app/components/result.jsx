import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Actions from '../redux/actions/'
import InGameHeader from './shared/inGameHeader'
import ResultTable from './result/resultTable'
import Games from '../data/games'

const Result = (props) => {
  const {result} = props
  const url = props.params.game
  const GameObject = Games[url]

  return(
    <div>
      <InGameHeader title={GameObject.title} url={'game/' + url} />
      <ResultTable results={result} />
    </div>
  )
}

Result.propTypes = {
  result: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => state.game

export default connect(mapStateToProps, null)(Result)
