import Component from './Component.ts'
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
}

export default Input
