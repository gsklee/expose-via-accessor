var privateObjects = [];

export default {
  expose(privateObject) {
    privateObjects.push(privateObject);
  },

  via(publicObject) {
    const privateObject = privateObjects.slice(-1)[0];

    return ({
      overwrite = false,
      transform = x => x
    } = {}) => {
      return Object.defineProperties(publicObject, Object.keys(privateObject)
                                                         .reduce((m, n) => {
                                                           if (overwrite || !(n in publicObject)) {
                                                             m[n] = {
                                                               configurable: true,
                                                               enumerable: true,
                                                               get: () => privateObject[n],
                                                               set: x => privateObject[n] = transform(x)
                                                             };
                                                           }

                                                           return m;
                                                         }, {}));
    };
  }
};
