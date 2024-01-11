import $ from 'jquery'
import Template from './Template'
import { IAlertOptions } from './typing'

class Alert extends Template {
  private _headerTitle: string
  private _alertText: string
  private _duration: number
  private _oAlert: JQuery<HTMLElement>
  private _oXIcon: JQuery<HTMLElement>
  private _oInner: JQuery<HTMLElement>

  // 实例化Alert，就会执行其构造器
  constructor(options: IAlertOptions) {
    // 调用父类的构造器
    super()
    this._headerTitle = options.headerTitle || 'This is my Alert'
    this._alertText = options.alertText || 'This is my Alert content'
    this._duration = options.duration || 200
    this.render()
    this.bindEvent()
  }

  private bindEvent() {
    this._oAlert.on('click', this.hide.bind(this))
    this._oXIcon.on('click', this.hide.bind(this))
    // 通过inner元素，阻止事件冒泡
    this._oInner.on('click', (e) => {
      e.stopPropagation()
    })
  }

  private render() {
    document.body.appendChild(
      this.alertView({
        headerTitle: this._headerTitle,
        alertText: this._alertText,
      })
    )
    this._oAlert = $('.alert')
    this._oXIcon = $('.icon')
    this._oInner = $('.inner')
  }

  public static create(options: IAlertOptions) {
    return new Alert(options)
  }

  public show(type: string, options: IAlertOptions) {
    const { headerTitle, alertText, duration } = options
    this._duration = duration || this._duration
    this._oAlert.fadeIn(this._duration)
  }

  public hide() {
    console.log('this', this)
    this._oAlert.fadeOut(this._duration)
  }
}

export default Alert
