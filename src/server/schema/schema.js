const { gql } = require('apollo-server-express')

const typeDefs = gql`
  schema {
    query: Query
  }

  type Query {
    movie(id: Int!): Movie!
    director(id: Int!): Director!
    hello: String!
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
  }
`

module.exports = { typeDefs }
