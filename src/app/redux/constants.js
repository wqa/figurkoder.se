const Constants = {
  // Actions
	START_GAME: 'START_GAME',
  SET_INTERVAL: 'SET_INTERVAL',
}

Constants.PRODUCTION = process.argv.find((element) => element === '--production')

Constants.PRODUCTION = false

export default Constants
