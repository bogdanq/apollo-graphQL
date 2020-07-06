const { gql } = require('apollo-server-express')

const movieSchema = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Mutation {
    nope(nope: Int!): Int
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
    getInformation: String!
  }
`

const userSchema = gql`
  extend type Query {
    getInformation: String!
  }

  extend type Mutation {
    update: String!
  }
`

module.exports = { userSchema, movieSchema }
