const fs = require('fs')

fs.writeFile('/Users/Andyt/Desktop/test.txt', 'abc', () => {
  console.log('done.')
})


const { contextBridge } = require('electron')
// contextBridge作为一座桥梁，把主进程的Node模块注入到myApi接口，并且将myApi挂载到渲染进程的全局对象window
contextBridge.exposeInMainWorld('myApi', {
  platform: process.platform
})