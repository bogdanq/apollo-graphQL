const { gql } = require('apollo-server-express')

const guestSchema = gql`
  extend type GuestQuery {
    hello: String!
    movie(id: Int!): Movie!
    getInformation: String!
  }
`

module.exports = { guestSchema }
