const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    height: 500,
    width: 1000,
  });

  //win.loadFile("homepage2.html");
  win.loadURL('https://google.com');
}

app.whenReady().then(() => {
  createWindow();
});
