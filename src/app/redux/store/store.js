import Constants from '../constants'

// if (process.argv.find((element) => element === '--production')) {
if (Constants.PRODUCTION) {
  module.exports = require('./store.prod')
} else {
  module.exports = require('./store.dev')
}
