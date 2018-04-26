'use strict';

const test = require('tape')
const ezType = require('./ezType.js')

const blurp = [
  ['string', ''], 
  ['number', 0], 
  ['boolean', true], 
  ['object', {}], 
  ['array', []],
  ['undefined', undefined],
  ['null', null],
  ['NaN', NaN]
].forEach(function([name, data]) {
  test(`should call a ${name} a ${name}`, function(t) {
    t.equal(ezType(data), name)
    t.end()
  })
})