import Constants from '../../redux/constants'

if (Constants.PRODUCTION) {
  module.exports = require('./root.prod')
} else {
  module.exports = require('./root.dev')
}
