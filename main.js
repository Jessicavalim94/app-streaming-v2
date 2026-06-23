const { app, BrowserWindow } = require("electron")
const path = require('path');

// Caminho do ícone
const iconPath = path.join(__dirname, 'icone', 'logo.png');

function criarJanela() {
    const janela = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: iconPath,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    janela.loadFile("public/login.html")
}

app.whenReady().then(() => {
  criarJanela()
  // Define o ícone da barra de tarefas (Windows)
  if (process.platform === 'win32') {
    app.setAppUserModelId('com.seu-app.streaming')
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    criarJanela()
  }
})