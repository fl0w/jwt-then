/* eslint-env mocha */
'use strict'

const assert = require('assert')
const jwt = require('..')

describe('jwt', function () {
  describe('.sign', function () {
    it('(payload, key)', function () {
      return jwt.sign({ id: 123456 }, 'dev-secret').then(token => {
        assert(typeof token === 'string')
      })
    })
  })

  describe('.verify', function () {
    const token = [
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
      'eyJpZCI6MTIzNDU2LCJpYXQiOjE0NjE0MDYzOTV9',
      'QZge-iFTDWEuOoGtdhwg6e7UzCzuAn831BiAVEzaOU4'
    ].join('.')

    it('(token, key) successfully', function () {
      return jwt.verify(token, 'dev-secret').then(token => {
        assert(token.id === 123456)
      })
    })

    it('(token, key) w/ wrong secret', function () {
      return jwt.verify(token, 'wrong-secret')
        .catch(err => {
          assert(err.name === 'JsonWebTokenError')
        })
    })
  })
})
