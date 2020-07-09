const { MoviesModel } = require('../models/movies')

const guestResolvers = {
  // Корневой тип Query
  Query: {
    // резолв корневых запросов
    guest: () => ({})
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

  GuestQuery: {
    movie: (parent, { id }, ctx) => {
      return getMovieById(id)
    },
    movies: async (parent, args, ctx) => {
      return getMovies()
    },
    hello: (parent, args, ctx, info) => {
      return 'Hello graphql'
    },
    getInformation: (parent, args, ctx) => {
      return 'getInformation in GuestQuery'
    }
  }
}

module.exports = { guestResolvers }

const getMovieById = async id => {
  try {
    return await MoviesModel.findOne({
      _id: id
    })
  } catch (e) {
    return 'При добавлении работы произошла ошибка'
  }
}

const getMovies = async () => {
  try {
    return await MoviesModel.find()
  } catch (e) {
    return 'При добавлении работы произошла ошибка'
  }
}
