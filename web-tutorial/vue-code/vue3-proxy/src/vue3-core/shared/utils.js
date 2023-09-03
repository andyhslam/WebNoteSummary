function isEqual (newValue, oldValue) {
  return newValue === oldValue
}

function isObject (value) {
  return typeof value === 'object' && value !== null
}

function hasOwnProperty (target, key) {
  return Object.prototype.hasOwnProperty.call(target, key)
}

export {
  isEqual,
  isObject,
  hasOwnProperty
}