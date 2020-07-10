import { ApolloLink } from 'apollo-link'

export const myLink = new ApolloLink((operation, forward) => {
  console.log(`starting request for`, operation)

  return forward(operation).map(data => {
    console.log(`ending request for`, operation)
    return data
  })
})
