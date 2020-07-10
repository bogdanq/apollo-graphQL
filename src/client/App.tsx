import React, { useState } from 'react'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider, MutationFunction } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {
  useFetchDirectorWithIdQuery,
  useToggleLikeMutation,
  Movie,
  FetchDirectorWithIdQuery,
  ToggleLikeMutation,
  ToggleLikeMutationVariables
} from '@gql/types/operation-result-types'
import { graphql } from 'graphql'
import { codeFirstSchema } from '../server/schema/code-first'
import {
  batchLink,
  httpLink,
  myLink,
  reportErrors,
  errorLink
} from './apollo-links'
import GET_DIRECTORS from './query.gql'

import './styles.css'

const query = `{ 
  hello
}`

graphql(codeFirstSchema as any, query)
  .then(res => console.log('responce with query', res))
  .catch(e => console.log('graphql e', e))

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

const isBatchLink = false

const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    myLink,
    reportErrors(() => console.log('reportErrors cb')),
    isBatchLink ? batchLink() : httpLink()
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
  const [count, setCount] = React.useState(1)
  const { data, loading, error, refetch } = useFetchDirectorWithIdQuery({
    variables: {
      id: directorId
    }
  })

  console.log('useFetchDirectorWithIdQuery Data', data)
  console.log('useFetchDirectorWithIdQuery Error', error)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const director = data?.authorized?.director

  return (
    <>
      <button onClick={() => refetch()}>refetch {count}</button>
      <button onClick={() => setCount(prev => prev + 1)}>
        setCount {count}
      </button>
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

      <Movies movies={director?.movies} directorId={directorId} />
    </>
  )
}

function Movies({
  movies,
  directorId
}: {
  movies?: Array<Movie>
  directorId: number
}) {
  const [toggleLike] = useToggleLikeMutation()

  return (
    <div>
      <h2>Movies (count: {movies?.length})</h2>
      {(movies || []).map(item => (
        <MovieItem
          key={item.id}
          item={item}
          toggleLike={toggleLike}
          directorId={directorId}
        />
      ))}
    </div>
  )
}

function MovieItem({
  item,
  toggleLike,
  directorId
}: {
  item: Movie
  toggleLike: MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>
  directorId: number
}) {
  const [isLoading, setLoading] = useState(false)

  // Можно выносить, можно делать рефеч запроса
  const mutation = async () => {
    setLoading(true)

    try {
      await toggleLike({
        variables: {
          id: item.id
        },
        update: function(proxy, fetchResult) {
          const result = fetchResult.data?.authorized?.toggleLike.id

          const data = proxy.readQuery<FetchDirectorWithIdQuery>({
            query: GET_DIRECTORS,
            variables: {
              id: directorId
            }
          })

          if (!data || !data.authorized) {
            return
          }

          proxy.writeQuery({
            query: GET_DIRECTORS,
            variables: {
              id: directorId
            },
            data: {
              ...data,
              authorized: {
                ...data.authorized,
                director: {
                  ...data.authorized.director,
                  movies: data.authorized.director.movies.map(movie =>
                    movie.id === result
                      ? { ...movie, likes: movie.likes + 1 }
                      : movie
                  )
                }
              }
            }
          })
        }
      })
    } catch {
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="movie-item">
      <h3>{item.id}</h3>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button disabled={isLoading} onClick={mutation}>
        likes: {item.likes}
      </button>
    </div>
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
