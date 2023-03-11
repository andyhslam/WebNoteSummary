// const fs = require('fs')
// fs.writeFile('/Users/Andyt/Desktop/test.txt', 'abc', () => {
//   console.log('done.')
// })

// 预加载脚本中只能使用渲染进程的相关模块
const { contextBridge, ipcRenderer } = require('electron')

// 在渲染进程接收主进程传递过来的内容，只能用异步操作去接收
const handleSend = async () => {
  const fallback = await ipcRenderer.invoke('send-event', 'kitty')
  console.log('fallback', fallback)
}

// contextBridge作为一座桥梁，把主进程的Node模块注入到myApi接口，并且将myApi挂载到渲染进程的全局对象window
contextBridge.exposeInMainWorld('myApi', {
  handleSend,
  platform: process.platform
})