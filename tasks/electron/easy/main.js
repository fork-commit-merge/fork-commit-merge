// Electron - Easy

const { app, BrowserWindow } = require("electron");

function createWindow() {
    // TODO: Create a new BrowserWindow that displays the index.html file
    const mainwindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    //Load the index.html file
    mainwindow.loadfile("index.html");

    //Open Devtools in development(optional)
    //mainWindow.webContents.openDevTools();
}

app.on("ready", createWindow);
