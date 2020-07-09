// const { withFilter } = require('apollo-server')
const { directors, movies } = require('../mock-data')
const { MoviesModel } = require('../models/movies')
const { DirectorsModel } = require('../models/directors')

const authorizedResolvers = {
  // Корневой тип Query
  Query: {
    // резолв корневых запросов
    authorized: (parent, args, { session }) => {
      if (!session) {
        return null
      }

      return session
    }
  },
  Mutation: {
    // резолв мутаций с авторизацией
    authorized: (parent, args, { session }) => {
      if (!session) {
        return null
      }

      return session
    }
  },

  AuthorizedMutation: {
    toggleLike: async (parent, { id }, { pubSub }) => {
      const findedMovie = await getMovieAndUpdate(id)

      const updatedLike = {
        id: findedMovie._id,
        likes: findedMovie.likes
      }

      pubSub.publish('LIKE_TOGGLE', updatedLike)

      return updatedLike
    }
  },
  AuthorizedQuery: {
    director: (parent, { id }, ctx) => {
      return getDirectorById(id)
    },
    directors: (parent, args, ctx) => {
      return getDirectors()
    }
  },

  // Тип Director, у него нужно зарезолвить поле movies
  // в code first резолвер указывается в типе
  // в схеме его нужно указать в нужном типе
  Director: {
    movies: ({ directorId }, args, ctx) => {
      return getMovieById(directorId, 'directorId')
    },
    getInformation: () => {
      return 'getInformation in Director'
    }
  }
}

module.exports = { authorizedResolvers }

const getDirectorById = async id => {
  try {
    return await DirectorsModel.findOne({
      directorId: id
    })
  } catch (e) {
    return 'При добавлении работы произошла ошибка'
  }
}

const getMovieAndUpdate = async (id, field = '_id') => {
  try {
    const movie = await MoviesModel.findOne({
      [field]: id
    })

    await MoviesModel.updateOne(
      {
        [field]: id
      },
      { likes: movie.likes + 1 }
    )

    return { ...movie._doc, likes: movie.likes + 1 }
  } catch (e) {
    return 'При добавлении работы произошла ошибка'
  }
}

const getMovieById = async (id, field = '_id') => {
  try {
    return await MoviesModel.find({
      [field]: 12
    })
  } catch (e) {
    return 'При добавлении работы произошла ошибка'
  }
}

const getDirectors = async () => {
  try {
    return await DirectorsModel.find()
  } catch (e) {
    return 'При добавлении работы произошла ошибка'
  }
}
