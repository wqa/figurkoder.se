import React, { PropTypes } from 'react'
import { DataTable, TableHeader } from 'react-mdl'

const styles = {
  datatable: {
   width: '100%',
 },
}

const ResultTable = (props) => {
  const { results } = props

  const isNotANumber = (item) => {
    if (typeof item === 'object') {
      return !isNaN(item[1])
    } else {
      return typeof item === 'number' && !isNaN(item)
    }
  }

  const formatSec = (time) => (
    time.toString().length === 1 ? time.toString() + '.0 sek' : time.toString().slice(0, 3) + ' sek'
  )

  const presentation = results.map((item, key) => ({
    mnemomicImage: item[0], time: !isNaN(item[1]) ? formatSec(item[1]) : item[1],
  }))

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
    time: formatSec(avarage),
  })

  return(
    <DataTable
      style={styles.datatable}
      rows={presentation}
    >
      <TableHeader name='mnemomicImage'>
        Figurkod
      </TableHeader>
      <TableHeader numeric  name='time' tooltip='Tid innan du tryckte på "Nästa"'>
        Tid
      </TableHeader>
    </DataTable>
  )
}

ResultTable.propTypes = {
    results: PropTypes.array,
}

export default ResultTable
