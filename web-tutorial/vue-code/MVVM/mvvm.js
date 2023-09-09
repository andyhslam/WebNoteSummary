class MVVM {
  constructor(el, data) {
    this.el = document.querySelector(el)
    this._data = data
    this.init()
  }

  init () {
    this.initData()
    this.initDom()
  }

  initDom () {
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
          _this._data[key] = newValue
        },
      })
    }
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
    console.log(this.data)
  }
}