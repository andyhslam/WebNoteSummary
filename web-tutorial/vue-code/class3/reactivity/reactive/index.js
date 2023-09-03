import { isObject } from '../shared/utils'
import { mutableHandler } from './mutableHandler'

export function useReactive (target) {
  return createReactiveObject(target, mutableHandler)
}

function createReactiveObject (target, baseHandler) {
  if (!isObject(target)) return target
  const observer = new Proxy(target, baseHandler)
  return observer
}