const { Menu, dialog } = require('electron')
const fs = require('fs')
const path = require('path')
const got = require('got')
const imageType = require('image-type')
const randomstring = require('randomstring')

const saveas = (srcURL) => {
  if (srcURL) {
    const contextMenu = Menu.buildFromTemplate([
      {
        label: '收藏另存',
        accelerator: 'CommandOrControl+S',
        click: () => {
          got.get(srcURL).then(async (res) => {
            const chunk = Buffer.from(res.rawBody)
            const imgType = imageType(chunk)
            // showSaveDialog调起本地另存的窗口，返回另存的路径
            const { canceled, filePath } = await dialog.showSaveDialog({
              title: '图片另存为',
              defaultPath: path.resolve(__dirname, '../public/uploads/' + randomstring.generate(10) + '.' + imgType.ext)
            })
            if (!canceled) {
              fs.writeFileSync(filePath, chunk)
            }
          }).catch(() => { })
        }
      }
    ])
    contextMenu.popup()
  }
}

module.exports = saveas