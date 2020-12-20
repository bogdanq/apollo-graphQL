const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLSchema
} = require('graphql')

const { movies, directors } = require('../mock-data')

export const movieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    year: { type: GraphQLInt },
    directorId: { type: GraphQLID }
  })
})

// code-first schema
export const codeFirstSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      // Ендпоинты для запроса query={hello}
      hello: {
        type: GraphQLString,
        resolve: function () {
          // указывает действие, которое должно быть выполнено при достижении ендпоинта
          return 'Hello World'
        }
      },
      /**
       * %20movie(id:%201)%20{%20id%20name%20year%20directorId%20}%20
        {
          movie(id: 1) {
            id
            name
            year
            directorId
          }
        }
       */
      movie: {
        type: movieType,
        args: {
          id: { type: GraphQLInt }
        },

        resolve: function (parent, args, context) {
          return movies.find((item) => item.id === args.id)
        }
      },
      //ендпоинт
      /**
       * %20directors(id:%201)%20{%20id%20name%20age%20}%20
        {
          directors(id: 1) {
            id
            name
            age
            movies {
              id
              name
              year
              directorId
            }
          }
        }
       */
      directors: {
        type: new GraphQLObjectType({
          name: 'Directors',
          fields: () => ({
            id: { type: GraphQLInt },
            name: { type: GraphQLString },
            age: { type: GraphQLInt },
            movies: {
              type: new GraphQLList(movieType),
              args: {
                id: { type: GraphQLInt }
              },

              resolve: function (parent, args, context) {
                return movies.filter((item) => item.directorId === parent.id)
              }
            }
          })
        }),
        args: {
          id: { type: GraphQLInt }
        },

        resolve: function (parent, args, context) {
          return directors.find((item) => item.id === args.id)
        }
      }
    })
  })
})
