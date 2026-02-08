const { app, BrowserWindow, ipcMain } = require('electron');
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
if (require('electron-squirrel-startup')) {
  app.quit();
}
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
ipcMain.handle("save-json", async (_, data) => {
  const filePath = path.join(app.getPath("userData"), "tableData.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  return filePath;
});

ipcMain.handle("run-python", async (_, jsonPath) => {
  const py = spawn("python", ["-u", "./pythonScripts/configAndFlash.py", jsonPath]);

  py.stdout.on("data", (data) => {
  console.log("[PYTHON]", data.toString());
  });

  py.stderr.on("data", (data) => {
    console.error("[PYTHON ERROR]", data.toString());
  });

  py.on("close", (code) => {
    console.log(`Python process exited with code ${code}`);
  });
});
