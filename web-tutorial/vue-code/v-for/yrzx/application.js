import { compileTemplate } from './compile'

const domNodePool = []

export function creatApp (options) {
  for (const option in options) {
    switch (option) {
      case 'components':
        initComponent(options[option])
        break
      default:
        break
    }
  }
  return {
    mount
  }
}

function initComponent (components) {
  for (const component of components) {
    const [template, state] = component()
    const node = compileTemplate(template, state)
    domNodePool.push(node)
  }
}

function mount (el) {
  const app = document.querySelector(el)
  const oFrag = document.createDocumentFragment()
  domNodePool.forEach(node => {
    oFrag.appendChild(node)
  })
  app.appendChild(oFrag)
}