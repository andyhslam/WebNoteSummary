import { setEl, setType } from './utils'

interface IOptions {
  el: string
  type: TYPE | string
}

export enum TYPE {
  FADE = 'fade',
  SLIDE = 'slide',
}

class Tab {
  private _el: HTMLElement
  private _type: TYPE | string
  constructor(options: IOptions) {
    const { el, type }: IOptions = options
    this._type = setType(type)
    this._el = setEl(el, this._type as TYPE)
  }

  public create() {
    console.log(this._el, this._type)
  }
}

export default Tab
