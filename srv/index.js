'use-strict'

const inert = require('inert')
const vision = require('vision')

const Hapi = require('hapi')
const HapiSwagger = require('hapi-swagger')

const { vehicles } = require('../routes')

async function main () {
  try {
    const server = new Hapi.Server({ host: 'localhost', port: 8000 })

    await server.register([
      inert,
      vision,
      {
        plugin: HapiSwagger,
        options: {
          info: {
            title: 'API - Manage Vehicles | [ Node JS + MongoDB ]',
            version: '1.0.0'
          }
        }
      }
    ])

    server.route([ ...vehicles ])
    await server.start()

    console.log('Server running on: 8000')
  } catch (err) {
    console.error('An error has occurred', err)
  }
}

main()
