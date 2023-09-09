/**
 * 1.代理数据与数据劫持
 * 2.初始化DOM
 * 3.初始化视图
 * 4.事件处理函数的绑定
 * 5.改变数据的同时，改变DOM
 */

class Nicola {
  constructor(options) {
    const { el, data, methods } = options
    this.el = document.querySelector(el)
    this.data = data
    this.methods = methods
    this.showPool = new Map()
    this.eventPool = new Map()

    this.init()
  }

  init () {
    this.initData()
  }

  initData () {
    for (let key in this.data) {
      Object.defineProperty(this, key, {
        get () {
          console.log('访问：', key, this.data[key])
          return this.data[key]
        },
        set (newValue) {
          this.data[key] = newValue
        },
      })
    }
    console.log(this)
  }
}