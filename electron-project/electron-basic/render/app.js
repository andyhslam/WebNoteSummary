document.querySelector('#btn').addEventListener('click', () => {
  // 在渲染进程，通过window访问主进程的Node模块；此处的window也可以省略。
  window.myApi.handleSend()
})