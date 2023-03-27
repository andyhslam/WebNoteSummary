const { contextBridge, ipcRenderer } = require('electron')

const sendUrl = async (url) => {
  const result = await ipcRenderer.invoke('on-url-event', url)
  return result
}

const alert = (msg) => {
  ipcRenderer.invoke('on-alert-event', msg)
}

const openWindow = (url) => {
  ipcRenderer.invoke('on-open-window-event', url)
}

const getFileList = async () => {
  const fileList = await ipcRenderer.invoke('on-get-files-event')
  return fileList
}

const openDialog = () => {
  ipcRenderer.send('on-open-dialog-event')
}

const onRendererEvent = (cb) => {
  ipcRenderer.on('on-renderer-event', (e, msg) => {
    if (msg === 'add') {
      cb()
    }
  })
}

contextBridge.exposeInMainWorld('myApi', {
  sendUrl,
  alert,
  openWindow,
  getFileList,
  openDialog,
  onRendererEvent,
})