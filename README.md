# ez-type

Easily get a description of the type of a piece of data

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
```