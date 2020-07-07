const { movies } = require('../mock-data')

const guestResolvers = {
  // Корневой тип Query
  Query: {
    // резолв корневых запросов
    guest: () => ({})
  },

  GuestQuery: {
    movie: (parent, args, ctx) => {
      return movies.find(item => item.id === args.id)
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
