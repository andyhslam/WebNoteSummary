import { ARR_METHODS } from './config.js'
import observeArr from './observeArr.js'

var originArrMethods = Array.prototype,
  arrMethods = Object.create(originArrMethods)

ARR_METHODS.forEach(function (m) {
  arrMethods[m] = function () {
    // 把类数组arguments变成一个真正的数组args
    var args = Array.prototype.slice.call(arguments),
      rt = originArrMethods[m].apply(this, args)
    console.log('数组新方法', args)

    var newArr
    switch (m) {
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

    newArr && observeArr(newArr)
    return rt
  }
})

export { arrMethods }
