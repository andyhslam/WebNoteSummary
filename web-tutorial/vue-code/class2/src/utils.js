function proxy (vm, target, key) {
  return new Proxy(vm, {
    get () {
      return vm[target][key]
    },
    set (newValue) {
      if (vm[target][key] === newValue) return
      vm[target][key] = newValue
    },
  })
}


function isObject (value) {
  return typeof value === 'object' && value !== null
}

function isArray (value) {
  return Array.isArray(value)
}

function setConstantProperty (data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: false,
    configurable: false,
    value
  })
}

export {
  proxy,
  isObject,
  isArray,
  setConstantProperty
}