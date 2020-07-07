const { guestResolvers } = require('./guest')
const { adminResolvers } = require('./admin')
const { authorizedResolvers } = require('./authorized')

module.exports = {
  guestResolvers,
  authorizedResolvers,
  adminResolvers
}
