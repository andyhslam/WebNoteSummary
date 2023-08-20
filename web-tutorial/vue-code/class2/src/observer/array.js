const originArrMethods = Array.prototype,
  newArrMethods = Object.create(originArrMethods)

const ARR_METHODS = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

ARR_METHODS.forEach((method) => {
  newArrMethods[method] = function (...args) {
    const result = originArrMethods[method].apply(this, args),
      ob = this.__ob__

    let newArr
    switch (method) {
      case 'push':
      case 'unshift':
        newArr = args
        break
      case 'splice':
        newArr = args.slice(2)
        break
      default:
        break
    }
    newArr.length && observeArr(newArr)
    return result
  }
})

export { newArrMethods }