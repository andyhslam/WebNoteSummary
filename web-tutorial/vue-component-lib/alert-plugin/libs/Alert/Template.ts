import { IAlertOptions } from './typing'
import './style/index.css'

class Template {
  // 该方法只提供给子类
  protected alertView(options: IAlertOptions) {
    const { headerTitle, alertText } = options
    const oAlert: HTMLElement = document.createElement('div')
    oAlert.className = 'alert'
    oAlert.innerHTML = `
      <div class="inner">
        <header class="alert-header">
          <h1>${headerTitle}</h1>
          <span class="icon">&times;</span>
        </header>
        <div class="alert-wrap">
          <p>${alertText}</p>
        </div>
      </div>
    `
    return oAlert
  }
}

export default Template
