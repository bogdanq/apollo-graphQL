import React from 'react'
// import ApolloClient from "apollo-boost";
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'
// import * as _ from "lodash";
// import gql from 'graphql-tag'
// import gql from "graphql-tag";
import './styles.css'
import { HttpLink } from 'apollo-link-http'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { onError } from 'apollo-link-error'
// import { RestLink } from 'apollo-link-rest'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { useGetMediaListQuery } from '@gql/types/operation-result-types'
import { graphql } from 'graphql'
import { codeFirstShcema } from '../server/schema/parser-schema/parser-schema'
// import schema from '../server/schema/graph-schema/schema.graphql'

const query = `{ 
  Page(page: 1, perPage: 5) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media(search: "") {
      id
      synonyms
      type
      format
    }
  }
}`

graphql(codeFirstShcema, query)
  .then(res => console.log('responce with query', res))
  .catch(e => console.log('e', e))

// const authLink = new ApolloLink((operation, forward) => {
//   // const token = false
//   // operation.setContext(({ headers }: any) => {
//   //   console.log('headers', headers)
//   //   return {
//   //     headers: {
//   //       authorization: token ? `Bearer ${token}` : '',
//   //       ...headers
//   //     }
//   //   }
//   // })
//   console.log('onError')
//   return forward(operation)
// })

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

const myLink = new ApolloLink((operation, forward) => {
  console.log(`starting request for`, operation)
  return forward(operation).map(data => {
    console.log(`ending request for`, operation)
    return data
  })
})

const reportErrors = (errorCallback: any) =>
  new ApolloLink((operation, forward) => {
    const observer = forward(operation)
    observer.subscribe({ error: errorCallback })
    return forward(operation)
  })

const uri = 'https://graphql.anilist.co/graphql'
// const uri = 'http://localhost:8080/graphql'

const batchLink = () => {
  return new BatchHttpLink({
    uri,
    fetch: async (url, options) => {
      console.log('BatchHttpLink', options)

      if (options) {
        options.credentials = 'same-origin'
      }
      return fetch(url, options)
    }
  })
}

const isBatchLink = false

const httpLink = () => {
  return new HttpLink({
    uri,
    fetch: async (uri, options) => {
      console.log('httpLink', options)
      return fetch(uri, options)
    }
  })
}

const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    myLink,
    reportErrors(() => console.log('reportErrors')),
    isBatchLink ? batchLink() : httpLink()
  ]),
  cache: new InMemoryCache()
})

export default function View() {
  const { data, loading, error, refetch } = useGetMediaListQuery({
    variables: {
      page: 1,
      perPage: 5,
      search: ''
    }
  })

  console.log('data', data)
  console.log('error', error)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <button onClick={() => refetch()}>refetch</button>
      <h1>news</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}

export const App = () => {
  const [state, setState] = React.useReducer(prev => !prev, true)
  return (
    <ApolloProvider client={client}>
      <button onClick={setState}>{state ? 'unmount' : 'mount'}</button>
      {state ? (
        <>
          <View />
        </>
      ) : (
        <h1>View unmounted</h1>
      )}
    </ApolloProvider>
  )
}
/**

 */
