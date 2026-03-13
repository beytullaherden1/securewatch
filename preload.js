// ============================================
// Dexter IDS — Preload Script
// Exposes a safe API to the renderer (dashboard)
// ============================================
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('dexter', {
    // App config / info
    getConfig: () => ipcRenderer.invoke('dexter:getConfig'),

    // Platform info for CSS/UI adjustments
    platform: process.platform,

    // Future: IDS API bridge methods will be added here
    // e.g. fetchAlerts, fetchLogs, startIDS, stopIDS
});
