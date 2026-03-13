// ============================================
// SecureWatch — Preload Script
// Exposes a safe API to the renderer (dashboard)
// ============================================
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('securewatch', {
    // App config / info
    getConfig: () => ipcRenderer.invoke('securewatch:getConfig'),

    // Platform info for CSS/UI adjustments
    platform: process.platform,

    // Future: IDS API bridge methods will be added here
    // e.g. fetchAlerts, fetchLogs, startIDS, stopIDS
});
