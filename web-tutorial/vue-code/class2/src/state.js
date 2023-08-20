import { observe } from './observer'
import { proxy } from './utils.js'

function initState (vm) {
  const options = vm.$options
  if (options.data) {
    initData(vm)
  }
  if (options.props) {
    initProps(vm)
  }
  if (options.watch) {
    initWatch(vm)
  }
  if (options.methods) {
    initMethods(vm)
  }
  if (options.computed) {
    initComputed(vm)
  }
}

function initData (vm) {
  let data = vm.$options.data
  vm._data = data = typeof data === 'function' ? data.call(vm) : data || {}
  for (let key in data) {
    proxy(vm, '_data', key)
  }
  observe(data)
}
function initProps (vm) { }
function initWatch (vm) { }
function initMethods (vm) { }
function initComputed (vm) { }

export { initState }