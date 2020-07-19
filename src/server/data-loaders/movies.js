const DataLoader = require('dataloader')
const { groupBy, map } = require('ramda')
const { getMoviesByIds } = require('../controllers')

function moviesDataLoader() {
  return new DataLoader(moviesByDirectorIds)
}

async function moviesByDirectorIds(directorIds) {
  const movies = await getMoviesByIds(directorIds)

  const groupedById = groupBy(movie => movie.directorId, movies)

  return map(movieId => groupedById[movieId], directorIds)
}

module.exports = { moviesDataLoader }
