function isObject (value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

function isArray (value) {
  return Array.isArray(value)
}

export { isObject, isArray }