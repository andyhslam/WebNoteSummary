import $ from 'jquery'
import Template from './Template'
import { DEFAULT_VALUES, IAlertOptions, UI_COLOR_TYPES } from './typing'

class Alert extends Template {
  private _headerTitle: string
  private _alertText: string
  private _duration: number
  private _oAlert: JQuery<HTMLElement>
  private _oXIcon: JQuery<HTMLElement>
  private _oInner: JQuery<HTMLElement>
  private _oHeaderTitle: JQuery<HTMLElement>
  private _oAlertText: JQuery<HTMLElement>

  // 实例化Alert，就会执行其构造器
  constructor(options: IAlertOptions) {
    // 调用父类的构造器
    super()
    const _options: IAlertOptions = Alert.mergeOptions(options)
    this._headerTitle = _options.headerTitle as string
    this._alertText = _options.alertText as string
    this._duration = _options.duration as number
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
    this._oHeaderTitle = this._oAlert.find('header h1')
    this._oAlertText = this._oAlert.find('.alert-wrap p')
  }

  private static mergeOptions(options: IAlertOptions) {
    const _defaultOptions: IAlertOptions = {
      headerTitle: DEFAULT_VALUES.HEADER_TITLE as string,
      alertText: DEFAULT_VALUES.ALERT_TEXT as string,
      duration: DEFAULT_VALUES.DURATION as number,
    }
    if (!options) {
      return _defaultOptions
    }
    return Object.assign(_defaultOptions, options)
  }

  public static create(options?: IAlertOptions | any) {
    return new Alert(options)
  }

  public show(type?: string, options?: IAlertOptions) {
    if (options) {
      const { headerTitle, alertText, duration } = options
      duration && (this._duration = duration)
      alertText && this._oAlertText.text(alertText)
      headerTitle && this._oHeaderTitle.html(headerTitle)
    }

    let _type: UI_COLOR_TYPES = UI_COLOR_TYPES.PRIMARY
    if (type) {
      for (let k in UI_COLOR_TYPES) {
        if (UI_COLOR_TYPES[k] === type) {
          _type = type as UI_COLOR_TYPES
        }
      }
    }

    this._oAlert.addClass(_type)
    this._oAlert.fadeIn(this._duration)
  }

  public hide() {
    console.log('this', this)
    this._oAlert.fadeOut(this._duration)
  }
}

export default Alert
