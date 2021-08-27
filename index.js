const { app, BrowserWindow, Screen } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    height: 600,
    width: 1000,
    resizable: false
  });
  win.loadFile("./html/homepage.html");
}

app.whenReady().then(() => {
  createWindow();
});
