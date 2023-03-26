const { ipcMain, BrowserWindow } = require('electron')
const WinState = require('electron-win-state').default
const path = require('path')

const cssText = `width:80px;height:30px;color:#fff;background-color:cornflowerblue;border-radius:5px;text-align:center;border:none;position:fixed;bottom:50px;right:20px;z-index:1000`

const template = `
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerHTML = '关闭窗口';
  btn.style.cssText = '${cssText}';
  btn.addEventListener('click', () => { myApi.closeWindow() })
  document.body.appendChild(btn);
`
let win = null

ipcMain.handle('on-open-window-event', (e, url) => {
  const winState = new WinState({
    defaultWidth: 1200,
    defaultHeight: 800,
    // 隔离选项：每个窗口不再共享同一个状态，主窗口与子窗口的状态区分开
    electronStoreOptions: {
      name: 'window-state-open'
    }
  })
  win = new BrowserWindow({
    ...winState.winOptions,
    show: false,
    webPreferences: {
      // 定义子窗口(浏览器窗口，即渲染进程)的预加载脚本
      // 创建一个新窗口，产生一个新的渲染进程，有独立的安全沙箱，并且每个渲染进程独有一份preload
      preload: path.resolve(__dirname, '../preload/openWin.js')
    }
  })

  win.on('ready-to-show', () => {
    win.show()
  })

  win.loadURL(url)
  winState.manage(win)
  win.webContents.openDevTools()
  // 把js代码注入到渲染进程(即浏览器)，然后在渲染进程发送事件到主进程
  win.webContents.executeJavaScript(template).catch(() => { })
})

// 一个主进程对应多个渲染进程
ipcMain.handle('on-close-window-event', (e) => {
  win.close()
})

