const { gql } = require('apollo-server')

const guestSchema = gql`
  extend type GuestQuery {
    hello: String!
    movie(id: String!): Movie!
    movies: [Movie!]!
    getInformation: String!
  }
`

module.exports = { guestSchema }
