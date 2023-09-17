import tpl from './info.tpl'

const oApp = document.querySelector('#app')

const info = tpl({
  name: '姜珮瑶',
  age: 29,
  career: 'actress',
  hobby: 'travel, movie'
})

console.log('info', info)

oApp.innerHTML = info