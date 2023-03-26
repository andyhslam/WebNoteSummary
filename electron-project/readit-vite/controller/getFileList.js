const { ipcMain } = require('electron')
const fs = require('fs')
const { readdir } = require('fs/promises')
const path = require('path')

// 获取主进程的文件：方式一
// ipcMain.handle('on-get-files-event', (e, arg) => {
//   const files = fs.readdirSync(path.resolve(__dirname, '../public/uploads/'))
//   return files
// })

// 获取主进程的文件：方式二
ipcMain.handle('on-get-files-event', async (e, arg) => {
  const files = await readdir(path.resolve(__dirname, '../public/uploads/'))
  return files
})