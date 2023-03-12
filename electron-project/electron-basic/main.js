const path = require('path')
// 因为electron-win-state没有对nodejs做exports的暴露，所以要在require后面加上default
const WinState = require('electron-win-state').default
const { app, BrowserWindow, ipcMain, dialog, globalShortcut, Menu } = require('electron')
const { mainMenu, contextMenu } = require('./mainMenu.js')

const winState = new WinState({
  x: 200,
  y: 200,
  defaultWidth: 800,
  defaultHeight: 600,
})

const createWindow = () => {
  // electron.BrowserWindow: 创建和控制浏览器窗口
  const win = new BrowserWindow({
    x: 100,
    y: 100,
    width: 1000,
    height: 800,
    show: false,
    // frame: false,
    backgroundColor: '#f4f4f4',
    // 在window系统也没显示右上角的标题栏
    titleBarOverlay: true,
    webPreferences: {
      // 集成node环境
      // nodeIntegration: true,
      // 主进程与渲染进程之间默认是有安全隔离的，这个选项设置为不隔离
      // contextIsolation: false,
      // 主进程与渲染进程隔离，可以通过预加载的方式调用Node模块
      preload: path.resolve(__dirname, './preload.js')
    },
    ...winState.winOptions,
  })
  winState.manage(win)
  // win.loadURL('https://www.electronjs.org/')
  win.loadFile('index.html')

  // webContents是BrowserWindow对象的一个属性，负责渲染和控制网页。
  const wc = win.webContents
  // wc.openDevTools()
  wc.on('did-finish-load', () => {
    // 在主进程监测，渲染进程的页面的所有资源是否加载完毕
    console.log('Content fully loaded')
  })
  wc.on('dom-ready', () => {
    // 在主进程监测，渲染进程的dom节点(即html元素)是否准备完毕
    console.log('DOM Ready')
  })
  wc.on('new-window', (e, url) => {
    // 在主进程监测，渲染进程是否打开新窗口
    // 阻止默认行为：可以阻止打开新窗口
    // e.preventDefault()
    console.log('new window open')
  })

  wc.on('context-menu', (e, params) => {
    // 在主进程监测，渲染进程的右键上下文信息
    // console.log(`Image Url: ${params.srcURL}`)
    // console.log(`Selection can be copied: ${params.editFlags.canCopy}`)
    // 往渲染进程的页面注入一段JS代码
    // wc.executeJavaScript(`alert('${params.selectionText}')`)

    // dialog.showOpenDialog({
    //   buttonLabel: '选择',
    //   defaultPath: app.getPath('desktop'),
    //   properties: ['multiSelections', 'openFile']
    // }).then((result) => {
    //   console.log(result.filePaths)
    // })

    // dialog.showSaveDialog({}).then(result => {
    //   console.log(result.filePath)
    // })

    // const answers = ['Yes', 'No', 'Maybe']
    // dialog.showMessageBox({
    //   title: 'Message Box',
    //   message: 'Please select an option',
    //   detail: 'Message details.',
    //   buttons: answers
    // }).then(({ response }) => {
    //   console.log(`User selected: ${answers[response]}`)
    // })

    // 创建右键菜单
    contextMenu.popup()
  })

  globalShortcut.register('CommandOrControl+Y', () => {
    console.log('User pressed G with a combination key')
    globalShortcut.unregister('CommandOrControl+Y')
  })

  Menu.setApplicationMenu(mainMenu('我的消息窗口', (args) => {
    console.log(args)
  }))

  // 当页面加载完毕，再显示浏览器窗口
  win.on('ready-to-show', () => {
    win.show()
  })
  // 暂时关闭安全警告
  // process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

  // const win2 = new BrowserWindow({
  //   width: 600,
  //   height: 400,
  // 定义父窗口
  //   parent: win,
  // 锁定在主窗口
  //   modal: true,
  // })
  // win2.loadURL('http://jx.1000phone.net/')
}

// 在 browserWindow 失去焦点时触发
app.on('browser-window-blur', (e) => {
  console.log('App blur')
  setTimeout(() => {
    // 关闭应用程序
    app.quit()
  }, 3000)
})

// 在 browserWindow 获得焦点时发出
app.on('browser-window-focus', (e) => {
  console.log('App focused')
})

app.on('window-all-closed', () => {
  console.log('window-all-closed')
  /**
   * 默认情况下，一旦关闭所有窗口，就会直接退出应用；
   * 但是对于MacOS系统，关闭窗口时，不能直接退出应用
   */
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 在应用程序开始关闭窗口之前触发
app.on('before-quit', (e) => {
  console.log('App is quiting')
  // 阻止默认行为：可以阻止应用程序的关闭
  e.preventDefault()
})

app.on('quit', () => {
  console.log('quit')
})

/**
 * 在主进程接收渲染进程传递过来的内容，可以用同步和异步操作去接收。
 * 如果listener返回一个Promise，那么Promise的最终结果就是远程调用的返回值；
 * 否则，监听器的返回值(此处是msg)将被用来作为应答值。
 */
ipcMain.handle('send-event', (event, msg) => {
  const desktopPath = app.getPath('desktop')
  return { msg, desktopPath }
})

app.whenReady().then(() => {
  // 获取主进程的各个应用的路径
  console.log(app.getPath('desktop'))
  console.log(app.getPath('music'))
  console.log(app.getPath('temp'))
  console.log(app.getPath('userData'))
  createWindow()
  // 在MacOS下，当全部窗口关闭，点击dock图标，窗口再次打开。
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})