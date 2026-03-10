const { app, BrowserWindow, screen, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let alertWindow;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: 260,
    height: 320,
    x: width - 340,
    y: height - 340,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.setAlwaysOnTop(true, 'screen-saver');
  mainWindow.setVisibleOnAllWorkspaces(true);
  mainWindow.setMenu(null);

  mainWindow.on('closed', () => {
    mainWindow = null;
    if (alertWindow) {
      alertWindow.close();
    }
    app.quit();
  });
}

function createAlertWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  alertWindow = new BrowserWindow({
    width: width,
    height: height,
    x: 0,
    y: 0,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    skipTaskbar: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  alertWindow.loadFile(path.join(__dirname, 'alert.html'));

  alertWindow.setAlwaysOnTop(true, 'screen-saver');
  alertWindow.setVisibleOnAllWorkspaces(true);
  alertWindow.setMenu(null);

  alertWindow.on('closed', () => {
    alertWindow = null;
  });
}

ipcMain.on('close-window', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) {
    win.close();
  }
});

ipcMain.on('show-alert', () => {
  if (!alertWindow) {
    createAlertWindow();
  }
  if (alertWindow) {
    alertWindow.show();
    alertWindow.focus();
  }
});

ipcMain.on('hide-alert', () => {
  if (alertWindow) {
    alertWindow.close();
    alertWindow = null;
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  app.quit();
});
