const { MoviesModel } = require('../models/movies')
const { DirectorsModel } = require('../models/directors')

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

const getMovies = async () => {
  try {
    return await MoviesModel.find()
  } catch (e) {
    throw Error('При получении списка movies произошла ошибка')
  }
}

module.exports = { getMovieAndUpdate, getMovieById, getMovies, getMoviesById }
