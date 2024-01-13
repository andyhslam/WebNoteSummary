interface IOptions {
  currentIndex?: number
  data: any[]
  callback?: (newIdx: number) => void | undefined
}

interface IData {
  navItem: string
  pageItem: string
}

class PgTab {
  private _curIdx
  private _data
  private _callback
  private _oNavWrapper: HTMLElement | null = null
  private _oPageWrapper: HTMLElement | null = null

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

  public render() {
    this._oNavWrapper = document.createElement('div')
    this._oPageWrapper = document.createElement('div')
    // 外层的大盒子，外部不需要使用
    const oTabWrapper: HTMLElement = document.createElement('div')

    this._oNavWrapper.className = 'pg-nav'
    this._oPageWrapper.className = 'pg-page'
    oTabWrapper.className = 'pg-tab'

    this._data.forEach((item: IData, index: number) => {
      // _oNavWrapper可能为null，所以在后面加!来断言，确定其存在
      this._oNavWrapper!.innerHTML += `
        <div 
        class="nav-item ${this._curIdx === index ? 'current' : ''}"
        style="width: ${500 / this._data.length}px"
        >${item.navItem}</div>
      `

      this._oPageWrapper!.innerHTML += `
        <div 
        class="page-item ${this._curIdx === index ? 'current' : ''}"
        >${item.pageItem}</div>
      `
    })

    // 此时oTabWrapper还没有进入到真实节点，所以就没有更改dom树
    oTabWrapper.appendChild(this._oNavWrapper)
    oTabWrapper.appendChild(this._oPageWrapper)

    return oTabWrapper
  }
}

// 在驱动里面做事件处理函数的绑定，并且返回新的index

export default PgTab
