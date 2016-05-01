'use strict'

const Promise = require('any-promise')
const jwt = require('jsonwebtoken')

exports._jwt = jwt

exports.sign = function sign(payload, key, opts) {
  opts = opts || {}

  return new Promise((resolve, reject) => {
    jwt.sign(payload, key, opts, (err, token) => {
      if (err || !token) return reject(err)
      resolve(token)
    })
  })
}

exports.verify = function verify(token, key, opts)  {
  opts = opts || {}

  return new Promise((resolve, reject) => {
    jwt.verify(token, key, (err, decoded) => {
      if (err) return reject(err)
      resolve(decoded)
    })
  })
}
