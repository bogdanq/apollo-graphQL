const { gql } = require('apollo-server')

const guestSchema = gql`
  extend type GuestQuery {
    hello: String!
    movie(id: Int!): Movie!
    getInformation: String!
  }
`

module.exports = { guestSchema }
