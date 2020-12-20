const DataLoader = require('dataloader')
const { groupBy } = require('ramda')
const { rocketPipe: p } = require('rocket-pipes')
const { getMoviesByIds } = require('../controllers')

function directorMoviesByIdDataLoader() {
  return new DataLoader((directorIds) =>
    p(
      () => getMoviesByIds(directorIds),
      (movies) => groupBy((movie) => movie.directorId, movies),
      (groupedById) => directorIds.map((movieId) => groupedById[movieId])
    )()
  )
}

module.exports = { directorMoviesByIdDataLoader }
