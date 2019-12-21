'use strict'

const Joi = require('joi')

module.exports.SelectVehicle = {
  params: {
    id: Joi.number()
      .label('id')
      .optional()
      .description('The id of a vehicle'),
  }
}

module.exports.CreateVehicle = {
  payload: {
    brand: Joi.string()
      .trim()
      .replace(/\s{2,}/g, ' ')
      .label('Brand')
      .required()
      .description('The brand of a vehicle'),

    model: Joi.string()
      .trim()
      .replace(/\s{2,}/g, ' ')
      .label('Model')
      .required()
      .description('The model of a vehicle'),

    version: Joi.string()
      .trim()
      .replace(/\s{2,}/g, ' ')
      .label('Version')
      .required()
      .description('The version of a vehicle')
  }
}

module.exports.UpdateVehicle = {
  params: {
    id: Joi.number()
      .label('id')
      .required()
      .description('The id of a vehicle'),
  },

  payload: {
    brand: Joi.string()
      .trim()
      .replace(/\s{2,}/g, ' ')
      .label('Brand')
      .optional()
      .description('The brand of a vehicle'),

    model: Joi.string()
      .trim()
      .replace(/\s{2,}/g, ' ')
      .label('Model')
      .optional()
      .description('The model of a vehicle'),

    version: Joi.string()
      .trim()
      .replace(/\s{2,}/g, ' ')
      .label('Version')
      .optional()
      .description('The version of a vehicle')
  }
}

module.exports.DeleteVehicle = {
  params: {
    id: Joi.number()
      .label('id')
      .required()
      .description('The id of a vehicle'),
  }
}
