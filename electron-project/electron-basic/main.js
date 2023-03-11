const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // 主进程与渲染进程不隔离
    }
  })
  // win.loadURL('http://jx.1000phone.net/')
  win.loadFile('index.html')
  // 打开开发者工具
  win.webContents.openDevTools()
  // 暂时关闭安全警告
  // process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
}

app.on('window-all-closed', () => {
  console.log('window-all-closed')
  // 对于 MacOS 系统 -> 关闭窗口时，不能直接退出应用
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('quit', () => {
  console.log('quit')
})

app.whenReady().then(() => {
  createWindow()
  // 在MacOS下，当全部窗口关闭，点击 dock 图标，窗口再次打开。
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})