class MVVM {
  constructor(el, data) {
    this.el = document.querySelector(el)
    this._data = data
    this.domPool = {}
    this.init()
  }

  init () {
    this.initData()
    this.initDom()
  }

  initDom () {
    this.bindDom(this.el)
    this.bindInput(this.el)
  }

  initData () {
    const _this = this
    this.data = {}
    for (let key in this._data) {
      Object.defineProperty(this.data, key, {
        get () {
          console.log('获取数据：', key, _this._data[key])
          return _this._data[key]
        },
        set (newValue) {
          console.log('设置数据：', key, newValue)
          _this.domPool[key].innerHTML = newValue
          _this._data[key] = newValue
        },
      })
    }
  }

  bindDom (el) {
    const childNodes = el.childNodes
    childNodes.forEach((item) => {
      if (item.nodeType === 3) {
        // .trim()可以去掉换行符
        const _value = item.nodeValue.trim()
        if (_value.length) {
          // 此时正则的子表达式里面的？表示 非贪婪模式
          const reg = /\{\{(.+?)\}\}/
          const _isValid = reg.test(_value)
          if (_isValid) {
            // const _key = reg.exec(_value)[1].trim()
            const _key = _value.match(reg)[1].trim()
            // 找到当前文本的父节点
            this.domPool[_key] = item.parentNode
            item.parentNode.innerText = this.data[_key] || undefined
          }
        }
      }
      item.childNodes?.length && this.bindDom(item)
    })
  }

  bindInput (el) {
    const _allInputs = el.querySelectorAll('input')
    _allInputs.forEach((input) => {
      const _vModel = input.getAttribute('v-model')
      if (_vModel) {
        input.addEventListener('keyup', this.handleInput.bind(this, _vModel, input), false)
      }
    })
  }

  handleInput (key, input) {
    const _value = input.value
    this.data[key] = _value
  }

  setData (key, value) {
    this.data[key] = value
  }
}