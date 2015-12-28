import Constants from '../constants'

if (Constants.PRODUCTION) {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}
