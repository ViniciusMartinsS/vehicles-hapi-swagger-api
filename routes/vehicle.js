'use strict'

const {
  SelectVehicle,
  CreateVehicle,
  UpdateVehicle,
  DeleteVehicle
 } = require('../schemas')

module.exports.default = [
  {
    method: 'GET',
    path: '/vehicles/{id?}',
    config: {
      handler: '',
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
      handler: '',
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
        handler: '',
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
        handler: '',
        description: 'Delete a specific vehicle by id',
        notes: 'Returns 200 with amount of deleted vehicles',
        tags: [ 'api', 'vehicles' ],
        validate: DeleteVehicle
      }
    }
]
