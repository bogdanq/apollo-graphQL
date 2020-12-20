// const { withFilter } = require('apollo-server')

const {
  getDirectorById,
  getDirectors,
  removeMovie,
  toggleMovieLike
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
      return toggleMovieLike(id, pubSub)
    },

    removeMovie: async (parent, { id }, { pubSub }) => {
      return removeMovie(id, pubSub)
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
      return loaders.directorMoviesByIdDataLoader.load(directorId)
    },
    getInformation: () => {
      return 'getInformation in Director'
    }
  }
}

module.exports = { authorizedResolvers }
