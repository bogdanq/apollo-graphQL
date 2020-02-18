import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList
} from 'graphql'

export const codeFerstShcema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      Page: {
        type: new GraphQLObjectType({
          name: 'Page',
          fields: () => ({
            pageInfo: {
              type: new GraphQLObjectType({
                name: 'pageInfo',
                fields: () => ({
                  total: { type: GraphQLInt },
                  currentPage: { type: GraphQLInt },
                  lastPage: { type: GraphQLInt },
                  hasNextPage: { type: GraphQLInt },
                  perPage: { type: GraphQLInt }
                })
              }),
              resolve: (_, args) => {
                console.log('pageInfo', args)
                return {
                  total: 0,
                  currentPage: 0,
                  lastPage: 0,
                  hasNextPage: 0,
                  perPage: 0
                }
              }
            },
            media: {
              type: new GraphQLObjectType({
                name: 'mediaQuery',
                fields: () => ({
                  id: { type: GraphQLInt },
                  synonyms: { type: new GraphQLList(GraphQLString) },
                  type: { type: GraphQLString },
                  format: { type: GraphQLString }
                })
              }),
              args: {
                search: { type: GraphQLString }
              },
              resolve: (_, args) => {
                console.log('mediaQuery', args)
                return {
                  id: 123,
                  synonyms: ['qwd'],
                  type: 'anime',
                  format: 'mp4'
                }
              }
            }
          })
        }),
        args: {
          page: { type: GraphQLInt },
          perPage: { type: GraphQLInt },
          search: { type: GraphQLString }
        },
        resolve: (_, args) => {
          console.log('Page', args)
          return false
        }
      }
    })
  })
})
