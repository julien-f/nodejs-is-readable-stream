# is-readable-stream

[![Build Status](https://img.shields.io/travis/julien-f/nodejs-is-readable-stream/master.svg)](http://travis-ci.org/julien-f/nodejs-is-readable-stream)
[![Dependency Status](https://david-dm.org/julien-f/nodejs-is-readable-stream/status.svg?theme=shields.io)](https://david-dm.org/julien-f/nodejs-is-readable-stream)
[![devDependency Status](https://david-dm.org/julien-f/nodejs-is-readable-stream/dev-status.svg?theme=shields.io)](https://david-dm.org/julien-f/nodejs-is-readable-stream#info=devDependencies)

> Check whether a value is a readable stream.

## Install

Download [manually](https://github.com/julien-f/nodejs-is-readable-stream/releases) or with package-manager.

### [npm package](https://npmjs.org/package/is-readable-stream)

```
> npm install --save is-readable-stream
```

## Example

```javascript
var isReadableStream = require('is-readable-stream');

isReadableStream(null);
// → false

isReadableStream(process.stdout);
// → false

isReadableStream(process.stdin);
// → true
```

## Contributions

Contributions are *very* welcomed, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/julien-f/nodejs-is-readable-stream/issues)
  you've encountered;
- fork and create a pull request.

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
