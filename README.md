# jwt-then

[![Build status][travis-image]][travis-url][![License][license-image]][license-url]

[jwt](https://github.com/auth0/node-jsonwebtoken) as promised

`$ npm install jwt-then`

## API

Tested for `node 4+` with two implemented methods only, `verify` and `sign`.

Consult [auth0/node-jsonwebtoken#README](https://github.com/auth0/node-jsonwebtoken) for detailed documentation.

### jwt.sign(payload, key, [options])

Sign a token with key, with options defaulting to `{ algorithm: 'HS256' }`.

ES6:

```js
jwt.sign({ username: 'fl0w' }, 'secret-dev-key').then(console.log)
```

ES7:

```js
const token = await jwt.sign({ username: 'fl0w' }, 'secret-dev-key')
console.log(token)
```

### jwt.verify(token, key, [options])

Verify a token, with options defaulting to `{ algorithm: 'HS256' }`.

ES6:

```js
jwt.verify(token, 'secret-dev-key')
  .then(console.log)
```

ES7:

```js
const token = await jwt.verify({ username: 'fl0w' }, 'secret-dev-key')
console.log(token)
```

## Changelog

### 1.0.1 (2018-06-26)
 * Bump release

### 1.0.0 (2018-06-26)
 * Upgrade dependency jsonwebtoken min to 8.3
 * Upgrade devDependencies mocha and standard

#### 0.6.0 (2016-11-22)
 * Removed dependency `any-promise`

#### 0.5.1 (2016-07-06)
 * Passing opts to jsonwebtoken
 * Travis testing fixes

#### 0.4.1
 * Added .editorconfig, because vim goes haywire without it
 * Added standard linter
 * Fixed some weirdness in README

#### 0.4.0
 * Bumped dependency to jsonwebtoken@7 **(major)**

[travis-image]: https://img.shields.io/travis/fl0w/jwt-then.svg?style=flat-square
[travis-url]: https://travis-ci.org/fl0w/jwt-then
[license-image]: http://img.shields.io/npm/l/jwt-then.svg?style=flat-square
[license-url]: LICENSE
