const { movies, directors } = require('../mock-data')

const movieResolvers = {
  // Корневой тип Query
  Query: {
    // ресолв корневых запросов
    authorized: (parent, args, { session }) => {
      if (!session) {
        return null
      }

      return session
    },
    guest: () => ({}),
    administrator: (parent, args, { session, hasRole }) => {
      if (hasRole('ADMIN')) {
        return {}
      }

      throw Error('Нет прав!')
    }
  },
  GuestQuery: {
    movie: (parent, args, ctx) => {
      return movies.find(item => item.id === args.id)
    },
    hello: (parent, args, ctx, info) => {
      return 'Hello graphql'
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

const userResolvers = {
  GuestQuery: {
    getInformation: (parent, args, ctx) => {
      return 'getInformation in GuestQuery'
    }
  },
  Mutation: {
    update: (parent, args, ctx) => {
      return 'update success'
    }
  }
}

const adminResolvers = {
  AdministratorQuery: {
    getUserInfoWithID: () => {
      return 'getUserInfoWithID success'
    }
  }
}

module.exports = { movieResolvers, userResolvers, adminResolvers }
