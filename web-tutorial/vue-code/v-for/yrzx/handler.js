import { createReactive } from "./reactive"
import { isObject } from "./utils"

function createGetter () {
  return function (target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
    if (isObject(res)) {
      return createReactive(res)
    }
    return res
  }
}

function createSetter () {
  return function (target, key, value, receiver) {
    return Reflect.set(target, key, value, receiver)
  }
}

const get = createGetter()

const set = createSetter()

export const proxyHandler = {
  get,
  set
}