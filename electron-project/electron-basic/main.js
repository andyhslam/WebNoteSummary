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
  process.env('ELECTRON_DISABLE_SECURITY_WARNINGS') = 'true'
}

app.whenReady().then(createWindow)