import { isObject } from './utils'
import { proxyHandler } from './handler'

export function createReactive (data) {
  return createReactiveData(data, proxyHandler)
}

function createReactiveData (data, proxyHandler) {
  if (!isObject(data)) return data
  return new Proxy(data, proxyHandler)
}