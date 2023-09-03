import { eventFormat, stateFormat, bindEvent } from './'

export function useDOM ({ template, state, methods }, DOM) {
  DOM.innerHTML = render(template, state)
  bindEvent(methods)
}

export function render (template, state) {
  template = eventFormat(template)
  template = stateFormat(template, state)
  return template
}

export function update (statePool, key, value) {
  const allElements = document.getElementsByTagName('*')
  let oItem = null
  console.log('statePool2', statePool, key, value)
  statePool.forEach((item) => {
    if (item.state.at(-1) === key) {
      for (let i = 0; i < allElements.length; i++) {
        oItem = allElements[i]
        const _flag = parseInt(oItem?.dataset?.dom || '')
        if (item.flag === _flag) {
          oItem.innerHTML = value
        }
      }
    }
  })
}