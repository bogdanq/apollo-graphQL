const { movies, directors } = require('../mock-data')

const resolvers = {
  // Корневой тип Query
  Query: {
    movie: (parent, args, context) => {
      return movies.find(item => item.id === args.id)
    },
    hello: (parent, args, context) => {
      return 'Hello graphql'
    },
    director: (parent, args, context) => {
      return directors.find(item => item.id === args.id)
    }
  },

  // Тип Director, у него нужно зарезолвить поле movies
  // в code first резолвер указывается в типе
  // в схеме его нужно указать в нужном типе
  Director: {
    movies: (parent, args, context) => {
      return movies.filter(item => item.directorId === parent.id)
    }
  }
}

module.exports = { resolvers }
