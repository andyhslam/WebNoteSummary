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
    console.log('template', template)
    console.log('state', state)
  }
}

function mount (el) {
  const app = document.querySelector(el)
}