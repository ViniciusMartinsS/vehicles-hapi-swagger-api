'use strict'

const {
  selectVehicleData,
  createVehicleData
 } = require('../model/vehicles')

module.exports.show = async request =>
  selectVehicleData(request)

module.exports.create = async request =>
  createVehicleData(request)

module.exports.update = async request => {
  return 'oi'
}

module.exports.remove = async request => {
  return 'oi'
}
