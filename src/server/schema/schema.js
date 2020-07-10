const { gql } = require('apollo-server')
const { adminSchema } = require('./admin')
const { authSchema } = require('./authorized')
const { guestSchema } = require('./guest')

// schema definition language SDL
const rootSchema = gql`
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }

  type Mutation {
    authorized: AuthorizedMutation
  }

  type Subscription {
    LikeToggled: Like!
  }

  type Query {
    authorized: AuthorizedQuery
    guest: GuestQuery
    administrator: AdministratorQuery
  }

  # Запросы для админа
  type AdministratorQuery {
    nope(nope: Int!): Int
  }

  # Мутации для пользователя
  type AuthorizedMutation {
    nope(nope: Int!): Int
  }

  # Запросы для пользователя
  type AuthorizedQuery {
    nope(nope: Int!): Int
  }

  # Запросы для всех
  type GuestQuery {
    nope(nope: Int!): Int
  }

  type Like {
    id: String!
    likes: Int!
  }
`

module.exports = { rootSchema, adminSchema, authSchema, guestSchema }
