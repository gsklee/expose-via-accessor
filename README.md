expose-via-accessor
===================
A simple helper lib that makes it easy to expose the properties on a private object through a public object using ECMAScript 5.1 getter/setter.

Install
-------
```bash
$ npm install expose-via-accessor
```

Usage
-----
```javascript
import {expose, via} from 'expose-via-accessor';

var publicObject = {
      x: 'public'
    },
    
    privateObject = {
      y: 'private'
    };

expose (privateObject)
   via (publicObject)();

console.log(publicObject);
// Object {x: "public", y: "private"}
```

API
---
#### expose(_privateObject: Object_): undefined
Indicates the private object to be exposed. Must be used in conjunction with `via`.

#### via(_publicObject: Object_)(_[transformer: any => any]_): undefined
First invocation indicates the public object to be used. Second invocation attaches getter-setter pairs onto `publicObject`, each pair points to a property on `privateObject`; optionally, a transformer can be specified which will be applied before `publicObject`'s setter assign the input to `privateObject`'s properties.

Example:

```javascript
var publicObject = {},
    privateObject = {};

expose (privateObject)
   via (publicObject)(x => x * x);

publicObject.answer = 42;

console.log(publicObject);
// Object {answer: 1764}
```

License
-------
MIT © G. Kay Lee
