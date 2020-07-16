import React from 'react'
import { Movie } from '@gql/types/operation-result-types'
import { MovieItem } from './item'
import { useLikeMovie } from '../hooks/use-like-movie'
import { useRemoveMovie } from '../hooks/use-remove-movie'

export function Movies({ movies = [] }: { movies?: Array<Movie> }) {
  const [toggleLike] = useLikeMovie()
  const [removeMovie] = useRemoveMovie()

  return (
    <div>
      <h2>Movies (count: {movies?.length})</h2>
      {movies.map(item => (
        <MovieItem
          key={item.id}
          item={item}
          toggleLike={toggleLike}
          removeMovie={removeMovie}
        />
      ))}
    </div>
  )
}
