const { directors, movies } = require('../mock-data')

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
    update: (parent, args, ctx) => {
      return 'update success'
    }
  },
  AuthorizedQuery: {
    director: (parent, args, ctx) => {
      return directors.find(item => item.id === args.id)
    }
  },

  // Тип Director, у него нужно зарезолвить поле movies
  // в code first резолвер указывается в типе
  // в схеме его нужно указать в нужном типе
  Director: {
    movies: (parent, args, ctx) => {
      return movies.filter(item => item.directorId === parent.id)
    },
    getInformation: () => {
      return 'getInformation in Director'
    }
  }
}

module.exports = { authorizedResolvers }
