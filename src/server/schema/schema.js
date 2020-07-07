const { gql } = require('apollo-server-express')

// schema definition language SDL
const movieSchema = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Mutation {
    nope(nope: Int!): Int
  }

  type Query {
    authorized: AuthorizedQuery
    guest: GuestQuery
    administrator: AdministratorQuery
  }

  # Запросы с авторизацией
  type AuthorizedQuery {
    director(id: Int!): Director!
  }

  # Запросы для админа
  type AdministratorQuery {
    nope(nope: Int!): Int
  }

  # Запросы для гостей
  type GuestQuery {
    hello: String!
    movie(id: Int!): Movie!
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
  extend type GuestQuery {
    getInformation: String!
  }

  extend type Mutation {
    update: String!
  }
`

const adminSchema = gql`
  extend type AdministratorQuery {
    getUserInfoWithID: String!
  }
`

module.exports = { userSchema, movieSchema, adminSchema }
