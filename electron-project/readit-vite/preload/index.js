const { contextBridge, ipcRenderer } = require('electron')

const sendUrl = async (url) => {
  const result = await ipcRenderer.invoke('on-url-event', url)
  return result
}

contextBridge.exposeInMainWorld('myApi', {
  sendUrl
})