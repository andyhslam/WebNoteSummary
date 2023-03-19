const path = require('path')
const { app, BrowserWindow } = require('electron')
const WinState = require('electron-win-state').default
// 获取网站的截图
require('./controller/getSource.js')
require('./controller/alert.js')

const createWindow = () => {
  const winState = new WinState({
    x: 200,
    y: 200,
    defaultWidth: 1000,
    defaultHeight: 800,
  })
  const win = new BrowserWindow({
    // 自定义窗口状态（包括大小和位置）
    ...winState.winOptions,
    show: false,
    webPreferences: {
      // 定义预加载的js脚本
      preload: path.resolve(__dirname, './preload/index.js')
    }
  })

  win.loadURL('http://localhost:5173/')

  win.webContents.openDevTools()

  winState.manage(win)

  // 页面内容加载完之后，再去打开窗口
  win.on('ready-to-show', () => {
    win.show()
  })
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。
// 因此, 通常对应用程序和它们的菜单栏来说应该时刻保持激活状态, 直到用户使用Cmd+Q明确退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})