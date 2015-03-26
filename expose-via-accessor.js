"use strict";

var privateObjects = [];

module.exports = {
  expose: function expose(privateObject) {
    privateObjects.push(privateObject);
  },

  via: function via(publicObject) {
    var privateObject = privateObjects.slice(-1)[0];

    return function () {
      var _ref = arguments[0] === undefined ? {} : arguments[0];

      var _ref$overwrite = _ref.overwrite;
      var overwrite = _ref$overwrite === undefined ? false : _ref$overwrite;
      var _ref$transform = _ref.transform;
      var transform = _ref$transform === undefined ? function (x) {
        return x;
      } : _ref$transform;

      return Object.defineProperties(publicObject, Object.keys(privateObject).reduce(function (m, n) {
        if (overwrite || !(n in publicObject)) {
          m[n] = {
            configurable: true,
            enumerable: true,
            get: function () {
              return privateObject[n];
            },
            set: function (x) {
              return privateObject[n] = transform(x);
            }
          };
        }

        return m;
      }, {}));
    };
  }
};