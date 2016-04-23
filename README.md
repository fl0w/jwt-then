# jwt-then

[![Build status][travis-image]][travis-url]

jwt as promised

`$ npm install jwt-then`

## API

Testing on `node 4+`

Implements two methods only, `verify` and `sign`.

### jwt.sign(payload, key, [options])

Sign a token with key, with options defaulting to `{ algorithm: 'HS256' }`.

```js
jwt.sign({ username: 'fl0w' }, 'secret-dev-key')
  .then(token => console.log(token))
```

Marty McFly's: ES7 (or using Present MacFly's babel.js)

```js
const token = await jwt.sign({ username: 'fl0w', 'secret-dev-key'})
console.log(token)
```

### jwt.verify(token, key, [options])

Verify a token, with options defaulting to `{ algorithm: 'HS256' }`.

```js
jwt.verify(token, 'secret-dev-key')
  .then(token => console.log(token))
```

Marty McFly's: ES7 (or using Present MacFly's babel.js)

```js
const token = await jwt.verify({ username: 'fl0w', 'secret-dev-key'})
console.log(token)
```

[travis-image]: https://img.shields.io/travis/fl0w/jwt-then.svg?style=flat-square
[travis-url]: https://travis-ci.org/fl0w/jwt-then
