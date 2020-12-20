import {
  useToggleLikeMutation,
  useLikeSubscription,
  FetchDirectorWithIdQuery,
  LikeSubscription
} from '@gql/types/operation-result-types'
import ApolloClient from 'apollo-client'
import GET_DIRECTORS from '@gql/query/fetch-directors.gql'
import { SubscriptionResult } from 'react-apollo'

export function useLikeMovie() {
  const [toggleLike] = useToggleLikeMutation()

  useLikeSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      updateLikeWithSubscribe(subscriptionData, client)
    }
  })

  return [toggleLike]
}

function updateLikeWithSubscribe(
  subscriptionData: SubscriptionResult<LikeSubscription>,
  client: ApolloClient<object>
) {
  const id = subscriptionData.data?.likeToggled?.id
  const directorId = Number(subscriptionData.data?.likeToggled?.directorId)

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
          movies: data.authorized.director.movies.map((movie) =>
            movie.id === id ? { ...movie, likes: movie.likes + 1 } : movie
          )
        }
      }
    }
  })
}
