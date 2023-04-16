const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    logar : (user) => ipcRenderer.send('logar'),
    setTitle: (title) => ipcRenderer.send('set-title', title),
    fecharSistema: () => ipcRenderer.send('sair-do-sistema'),
    abrirCadastroUsuarios: () => ipcRenderer.send('abrir-cadastro-usuarios'),
    abrirCadastroProdutos: () => ipcRenderer.send('abrir-cadastro-produtos'),
    fecharTelaAtual: () => ipcRenderer.send('fechar-tela-atual')
})