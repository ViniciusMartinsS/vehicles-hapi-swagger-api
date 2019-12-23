'use strict'

const REGEX = /^\/(.+)\/.+/i

module.exports.defineEntity = request => {
  return request &&
    request.route &&
    request.path &&
    request.route.path.replace(REGEX, '$1') ||
    null
}
