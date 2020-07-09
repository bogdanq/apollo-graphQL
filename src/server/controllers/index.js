const directors = require('./directors')
const movies = require('./movies')

module.exports = { ...directors, ...movies }
