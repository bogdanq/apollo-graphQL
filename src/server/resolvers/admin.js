const adminResolvers = {
  // Корневой тип Query
  Query: {
    // резолв корневых запросов
    administrator: (parent, args, { session, hasRole }) => {
      if (hasRole('ADMIN')) {
        return {}
      }

      throw Error('Нет прав!')
    }
  },

  AdministratorQuery: {
    getUserInfoWithID: () => {
      return 'getUserInfoWithID success'
    }
  }
}

module.exports = { adminResolvers }
