const { gql } = require('apollo-server-express')

const adminSchema = gql`
  extend type AdministratorQuery {
    getUserInfoWithID: String!
  }
`

module.exports = { adminSchema }
