const { pubSubNames } = require('../utils/pub-sub-names')

const subscriptionsResolvers = {
  Subscription: {
    // резолв подписок с авторизацией
    likeToggled: {
      resolve: (source, args) => source,
      subscribe: (source, args, { pubSub }) =>
        pubSub.asyncIterator(pubSubNames.movies.like)
    },
    removedMovie: {
      resolve: (source, args) => source,
      subscribe: (source, args, { pubSub }) =>
        pubSub.asyncIterator(pubSubNames.movies.remove)
    }
  }
}

module.exports = { subscriptionsResolvers }
