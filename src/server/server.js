const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('apollo-server')
const { movieSchema, userSchema } = require('./schema/schema')
const { movieResolvers, userResolvers } = require('./resolvers')
const merge = require('lodash/merge')

const app = express()

const schema = makeExecutableSchema({
  typeDefs: [movieSchema, userSchema],
  resolvers: merge(movieResolvers, userResolvers)
})

const server = new ApolloServer({
  schema,
  context: { text: 'some text' }
  // context: async ({ req }) => ({})
})

server.applyMiddleware({ app })

app.listen({ port: 8080 }, () =>
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`)
)
