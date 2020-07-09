const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DirectorsSchema = new Schema(
  {
    name: {
      type: String,
      required: 'title is required',
      unique: 'title already'
    },
    age: {
      type: Number,
      required: 'title is required'
    },
    directorId: {
      type: Number,
      required: 'directorId is required'
    }
  },
  {
    timestamps: true
  }
)

const DirectorsModel = mongoose.model('Directors', DirectorsSchema)
module.exports = { DirectorsModel }
