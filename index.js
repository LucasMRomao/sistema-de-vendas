const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

function createWindow () {

  let cadastroUsuariosWindow = null;
  let cadastroProdutosWindow = null;

  const loginWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  ipcMain.on('logar', () => {
    const mainWindow = new BrowserWindow({
      frame: false,
      movable: true,
      webPreferences: {
          preload: path.join(__dirname, 'preload.js')
      }
    })

    mainWindow.loadURL(`file://${__dirname}/sources/screens/principal.html`)
    loginWindow.close()
  })

  ipcMain.on('abrir-cadastro-usuarios', () => {
    if(cadastroUsuariosWindow == null){
      cadastroUsuariosWindow = new BrowserWindow({
        frame: false,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js')
        }
      })
  
      cadastroUsuariosWindow.loadURL(`file://${__dirname}/sources/screens/cadastro-de-usuarios.html`)
  
      cadastroUsuariosWindow.on("closed", () => {
        cadastroUsuariosWindow = null
      })
    }else{
      cadastroUsuariosWindow.show()
    }
  })

  ipcMain.on('abrir-cadastro-produtos', () => {
    if(cadastroProdutosWindow == null){
      cadastroProdutosWindow = new BrowserWindow({
        frame: false,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js')
        }
      })

      cadastroProdutosWindow.loadURL(`file://${__dirname}/sources/screens/cadastro-de-produtos.html`)
  
      cadastroProdutosWindow.on("closed", () => {
        cadastroProdutosWindow = null
      })
    }else{
      cadastroProdutosWindow.show()
    }
  })

  ipcMain.on('fechar-tela-atual', (event) => {
    event.sender.close()
  })

  ipcMain.on('sair-do-sistema', () => {
    app.quit()
  })

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })

  loginWindow.loadFile(`${__dirname}/sources/screens/login.html`)

  loginWindow.once('ready-to-show', () => {
    loginWindow.show()
  })
}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})