import Base from './Base'
import { TYPE } from './Tab'

class Fade extends Base {
  constructor(el: HTMLElement) {
    super(el, TYPE.FADE)
  }
}

export default Fade
