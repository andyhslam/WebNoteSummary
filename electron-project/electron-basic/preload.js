// 预加载脚本中只能使用渲染进程的相关模块
const { contextBridge, ipcRenderer } = require('electron')
const fs = require('fs')
const path = require('path')

fs.writeFile('C:\\Users\\Andyt\\Desktop\\女士的品格.txt', '万茜', () => {
  console.log('女一号')
})

// 在渲染进程接收主进程传递过来的内容，只能用异步操作去接收
const handleSend = async () => {
  const fallback = await ipcRenderer.invoke('send-event', '女一变女二')
  console.log('fallback', fallback)
  const txtPath = path.join(fallback.desktopPath, '女士的品格.txt')
  fs.writeFile(txtPath, '邢菲', () => {
    console.log(fallback.msg)
  })
}

// contextBridge作为一座桥梁，把主进程的Node模块注入到myApi接口，并且将myApi挂载到渲染进程的全局对象window
contextBridge.exposeInMainWorld('myApi', {
  handleSend,
  platform: process.platform
})