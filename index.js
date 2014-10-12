'use strict';

//====================================================================

var isFunction = (function (toS) {
  var ref = toS.call(toS);
  return function isString(val) {
    return toS.call(val) === ref;
  };
})(Object.prototype.toString);

//====================================================================

function isReadableStream(obj) {
  return !!(
    obj &&

    // We can't rely only on `pipe()` because writable streams have
    // such a method due to implementation.
    obj.pipe && obj.read &&
    isFunction(obj.pipe) &&
    isFunction(obj.read) &&

    // Important to detect not readable sockets.
    obj.readable !== false
  );
}
module.exports = isReadableStream;
