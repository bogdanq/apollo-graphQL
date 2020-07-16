import {
  FetchDirectorWithIdQuery,
  useRemoveMovieMutation,
  useRemovedMovieSubscription,
  RemovedMovieSubscription
} from '@gql/types/operation-result-types'
import ApolloClient from 'apollo-client'
import GET_DIRECTORS from '@gql/query/fetch-directors.gql'
import { SubscriptionResult } from 'react-apollo'

export function useRemoveMovie() {
  const [removeMovie] = useRemoveMovieMutation()

  useRemovedMovieSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      removeMovieWithSubscribe(subscriptionData, client)
    }
  })

  return [removeMovie]
}

function removeMovieWithSubscribe(
  subscriptionData: SubscriptionResult<RemovedMovieSubscription>,
  client: ApolloClient<object>
) {
  const id = subscriptionData.data?.removedMovie.id
  const directorId = Number(subscriptionData.data?.removedMovie.directorId)

  if (!id || !directorId) {
    return
  }

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
          movies: data.authorized.director.movies.filter(
            movie => movie.id !== id
          )
        }
      }
    }
  })
}
