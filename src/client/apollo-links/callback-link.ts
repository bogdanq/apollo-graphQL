import { ApolloLink } from 'apollo-link'

export const reportErrors = (errorCallback: () => void) => {
  return new ApolloLink((operation, forward) => {
    const observer = forward(operation)
    observer.subscribe({ error: errorCallback })

    return forward(operation)
  })
}
