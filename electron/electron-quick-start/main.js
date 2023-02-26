const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })
  mainWindow.loadFile('index.html')

  let secondWindow = new BrowserWindow({
    width: 400,
    height: 300,
    parent: mainWindow,
    webPreferences: {
      nodeIntegration: true,
    }
  })
  secondWindow.loadFile('second.html')
})