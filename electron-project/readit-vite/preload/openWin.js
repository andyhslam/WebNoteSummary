const { contextBridge, ipcRenderer } = require('electron')

const closeWindow = () => {
  ipcRenderer.invoke('on-close-window-event')
}

contextBridge.exposeInMainWorld('myApi', {
  closeWindow,
})