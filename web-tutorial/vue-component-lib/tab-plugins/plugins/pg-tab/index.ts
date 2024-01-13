interface IOptions {
  currentIndex?: number
  data: any[]
  callback?: (newIdx: number) => void | undefined
}

class PgTab {
  private _curIdx
  private _data
  private _callback

  constructor(options: IOptions) {
    this._data = options.data
    this._curIdx = this._checkIndex(options.currentIndex)
    this._callback = options.callback
  }

  private _checkIndex(index: number | undefined): number {
    // 使用位运算将index变成正整数
    const _idx: number = index ? index >>> 0 : 0
    if (_idx >= this._data.length) {
      return 0
    }
    return _idx
  }

  public render() {}
}

// 在驱动里面做事件处理函数的绑定，并且返回新的index

export default PgTab
