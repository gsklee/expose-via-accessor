"use strict";

var _privateObject;

module.exports = {
  expose: function expose(privateObject) {
    _privateObject = privateObject;
  },

  via: function via(publicObject) {
    return function () {
      var transform = arguments[0] === undefined ? function (x) {
        return x;
      } : arguments[0];

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
    };
  }
};