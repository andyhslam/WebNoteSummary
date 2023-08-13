import { initState } from './init.js'

function Vue (options) {
  // 实例化Vue时，就要执行_init方法
  this._init(options)

}

// 在初始化Vue实例时，就已经完成数据劫持
Vue.prototype._init = function (options) {
  var vm = this
  vm.$options = options
  initState(vm)
}

export default Vue