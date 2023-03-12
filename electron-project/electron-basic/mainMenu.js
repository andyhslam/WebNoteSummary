const { Menu, dialog } = require('electron')

const mainMenu = (args, cb) => {
  return Menu.buildFromTemplate([
    {
      label: 'Electron',
      submenu: [
        { label: 'Item 1' },
        { label: 'Item 2', submenu: [{ label: 'Sub Item 1' }] },
        { label: 'Item 3' },
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { role: 'copy' },
        { role: 'paste' },
      ]
    },
    {
      label: 'Actions',
      submenu: [
        {
          label: 'DevTools',
          role: 'toggleDevTools'
        },
        {
          label: '切换全屏',
          role: 'toggleFullScreen'
        },
        {
          label: 'Greet',
          click: () => {
            const answers = ['Yes', 'No', 'Maybe']
            dialog.showMessageBox({
              title: args,
              message: 'Please select an option',
              detail: 'Message details.',
              buttons: answers
            }).then(({ response }) => {
              console.log(`User selected: ${answers[response]}`)
            })
            cb('hello electron')
          },
          accelerator: 'Shift+Alt+G'
        }
      ]
    }
  ])
}

module.exports = mainMenu