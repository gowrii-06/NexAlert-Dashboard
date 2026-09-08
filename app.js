window.onload = function() {
    // ==========================================
    // 1. ENTERPRISE DARK THEME CSS
    // ==========================================
    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --bg-base: #0b1120; 
            --bg-panel: #1e293b; 
            --bg-hover: #334155;
            --border: #334155; 
            --text-main: #f8fafc; 
            --text-muted: #94a3b8;
            --accent: #10b981; 
            --accent-hover: #059669;
            --danger: #ef4444; 
            --warn: #f59e0b; 
            --info: #3b82f6;
        }
        body { margin: 0; padding: 0; display: flex; height: 100vh; font-family: 'Segoe UI', system-ui, sans-serif; background-color: var(--bg-base); color: var(--text-main); overflow: hidden; }
        
        h1, h2, h3, h4 { margin: 0; font-weight: 600; letter-spacing: 0.3px; }
        .text-muted { color: var(--text-muted); }
        .text-sm { font-size: 0.85rem; }
        .flex { display: flex; }
        .space-between { justify-content: space-between; }
        .align-center { align-items: center; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        
        #login-screen { position: absolute; inset: 0; background: radial-gradient(circle at center, #1e293b 0%, #0b1120 100%); display: flex; justify-content: center; align-items: center; z-index: 1000; }
        .login-box { background: var(--bg-panel); padding: 40px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); width: 100%; max-width: 340px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); }
        .login-brand { text-align: center; margin-bottom: 30px; }
        .login-brand h2 { color: var(--text-main); font-size: 1.5rem; display: flex; justify-content: center; align-items: center; gap: 10px; }
        .login-brand p { color: var(--text-muted); font-size: 0.85rem; margin-top: 5px; }
        .input-group { margin-bottom: 20px; }
        .input-group label { display: block; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; }
        .login-input { width: 100%; padding: 12px 15px; background: rgba(11, 17, 32, 0.5); border: 1px solid var(--border); color: white; border-radius: 6px; box-sizing: border-box; font-size: 0.95rem; transition: border-color 0.2s; }
        .login-input:focus { outline: none; border-color: var(--accent); }
        .btn-primary { width: 100%; padding: 14px; background: var(--accent); color: white; border: none; border-radius: 6px; font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: background 0.2s; letter-spacing: 0.5px; }
        .btn-primary:hover { background: var(--accent-hover); }

        #app-layout { display: none; width: 100%; height: 100%; }
        .sidebar { width: 260px; background-color: var(--bg-base); border-right: 1px solid var(--border); display: flex; flex-direction: column; flex-shrink: 0; padding: 20px 15px; }
        .sidebar-brand { font-size: 1.3rem; font-weight: bold; color: var(--accent); margin-bottom: 35px; padding: 0 10px; display: flex; align-items: center; gap: 10px; }
        .nav-item { padding: 12px 15px; margin-bottom: 5px; border-radius: 8px; cursor: pointer; color: var(--text-muted); transition: all 0.2s; display: flex; align-items: center; gap: 12px; font-weight: 500; font-size: 0.95rem; }
        .nav-item:hover { background: var(--bg-hover); color: var(--text-main); }
        .nav-item.active { background: rgba(16, 185, 129, 0.15); color: var(--accent); border-left: 3px solid var(--accent); border-radius: 0 8px 8px 0; }
        
        .main-content { flex: 1; display: flex; flex-direction: column; overflow-y: auto; background-color: #0f172a; position: relative; }
        .header { height: 70px; border-bottom: 1px solid var(--border); padding: 0 30px; display: flex; justify-content: space-between; align-items: center; flex-shrink: 0; background: var(--bg-panel); box-shadow: 0 1px 3px rgba(0,0,0,0.2); z-index: 10; }
        .view-container { padding: 30px; max-width: 1200px; margin: 0 auto; width: 100%; box-sizing: border-box; display: none; }
        .view-container.active { display: block; animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .panel { background: var(--bg-panel); border: 1px solid var(--border); border-radius: 10px; padding: 24px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        .panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border); padding-bottom: 15px; }
        
        .badge { padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; letter-spacing: 0.5px; }
        .badge.critical { background: rgba(239, 68, 68, 0.15); color: #fca5a5; border: 1px solid rgba(239, 68, 68, 0.4); }
        .badge.watch { background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.4); }
        
        .data-table { width: 100%; border-collapse: collapse; text-align: left; }
        .data-table th { padding: 12px 15px; color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; border-bottom: 1px solid var(--border); }
        .data-table td { padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.9rem; }
        .data-table tr:hover td { background: rgba(255,255,255,0.02); }
        .data-table tr:last-child td { border-bottom: none; }

        .stat-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .stat-row:last-child { border-bottom: none; }

        .map-wrapper { width: 100%; border-radius: 8px; overflow: hidden; border: 1px solid var(--border); background: #1e293b; position: relative; z-index: 1;}
        .leaflet-layer, .leaflet-control-zoom-in, .leaflet-control-zoom-out, .leaflet-control-attribution { filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%); }
        /* Prevent the external weather layer from being color-inverted so it keeps its natural reds/blues */
        .weather-layer { filter: none !important; mix-blend-mode: screen; }
        
        .net-online { background: rgba(16, 185, 129, 0.15); color: #6ee7b7; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; border: 1px solid rgba(16, 185, 129, 0.4); display: flex; align-items: center; gap: 5px; font-weight: 600;}
        .net-offline { background: rgba(239, 68, 68, 0.15); color: #fca5a5; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; border: 1px solid rgba(239, 68, 68, 0.4); display: flex; align-items: center; gap: 5px; font-weight: 600;}
    `;
    document.head.appendChild(style);

    // ==========================================
    // 2. MOCK DATA & GEOJSON
    // ==========================================
    const state = {
        system: { nodes: 1, packets: 24 },
        assessment: { hazard: "Forest Fire & Smoke", confidence: "0.91 (High)", condition: "GOOD" },
        nodes: [{ 
            id: "Master-Node-01", 
            zone: "Validation Prototype Sector", 
            hazard: "Forest Fire & Smoke", 
            status: "CRITICAL", 
            risk: "0.91", 
            lat: 13.05, 
            lng: 77.58, 
            power: { battery: 87, solar: "ACTIVE" },
            diagnostics: {
                esp32: "HEALTHY",
                storage: "100%",
                lora: "98% / HEALTHY",
                uptime: "14d 08h 12m"
            },
            sensors: [
                { name: "Temperature", health: "100%", quality: "HIGH", status: "VALID" },
                { name: "Smoke / PM2.5", health: "98%", quality: "HIGH", status: "VALID" },
                { name: "Humidity", health: "99%", quality: "HIGH", status: "VALID" },
                { name: "Gas / MQ-7", health: "96%", quality: "MODERATE", status: "VALID" }
            ]
        }],
        activeMapInstance: null,
        onlineLayers: null,
        offlineLayers: null
    };

    const localGISData = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "properties": { "name": "Validation Sector Zone", "risk": "High" },
            "geometry": { "type": "Polygon", "coordinates": [[[77.53, 13.02], [77.62, 13.02], [77.62, 13.08], [77.53, 13.08], [77.53, 13.02]]] }
        }]
    };

    // ==========================================
    // 3. BUILD CORE DOM STRUCTURE
    // ==========================================
    document.body.innerHTML = `
        <div id="login-screen">
            <div class="login-box">
                <div class="login-brand">
                    <h2><i class="fa-solid fa-microchip" style="color:var(--accent)"></i> NexAlert OS</h2>
                    <p>Environmental Intelligence Network</p>
                </div>
                <div class="input-group">
                    <label>Username</label>
                    <input type="text" id="username" class="login-input">
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" id="password" class="login-input">
                </div>
                <button id="login-btn" class="btn-primary" style="margin-top: 10px;">SECURE LOGIN</button>
                <p id="login-err" style="color:var(--danger); font-size:0.85rem; text-align:center; display:none; margin-top:15px; font-weight:500;">Authentication failed. Try again.</p>
            </div>
        </div>

        <div id="app-layout">
            <aside class="sidebar">
                <div class="sidebar-brand"><i class="fa-solid fa-microchip"></i> NexAlert Master</div>
                <div class="nav-item active" data-view="dashboard"><i class="fa-solid fa-border-all"></i> Dashboard</div>
                <div class="nav-item" data-view="mapview"><i class="fa-solid fa-map-location-dot"></i> Regional Risk Map</div>
                <div class="nav-item" data-view="alerts"><i class="fa-solid fa-bell"></i> Autonomous Alerts</div>
                <div class="nav-item" data-view="diagnostics"><i class="fa-solid fa-stethoscope"></i> Sensor Diagnostics</div>
                <div style="flex:1;"></div>
                <div class="nav-item" id="logout-btn"><i class="fa-solid fa-power-off"></i> Disconnect System</div>
            </aside>
            <main class="main-content">
                <header class="header">
                    <h2 id="header-title" style="font-size:1.25rem;">Dashboard</h2>
                    <div class="flex gap-4 text-sm align-center">
                        <span style="color:var(--text-main); font-weight:600;">${state.system.nodes} ACTIVE NODE</span>
                        <span class="text-muted">|</span>
                        <span style="color:var(--text-main); font-weight:600;">${state.system.packets} PACKETS RECEIVED</span>
                    </div>
                </header>
                
                <div id="view-dashboard" class="view-container active"></div>
                <div id="view-mapview" class="view-container"></div>
                <div id="view-alerts" class="view-container"></div>
                <div id="view-diagnostics" class="view-container"></div>
            </main>
        </div>
    `;

    // ==========================================
    // 4. VIEW RENDERING LOGIC
    // ==========================================
    function renderDashboard() {
        const node = state.nodes[0];
        document.getElementById('view-dashboard').innerHTML = `
            <div class="grid-2">
                <div class="panel">
                    <div class="panel-header">
                        <h3><i class="fa-solid fa-shield-halved" style="color:var(--danger); margin-right:8px;"></i> Real-Time Threat Warning</h3>
                        <span class="badge critical">${node.status}</span>
                    </div>
                    <p class="text-muted text-sm" style="margin-bottom:15px;">Real-time threat status evaluated directly on the edge node.</p>
                    <div class="flex space-between" style="margin-bottom:12px; padding:12px; background:rgba(239, 68, 68, 0.1); border-radius:6px; border: 1px solid rgba(239, 68, 68, 0.2);">
                        <span class="text-muted">Primary Hazard:</span> <strong style="color:var(--danger)">${state.assessment.hazard}</strong>
                    </div>
                    <div class="flex space-between" style="margin-bottom:12px; padding:0 12px;"><span class="text-muted">Evidence Confidence:</span> <span>${state.assessment.confidence}</span></div>
                    <div class="flex space-between" style="padding:0 12px;"><span class="text-muted">Information Condition:</span> <span style="color:var(--accent); font-weight:bold;">${state.assessment.condition}</span></div>
                </div>
                
                <div class="panel">
                    <div class="panel-header">
                        <h3><i class="fa-solid fa-server" style="color:var(--info); margin-right:8px;"></i> Fleet Overview</h3>
                        <button class="btn-primary" style="padding:6px 15px; width:auto; font-size:0.8rem;" onclick="app.switchView('diagnostics')">View Diagnostics</button>
                    </div>
                    <table class="data-table">
                        <tr>
                            <th>Node ID</th>
                            <th>Battery</th>
                            <th>Risk Index</th>
                        </tr>
                        <tr>
                            <td style="font-family:monospace; font-weight:600;">${node.id}</td>
                            <td><i class="fa-solid fa-battery-full" style="color:var(--accent); margin-right:5px;"></i> ${node.power.battery}%</td>
                            <td style="color:var(--danger); font-weight:bold;">${node.risk}</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="panel">
                <div class="panel-header" style="margin-bottom:15px;">
                    <div class="flex align-center gap-4">
                        <h3><i class="fa-solid fa-map" style="color:var(--info); margin-right:8px;"></i> Regional Risk Map Preview</h3>
                        <div id="net-badge-dash"></div>
                    </div>
                    <button class="btn-primary" style="padding:6px 15px; width:auto; font-size:0.8rem;" onclick="app.switchView('mapview')">Expand Full Map</button>
                </div>
                <div class="map-wrapper" id="dash-map" style="height: 300px;"></div>
            </div>
        `;
        app.initMap('dash-map', 'net-badge-dash');
    }

    function renderMapDetailed() {
        document.getElementById('view-mapview').innerHTML = `
            <div class="panel" style="height: calc(100vh - 140px); display:flex; flex-direction:column; padding:20px;">
                <div class="panel-header" style="margin-bottom:20px; border-bottom:1px solid var(--border); padding-bottom:15px;">
                    <div>
                        <h3><i class="fa-solid fa-earth-asia" style="color:var(--info); margin-right:8px;"></i> Detailed Geospatial Analysis</h3>
                        <p class="text-muted text-sm" style="margin-top:5px;">Live atmospheric temperature layer overlapping the tactical grid.</p>
                    </div>
                    <div id="net-badge-full"></div>
                </div>
                <div class="map-wrapper" id="full-map" style="flex:1;"></div>
            </div>
        `;
        app.initMap('full-map', 'net-badge-full');
    }

    function renderDiagnostics() {
        const node = state.nodes[0];
        let sensorRows = node.sensors.map(s => `
            <tr>
                <td style="font-weight:500;"><i class="fa-solid fa-microchip text-muted" style="margin-right:8px;"></i> ${s.name}</td>
                <td style="color:var(--accent); font-weight:600;">${s.health}</td>
                <td>${s.quality}</td>
                <td class="text-muted"><span style="padding: 2px 8px; background: rgba(255,255,255,0.05); border-radius: 4px; font-size:0.8rem;">${s.status}</span></td>
            </tr>
        `).join('');

        document.getElementById('view-diagnostics').innerHTML = `
            <div class="panel">
                <div class="panel-header">
                    <h3><i class="fa-solid fa-stethoscope" style="color:var(--info); margin-right:8px;"></i> Hardware Diagnostic Report</h3>
                    <span class="badge watch">NODE ONLINE</span>
                </div>
                
                <div class="grid-2" style="margin-bottom: 30px;">
                    <div style="background:var(--bg-base); padding:20px; border-radius:8px; border:1px solid var(--border);">
                        <h4 style="margin-bottom:15px; color:var(--text-muted); font-size:0.85rem; text-transform:uppercase; letter-spacing:1px;">System & Power Telemetry</h4>
                        <div class="stat-row"><span class="text-muted">Node Identity:</span> <strong style="font-family:monospace;">${node.id}</strong></div>
                        <div class="stat-row"><span class="text-muted">Battery State:</span> <span><i class="fa-solid fa-battery-full" style="color:var(--accent)"></i> <strong>${node.power.battery}%</strong></span></div>
                        <div class="stat-row"><span class="text-muted">Solar Array:</span> <strong style="color:var(--accent)">${node.power.solar}</strong></div>
                        <div class="stat-row"><span class="text-muted">ESP32 Compute:</span> <strong>${node.diagnostics.esp32}</strong></div>
                        <div class="stat-row"><span class="text-muted">LoRa Comms:</span> <strong>${node.diagnostics.lora}</strong></div>
                        <div class="stat-row"><span class="text-muted">Local Storage:</span> <strong>${node.diagnostics.storage}</strong></div>
                    </div>
                    
                    <div style="background:var(--bg-base); padding:20px; border-radius:8px; border:1px solid var(--border);">
                        <h4 style="margin-bottom:15px; color:var(--text-muted); font-size:0.85rem; text-transform:uppercase; letter-spacing:1px;">Environmental Sensor Matrix</h4>
                        <table class="data-table">
                            <tr><th>Sensor</th><th>Health (H)</th><th>Signal Quality</th><th>Status</th></tr>
                            ${sensorRows}
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    function renderAlerts() {
        document.getElementById('view-alerts').innerHTML = `
            <div class="panel">
                <div class="panel-header"><h3><i class="fa-solid fa-bell" style="color:var(--warn); margin-right:8px;"></i> Autonomous Dispatch Log</h3></div>
                <div style="background:var(--bg-base); padding:20px; border-radius:8px; border-left: 4px solid var(--danger); margin-bottom:15px; border-top:1px solid var(--border); border-right:1px solid var(--border); border-bottom:1px solid var(--border);">
                    <div class="flex space-between align-center" style="margin-bottom:8px;">
                        <strong style="color:var(--danger); font-size:1.05rem;">FOREST FIRE DECLARED - ${state.nodes[0].zone}</strong>
                        <span class="text-muted text-sm"><i class="fa-solid fa-clock"></i> Just Now</span>
                    </div>
                    <div class="text-muted">Triggered autonomously by Master-Node-01 local inference engine. Priority dispatch routed to NDMA and Local Authorities.</div>
                </div>
            </div>
        `;
    }

    // ==========================================
    // 5. EXTERNAL SCRIPT SEQUENCING
    // ==========================================
    document.head.appendChild(Object.assign(document.createElement('link'), {rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'}));
    document.head.appendChild(Object.assign(document.createElement('link'), {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'}));
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    document.head.appendChild(leafletScript);

    // ==========================================
    // 6. SPA ROUTER & MAP CONTROLLER
    // ==========================================
    window.app = {
        switchView: function(viewName) {
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            const activeNav = document.querySelector(`.nav-item[data-view="${viewName}"]`);
            if (activeNav) activeNav.classList.add('active');

            const titles = { dashboard: 'Dashboard', mapview: 'Regional Risk Map', alerts: 'Autonomous Alerts', diagnostics: 'Sensor Diagnostics' };
            document.getElementById('header-title').innerText = titles[viewName];

            document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
            document.getElementById('view-' + viewName).classList.add('active');

            if (state.activeMapInstance) { state.activeMapInstance.remove(); state.activeMapInstance = null; }

            if (viewName === 'dashboard') renderDashboard();
            if (viewName === 'mapview') renderMapDetailed();
            if (viewName === 'alerts') renderAlerts();
            if (viewName === 'diagnostics') renderDiagnostics();
        },

        initMap: function(containerId, badgeId) {
            if (typeof L === 'undefined') { setTimeout(() => app.initMap(containerId, badgeId), 100); return; }

            const map = L.map(containerId).setView([13.05, 77.58], 13);
            state.activeMapInstance = map;

            // Online Tile Layer
            const onlineTile = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 });
            
            // Tactical Grid Overlay
            L.GridLayer.Tactical = L.GridLayer.extend({
                createTile: function (coords) {
                    var tile = document.createElement('div');
                    tile.style.outline = '1px solid rgba(255,255,255,0.2)'; 
                    tile.style.display = 'flex'; tile.style.alignItems = 'flex-end'; tile.style.justifyContent = 'flex-end'; 
                    tile.style.padding = '2px'; tile.style.fontSize = '9px'; tile.style.color = 'rgba(255,255,255,0.4)';
                    tile.innerHTML = `G:${coords.x}-${coords.y}`; 
                    return tile;
                }
            });

            // OpenWeatherMap Temperature Tile Overlay (Broadcast Style)
            // Note: Replace YOUR_API_KEY_HERE with an actual OpenWeatherMap API key if you want real data to load.
            const weatherTile = L.tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=YOUR_API_KEY_HERE', {
                opacity: 0.65,
                className: 'weather-layer',
                maxZoom: 19
            });

            // Grouping the base map, grid, and weather layer
            state.onlineLayers = L.layerGroup([onlineTile, new L.GridLayer.Tactical({tileSize: 128}), weatherTile]);

            // Offline GeoJSON
            state.offlineLayers = L.geoJSON(localGISData, {
                style: function (feature) { return { color: "#3b82f6", weight: 2, fillColor: "#93c5fd", fillOpacity: 0.2 }; }
            });

            const customIcon = L.divIcon({
                className: 'custom-icon',
                html: `<div style="background-color: var(--danger); width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(239,68,68,1);"></div>`
            });
            L.marker([state.nodes[0].lat, state.nodes[0].lng], {icon: customIcon}).addTo(map)
             .bindPopup(`<b style="color:black">${state.nodes[0].id}</b><br><span style="color:black">${state.nodes[0].hazard}</span>`);

            app.updateNetworkMode(badgeId);
            setTimeout(() => map.invalidateSize(), 200);
        },

        updateNetworkMode: function(badgeId) {
            if (!state.activeMapInstance) return;
            const map = state.activeMapInstance;
            const badge = document.getElementById(badgeId);

            if (navigator.onLine) {
                if (map.hasLayer(state.offlineLayers)) map.removeLayer(state.offlineLayers);
                state.onlineLayers.addTo(map);
                if(badge) { badge.className = 'net-online'; badge.innerHTML = '<i class="fa-solid fa-wifi"></i> ONLINE (Weather & Grid)'; }
            } else {
                if (map.hasLayer(state.onlineLayers)) map.removeLayer(state.onlineLayers);
                state.offlineLayers.addTo(map);
                if(badge) { badge.className = 'net-offline'; badge.innerHTML = '<i class="fa-solid fa-tower-cell"></i> OFFLINE (Local GIS)'; }
            }
        },

        login: function() {
            const u = document.getElementById('username').value;
            const p = document.getElementById('password').value;
            if (u === 'admin' && p === 'admin') {
                document.getElementById('login-screen').style.display = 'none';
                document.getElementById('app-layout').style.display = 'flex';
                app.switchView('dashboard');
            } else {
                document.getElementById('login-err').style.display = 'block';
            }
        },

        logout: function() {
            document.getElementById('app-layout').style.display = 'none';
            document.getElementById('login-screen').style.display = 'flex';
            document.getElementById('password').value = '';
            document.getElementById('login-err').style.display = 'none';
            if (state.activeMapInstance) { state.activeMapInstance.remove(); state.activeMapInstance = null; }
        }
    };

    // ==========================================
    // 7. EVENT LISTENERS
    // ==========================================
    document.getElementById('login-btn').addEventListener('click', app.login);
    document.getElementById('password').addEventListener('keypress', (e) => { if (e.key === 'Enter') app.login(); });
    document.getElementById('logout-btn').addEventListener('click', app.logout);
    
    document.querySelectorAll('.nav-item[data-view]').forEach(item => {
        item.addEventListener('click', () => app.switchView(item.getAttribute('data-view')));
    });

    window.addEventListener('online', () => {
        const badge = document.getElementById('view-dashboard').classList.contains('active') ? 'net-badge-dash' : 'net-badge-full';
        app.updateNetworkMode(badge);
    });
    window.addEventListener('offline', () => {
        const badge = document.getElementById('view-dashboard').classList.contains('active') ? 'net-badge-dash' : 'net-badge-full';
        app.updateNetworkMode(badge);
    });
};