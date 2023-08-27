import { newArrMethods } from "./array.js"
import { isObject, isArray, setConstantProperty } from '../utils.js'

class Observer {
  constructor(data) {
    setConstantProperty(data, '__ob__', this)
    if (isArray(data)) {
      data.__proto__ = newArrMethods
      this.observeArr(data)
    } else {
      this.walk(data)
    }
  }

  walk (data) {
    const keys = Object.keys(data)
    keys.forEach((key) => {
      defineReactive(data, key, data[key])
    })
  }

  observeArr (data) {
    data.forEach((item) => {
      observe(item)
    })
  }
}

function defineReactive (data, key, value) {
  observe(value)
  Object.defineProperty(data, key, {
    get () {
      console.log('响应式获取：' + value)
      return value
    },
    set (newValue) {
      if (value === newValue) return
      console.log('响应式设置：' + key + '=' + newValue)
      observe(newValue)
      value = newValue
    }
  })
}

function observe (data) {
  if (!isObject(data) || data.__ob__) {
    return data
  }
  new Observer(data)
}

export { observe }