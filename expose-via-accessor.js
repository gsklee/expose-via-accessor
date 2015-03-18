"use strict";

var _temp;

var _privateObject;

module.exports = (_temp = {
  expose: function expose(privateObject) {
    _privateObject = privateObject;
  },

  via: function via(publicObject) {
    var transform = arguments[1] === undefined ? function (x) {
      return x;
    } : arguments[1];

    return Object.defineProperties(publicObject, Object.keys(_privateObject).reduce(function (m, n) {
      m[n] = {
        configurable: true,
        enumerable: true,
        get: function () {
          return _privateObject[n];
        },
        set: function (x) {
          return _privateObject[n] = transform(x);
        }
      };

      return m;
    }, {}));
  }
}, expose = _temp.expose, via = _temp.via, _temp);