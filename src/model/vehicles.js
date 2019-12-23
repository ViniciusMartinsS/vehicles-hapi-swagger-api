'use strict'

const { ObjectID } = require('mongodb')

const { find, create } = require('../repository/vehicles')

module.exports.selectVehicleData = async request => {
  const _id = request && request.params && request.params.id

  const where = {
    ...(_id && { _id: new ObjectID(_id) })
  }

  return find(where)
}

module.exports.createVehicleData = async request => {
  const payload = {
    ...(request && { ...request.payload })
  }

  return create(payload)
}
