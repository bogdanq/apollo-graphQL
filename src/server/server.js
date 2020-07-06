const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./schema/schema')
// const { codeFirstSchema } = require('./schema/code-first')
const { resolvers } = require('./resolvers')

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { text: 'some text' }
  // context: async ({ req }) => ({})
})

server.applyMiddleware({ app })

app.listen({ port: 8080 }, () =>
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`)
)
