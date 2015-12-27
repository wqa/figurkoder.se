import Constants from '../constants'

// if (process.argv.find((element) => element === '--production')) {
if (Constants.PRODUCTION) {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}
