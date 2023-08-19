import { ARR_METHODS } from './config.js'
import observeArr from './observeArr.js'

var originArrMethods = Array.prototype
// 创建的新对象arrMethods的原型是originArrMethods
var arrMethods = Object.create(originArrMethods)

ARR_METHODS.forEach(function (m) {
  arrMethods[m] = function () {
    // 把类数组arguments变成一个真正的数组args(即参数列表)
    var args = Array.prototype.slice.call(arguments)
    // 执行原数组方法之后，还有其它操作
    var rt = originArrMethods[m].apply(this, args)
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

    newArr.length && observeArr(newArr)
    return rt
  }
})

// 最终得到的arrMethods除了有原型链上的原数组方法，还有新增的7个可以改变原数组的数组方法
export { arrMethods }
