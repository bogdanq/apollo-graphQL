const { gql } = require('apollo-server')

const adminSchema = gql`
  extend type AdministratorQuery {
    getUserInfoWithID: String!
  }
`

module.exports = { adminSchema }
