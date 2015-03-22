expose-via-accessor
===================
A simple helper lib that makes it easy to expose the properties of a private object through a public object using ECMAScript 5.1 getter/setter.

Install
-------
```bash
$ npm install expose-via-accessor
```

Usage | [Demo](http://jsbin.com/nehefalizu/2/edit?html,js,console)
-----
```javascript
import {expose, via} from 'expose-via-accessor';

var publicObject = {
      x: 'Public X'
    },

    privateObject = {
      y: 'Private Y'
    };

expose (privateObject)
   via (publicObject)
       ();

console.log(publicObject);
// Object {x: "Public X", y: "Private Y"}
```

API
---
#### expose(privateObject: _Object_): _void_
Indicates the private object to be exposed. Must be used in conjunction with `via`.

#### via(publicObject: _Object_)([options: _Object_]): _void_
First invocation indicates the public object to be used. Second invocation attaches getter-setter pairs onto `publicObject`, each pair pointing to a property on `privateObject`; a config object can be passed in optionally with the following options available:

##### options.overwrite: _boolean_ = false
Whether to attach accessors when there exists properties of the same names on `publicObject` or further up on its prototype chain.

##### options.transform: _Function_ = x => x
Transform the inputs before setters on `publicObject` assign them to corresponding properties on `privateObject`.

######Example
```javascript
var publicObject = {},

    privateObject = {
      answer: null
    };

expose (privateObject)
   via (publicObject)
       ({transform: x => x.reduce((m, n) => m * n)});

publicObject.question = [6, 7];
publicObject.answer = [6, 7];

console.log(publicObject);
// Object {answer: 42, question: [6, 7]}

console.log(privateObject);
// Object {answer: 42}
```

Notice that the transformation only applies to properties that are exposed through the attached accessors.

Changelog
----
See [CHANGELOG.md](https://github.com/gsklee/expose-via-accessor/blob/master/CHANGELOG.md).

License
-------
MIT © G. Kay Lee
