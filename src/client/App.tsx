import React from 'react'
import { ApolloClient } from 'apollo-client'
import { split, ApolloLink } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { useFetchDirectorWithIdQuery } from '@gql/types/operation-result-types'
import { graphql } from 'graphql'
import { codeFirstSchema } from '../server/schema/code-first'
import { Movies } from '@components/movies'
import {
  batchLink,
  httpLink,
  myLink,
  // reportErrors,
  errorLink
} from './apollo-links'
import './styles.css'
import { getMainDefinition } from 'apollo-utilities'

// Запрос через graphql сразу
const query = `{ 
  hello
}`

const wsLink = new WebSocketLink({
  uri: `ws://localhost:8080/graphql`,
  options: {
    reconnect: true
  }
})

graphql(codeFirstSchema as any, query)
  .then(res => console.log('responce with query', res))
  .catch(e => console.log('graphql e', e))

const isBatchLink = false

const terminatingLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink as any,
  isBatchLink ? batchLink() : httpLink()
)

const client = new ApolloClient({
  link: ApolloLink.from([
    // reportErrors(() => console.log('error with report')),
    myLink,
    errorLink,
    terminatingLink
  ]),
  cache: new InMemoryCache({
    dataIdFromObject: (result: any) => {
      if (result.__typename) {
        if (result.id !== undefined) {
          return `${result.__typename}:${result.id}`
        }
        if (result._id !== undefined) {
          return `${result.__typename}:${result._id}`
        }
        if (result.Id !== undefined) {
          return `${result.__typename}:${result.Id}`
        }
      }
      return null
    }
  }).restore((window as any).__APOLLO_STATE__) as any,
  connectToDevTools: !process.env.prodaction
})

export default function View() {
  const [directorId, setDirectorId] = React.useState(1)

  const { data, loading, error, refetch } = useFetchDirectorWithIdQuery({
    variables: {
      id: directorId
    }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const director = data?.authorized?.director

  return (
    <>
      <button onClick={() => refetch()}>refetch</button>
      <input
        type="number"
        value={directorId}
        onChange={({ target }) => setDirectorId(Number(target.value))}
        min={0}
      />

      <div className="director-wrapper">
        <h1>Current Director</h1>
        <h3>directorId - {director?.directorId}</h3>
        <h3>name - {director?.name}</h3>
        <h3>age -{director?.age}</h3>
      </div>

      <Movies movies={director?.movies} />
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
