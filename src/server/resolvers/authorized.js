const { withFilter } = require('apollo-server')
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
  Subscription: {
    // резолв подписок с авторизацией
    LikeToggled: {
      resolve: (source, args) => {
        return source
      },
      subscribe: (_, __, { pubSub }) => {
        return pubSub.asyncIterator(['LIKE_TOGGLE'])
      }
    }
  },

  AuthorizedMutation: {
    toggleLike: (parent, { id }, { pubSub }) => {
      const findedMovie = movies.find(item => item.id === id)

      const like = {
        id: findedMovie.id,
        isLiked: !findedMovie.like.isLiked
      }

      pubSub.publish('LIKE_TOGGLE', like)

      return like
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
