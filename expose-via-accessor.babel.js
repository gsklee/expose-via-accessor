var _privateObject;

export default {expose, via} = {
  expose(privateObject) {
    _privateObject = privateObject;
  },

  via(publicObject, transform = x => x) {
    return Object.defineProperties(publicObject, Object.keys(_privateObject)
                                                       .reduce((m, n) => {
                                                         m[n] = {
                                                           configurable: true,
                                                           enumerable: true,
                                                           get: () => _privateObject[n],
                                                           set: x => _privateObject[n] = transform(x)
                                                         };

                                                         return m;
                                                       }, {}));
  }
};
