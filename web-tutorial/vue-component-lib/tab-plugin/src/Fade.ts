import Base from './Base'
import { TYPE } from './Tab'

class Fade extends Base {
  constructor(el: HTMLElement) {
    super(el, TYPE.FADE)
    this.getMethod(this.setPage)
  }

  private setPage(pageItems: HTMLCollection, curIdx: number) {
    Array.from(pageItems).map((item) => {
      item.className = 'page-item'
    })
    pageItems[curIdx].classList.add('active')
  }
}

export default Fade
