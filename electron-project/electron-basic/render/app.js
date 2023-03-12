document.querySelector('#send-btn').addEventListener('click', () => {
  // 在渲染进程，通过window访问主进程的Node模块；此处的window也可以省略。
  window.myApi.handleSend()
})

document.querySelector('#copy-btn').addEventListener('click', () => {
  myApi.copy()
})

document.querySelector('#show-btn').addEventListener('click', () => {
  myApi.show()
})

document.querySelector('#capture-btn').addEventListener('click', async () => {
  const result = await myApi.capture()
  document.querySelector('#img').src = result
})

document.querySelector('#native-image-btn').addEventListener('click', () => {
  myApi.testNativeImage()
})