'use strict'

module.exports.selectHandler = (request, reply, entity) => {
  const { show } = require(`../src/controller/${entity}`)

  return show(request)
    .then(response => response)
    .catch(err => err)
}

module.exports.createHandler = (request, reply, entity) => {
  const { create } = require(`../src/controller/${entity}`)

  return create(request)
    .then(response => response)
    .catch(err => err)
}

module.exports.updateHandler = (request, reply, entity) => {
  const { update } = require(`../src/controller/${entity}`)

  return update(request)
    .then(response => response)
    .catch(err => err)
}

module.exports.removeHandler = (request, reply, entity) => {
  const { remove } = require(`../src/controller/${entity}`)

  return remove(request)
    .then(response => response)
    .catch(err => err)
}
