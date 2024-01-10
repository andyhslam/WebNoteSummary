import Template from './Template'
import { IAlertOptions } from './typing'

class Alert extends Template {
  private _headerTitle: string
  private _alertText: string
  private _oAlert: HTMLElement

  // 实例化Alert，就会执行其构造器
  constructor(options: IAlertOptions) {
    // 调用父类的构造器
    super()
    this._headerTitle = options.headerTitle || 'This is my Alert'
    this._alertText = options.alertText || 'This is my Alert content'
    this.render()
  }

  private render() {
    document.body.appendChild(
      this.alertView({
        headerTitle: this._headerTitle,
        alertText: this._alertText,
      })
    )
    this._oAlert = document.querySelector('.alert') as HTMLElement
  }

  public static create(options: IAlertOptions) {
    return new Alert(options)
  }

  public show(type: string, options: IAlertOptions) {
    this._oAlert.className = 'alert show'
  }
}

export default Alert
