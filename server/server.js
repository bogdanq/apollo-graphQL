const express = require('express')
const graphqlHTTP = require('express-graphql')
const { GraphQLSchema } = require('graphql')
const { queryType } = require('./data-source')

const port = 5000
const app = express()

const schema = new GraphQLSchema({ query: queryType })

app.get(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: false
  })
)

app.listen(port)
console.log(`Server Running at localhost:${port}`)
