const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    logar : (user) => ipcRenderer.send('logar'),
    setTitle: (title) => ipcRenderer.send('set-title', title),
    fecharSistema: () => ipcRenderer.send('sair-do-sistema')
})