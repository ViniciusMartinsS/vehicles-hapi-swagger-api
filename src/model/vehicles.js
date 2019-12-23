'use strict'

const { ObjectID } = require('mongodb')

const { find } = require('../repository/vehicles')

module.exports.selectVehicleDate = async request => {
  const _id = request && request.params && request.params.id

  const where = {
    ...(_id && { _id: new ObjectID(_id) })
  }

  return find(where)
}
