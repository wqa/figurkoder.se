const Constants = {
  // Actions
	START_GAME: 'START_GAME',
  SET_INTERVAL: 'SET_INTERVAL',
}

Constants.PRODUCTION = process.argv.find((element) => element === '--production') ? true : false
console.log('Production: ' + Constants.PRODUCTION)

// Constants.PRODUCTION = true

export default Constants
