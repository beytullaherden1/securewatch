// ============================================
// Dexter IDS — Electron Main Process
// ============================================
const { app, BrowserWindow, Menu, shell, ipcMain, screen } = require('electron');
const path = require('path');

// Keep a global reference to avoid garbage collection
let mainWindow = null;

// Dev mode flag
const isDev = process.argv.includes('--dev');

function createWindow() {
    // Get primary display dimensions
    const { width: screenW, height: screenH } = screen.getPrimaryDisplay().workAreaSize;

    // Window opens at ~92% width, full work-area height
    const winWidth = Math.round(screenW * 0.92);
    const winHeight = screenH; // full vertical — no vertical shrink

    mainWindow = new BrowserWindow({
        width: winWidth,
        height: winHeight,
        minWidth: Math.round(screenW * 0.80),  // can't shrink below 80% width
        maxHeight: screenH,                     // lock vertical size
        minHeight: screenH,                     // lock vertical size
        x: Math.round((screenW - winWidth) / 2),
        y: 0,
        title: 'Dexter',
        icon: path.join(__dirname, 'build', 'icon.ico'),
        backgroundColor: '#0F0B0A', // matches --bg-dark
        show: false, // show after ready-to-show to avoid flash
        autoHideMenuBar: true, // clean look; Alt reveals menu
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
            spellcheck: false,
        },
    });

    // Load the dashboard
    mainWindow.loadFile(path.join(__dirname, 'dashboard', 'index.html'));

    // Smooth show after content loads (no white flash)
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        if (isDev) {
            mainWindow.webContents.openDevTools({ mode: 'detach' });
        }
    });

    // Open external links in system browser, not inside the app
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// ---- Application Menu ----
function buildMenu() {
    const template = [
        {
            label: 'Dexter',
            submenu: [
                { label: 'About Dexter', role: 'about' },
                { type: 'separator' },
                { label: 'Quit', accelerator: 'CmdOrCtrl+Q', click: () => app.quit() },
            ],
        },
        {
            label: 'View',
            submenu: [
                { label: 'Reload', accelerator: 'CmdOrCtrl+R', role: 'reload' },
                { label: 'Force Reload', accelerator: 'CmdOrCtrl+Shift+R', role: 'forceReload' },
                { label: 'Toggle DevTools', accelerator: 'F12', role: 'toggleDevTools' },
                { type: 'separator' },
                { label: 'Zoom In', accelerator: 'CmdOrCtrl+=', role: 'zoomIn' },
                { label: 'Zoom Out', accelerator: 'CmdOrCtrl+-', role: 'zoomOut' },
                { label: 'Reset Zoom', accelerator: 'CmdOrCtrl+0', role: 'resetZoom' },
                { type: 'separator' },
                { label: 'Fullscreen', accelerator: 'F11', role: 'togglefullscreen' },
            ],
        },
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

// ---- App Lifecycle ----
app.whenReady().then(() => {
    createWindow();
    buildMenu();

    // macOS: re-create window when dock icon clicked
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows are closed (except macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// ---- IPC Handlers (placeholder for future API bridge) ----
// Example: renderer can call window.dexter.getConfig()
ipcMain.handle('dexter:getConfig', () => {
    return {
        version: app.getVersion(),
        isDev,
        platform: process.platform,
    };
});
