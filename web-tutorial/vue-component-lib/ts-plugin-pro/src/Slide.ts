import Base from './Base'
import { TYPE } from './Tab'

class Slide extends Base {
  constructor(el: HTMLElement) {
    super(el, TYPE.SLIDE)
  }
}

export default Slide
