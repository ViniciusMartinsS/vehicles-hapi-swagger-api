'use strict'

const { selectVehicleDate } = require('../model/vehicles')

module.exports.show = async request =>
  selectVehicleDate(request)

module.exports.create = async request => {
  return 'oi'
}

module.exports.update = async request => {
  return 'oi'
}

module.exports.remove = async request => {
  return 'oi'
}
