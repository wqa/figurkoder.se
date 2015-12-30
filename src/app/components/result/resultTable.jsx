import React, { PropTypes } from 'react'
import { DataTable } from 'react-mdl'

const styles = {
  datatable: {
   width: '100%',
 },
}

const ResultTable = (props) => {
  const { results } = props

  const presentation = results.map((item, key) => ({
    mnemomicImage: item[0], time: !isNaN(item[1]) ? item[1].toString().length === 1 ? item[1].toString() + '.0 sek' : item[1].toString().slice(0, 3) + ' sek' : item[1],
  }))

  const isNotANumber = (item) => {
    if (typeof item === 'object')
      return !isNaN(item[1])
    else
      return !isNaN(item)
  }

  const length = results
    .filter(isNotANumber)
    .length

  const summary = results.length > 0 ? results
    .filter(isNotANumber)
    .reduce((prev, curr) => prev.concat(curr))
    .filter(isNotANumber)
    .reduce((prev, curr) => prev + curr)
    : null

  const avarage = summary / length

  presentation.push({
    mnemomicImage: 'Genomsnittlig tid: ',
    time: avarage.toString().length === 1 ? avarage.toString() + '.0 sek' : avarage.toString().slice(0, 3) + ' sek',
  })

  return(
    <DataTable
      style={styles.datatable}
      columns={[
          {name: 'mnemomicImage', label: 'Figurkod'},
          {name: 'time', label: 'Tid', numeric: true},
      ]}
      data={presentation}
    />
  )
}

ResultTable.propTypes = {
    results: PropTypes.array,
}

export default ResultTable
