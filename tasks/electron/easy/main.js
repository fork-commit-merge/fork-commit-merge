const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    // Create a new BrowserWindow that displays the index.html file
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // Load the index.html file
    mainWindow.loadFile(path.join(__dirname, "index.html"));
}

app.on("ready", createWindow);
