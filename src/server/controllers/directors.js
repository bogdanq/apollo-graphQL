const { DirectorsModel } = require('../models/directors')

const getDirectorById = async (id) => {
  try {
    return await DirectorsModel.findOne({
      directorId: id
    })
  } catch (e) {
    throw Error(`При получении director id - ${id} произошла ошибка`)
  }
}

const getDirectors = async () => {
  try {
    return await DirectorsModel.find()
  } catch (e) {
    throw Error('При получении списка directors произошла ошибка')
  }
}

module.exports = { getDirectors, getDirectorById }
