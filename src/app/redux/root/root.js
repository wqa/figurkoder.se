import Constants from '../constants'

// if (process.argv.find((element) => element === '--production')) {
if (Constants.PRODUCTION) {
  module.exports = require('./root.prod')
} else {
  module.exports = require('./root.dev')
}
