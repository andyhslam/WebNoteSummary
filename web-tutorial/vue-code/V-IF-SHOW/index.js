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
    this.initEvent(this.eventPool)

    console.log(this.showPool, this.eventPool)
  }

  // 1.代理数据与数据劫持
  initData () {
    for (const key in this.data) {
      Object.defineProperty(this, key, {
        get () {
          // console.log('访问：', key, this.data[key])
          return this.data[key]
        },
        set (newValue) {
          // console.log('设置：', key, newValue)
          this.data[key] = newValue
          this.domChange(key, this.showPool)
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
    this.domChange(null, showPool)
  }

  domChange (data, showPool) {
    if (!data) {
      // 初始化的操作
      for (const [k, v] of showPool) {
        switch (v.type) {
          case 'if':
            // 创建一个注释节点来占位
            v.comment = document.createComment('v-if')
            // 如果为false，就把原本的dom元素节点(k)替换成注释的节点(v.comment)
            !v.show && k.parentNode.replaceChild(v.comment, k)
            break
          case 'show':
            !v.show && (k.style.display = 'none')
            break
          default:
            break
        }
      }
      return
    }

    // 5.改变数据的同时，改变DOM：切换按钮的操作
    for (const [k, v] of showPool) {
      if (v.data === data) {
        switch (v.type) {
          case 'if':
            if (v.show) {
              // 如果为true，就要切换为false；也就是隐藏时，把原本的dom元素节点(k)替换成注释的节点(v.comment)
              k.parentNode.replaceChild(v.comment, k)
            } else {
              // 如果为false，就要切换为true；也就是显示时，把注释的节点(v.comment)替换成原本的dom元素节点(k)
              v.comment.parentNode.replaceChild(k, v.comment)
            }
            v.show = !v.show
            break
          case 'show':
            v.show ? k.style.display = 'none' : k.style.display = 'block'
            v.show = !v.show
            break
          default:
            break
        }
      }
    }
  }

  // 4.事件处理函数的绑定
  initEvent (eventPool) {
    for (const [k, v] of eventPool) {
      k.addEventListener('click', v.bind(this), false)
    }
  }

}