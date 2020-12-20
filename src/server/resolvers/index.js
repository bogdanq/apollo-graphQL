const { guestResolvers } = require('./guest')
const { adminResolvers } = require('./admin')
const { authorizedResolvers } = require('./authorized')
const { subscriptionsResolvers } = require('./subscriptions')

module.exports = {
  guestResolvers,
  authorizedResolvers,
  adminResolvers,
  subscriptionsResolvers
}
