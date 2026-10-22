const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    logar : (user) => ipcRenderer.send('logar'),
    setUsuarioLogado: (idUsuario) => ipcRenderer.send('set-usuario-logado', idUsuario),
    getUsuarioLogado: () => ipcRenderer.invoke('get-usuario-logado'),
    setTitle: (title) => ipcRenderer.send('set-title', title),
    fecharSistema: () => ipcRenderer.send('sair-do-sistema'),
    abrirCadastroUsuarios: () => ipcRenderer.send('abrir-cadastro-usuarios'),
    abrirCadastroProdutos: () => ipcRenderer.send('abrir-cadastro-produtos'),
    abrirTelaConfiguracoes: () => ipcRenderer.send('abrir-tela-configuracoes'),
    fecharTelaAtual: () => ipcRenderer.send('fechar-tela-atual')
})