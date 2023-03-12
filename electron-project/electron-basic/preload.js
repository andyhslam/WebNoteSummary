// 预加载脚本中只能使用渲染进程的相关模块
const fs = require('fs')
const path = require('path')
const { contextBridge, ipcRenderer, clipboard, desktopCapturer } = require('electron')

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

const copy = () => {
  clipboard.writeText('hello clipboard')
}

const show = () => {
  const text = clipboard.readText()
  console.log('text', text)
}

const capture = async () => {
  const sources = await ipcRenderer.invoke('capture-event')
  for (const source of sources) {
    if (source.name === 'Entire Screen') {
      const str = source.thumbnail.crop({ x: 0, y: 30, width: 1200, height: 1170 })
      const imgSrc = str.toDataURL()
      return imgSrc
    }
  }
}

/**
 * contextBridge：
 * 创建一座安全的、双向的、跨越隔离情境的同步桥梁；只在渲染进程（renderer pocess）中可用。
 * 把主进程的Node模块注入到myApi接口，并且将myApi挂载到渲染进程的全局对象window。
 */
contextBridge.exposeInMainWorld('myApi', {
  platform: process.platform,
  handleSend,
  copy,
  show,
  capture,
})