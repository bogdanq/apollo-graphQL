import React from 'react'
import { MutationFunction } from 'react-apollo'
import {
  Movie,
  ToggleLikeMutation,
  ToggleLikeMutationVariables,
  RemoveMovieMutation,
  RemoveMovieMutationVariables
} from '@gql/types/operation-result-types'

export function MovieItem({
  item,
  toggleLike,
  removeMovie
}: {
  item: Movie
  toggleLike: MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>
  removeMovie: MutationFunction<
    RemoveMovieMutation,
    RemoveMovieMutationVariables
  >
}) {
  // локально для каждого елемента состояние, потому что мутация вернет один статус
  const [toggleLikePending, setLikePending] = React.useState(false)

  const mutation = React.useCallback(() => {
    likeMutation(toggleLike, setLikePending, item.id)
  }, [toggleLike, item.id])

  const removeMovieMutation = React.useCallback(() => {
    remove(removeMovie, setLikePending, item.id)
  }, [removeMovie, item.id])

  return (
    <div className="movie-item">
      <button onClick={removeMovieMutation}>удалить</button>
      <h3>{item.id}</h3>
      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <button disabled={toggleLikePending} onClick={mutation}>
        likes: {item.likes}
      </button>
    </div>
  )
}

async function likeMutation(
  toggleLike: MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  id: string
) {
  setLoading(true)

  try {
    await toggleLike({
      variables: { id }
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
}

async function remove(
  toggleLike: MutationFunction<
    RemoveMovieMutation,
    RemoveMovieMutationVariables
  >,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  id: string
) {
  setLoading(true)

  try {
    await toggleLike({
      variables: { id }
      /**
       * update: {
       *  не нужно обновление, потому что тут есть подписка
       * }
       */
    })
  } catch {
    setLoading(false)
  }
}
