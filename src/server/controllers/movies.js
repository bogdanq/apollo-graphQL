const { rocketPipe: p } = require('rocket-pipes')
const { MoviesModel } = require('../models/movies')

const getMovieAndUpdate = async (id, field = '_id') => {
  try {
    const movie = await getMovieById(id, field)

    await MoviesModel.updateOne(
      {
        [field]: id
      },
      { likes: movie.likes + 1 }
    )

    return { likes: movie.likes + 1, ...movie._doc }
  } catch (e) {
    throw Error(`При обновлении movie id - ${id} произошла ошибка`)
  }
}

const getMovieById = async (id, field = '_id') => {
  try {
    return await MoviesModel.findOne({
      [field]: id
    })
  } catch (e) {
    throw Error(`При получении movie id - ${id} произошла ошибка`)
  }
}

const getMoviesById = async (id, field = '_id') => {
  try {
    return await MoviesModel.find({
      [field]: id
    })
  } catch (e) {
    throw Error(`При получении movie id - ${id} произошла ошибка`)
  }
}

const getMoviesByIds = async (ids) => {
  try {
    return await MoviesModel.find({ directorId: { $in: ids } })
  } catch (e) {
    throw Error(`При получении movies by ids произошла ошибка`)
  }
}

const getMovies = async () => {
  try {
    return await MoviesModel.find()
  } catch (e) {
    throw Error('При получении списка movies произошла ошибка')
  }
}

const removeMovieById = async (_id) => {
  try {
    const movie = await getMovieById(_id)

    await MoviesModel.deleteOne({ _id })

    return movie
  } catch (e) {
    throw Error(`При удалении movie ${_id} произошла ошибка`)
  }
}

const notifyFindedMovie = (findedMovie, pubSub) => {
  const updatedMovie = {
    id: findedMovie._id,
    likes: findedMovie.likes + 1,
    directorId: findedMovie.directorId
  }

  pubSub.publish('LIKE_TOGGLE', updatedMovie)

  return updatedMovie
}

const toggleMovieLike = async (movieId, pubSub) => {
  return p(
    () => getMovieAndUpdate(movieId),
    (findedMovie) => notifyFindedMovie(findedMovie, pubSub)
  )()
}

const notifyRemovedMovie = (findedMovie, pubSub) => {
  const deletedMovie = {
    id: findedMovie._id,
    likes: findedMovie.likes + 1,
    directorId: findedMovie.directorId
  }

  const result = { id: deletedMovie.id, directorId: deletedMovie.directorId }

  pubSub.publish('REMOVE_MOVIE', result)

  return deletedMovie
}

const removeMovie = async (movieId, pubSub) => {
  return p(
    () => removeMovieById(movieId),
    (findedMovie) => notifyRemovedMovie(findedMovie, pubSub)
  )()
}

module.exports = {
  getMovieAndUpdate,
  getMovieById,
  getMovies,
  getMoviesById,
  removeMovieById,
  getMoviesByIds,
  toggleMovieLike,
  removeMovie
}
