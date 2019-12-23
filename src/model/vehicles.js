'use strict'

const { ObjectID } = require('mongodb')

const { find, create, update } = require('../repository/vehicles')

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

module.exports.updateVehicleData = async request => {
  const _id = request && request.params && request.params.id
  const brand = request && request.payload && request.payload.brand
  const model = request && request.payload && request.payload.model
  const version = request && request.payload && request.payload.version

  const where = {
    ...(_id && { _id: new ObjectID(_id) })
  }

  const payload = {
    $set: {
      ...(brand && { brand }),
      ...(model && { model }),
      ...(version && { version })
    }
  }

  return update(where, payload)
}
