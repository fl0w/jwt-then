'use strict'
const jwt = require('jsonwebtoken')

exports._jwt = jwt

exports.sign = (payload, key, opts) => {
  opts = opts || {}
  return new Promise((resolve, reject) => {
    jwt.sign(payload, key, opts, (err, token) => {
      if (err || !token) return reject(err)
      resolve(token)
    })
  })
}

exports.verify = (token, key, opts) => {
  opts = opts || {}
  return new Promise((resolve, reject) => {
    jwt.verify(token, key, opts, (err, verified) => {
      if (err) return reject(err)
      resolve(verified)
    })
  })
}
