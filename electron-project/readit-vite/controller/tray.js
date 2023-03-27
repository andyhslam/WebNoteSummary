const { Tray, Menu } = require('electron')

function createTray (app, win) {
  const tray = new Tray('icon.png')
  tray.setToolTip('我的应用')
  tray.on('click', (e) => {
    if (e.shiftKey) {
      app.quit()
    }
  })

  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: '显示与隐藏',
      click: () => {
        win.isVisible() ? win.hide() : win.show()
      }
    }
  ]))
}

module.exports = createTray