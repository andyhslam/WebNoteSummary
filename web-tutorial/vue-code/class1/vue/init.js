import proxyData from './proxy.js'
import observe from './observe.js'

function initState (vm) {
  var options = vm.$options

  if (options.data) {
    initData(vm)
  }
}

function initData (vm) {
  var data = vm.$options.data
  vm._data = data = typeof data === 'function' ? data.call(vm) : data || {}

  for (var key in data) {
    proxyData(vm, '_data', key)
  }

  observe(vm._data)
}

export { initState }