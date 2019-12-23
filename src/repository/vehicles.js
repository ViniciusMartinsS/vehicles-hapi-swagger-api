'use strict'

const { connection } = require('../../database/connection')

module.exports.find = async where => {
  const collection = await defineCollection()
  return collection.find({ ...where }).toArray()
}

async function defineCollection () {
  const database = await connection()
  return database.collection('cars')
}
