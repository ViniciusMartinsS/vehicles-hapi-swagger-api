'use strict'

const { connection } = require('../../database/connection')

module.exports.find = async where => {
  const collection = await defineCollection()
  return collection.find({ ...where }).toArray()
}

module.exports.create = async payload => {
  const collection = await defineCollection()
  return collection.insertOne({ ...payload })
}

module.exports.update = async (where, payload) => {
  const collection = await defineCollection()
  return collection.update({ ...where }, { ...payload })
}

async function defineCollection () {
  const database = await connection()
  return database.collection('cars')
}
