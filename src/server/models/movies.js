const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MoviesSchema = new Schema(
  {
    title: {
      type: String,
      required: 'title is required',
      unique: 'title already'
    },
    description: {
      type: String,
      required: 'title is required'
    },
    year: {
      type: Number,
      required: 'year is required'
    },
    directorId: {
      type: Number,
      required: 'directorId is required'
    },
    likes: {
      type: Number,
      required: 'likes is required'
    }
  },
  {
    timestamps: true
  }
)

const MoviesModel = mongoose.model('Movies', MoviesSchema)
module.exports = { MoviesModel }
