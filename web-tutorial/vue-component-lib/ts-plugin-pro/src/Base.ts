import { TYPE } from './Tab'

abstract class Base {
  constructor(el: HTMLElement, type: TYPE) {
    console.log(el, type)
  }
}

export default Base
