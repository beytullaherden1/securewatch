// ============================================
// SecureWatch — Mock Alert Data
// ============================================
const mockAlerts = [
    {
        id: 1, severity: 'critical', type: 'Port Scan', sourceIp: '192.168.1.45', destIp: '192.168.1.1',
        protocol: 'TCP', port: 'Multiple', timestamp: '2024-11-13 14:23:45',
        details: { description: 'Sequential port scanning detected across 1024+ ports from a single source within 45 seconds.', portsScanned: '22, 80, 443, 8080, 3306, 5432', packetsCount: 247, duration: '45 seconds',
            rawJson: { event_id: 'EVT-001', timestamp: '2024-11-13T14:23:45.234Z', source_ip: '192.168.1.45', destination_ip: '192.168.1.1', protocol: 'TCP', alert_type: 'port_scan', severity: 'critical', confidence: 0.95 } }
    },
    {
        id: 2, severity: 'high', type: 'ARP Spoofing', sourceIp: '10.0.0.23', destIp: '10.0.0.1',
        protocol: 'ARP', port: '-', timestamp: '2024-11-13 14:18:12',
        details: { description: 'ARP reply received with MAC address mismatch — possible man-in-the-middle preparation.', originalMac: 'aa:bb:cc:dd:ee:ff', spoofedMac: '11:22:33:44:55:66', interface: 'eth0',
            rawJson: { event_id: 'EVT-002', timestamp: '2024-11-13T14:18:12.891Z', source_ip: '10.0.0.23', alert_type: 'arp_spoof', severity: 'high', confidence: 0.89 } }
    },
    {
        id: 3, severity: 'high', type: 'MITM Detected', sourceIp: '172.16.0.88', destIp: '172.16.0.1',
        protocol: 'TCP', port: '443', timestamp: '2024-11-13 14:05:33',
        details: { description: 'SSL certificate mismatch during TLS handshake — potential man-in-the-middle interception.', 
            rawJson: { event_id: 'EVT-003', timestamp: '2024-11-13T14:05:33.012Z', source_ip: '172.16.0.88', destination_ip: '172.16.0.1', protocol: 'TCP', port: 443, alert_type: 'mitm', severity: 'high', confidence: 0.92 } }
    },
    {
        id: 4, severity: 'medium', type: 'DNS Tunneling', sourceIp: '203.0.113.42', destIp: '192.168.1.100',
        protocol: 'UDP', port: '53', timestamp: '2024-11-13 13:47:21',
        details: { description: 'Abnormally long DNS queries detected — possible data exfiltration via DNS tunneling.',
            rawJson: { event_id: 'EVT-004', timestamp: '2024-11-13T13:47:21.445Z', source_ip: '203.0.113.42', destination_ip: '192.168.1.100', protocol: 'UDP', port: 53, alert_type: 'dns_tunnel', severity: 'medium', confidence: 0.78 } }
    },
    {
        id: 5, severity: 'medium', type: 'High Packet Rate', sourceIp: '198.51.100.7', destIp: '192.168.1.50',
        protocol: 'TCP', port: '80', timestamp: '2024-11-13 13:32:15',
        details: { description: 'Packet rate exceeded threshold (5000 pkt/s) — possible volumetric attack or misconfigured service.',
            rawJson: { event_id: 'EVT-005', timestamp: '2024-11-13T13:32:15.678Z', source_ip: '198.51.100.7', destination_ip: '192.168.1.50', protocol: 'TCP', port: 80, alert_type: 'high_packet_rate', severity: 'medium', confidence: 0.74 } }
    },
    {
        id: 6, severity: 'low', type: 'Config Change', sourceIp: '127.0.0.1', destIp: '127.0.0.1',
        protocol: '-', port: '-', timestamp: '2024-11-13 12:15:08',
        details: { description: 'Firewall rule set updated by admin — 3 rules added, 1 removed.',
            rawJson: { event_id: 'EVT-006', timestamp: '2024-11-13T12:15:08.901Z', source_ip: '127.0.0.1', alert_type: 'config_change', severity: 'low', confidence: 1.0 } }
    },
    {
        id: 7, severity: 'critical', type: 'SQL Injection', sourceIp: '45.33.32.156', destIp: '192.168.1.10',
        protocol: 'TCP', port: '3306', timestamp: '2024-11-13 11:58:42',
        details: { description: 'Malicious SQL payload detected in HTTP POST body targeting login endpoint.',
            rawJson: { event_id: 'EVT-007', timestamp: '2024-11-13T11:58:42.123Z', source_ip: '45.33.32.156', destination_ip: '192.168.1.10', protocol: 'TCP', port: 3306, alert_type: 'sql_injection', severity: 'critical', confidence: 0.97 } }
    },
    {
        id: 8, severity: 'high', type: 'Brute Force', sourceIp: '185.220.101.34', destIp: '192.168.1.5',
        protocol: 'TCP', port: '22', timestamp: '2024-11-13 11:45:19',
        details: { description: '847 failed SSH login attempts in 10 minutes from single IP — brute force attack.',
            rawJson: { event_id: 'EVT-008', timestamp: '2024-11-13T11:45:19.567Z', source_ip: '185.220.101.34', destination_ip: '192.168.1.5', protocol: 'TCP', port: 22, alert_type: 'brute_force', severity: 'high', confidence: 0.96 } }
    },
    {
        id: 9, severity: 'critical', type: 'Ransomware C2', sourceIp: '192.168.1.87', destIp: '91.215.85.121',
        protocol: 'TCP', port: '8443', timestamp: '2024-11-13 11:30:05',
        details: { description: 'Outbound connection to known ransomware command-and-control server detected.',
            rawJson: { event_id: 'EVT-009', timestamp: '2024-11-13T11:30:05.234Z', source_ip: '192.168.1.87', destination_ip: '91.215.85.121', protocol: 'TCP', port: 8443, alert_type: 'c2_communication', severity: 'critical', confidence: 0.99 } }
    },
    {
        id: 10, severity: 'medium', type: 'ICMP Flood', sourceIp: '10.0.0.55', destIp: '192.168.1.1',
        protocol: 'ICMP', port: '-', timestamp: '2024-11-13 11:12:33',
        details: { description: 'ICMP echo request flood detected — 12,000 packets/sec targeting gateway.',
            rawJson: { event_id: 'EVT-010', timestamp: '2024-11-13T11:12:33.891Z', source_ip: '10.0.0.55', destination_ip: '192.168.1.1', protocol: 'ICMP', alert_type: 'icmp_flood', severity: 'medium', confidence: 0.82 } }
    },
    {
        id: 11, severity: 'high', type: 'XSS Attempt', sourceIp: '203.0.113.91', destIp: '192.168.1.10',
        protocol: 'TCP', port: '80', timestamp: '2024-11-13 10:55:17',
        details: { description: 'Reflected XSS payload detected in URL query parameter on web application.',
            rawJson: { event_id: 'EVT-011', timestamp: '2024-11-13T10:55:17.345Z', source_ip: '203.0.113.91', destination_ip: '192.168.1.10', protocol: 'TCP', port: 80, alert_type: 'xss', severity: 'high', confidence: 0.88 } }
    },
    {
        id: 12, severity: 'low', type: 'New Device', sourceIp: '192.168.1.201', destIp: '192.168.1.1',
        protocol: 'DHCP', port: '67', timestamp: '2024-11-13 10:40:09',
        details: { description: 'New device joined network via DHCP — MAC: f4:5c:89:a2:b3:c7, hostname: DESKTOP-X7K2.',
            rawJson: { event_id: 'EVT-012', timestamp: '2024-11-13T10:40:09.678Z', source_ip: '192.168.1.201', alert_type: 'new_device', severity: 'low', confidence: 1.0 } }
    },
    {
        id: 13, severity: 'critical', type: 'Data Exfiltration', sourceIp: '192.168.1.30', destIp: '198.51.100.44',
        protocol: 'TCP', port: '443', timestamp: '2024-11-13 10:22:51',
        details: { description: 'Large outbound data transfer (2.3 GB) to external IP over encrypted channel — anomaly score 0.96.',
            rawJson: { event_id: 'EVT-013', timestamp: '2024-11-13T10:22:51.012Z', source_ip: '192.168.1.30', destination_ip: '198.51.100.44', protocol: 'TCP', port: 443, alert_type: 'data_exfiltration', severity: 'critical', confidence: 0.96 } }
    },
    {
        id: 14, severity: 'medium', type: 'SYN Flood', sourceIp: '45.76.134.89', destIp: '192.168.1.10',
        protocol: 'TCP', port: '80', timestamp: '2024-11-13 10:05:38',
        details: { description: 'TCP SYN flood detected — 8,500 half-open connections in 30 seconds.',
            rawJson: { event_id: 'EVT-014', timestamp: '2024-11-13T10:05:38.456Z', source_ip: '45.76.134.89', destination_ip: '192.168.1.10', protocol: 'TCP', port: 80, alert_type: 'syn_flood', severity: 'medium', confidence: 0.85 } }
    },
    {
        id: 15, severity: 'high', type: 'Privilege Escalation', sourceIp: '192.168.1.15', destIp: '192.168.1.5',
        protocol: 'TCP', port: '445', timestamp: '2024-11-13 09:48:22',
        details: { description: 'SMB exploit attempt detected — EternalBlue signature matched (CVE-2017-0144).',
            rawJson: { event_id: 'EVT-015', timestamp: '2024-11-13T09:48:22.789Z', source_ip: '192.168.1.15', destination_ip: '192.168.1.5', protocol: 'TCP', port: 445, alert_type: 'privilege_escalation', severity: 'high', confidence: 0.93 } }
    },
    {
        id: 16, severity: 'low', type: 'Policy Violation', sourceIp: '192.168.1.67', destIp: '104.16.85.20',
        protocol: 'TCP', port: '443', timestamp: '2024-11-13 09:30:11',
        details: { description: 'Access to blocked category (gambling) detected from internal host.',
            rawJson: { event_id: 'EVT-016', timestamp: '2024-11-13T09:30:11.234Z', source_ip: '192.168.1.67', destination_ip: '104.16.85.20', protocol: 'TCP', port: 443, alert_type: 'policy_violation', severity: 'low', confidence: 1.0 } }
    },
    {
        id: 17, severity: 'medium', type: 'Suspicious User-Agent', sourceIp: '185.156.73.22', destIp: '192.168.1.10',
        protocol: 'TCP', port: '80', timestamp: '2024-11-13 09:15:44',
        details: { description: 'HTTP request with known malicious user-agent string "python-requests/2.28 (bot-scanner)".',
            rawJson: { event_id: 'EVT-017', timestamp: '2024-11-13T09:15:44.567Z', source_ip: '185.156.73.22', destination_ip: '192.168.1.10', protocol: 'TCP', port: 80, alert_type: 'suspicious_ua', severity: 'medium', confidence: 0.71 } }
    },
    {
        id: 18, severity: 'high', type: 'Reverse Shell', sourceIp: '192.168.1.42', destIp: '23.94.168.5',
        protocol: 'TCP', port: '4444', timestamp: '2024-11-13 08:58:30',
        details: { description: 'Outbound TCP connection on port 4444 with shell-like interactive traffic pattern.',
            rawJson: { event_id: 'EVT-018', timestamp: '2024-11-13T08:58:30.891Z', source_ip: '192.168.1.42', destination_ip: '23.94.168.5', protocol: 'TCP', port: 4444, alert_type: 'reverse_shell', severity: 'high', confidence: 0.94 } }
    },
    {
        id: 19, severity: 'critical', type: 'Zero-Day Exploit', sourceIp: '103.224.182.7', destIp: '192.168.1.10',
        protocol: 'TCP', port: '443', timestamp: '2024-11-13 08:40:15',
        details: { description: 'Unknown exploit payload matched heuristic signatures — buffer overflow in web server.',
            rawJson: { event_id: 'EVT-019', timestamp: '2024-11-13T08:40:15.123Z', source_ip: '103.224.182.7', destination_ip: '192.168.1.10', protocol: 'TCP', port: 443, alert_type: 'zero_day', severity: 'critical', confidence: 0.91 } }
    },
    {
        id: 20, severity: 'low', type: 'Cert Expiry Warning', sourceIp: '192.168.1.10', destIp: '-',
        protocol: '-', port: '443', timestamp: '2024-11-13 08:00:00',
        details: { description: 'TLS certificate for *.internal.local expires in 7 days — renewal required.',
            rawJson: { event_id: 'EVT-020', timestamp: '2024-11-13T08:00:00.000Z', source_ip: '192.168.1.10', alert_type: 'cert_expiry', severity: 'low', confidence: 1.0 } }
    }
];

// ====================================
// Render Alerts Table from mockAlerts
// ====================================
function renderAlertsTable() {
    const tbody = document.getElementById('alerts-tbody');
    if (!tbody) return;
    const severityLabel = { critical: 'Critical', high: 'High', medium: 'Medium', low: 'Info' };
    tbody.innerHTML = mockAlerts.map(a => `
        <tr class="alert-row ${a.severity}" data-alert-id="${a.id}">
            <td><span class="severity-badge ${a.severity}"><i class="fas fa-circle"></i> ${severityLabel[a.severity] || a.severity}</span></td>
            <td>${a.type}</td>
            <td class="mono">${a.sourceIp}</td>
            <td class="mono">${a.destIp}</td>
            <td>${a.protocol}</td>
            <td class="mono">${a.port}</td>
            <td class="timestamp">${a.timestamp}</td>
            <td><button class="btn-view" onclick="viewAlertDetails(${a.id})"><i class="fas fa-eye"></i></button></td>
        </tr>
    `).join('');
}

// ====================================
// Navigation
// ====================================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Get page id
            const pageId = item.dataset.page;
            
            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            const targetPage = document.getElementById(`${pageId}-page`);
            if (targetPage) {
                targetPage.classList.add('active');
                
                // Update header
                updatePageHeader(pageId);
            }
        });
    });
}

function updatePageHeader(pageId) {
    const pageTitle = document.getElementById('page-title');
    const breadcrumb = document.getElementById('breadcrumb-current');
    
    const titles = {
        overview: 'Overview Dashboard',
        alerts: 'Live Alerts',
        status: 'System Status',
        logs: 'System Logs'
    };
    
    if (pageTitle && breadcrumb) {
        pageTitle.textContent = titles[pageId] || 'Dashboard';
        breadcrumb.textContent = titles[pageId] || 'Dashboard';
    }
}

// ====================================
// Modal Functions
// ====================================
function viewAlertDetails(alertId) {
    const modal = document.getElementById('alert-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    // Find alert data
    const alert = mockAlerts.find(a => a.id === alertId);
    
    if (!alert) {
        modalBody.innerHTML = '<p>Alert details not found.</p>';
    } else {
        modalBody.innerHTML = `
            <div class="modal-alert-details">
                <div class="detail-group">
                    <h4>Alert Information</h4>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <span class="detail-label">Alert Type:</span>
                            <span class="detail-value">${alert.type}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Severity:</span>
                            <span class="severity-badge ${alert.severity}">
                                <i class="fas fa-circle"></i> ${alert.severity.toUpperCase()}
                            </span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Timestamp:</span>
                            <span class="detail-value">${alert.timestamp}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value">${alert.protocol}</span>
                        </div>
                    </div>
                </div>
                
                <div class="detail-group">
                    <h4>Network Information</h4>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <span class="detail-label">Source IP:</span>
                            <span class="detail-value mono">${alert.sourceIp}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Destination IP:</span>
                            <span class="detail-value mono">${alert.destIp}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Port:</span>
                            <span class="detail-value mono">${alert.port}</span>
                        </div>
                    </div>
                </div>
                
                <div class="detail-group">
                    <h4>Description</h4>
                    <p class="detail-description">${alert.details.description}</p>
                </div>
                
                <div class="detail-group">
                    <h4>Raw JSON Data</h4>
                    <pre class="json-viewer">${JSON.stringify(alert.details.rawJson, null, 2)}</pre>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-secondary" onclick="exportAlert(${alertId})">
                        <i class="fas fa-download"></i> Export
                    </button>
                    <button class="btn btn-primary" onclick="blockSource('${alert.sourceIp}')">
                        <i class="fas fa-ban"></i> Block Source IP
                    </button>
                </div>
            </div>
        `;
    }
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('alert-modal');
    if (!modal) return;
    modal.classList.remove('active');
    // After the closing transition ends, clean up modal body to free resources
    const onEnd = (e) => {
        if (e.target !== modal) return;
        modal.removeEventListener('transitionend', onEnd);
    };
    modal.addEventListener('transitionend', onEnd);
}

// Open modal with enlarged chart view
function openChartModal(chartCanvasId, title) {
    const modal = document.getElementById('alert-modal');
    const modalBody = modal.querySelector('.modal-body');
    const modalHeaderTitle = modal.querySelector('.modal-header h3');

    if (modalHeaderTitle) {
        modalHeaderTitle.textContent = title || 'Chart';
    }

    // Create a container with a larger canvas
    const container = document.createElement('div');
    container.style.padding = '0.5rem';
    container.innerHTML = `
        <div class="chart-modal-wrapper" style="height: 60vh;">
            <canvas id="modal-${chartCanvasId}"></canvas>
        </div>
    `;
    modalBody.innerHTML = '';
    modalBody.appendChild(container);

    // Show modal first to ensure canvas has layout size
    modal.classList.add('active');

    // Initialize chart after DOM paints
    setTimeout(() => {
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js not available');
            return;
        }
        if (chartCanvasId === 'threat-timeline') {
            initTimelineChart('modal-threat-timeline');
        } else if (chartCanvasId === 'attack-types') {
            initAttackTypesChart('modal-attack-types');
        } else {
            // fallback: simple mini chart
            initMiniChart(`modal-${chartCanvasId}`, '#FF6A2A');
        }
    }, 0);
}

function exportAlert(alertId) {
    const alert = mockAlerts.find(a => a.id === alertId);
    if (alert) {
        const dataStr = JSON.stringify(alert, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `alert_${alertId}_${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }
}

function blockSource(ip) {
    const modal = document.getElementById('alert-modal');
    const modalBody = modal?.querySelector('.modal-body');
    if (modalBody) {
        const banner = document.createElement('div');
        banner.style.cssText = 'background:var(--bg-darker);border:1px solid var(--success);border-radius:8px;padding:1rem;margin-top:1rem;color:var(--success);text-align:center;';
        banner.innerHTML = `<i class="fas fa-check-circle"></i> Source IP <strong>${ip}</strong> has been added to blocklist.`;
        modalBody.appendChild(banner);
    }
}

// ====================================
// Chart Initialization
// ====================================
function initCharts() {
    // Common chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                display: false
            },
            x: {
                display: false
            }
        }
    };
    
    // Stat card mini charts
    const miniChartConfig = {
        type: 'line',
        options: {
            ...chartOptions,
            elements: {
                line: {
                    borderWidth: 2,
                    tension: 0.4
                },
                point: {
                    radius: 0
                }
            }
        }
    };
    
    // Initialize mini charts
    initMiniChart('chart-threats', '#6366f1');
    initMiniChart('chart-alerts', '#ef4444');
    initMiniChart('chart-fpr', '#10b981');
    initMiniChart('chart-uptime', '#f59e0b');
    
    // Main timeline chart
    initTimelineChart();
    
    // Attack types chart
    initAttackTypesChart();
}

function initMiniChart(canvasId, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const data = generateRandomData(7);
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: data,
                borderColor: color,
                backgroundColor: `${color}20`,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { display: false },
                x: { display: false }
            },
            elements: {
                line: { borderWidth: 2, tension: 0.4 },
                point: { radius: 0 }
            }
        }
    });
}

function initTimelineChart(targetId = 'threat-timeline') {
    const canvas = document.getElementById(targetId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
            datasets: [
                {
                    label: 'Port Scans',
                    data: [12, 19, 15, 25, 22, 30, 28],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'ARP Spoofing',
                    data: [5, 8, 6, 12, 10, 15, 13],
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Anomalies',
                    data: [8, 12, 10, 18, 15, 20, 17],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#cbd5e1',
                        usePointStyle: true,
                        padding: 15
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#2d2d44'
                    },
                    ticks: {
                        color: '#64748b'
                    }
                },
                x: {
                    grid: {
                        color: '#2d2d44'
                    },
                    ticks: {
                        color: '#64748b'
                    }
                }
            }
        }
    });
}

function initAttackTypesChart(targetId = 'attack-types') {
    const canvas = document.getElementById(targetId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Port Scan', 'ARP Spoof', 'MITM', 'Anomaly', 'DDoS'],
            datasets: [{
                data: [35, 25, 15, 20, 5],
                backgroundColor: [
                    '#ef4444',
                    '#f59e0b',
                    '#eab308',
                    '#6366f1',
                    '#8b5cf6'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: '#cbd5e1',
                        padding: 15,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

function generateRandomData(count) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 50) + 10);
}

// ====================================
// Export Functions
// ====================================
function exportLogs() {
    const entries = document.querySelectorAll('.logs-container .log-entry');
    const data = Array.from(entries).map(el => ({
        time: el.querySelector('.log-time')?.textContent?.trim() || '',
        level: el.querySelector('.log-level')?.textContent?.trim() || '',
        service: el.querySelector('.log-service')?.textContent?.trim() || '',
        message: el.querySelector('.log-message')?.textContent?.trim() || ''
    }));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `securewatch_logs_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function exportAllAlerts() {
    const blob = new Blob([JSON.stringify(mockAlerts, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `securewatch_alerts_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// ====================================
// Real-time Updates (Mock)
// ====================================
function simulateRealTimeUpdates() {
    // This will be replaced with actual WebSocket or polling
    setInterval(() => {
        // Update alert badge
        const badge = document.querySelector('.nav-item .badge');
        if (badge) {
            const currentCount = parseInt(badge.textContent);
            badge.textContent = currentCount + Math.floor(Math.random() * 3);
        }
    }, 10000); // Every 10 seconds
}

// ====================================
// Modal Event Listeners
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    initNavigation();
    
    // Render alerts table from data
    renderAlertsTable();
    
    // Initialize charts
    initCharts();
    
    // Modal close button
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Modal background click
    const modal = document.getElementById('alert-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Start real-time updates simulation
    simulateRealTimeUpdates();

    // Update alert badge with actual count
    const badge = document.querySelector('.nav-item .badge');
    if (badge) badge.textContent = mockAlerts.length;

    // Minimal scroll listener for header shadow
    const topHeader = document.querySelector('.top-header');
    if (topHeader) {
        const onScroll = () => {
            topHeader.classList.toggle('scrolled', window.scrollY > 4);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // Sidebar Toggle
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    
    // Restore sidebar state from localStorage
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed && sidebar) {
        sidebar.classList.add('collapsed');
    }

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            const isCollapsed = sidebar.classList.contains('collapsed');
            localStorage.setItem('sidebarCollapsed', String(isCollapsed));
        });
    }

    // Custom Select Component (Reusable)
    // Optimization: Use single global handlers to close open selects (reduces many document listeners)
    const openSelects = new Set();

    const CUSTOM_SELECT_CLOSE_CLEANUP_MS = 320;

    const scheduleCustomSelectDirectionCleanup = (selectEl) => {
        if (!selectEl) return;
        // Keep direction classes during the closing transition to avoid a visual snap.
        window.setTimeout(() => {
            if (!selectEl.classList.contains('open')) {
                selectEl.classList.remove('open-left', 'open-right');
            }
        }, CUSTOM_SELECT_CLOSE_CLEANUP_MS);
    };

    const closeCustomSelectEl = (selectEl) => {
        if (!selectEl) return;
        const triggerEl = selectEl.querySelector('.custom-select-trigger');
        selectEl.classList.remove('open');
        if (triggerEl) triggerEl.setAttribute('aria-expanded', 'false');
        openSelects.delete(selectEl);
        scheduleCustomSelectDirectionCleanup(selectEl);
    };

    const updateCustomSelectDirection = (selectEl) => {
        if (!selectEl) return;
        const menu = selectEl.querySelector('.custom-select-menu');
        if (!menu) return;

        // Reset previous direction
        selectEl.classList.remove('open-left', 'open-right');

        const trigger = selectEl.querySelector('.custom-select-trigger') || selectEl;
        const triggerRect = trigger.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();

        const viewportPadding = 12;
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        const menuWidth = menuRect.width || menu.offsetWidth || 0;

        // If we cannot measure yet, fall back to default (open-right)
        if (!menuWidth) {
            selectEl.classList.add('open-right');
            return;
        }

        // Default CSS anchors menu to the left edge of the select (opens to the right).
        const wouldFitRight = (triggerRect.left + menuWidth) <= (viewportWidth - viewportPadding);
        // open-left anchors to the right edge of the select.
        const wouldFitLeft = (triggerRect.right - menuWidth) >= viewportPadding;

        if (!wouldFitRight && wouldFitLeft) {
            selectEl.classList.add('open-left');
        } else if (wouldFitRight && !wouldFitLeft) {
            selectEl.classList.add('open-right');
        } else if (!wouldFitRight && !wouldFitLeft) {
            // Neither side fits perfectly; choose the side with more available space.
            const spaceToRight = (viewportWidth - viewportPadding) - triggerRect.left;
            const spaceToLeft = triggerRect.right - viewportPadding;
            selectEl.classList.add(spaceToLeft >= spaceToRight ? 'open-left' : 'open-right');
        } else {
            // Both fit, keep the default behavior.
            selectEl.classList.add('open-right');
        }
    };

    const initCustomSelect = (selectId) => {
        const selectEl = document.getElementById(selectId);
        if (!selectEl) return;

        const trigger = selectEl.querySelector('.custom-select-trigger');
        const menu = selectEl.querySelector('.custom-select-menu');
        const label = selectEl.querySelector('.custom-select-label');
        const options = selectEl.querySelectorAll('.custom-select-option');
        const applyBtn = selectEl.querySelector('.custom-select-apply');
        const clearBtn = selectEl.querySelector('.custom-select-clear');
        const isMulti = selectEl.dataset.selectType === 'multi';

        let selectedValues = [];

        const updateLabel = () => {
            if (selectedValues.length === 0) {
                label.textContent = selectEl.dataset.placeholder || 'Severity';
            } else if (selectedValues.length === 1) {
                const opt = Array.from(options).find(o => o.dataset.value === selectedValues[0]);
                label.textContent = opt ? opt.textContent.trim() : 'Severity';
            } else {
                label.textContent = `${selectedValues.length} selected`;
            }
        };

        const toggleMenu = () => {
            const willOpen = !selectEl.classList.contains('open');

            if (willOpen) {
                // Enforce only one menu open at a time
                if (openSelects.size) {
                    openSelects.forEach(other => {
                        if (other !== selectEl) closeCustomSelectEl(other);
                    });
                }
                selectEl.classList.add('open');
                trigger.setAttribute('aria-expanded', 'true');
                openSelects.add(selectEl);
                // Measure and set direction on the next frame (after layout is stable)
                requestAnimationFrame(() => updateCustomSelectDirection(selectEl));
            } else {
                closeCustomSelectEl(selectEl);
            }
        };

        const closeMenu = () => {
            closeCustomSelectEl(selectEl);
        };

        // Clean up direction classes after the menu finishes closing (prevents snapping)
        if (menu) {
            menu.addEventListener('transitionend', (ev) => {
                if (ev.propertyName !== 'transform' && ev.propertyName !== 'opacity') return;
                if (!selectEl.classList.contains('open')) {
                    selectEl.classList.remove('open-left', 'open-right');
                }
            });
        }

        const selectOption = (option) => {
            const value = option.dataset.value;
            if (isMulti) {
                if (selectedValues.includes(value)) {
                    selectedValues = selectedValues.filter(v => v !== value);
                    option.classList.remove('active');
                } else {
                    selectedValues.push(value);
                    option.classList.add('active');
                }
            } else {
                options.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                selectedValues = [value];
                updateLabel();
                if (!applyBtn) {
                    closeMenu();
                }
            }
        };

        // Event listeners
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        options.forEach(option => {
            option.addEventListener('click', () => selectOption(option));
        });

        if (applyBtn) {
            applyBtn.addEventListener('click', () => {
                selectEl.dispatchEvent(new CustomEvent('custom-select:apply', {
                    detail: { values: [...selectedValues] }
                }));
                updateLabel();
                closeMenu();
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                selectedValues = [];
                options.forEach(opt => opt.classList.remove('active'));
                updateLabel();
            });
        }

    };

    // Initialize all custom selects
    initCustomSelect('severity-select');
    initCustomSelect('timeframe-select');
    initCustomSelect('threats-filter-select');
    initCustomSelect('services-select');
    initCustomSelect('levels-select');

    // Global handlers (added once) to close any open custom selects
    document.addEventListener('click', (e) => {
        if (openSelects.size === 0) return;
        openSelects.forEach(sel => {
            if (!sel.contains(e.target)) {
                closeCustomSelectEl(sel);
            }
        });
        // Clean up closed ones
        openSelects.forEach(sel => {
            if (!sel.classList.contains('open')) openSelects.delete(sel);
        });
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape' || openSelects.size === 0) return;
        openSelects.forEach(sel => {
            closeCustomSelectEl(sel);
        });
        openSelects.clear();
    });

    // Keep direction correct on resize/scroll while menus are open
    const updateOpenSelectDirections = () => {
        if (openSelects.size === 0) return;
        openSelects.forEach(sel => updateCustomSelectDirection(sel));
    };

    window.addEventListener('resize', () => {
        // Use rAF to avoid layout thrash
        requestAnimationFrame(updateOpenSelectDirections);
    }, { passive: true });

    window.addEventListener('scroll', () => {
        // In case sticky headers/containers shift, keep dropdowns within viewport
        requestAnimationFrame(updateOpenSelectDirections);
    }, { passive: true });

    // Store last-applied filters
    const appliedFilters = {
        severity: [],
        services: ['all'],
        levels: ['all']
    };

    // Helpers to apply filters
    const applyAlertSeverityFilter = () => {
        const tbody = document.getElementById('alerts-tbody');
        if (!tbody) return;
        const rows = Array.from(tbody.querySelectorAll('tr'));
        if (!appliedFilters.severity || appliedFilters.severity.length === 0) {
            rows.forEach(r => r.classList.remove('alerts-filtered-out'));
            return;
        }
        rows.forEach(row => {
            const classes = row.className.split(/\s+/);
            const match = appliedFilters.severity.some(s => classes.includes(s));
            if (match) {
                row.classList.remove('alerts-filtered-out');
            } else {
                row.classList.add('alerts-filtered-out');
            }
        });
    };

    const applyLogsFilter = () => {
        const container = document.querySelector('.logs-container');
        if (!container) return;
        const entries = Array.from(container.querySelectorAll('.log-entry'));

        const levelSelected = appliedFilters.levels;
        const serviceSelected = appliedFilters.services;

        const allLevels = !levelSelected || levelSelected.includes('all');
        const allServices = !serviceSelected || serviceSelected.includes('all');

        const serviceMap = {
            sniffer: 'Network Sniffer',
            fastapi: 'FastAPI',
            ml: 'ML Model',
            db: 'Database'
        };

        entries.forEach(entry => {
            // Level match
            const levelEl = entry.querySelector('.log-level');
            let levelMatch = true;
            if (!allLevels && levelEl) {
                const lv = (levelEl.textContent || '').trim().toLowerCase();
                levelMatch = levelSelected.some(s => s === lv);
            }

            // Service match
            const serviceEl = entry.querySelector('.log-service');
            let serviceMatch = true;
            if (!allServices && serviceEl) {
                const text = (serviceEl.textContent || '').trim();
                serviceMatch = serviceSelected.some(s => text.includes(serviceMap[s] || ''));
            }

            entry.style.display = levelMatch && serviceMatch ? '' : 'none';
        });
    };

    // Wire apply events
    const severitySelect = document.getElementById('severity-select');
    if (severitySelect) {
        severitySelect.addEventListener('custom-select:apply', (e) => {
            appliedFilters.severity = e.detail.values;
            applyAlertSeverityFilter();
        });
    }

    const servicesSelect = document.getElementById('services-select');
    if (servicesSelect) {
        servicesSelect.addEventListener('custom-select:apply', (e) => {
            appliedFilters.services = e.detail.values.length ? e.detail.values : ['all'];
            applyLogsFilter();
            // Reset logs pagination and render
            if (logsPaginationState) {
                logsPaginationState.currentPage = 1;
                renderLogsPage();
            }
        });
    }

    const levelsSelect = document.getElementById('levels-select');
    if (levelsSelect) {
        levelsSelect.addEventListener('custom-select:apply', (e) => {
            appliedFilters.levels = e.detail.values.length ? e.detail.values : ['all'];
            applyLogsFilter();
            // Reset logs pagination and render
            if (logsPaginationState) {
                logsPaginationState.currentPage = 1;
                renderLogsPage();
            }
        });
    }

    // ====================================
    // Logs Pagination System
    // ====================================
    const logsPaginationState = {
        currentPage: 1,
        itemsPerPage: 8,
        allLogEntries: []
    };

    const initLogsPagination = () => {
        const logsContainer = document.querySelector('.logs-container');
        if (!logsContainer) return;

        // Store all log entries
        logsPaginationState.allLogEntries = Array.from(logsContainer.querySelectorAll('.log-entry'));
        
        // Setup pagination controls
        const prevBtn = document.getElementById('logs-prev-btn');
        const nextBtn = document.getElementById('logs-next-btn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (logsPaginationState.currentPage > 1) {
                    logsPaginationState.currentPage--;
                    renderLogsPage();
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const totalPages = getTotalLogsPages();
                if (logsPaginationState.currentPage < totalPages) {
                    logsPaginationState.currentPage++;
                    renderLogsPage();
                }
            });
        }

        // Initial render
        renderLogsPage();
    };

    const getVisibleLogEntries = () => {
        return logsPaginationState.allLogEntries.filter(entry => 
            entry.style.display !== 'none' && !entry.classList.contains('search-hidden'));
    };

    const getTotalLogsPages = () => {
        const visibleEntries = getVisibleLogEntries();
        return Math.ceil(visibleEntries.length / logsPaginationState.itemsPerPage) || 1;
    };

    const renderLogsPage = () => {
        const visibleEntries = getVisibleLogEntries();
        const totalPages = getTotalLogsPages();
        const startIndex = (logsPaginationState.currentPage - 1) * logsPaginationState.itemsPerPage;
        const endIndex = startIndex + logsPaginationState.itemsPerPage;

        // Hide all entries first (even if visible before)
        logsPaginationState.allLogEntries.forEach(entry => {
            if (entry.style.display !== 'none') {
                entry.classList.add('logs-hidden');
            }
        });

        // Show only current page entries
        visibleEntries.slice(startIndex, endIndex).forEach(entry => {
            entry.classList.remove('logs-hidden');
        });

        // Update pagination info
        const paginationInfo = document.getElementById('logs-pagination-info');
        if (paginationInfo) {
            paginationInfo.textContent = `Page ${logsPaginationState.currentPage} of ${totalPages}`;
        }

        // Update button states
        const prevBtn = document.getElementById('logs-prev-btn');
        const nextBtn = document.getElementById('logs-next-btn');
        
        if (prevBtn) {
            prevBtn.disabled = logsPaginationState.currentPage === 1;
            prevBtn.style.opacity = logsPaginationState.currentPage === 1 ? '0.5' : '1';
            prevBtn.style.cursor = logsPaginationState.currentPage === 1 ? 'not-allowed' : 'pointer';
        }
        
        if (nextBtn) {
            nextBtn.disabled = logsPaginationState.currentPage >= totalPages;
            nextBtn.style.opacity = logsPaginationState.currentPage >= totalPages ? '0.5' : '1';
            nextBtn.style.cursor = logsPaginationState.currentPage >= totalPages ? 'not-allowed' : 'pointer';
        }

        // Scroll to top of logs container
        // No internal scroll anymore; skip scroll adjustments
    };

    // Note: do not reassign const functions; pagination reset is handled in event handlers above.

    // Initialize logs pagination
    initLogsPagination();

    // ====================================
    // Alerts Pagination System (8 per page)
    // ====================================
    const alertsPaginationState = {
        currentPage: 1,
        itemsPerPage: 8,
        allRows: []
    };

    const initAlertsPagination = () => {
        const tbody = document.getElementById('alerts-tbody');
        if (!tbody) return;
        alertsPaginationState.allRows = Array.from(tbody.querySelectorAll('tr'));

        const prevBtn = document.getElementById('alerts-prev-btn');
        const nextBtn = document.getElementById('alerts-next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (alertsPaginationState.currentPage > 1) {
                    alertsPaginationState.currentPage--;
                    renderAlertsPage();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const totalPages = getTotalAlertsPages();
                if (alertsPaginationState.currentPage < totalPages) {
                    alertsPaginationState.currentPage++;
                    renderAlertsPage();
                }
            });
        }

        renderAlertsPage();
    };

    const getVisibleAlertRows = () => {
        return alertsPaginationState.allRows.filter(row => 
            !row.classList.contains('alerts-filtered-out') && !row.classList.contains('search-hidden'));
    };

    const getTotalAlertsPages = () => {
        const visible = getVisibleAlertRows();
        return Math.ceil(visible.length / alertsPaginationState.itemsPerPage) || 1;
    };

    const renderAlertsPage = () => {
        const visible = getVisibleAlertRows();
        const total = getTotalAlertsPages();
        const start = (alertsPaginationState.currentPage - 1) * alertsPaginationState.itemsPerPage;
        const end = start + alertsPaginationState.itemsPerPage;

        // First hide all non-filtered rows via pagination class
        alertsPaginationState.allRows.forEach(row => {
            if (!row.classList.contains('alerts-filtered-out')) {
                row.classList.add('alerts-hidden');
            }
        });

        // Show slice for the current page
        visible.slice(start, end).forEach(row => row.classList.remove('alerts-hidden'));

        // Update info
        const info = document.getElementById('alerts-pagination-info');
        if (info) info.textContent = `Page ${alertsPaginationState.currentPage} of ${total}`;

        const prevBtn = document.getElementById('alerts-prev-btn');
        const nextBtn = document.getElementById('alerts-next-btn');
        if (prevBtn) {
            prevBtn.disabled = alertsPaginationState.currentPage === 1;
            prevBtn.style.opacity = alertsPaginationState.currentPage === 1 ? '0.5' : '1';
            prevBtn.style.cursor = alertsPaginationState.currentPage === 1 ? 'not-allowed' : 'pointer';
        }
        if (nextBtn) {
            nextBtn.disabled = alertsPaginationState.currentPage >= total;
            nextBtn.style.opacity = alertsPaginationState.currentPage >= total ? '0.5' : '1';
            nextBtn.style.cursor = alertsPaginationState.currentPage >= total ? 'not-allowed' : 'pointer';
        }
    };

    // Reset alerts pagination and render when severity filter applies
    if (severitySelect) {
        severitySelect.addEventListener('custom-select:apply', () => {
            alertsPaginationState.currentPage = 1;
            renderAlertsPage();
        });
    }

    initAlertsPagination();

    // ====================================
    // Global Search (header search box)
    // ====================================
    const headerSearchInput = document.querySelector('.search-box input');
    if (headerSearchInput) {
        headerSearchInput.addEventListener('input', () => {
            const query = headerSearchInput.value.trim().toLowerCase();
            // Search alerts table
            const rows = document.querySelectorAll('#alerts-tbody tr');
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.classList.toggle('search-hidden', query.length > 0 && !text.includes(query));
            });
            // Update pagination
            if (alertsPaginationState) {
                alertsPaginationState.currentPage = 1;
                renderAlertsPage();
            }
            // If query is not empty, switch to alerts page
            if (query.length > 0) {
                const alertsNav = document.querySelector('[data-page="alerts"]');
                if (alertsNav) alertsNav.click();
            }
        });
    }

    // Alerts page search
    const alertsSearchInput = document.querySelector('.alerts-search-input input');
    if (alertsSearchInput) {
        alertsSearchInput.addEventListener('input', () => {
            const query = alertsSearchInput.value.trim().toLowerCase();
            const rows = document.querySelectorAll('#alerts-tbody tr');
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.classList.toggle('search-hidden', query.length > 0 && !text.includes(query));
            });
            if (alertsPaginationState) {
                alertsPaginationState.currentPage = 1;
                renderAlertsPage();
            }
        });
    }

    // Logs search
    const logsSearchInput = document.querySelector('.logs-search');
    if (logsSearchInput) {
        logsSearchInput.addEventListener('input', () => {
            const query = logsSearchInput.value.trim().toLowerCase();
            const entries = document.querySelectorAll('.logs-container .log-entry');
            entries.forEach(entry => {
                const text = entry.textContent.toLowerCase();
                entry.classList.toggle('search-hidden', query.length > 0 && !text.includes(query));
            });
            if (logsPaginationState) {
                logsPaginationState.currentPage = 1;
                renderLogsPage();
            }
        });
    }
});

const style = document.createElement('style');
style.textContent = `
    .modal-alert-details {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .detail-group {
        background: var(--bg-darker);
        border-radius: 8px;
        padding: 1.25rem;
    }
    
    .detail-group h4 {
        font-size: 1rem;
        font-weight: 700;
        color: var(--primary-light);
        margin-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 0.5rem;
    }
    
    .detail-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }
    
    .detail-item {
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
    }
    
    .detail-label {
        font-size: 0.75rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: 600;
    }
    
    .detail-value {
        font-size: 0.9375rem;
        color: var(--text-primary);
        font-weight: 600;
    }
    
    .detail-description {
        font-size: 0.9375rem;
        color: var(--text-secondary);
        line-height: 1.6;
    }
    
    .json-viewer {
        background: var(--bg-dark);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        padding: 1rem;
        overflow-x: auto;
        font-family: 'Courier New', monospace;
        font-size: 0.8125rem;
        color: var(--success);
        line-height: 1.6;
    }
    
    .modal-actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
        padding-top: 1rem;
        border-top: 1px solid var(--border-color);
    }
`;
document.head.appendChild(style);


