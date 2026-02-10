const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  saveJson: (data) => ipcRenderer.invoke("save-json", data),
  runPython: (jsonPath) => ipcRenderer.invoke("run-python", jsonPath),
  onPythonLog: (callback) =>
    ipcRenderer.on("python-log", (_, msg) => callback(msg))
});