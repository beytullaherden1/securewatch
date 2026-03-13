<h1 align="center">🛡️ SecureWatch</h1>

<p align="center">
  <strong>Real-time network security monitoring dashboard built with Electron</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Electron-40.x-47848F?logo=electron&logoColor=white" alt="Electron">
  <img src="https://img.shields.io/badge/Chart.js-4.x-FF6384?logo=chartdotjs&logoColor=white" alt="Chart.js">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License">
</p>

---

## Overview

**SecureWatch** is a cybersecurity dashboard for monitoring network intrusions, analyzing threats in real time, and managing security alerts. Built as a desktop application with Electron, it features a dark interface optimized for SOC (Security Operations Center) workflows and a custom motion design system with cybersecurity-themed easing curves.

> **Note:** This is the frontend dashboard module. Backend IDS engine integration (packet sniffer, ML model, REST API) is on the roadmap.

---

## Features

- **4-Page Dashboard** — Overview, Live Alerts, System Status, System Logs
- **20+ Realistic Alert Types** — Port Scan, SQL Injection, Ransomware C2, Zero-Day, Brute Force, ARP Spoofing, XSS, Reverse Shell, and more
- **Interactive Charts** — Threat timeline, attack type distribution, stat-card sparklines (Chart.js)
- **Smart Filtering** — Multi-select severity, service, and log level filters with custom dropdown components
- **Global Search** — Search across alerts by IP, type, protocol, or any keyword
- **Alert Detail Modal** — Full alert inspection with raw JSON data and one-click export
- **Export** — Download alerts and logs as JSON
- **System Status** — Component health monitoring (Network Sniffer, Database, API, ML Model, Analytics, Rule Engine)
- **System Resources** — CPU, Memory, Disk, Network I/O progress bars
- **Pagination** — Paginated views for both alerts and logs
- **Responsive Design** — Breakpoints at 1200px and 768px with collapsible sidebar
- **Motion Design System** — 5 custom cubic-bezier easing curves with consistent animation language
- **Desktop App** — Electron packaging with NSIS installer and near-fullscreen window

---

## Screenshots

> Place screenshots in a `screenshots/` folder and reference them here:
> `![Overview](screenshots/overview.png)`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Desktop Shell | Electron 40.x |
| Frontend | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| Charts | Chart.js 4.x |
| Icons | Font Awesome 6.4, Bootstrap Icons 1.13 |
| Font | Exo 2 (Google Fonts) |
| Build | electron-builder (NSIS) |
| Design System | CSS custom properties + motion easing curves |

---

## Project Structure

```
securewatch/
├── main.js                 # Electron main process
├── preload.js              # Secure IPC bridge (contextBridge)
├── package.json            # Dependencies & electron-builder config
├── build/
│   └── icon.ico            # App icon (multi-size)
└── dashboard/
    ├── index.html          # Single-page app (4 views)
    ├── css/
    │   ├── style.css       # Main stylesheet (~2400 lines)
    │   └── responsive.css  # Media query breakpoints
    ├── js/
    │   └── app.js          # Application logic (~1200 lines)
    └── images/
        └── logo.png        # Fallback logo asset
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm 9+

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/securewatch.git
cd securewatch

npm install

# Run in development mode
npm run dev
```

### Build Desktop App

```bash
# Build Windows installer (.exe)
npm run dist

# Output: dist/SecureWatch Setup 1.0.0.exe
```

---

## Motion Design System

The dashboard uses a custom motion system inspired by cybersecurity concepts:

| Curve | CSS Variable | Character |
|-------|-------------|-----------|
| Scan | `--ease-scan` | Scanner sweep — fast pickup, smooth settle |
| Lock | `--ease-lock` | Security lock — deliberate, final engagement |
| Alert | `--ease-alert` | Threat alarm — instant sharp response |
| Pulse | `--ease-pulse` | Heartbeat — alive tension, micro-overshoot |
| Fade | `--ease-fade` | Stealth — symmetric, non-distracting |

All transitions reference these variables — zero hardcoded timing functions.

---

## Roadmap

- [ ] Backend API integration (FastAPI + WebSocket)
- [ ] Real-time packet capture via Scapy/Suricata
- [ ] ML anomaly detection model
- [ ] Database persistence (PostgreSQL)
- [ ] Auto-update mechanism
- [ ] Dark/light theme toggle
- [ ] System tray notifications
- [ ] User authentication & roles

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
