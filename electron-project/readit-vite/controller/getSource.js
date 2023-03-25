const { ipcMain, BrowserWindow } = require('electron')

const getSource = (url) => {
  return new Promise((resolve, reject) => {
    const win = new BrowserWindow({
      width: 400,
      height: 400,
      // 窗口不在页面上显示，但是可能已经构建完
      show: false,
      webPreferences: {
        // 窗口只在内存中做事情，不在页面上构建
        offscreen: true,
      }
    })

    win.loadURL(url)
    win.webContents.on('did-finish-load', async () => {
      const title = win.getTitle()
      try {
        // capturePage:截取网页内容的图片
        const image = await win.webContents.capturePage()
        if (image.isEmpty()) {
          resolve({ msg: '无法访问该站点' })
        } else {
          const screenShot = image.toDataURL()
          resolve({ url, title, screenShot })
        }
      } catch (e) {
        reject(e)
      }
    })
  })
}

ipcMain.handle('on-url-event', async (e, url) => {
  const result = await getSource(url)
  return result
})