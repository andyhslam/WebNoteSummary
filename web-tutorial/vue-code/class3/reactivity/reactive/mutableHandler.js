import { useReactive } from '.'
import { isEqual, isObject, hasOwnProperty } from "../shared/utils"

const get = createGetter()
const set = createSetter()

function createGetter () {
  return function get (target, key, receiver) {
    // res就是target[key]
    const res = Reflect.get(target, key, receiver)
    console.log('响应式获取：' + target[key])
    if (isObject(res)) {
      return useReactive(res)
    }
    return res
  }
}

function createSetter () {
  return function set (target, key, value, receiver) {
    const isKeyExist = hasOwnProperty(target, key)
    const oldValue = target[key]
    // res是布尔值，表示是否设置成功。
    const res = Reflect.set(target, key, value, receiver)
    if (!isKeyExist) {
      console.log('响应式新增：' + value)
    } else if (!isEqual(value, oldValue)) {
      console.log('响应式修改：' + key + '=' + value)
    }
    return res
  }
}

const mutableHandler = {
  get,
  set
}

export { mutableHandler }