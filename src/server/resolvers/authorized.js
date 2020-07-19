// const { withFilter } = require('apollo-server')

const {
  getMovieAndUpdate,
  getDirectorById,
  getDirectors,
  removeMovieById
} = require('../controllers')

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
        likes: findedMovie.likes + 1,
        directorId: findedMovie.directorId
      }

      pubSub.publish('LIKE_TOGGLE', updatedLike)

      return updatedLike
    },

    removeMovie: async (root, { id }, { pubSub }) => {
      const deletedMovie = await removeMovieById(id)

      const result = { id, directorId: deletedMovie.directorId }

      pubSub.publish('REMOVE_MOVIE', result)

      return result
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
    movies: ({ directorId }, args, { loaders }) => {
      return loaders.moviesDataLoader.load(directorId)
    },
    getInformation: () => {
      return 'getInformation in Director'
    }
  }
}

module.exports = { authorizedResolvers }
