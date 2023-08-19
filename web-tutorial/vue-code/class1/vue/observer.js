import defineReactiveData from './reactive.js'
import { arrMethods } from './array.js'
import observeArr from './observeArr.js'

function Observer (data) {
  if (Array.isArray(data)) {
    // 如果是数组，第一层原型链是新增的7个可以改变原数组的数组方法，第二层原型链是原数组方法。
    data.__proto__ = arrMethods
    // 通过递归调用，把所有数据设置成响应式
    observeArr(data)
  } else {
    // 如果是对象，就给对象上的每个属性添加get和set方法。
    this.walk(data)
  }
}

Observer.prototype.walk = function (data) {
  var keys = Object.keys(data)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
      value = data[key]

    defineReactiveData(data, key, value)
  }
}

export default Observer