// Electron - Easy

const { app, BrowserWindow } = require("electron");

function createWindow() {
    // TODO: Create a new BrowserWindow that displays the index.html file
        const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    mainWindow.loadFile('index.html');
}

app.on("ready", createWindow);
