'use strict'

const {
  SelectVehicle,
  CreateVehicle,
  UpdateVehicle,
  DeleteVehicle
 } = require('../schemas')

 const {
   selectHandler,
   createHandler,
   updateHandler,
   removeHandler
  } = require('./default-handler')

module.exports.vehicles = [
  {
    method: 'GET',
    path: '/vehicles/{id?}',
    config: {
      handler: selectHandler,
      description: 'Querying all vehicle/s',
      notes: 'Returns 200 with vehicles',
      tags: [ 'api', 'vehicles' ],
      validate: SelectVehicle
    }
  },
  {
    method: 'POST',
    path: '/vehicles',
    config: {
      handler: createHandler,
      description: 'Create a Vehicle',
      notes: 'Returns 200 with created vehicle',
      tags: [ 'api', 'vehicles' ],
      validate: CreateVehicle
      }
    },
    {
      method: 'PUT',
      path: '/vehicles/{id}',
      config: {
        handler: updateHandler,
        description: 'Updating a specific vehicle',
        notes: 'Returns 200 with updated vehicle',
        tags: [ 'api', 'vehicles' ],
        validate: UpdateVehicle
      }
    },
    {
      method: 'DELETE',
      path: '/vehicles/{id}',
      config: {
        handler: removeHandler,
        description: 'Delete a specific vehicle by id',
        notes: 'Returns 200 with amount of deleted vehicles',
        tags: [ 'api', 'vehicles' ],
        validate: DeleteVehicle
      }
    }
]
