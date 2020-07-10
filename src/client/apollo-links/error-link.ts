import { onError } from 'apollo-link-error'
const {
  getErrorBehaviorType,
  ErrorBehaviorType
} = require('../../server/errors')

export const errorLink = onError(
  ({ graphQLErrors, networkError, operation }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`)

        console.log('location', locations)

        // @ts-ignore
        switch (getErrorBehaviorType(extensions.code)) {
          case ErrorBehaviorType.USUAL:
            console.log('Request error')
            break
          case ErrorBehaviorType.UNLOGGED:
            break
          case ErrorBehaviorType.RELOADABLE:
            /* eslint-disable-next-line */
            location.reload()
            break
        }
      })
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  }
)
