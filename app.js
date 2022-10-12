const {app, BrowserWindow} = require('electron')
    const url = require("url");
    const path = require("path");

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        resizable: false,
        
        webPreferences: {
          nodeIntegration: true
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/file-generator-cnab240/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      // mainWindow.webContents.openDevTools()

      // Remove o menu
      mainWindow.removeMenu();


      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })