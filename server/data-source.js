const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} = require('graphql')

const movies = [
  {
    id: 1,
    name: 'Movie 1',
    year: 2018,
    directorId: 1
  },
  {
    id: 2,
    name: 'Movie 2',
    year: 2017,
    directorId: 1
  },
  {
    id: 3,
    name: 'Movie 3',
    year: 2016,
    directorId: 3
  }
]

const directors = [
  {
    id: 1,
    name: 'Director 1',
    age: 20
  },
  {
    id: 2,
    name: 'Director 2',
    age: 30
  },
  {
    id: 3,
    name: 'Director 3',
    age: 40
  }
]

const movieType = new GraphQLObjectType({
  name: 'Movie',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    year: { type: GraphQLInt },
    directorId: { type: GraphQLID }
  }
})

// code-first schema
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // Ендпоинты для запроса query={hello}
    hello: {
      type: GraphQLString,

      resolve: function() {
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
      resolve: function(source, args) {
        return movies.find(item => item.id === args.id)
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
        fields: {
          id: { type: GraphQLInt },
          name: { type: GraphQLString },
          age: { type: GraphQLInt },
          movies: {
            type: new GraphQLList(movieType),
            args: {
              id: { type: GraphQLInt }
            },
            resolve: function(source, args) {
              return movies.filter(item => item.directorId === source.id)
            }
          }
        }
      }),
      args: {
        id: { type: GraphQLInt }
      },
      resolve: function(source, args) {
        return directors.find(item => item.id === args.id)
      }
    }
  }
})

module.exports = { queryType }
