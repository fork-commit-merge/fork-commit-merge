// Electron - Easy

const { app, BrowserWindow } = require("electron");

function createWindow() {
    // TODO: Create a new BrowserWindow that displays the index.html file
    const newWindow = new BrowserWindow({
        width: 900,
        height: 500
    });

    newWindow.loadFile("index.html");
}

app.on("ready", createWindow);
