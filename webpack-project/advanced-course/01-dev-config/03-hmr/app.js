import './style.css'
import './input.js'

const button = document.createElement('button')
button.textContent = '添加'
button.addEventListener('click', () => {
  const div = document.createElement('div')
  div.classList.add('square')
  document.body.appendChild(div)
})
document.body.appendChild(button)

// css-loader已经帮助我们做了这个判断的工作，自定义模块才需要做这个判断。
// 只要配置文件的devServer.hot为true，module.hot就为true
if (module.hot) {
  // 实现热替换的原理：当这个文件发生变化，然后进行替换，用websocket和浏览器建立连接。
  module.hot.accept('./input.js', () => {
    // 代码更新的时候，可以在这里做一个函数的自动调用
  })
}