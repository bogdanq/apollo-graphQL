const { gql } = require('apollo-server')

const authSchema = gql`
  extend type AuthorizedQuery {
    director(id: Int!): Director!
  }

  extend type AuthorizedMutation {
    toggleLike(id: Int!): Like!
  }

  type Movie {
    id: ID!
    name: String!
    year: Int!
    directorId: ID!
  }

  type Director {
    id: ID!
    name: String!
    age: Int!
    movies: [Movie!]!
    getInformation: String!
  }
`

module.exports = { authSchema }
