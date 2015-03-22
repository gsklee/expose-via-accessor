"use strict";

var _privateObject;

module.exports = {
  expose: function expose(privateObject) {
    _privateObject = privateObject;
  },

  via: function via(publicObject) {
    return function () {
      var _ref = arguments[0] === undefined ? {} : arguments[0];

      var _ref$overwrite = _ref.overwrite;
      var overwrite = _ref$overwrite === undefined ? false : _ref$overwrite;
      var _ref$transform = _ref.transform;
      var transform = _ref$transform === undefined ? function (x) {
        return x;
      } : _ref$transform;

      return Object.defineProperties(publicObject, Object.keys(_privateObject).reduce(function (m, n) {
        if (overwrite || !(n in publicObject)) {
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
        }

        return m;
      }, {}));
    };
  }
};