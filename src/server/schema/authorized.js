const { gql } = require('apollo-server')

const authSchema = gql`
  extend type AuthorizedQuery {
    director(id: Int!): Director!
    directors: [Director!]!
  }

  extend type AuthorizedMutation {
    toggleLike(id: String!): Like!
  }

  type Movie {
    id: ID!
    title: String!
    description: String!
    year: Int!
    directorId: Int!
    likes: Int!
  }

  type Director {
    directorId: ID!
    name: String!
    age: Int!
    movies: [Movie!]!
    getInformation: String!
  }
`

module.exports = { authSchema }
