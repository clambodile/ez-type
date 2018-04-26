const ezType = function(value) {
  const preType = typeof value
  if (Array.isArray(value)) {
    return 'array'
  } else if (value !== value) {
    return 'NaN'
  } else if (preType === 'object') {
    return value === null ? 'null' : 'object'
  } else {
    return preType
  }
}

module.exports = ezType