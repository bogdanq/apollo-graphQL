const { movies, directors } = require('../mock-data')

const movieResolvers = {
  // Корневой тип Query
  Query: {
    movie: (parent, args, ctx) => {
      return movies.find(item => item.id === args.id)
    },
    hello: (parent, args, ctx) => {
      return 'Hello graphql'
    },
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

const userResolvers = {
  Query: {
    getInformation: (parent, args, ctx) => {
      return 'getInformation in userResolvers'
    }
  },
  Mutation: {
    update: (parent, args, ctx) => {
      return 'update success'
    }
  }
}

module.exports = { movieResolvers, userResolvers }
