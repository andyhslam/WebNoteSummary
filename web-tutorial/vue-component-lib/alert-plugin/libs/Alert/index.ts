import { IAlertOptions } from './typing'

class Alert {
  private _headerTitle: string
  private _alertText: string

  constructor(options: IAlertOptions) {
    this._headerTitle = options.headerTitle || 'This is my Alert'
    this._alertText = options.alertText || 'This is my Alert content'
  }

  public static create(options: IAlertOptions) {
    return new Alert(options)
  }

  public show(type: string, options: IAlertOptions) {
    console.log(type, options)
  }
}

export default Alert
