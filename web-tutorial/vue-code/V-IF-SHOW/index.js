/**
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
    this.initDom(this.el)
    this.initView(this.showPool)

    console.log(this.showPool, this.eventPool)
  }

  // 1.代理数据与数据劫持
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
  }

  // 2.初始化DOM
  initDom (el) {
    const _childNodes = el.childNodes

    if (!_childNodes.length) {
      return
    }

    _childNodes.forEach((dom) => {
      // 判断是否为元素节点
      if (dom.nodeType === 1) {
        const vIf = dom.getAttribute('v-if')
        const vShow = dom.getAttribute('v-show')
        const vClickEvent = dom.getAttribute('@click')

        if (vIf) {
          this.showPool.set(dom, {
            type: 'if',
            show: this.data[vIf],
            data: vIf
          })
        } else if (vShow) {
          this.showPool.set(dom, {
            type: 'show',
            show: this.data[vShow],
            data: vShow
          })
        }

        if (vClickEvent) {
          this.eventPool.set(dom, this.methods[vClickEvent])
        }
      }
      this.initDom(dom)
    })
  }

  // 3.初始化视图
  initView (showPool) {
    this.domChange(showPool)
  }

  domChange (showPool) {
    for (let [k, v] of showPool) {
      switch (v.type) {
        case 'if':
          // 创建一个注释来占位
          v.comment = document.createComment('v-if')
          // 如果为false，就用注释来替代旧节点
          !v.show && k.parentNode.replaceChild(v.comment, k)
          break
        case 'show':
          !v.show && (k.style.display = 'none')
          break
        default:
          break
      }
    }
  }

}