import React from 'react'
import { MutationFunction } from 'react-apollo'
import {
  Movie,
  ToggleLikeMutation,
  ToggleLikeMutationVariables
} from '@gql/types/operation-result-types'

export function MovieItem({
  item,
  toggleLike
}: {
  item: Movie
  toggleLike: MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>
}) {
  const [isLoading, setLoading] = React.useState(false)

  // Можно выносить, можно делать рефеч запроса
  const mutation = React.useCallback(async () => {
    setLoading(true)
    try {
      await toggleLike({
        variables: {
          id: item.id
        }
        /**
         * update: {
         *  не нужно обновление, потому что тут есть подписка
         * }
         */
      })
    } catch {
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [toggleLike, item.id])

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
