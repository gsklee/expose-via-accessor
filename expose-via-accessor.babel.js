var _privateObject;

export default {
  expose(privateObject) {
    _privateObject = privateObject;
  },

  via(publicObject) {
    return ({
      overwrite = false,
      transform = x => x
    } = {}) => {
      return Object.defineProperties(publicObject, Object.keys(_privateObject)
                                                         .reduce((m, n) => {
                                                           if (overwrite || !(n in publicObject)) {
                                                             m[n] = {
                                                               configurable: true,
                                                               enumerable: true,
                                                               get: () => _privateObject[n],
                                                               set: x => _privateObject[n] = transform(x)
                                                             };
                                                           }

                                                           return m;
                                                         }, {}));
    };
  }
};
