'use strict'

const { defineEntity } = require('../utils')

module.exports.selectHandler = (request, reply) => {
  const entity = defineEntity(request)
  const { show } = require(`../src/controller/${entity}`)

  return show(request)
    .then(response =>
      reply.response(response).code(200)
    )
    .catch(err =>
      reply.response(err).code(400)
    )
}

module.exports.createHandler = (request, reply) => {
  const entity = defineEntity(request)
  const { create } = require(`../src/controller/${entity}`)

  return create(request)
    .then(response =>
      reply.response(response).code(200)
    )
    .catch(err =>
      reply.response(err).code(400)
    )
}

module.exports.updateHandler = (request, reply) => {
  const entity = defineEntity(request)
  const { update } = require(`../src/controller/${entity}`)

  return update(request)
    .then(response =>
      reply.response(response).code(200)
    )
    .catch(err =>
      reply.response(err).code(400)
    )
}

module.exports.removeHandler = (request, reply) => {
  const entity = defineEntity(request)
  const { remove } = require(`../src/controller/${entity}`)

  return remove(request)
    .then(response =>
      reply.response(response).code(200)
    )
    .catch(err =>
      reply.response(err).code(400)
    )
}
