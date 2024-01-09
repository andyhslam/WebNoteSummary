import { TYPE } from './Tab'

abstract class Base {
  private _curIdx: number = 0
  private _el: HTMLElement
  private _tabItems: HTMLCollection
  constructor(el: HTMLElement, type: TYPE) {
    this._el = el
    this._tabItems = this._el.getElementsByClassName('tab-item')
    this.init()
  }

  private init() {
    this.bindEvent()
  }

  private bindEvent() {
    this._el.addEventListener('click', this.setTab.bind(this), false)
  }

  private setTab(e: MouseEvent) {
    const tar = e.target as HTMLElement
    const className = tar.className
    if (className === 'tab-item') {
      /**
       * 事件代理常用的方法
       * 1、把当前项的className还原成tab-item；
       * 2、找到当前的点击项在_tabItems的下标，赋值给_curIdx
       * 3、设置当前项的类名
       */
      this._tabItems[this._curIdx].className = 'tab-item'
      this._curIdx = [].indexOf.call(this._tabItems, tar)
      this._tabItems[this._curIdx].classList.add('active')
    }
  }
}

export default Base
