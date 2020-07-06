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

const users = [
  {
    id: 1,
    name: 'user 1',
    bio: {}
  },
  {
    id: 2,
    name: 'user 2',
    bio: {}
  },
  {
    id: 3,
    name: 'user 3',
    bio: {}
  }
]

module.exports = { directors, movies, users }
