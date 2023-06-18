import Component from './Component.ts'
import List from './List.ts'
export interface IInputOptions {
  wrapperEl: HTMLElement
  placeholderText: string
  buttonText: string
}

class Input extends Component {
  private options: IInputOptions
  constructor(opts: IInputOptions) {
    super()
    this.options = opts
  }

  public render() {
    const { placeholderText, buttonText } = this.options
    this.options.wrapperEl.innerHTML += Component.inputView(
      placeholderText,
      buttonText
    )
  }

  public bindEvent() {
    const oAddBtn: HTMLElement = document.querySelector(
      '.add-btn'
    ) as HTMLElement
    const oInput: HTMLElement = document.querySelector(
      '.todo-input'
    ) as HTMLElement
    oAddBtn.addEventListener(
      'click',
      this.handleBtnClick.bind(this, oInput),
      false
    )
  }

  private handleBtnClick(inputDom: any) {
    const val: string = inputDom.value.trim()
    if (val.length) {
      List.addItem(val)
      inputDom.value = ''
    }
  }
}

export default Input
