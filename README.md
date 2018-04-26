# ez-type

Easily determine type.

## Usage

```javascript
const ezType = require('ez-type')
ezType({}) //"object"
ezType([]) //"array"
ezType(null) //"null"
ezType(undefined) //"undefined"
ezType(NaN) //"NaN"
ezType(5)  //"number"
ezType("hewwo") //"string"

//avoid common type pitfalls
typeof [] //"object"
typeof null //"object"
typeof NaN //"number"
```