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

contextBridge.exposeInMainWorld('myApi', {
  sendUrl,
  alert,
  openWindow,
})