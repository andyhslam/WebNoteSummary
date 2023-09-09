class MVVM {
  constructor(el, data) {
    this.el = document.querySelector(el)
    this._data = data
    this.init()
  }

  init () {
    this.initData()
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
    this.data.age
    this.data['name'] = '奥本海默'
  }
}