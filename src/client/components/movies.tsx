import React from 'react'
import { ApolloClient } from 'apollo-client'
import {
  useToggleLikeMutation,
  Movie,
  useLikeSubscription,
  FetchDirectorWithIdQuery
} from '@gql/types/operation-result-types'
import GET_DIRECTORS from '@gql/query/fetch-directors.gql'
import { MovieItem } from './item'

export function Movies({
  movies,
  directorId
}: {
  movies?: Array<Movie>
  directorId: number
}) {
  const [toggleLike] = useToggleLikeMutation()
  useLikeSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      const id = subscriptionData.data?.LikeToggled?.id

      if (id) {
        updateLikeWithSubscribe(directorId, id, client)
      }
    }
  })

  return (
    <div>
      <h2>Movies (count: {movies?.length})</h2>
      {(movies || []).map(item => (
        <MovieItem key={item.id} item={item} toggleLike={toggleLike} />
      ))}
    </div>
  )
}

function updateLikeWithSubscribe(
  directorId: number,
  id: string,
  client: ApolloClient<object>
) {
  const data = client.readQuery<FetchDirectorWithIdQuery>({
    query: GET_DIRECTORS,
    variables: {
      id: directorId
    }
  })

  if (!data || !data.authorized) {
    return
  }

  client.writeQuery({
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
            movie.id === id ? { ...movie, likes: movie.likes + 1 } : movie
          )
        }
      }
    }
  })
}
