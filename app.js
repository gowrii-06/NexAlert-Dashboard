window.onload = function() {
    // ==========================================
    // 1. ENTERPRISE DARK THEME CSS
    // ==========================================
    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --bg-base: #0b1120;
            --bg-panel: #1e293b;
            --bg-elevated: #16213a;
            --bg-hover: #334155;
            --border: #334155;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --accent: #10b981;
            --accent-hover: #059669;
            --danger: #ef4444;
            --warn: #f59e0b;
            --info: #3b82f6;
            --purple: #a78bfa;
            --sim: #fb923c;
        }
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; display: flex; height: 100vh; font-family: 'Segoe UI', system-ui, sans-serif; background-color: var(--bg-base); color: var(--text-main); overflow: hidden; }

        h1, h2, h3, h4 { margin: 0; font-weight: 600; letter-spacing: 0.3px; }
        .text-muted { color: var(--text-muted); }
        .text-sm { font-size: 0.85rem; }
        .text-xs { font-size: 0.75rem; }
        .flex { display: flex; }
        .flex-col { display: flex; flex-direction: column; }
        .space-between { justify-content: space-between; }
        .align-center { align-items: center; }
        .gap-4 { gap: 12px; }
        .gap-2 { gap: 6px; }
        .wrap { flex-wrap: wrap; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .grid-6 { display: grid; grid-template-columns: repeat(6, 1fr); gap: 14px; }
        @media (max-width: 1100px) { .grid-2, .grid-3, .grid-4, .grid-6 { grid-template-columns: 1fr 1fr; } }

        #login-screen { position: absolute; inset: 0; background: radial-gradient(circle at center, #1e293b 0%, #0b1120 100%); display: flex; justify-content: center; align-items: center; z-index: 1000; }
        .login-box { background: var(--bg-panel); padding: 40px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); width: 100%; max-width: 340px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); }
        .login-brand { text-align: center; margin-bottom: 30px; }
        .login-brand h2 { color: var(--text-main); font-size: 1.5rem; display: flex; justify-content: center; align-items: center; gap: 10px; }
        .login-brand p { color: var(--text-muted); font-size: 0.85rem; margin-top: 5px; }
        .input-group { margin-bottom: 20px; }
        .input-group label { display: block; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; }
        .login-input { width: 100%; padding: 12px 15px; background: rgba(11, 17, 32, 0.5); border: 1px solid var(--border); color: white; border-radius: 6px; box-sizing: border-box; font-size: 0.95rem; transition: border-color 0.2s; }
        .login-input:focus { outline: none; border-color: var(--accent); }
        .login-hint { color: var(--text-muted); font-size: 0.75rem; text-align: center; margin-top: 14px; }
        .btn-primary { padding: 12px 18px; background: var(--accent); color: white; border: none; border-radius: 6px; font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: background 0.2s; }
        .btn-primary:hover { background: var(--accent-hover); }
        .btn-primary:disabled { background: #334155; color: var(--text-muted); cursor: not-allowed; }
        .btn-primary.full { width: 100%; }
        .btn-primary.small { padding: 6px 14px; font-size: 0.78rem; }
        .btn-secondary { padding: 8px 14px; background: transparent; border: 1px solid var(--border); color: var(--text-main); border-radius: 6px; font-size: 0.82rem; cursor: pointer; }
        .btn-secondary:hover { background: var(--bg-hover); }
        .btn-secondary:disabled { opacity: 0.4; cursor: not-allowed; }
        .btn-danger { padding: 8px 14px; background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.5); color: #fca5a5; border-radius: 6px; font-size: 0.82rem; cursor: pointer; font-weight: 600; }
        .btn-danger:hover { background: rgba(239,68,68,0.28); }
        .btn-danger:disabled { opacity: 0.35; cursor: not-allowed; }
        button:focus-visible, .nav-item:focus-visible, select:focus-visible, input:focus-visible, [tabindex]:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

        #app-layout { display: none; width: 100%; height: 100%; }
        .sidebar { width: 250px; background-color: var(--bg-base); border-right: 1px solid var(--border); display: flex; flex-direction: column; flex-shrink: 0; padding: 16px 12px; overflow-y: auto; }
        .sidebar-brand { font-size: 1.25rem; font-weight: bold; color: var(--accent); margin-bottom: 20px; padding: 0 10px; display: flex; align-items: center; gap: 10px; }
        .sidebar-section-label { font-size: 0.68rem; color: #64748b; letter-spacing: 0.8px; padding: 14px 12px 6px; }
        .nav-item { padding: 10px 12px; margin-bottom: 2px; border-radius: 8px; cursor: pointer; color: var(--text-muted); transition: all 0.15s; display: flex; align-items: center; gap: 11px; font-weight: 500; font-size: 0.88rem; }
        .nav-item:hover { background: var(--bg-hover); color: var(--text-main); }
        .nav-item.active { background: rgba(16, 185, 129, 0.15); color: var(--accent); border-left: 3px solid var(--accent); border-radius: 0 8px 8px 0; }
        .nav-item i { width: 16px; text-align: center; }

        .main-content { flex: 1; display: flex; flex-direction: column; overflow-y: auto; background-color: #0f172a; position: relative; }
        .header { min-height: 62px; border-bottom: 1px solid var(--border); padding: 0 26px; display: flex; justify-content: space-between; align-items: center; flex-shrink: 0; background: var(--bg-panel); box-shadow: 0 1px 3px rgba(0,0,0,0.2); z-index: 10; flex-wrap: wrap; gap: 10px; }
        .role-select { background: var(--bg-base); border: 1px solid var(--border); color: var(--text-main); padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; }
        .view-container { padding: 24px 28px 60px; max-width: 1360px; margin: 0 auto; width: 100%; box-sizing: border-box; display: none; }
        .view-container.active { display: block; animation: fadeIn 0.2s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .view-container.active, .modal { animation: none !important; } }

        .panel { background: var(--bg-panel); border: 1px solid var(--border); border-radius: 10px; padding: 22px; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        .panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; border-bottom: 1px solid var(--border); padding-bottom: 13px; flex-wrap: wrap; gap: 10px; }
        .panel-sub { color: var(--text-muted); font-size: 0.82rem; margin-top: 4px; }

        .badge { padding: 3px 9px; border-radius: 4px; font-size: 0.7rem; font-weight: bold; letter-spacing: 0.4px; display: inline-block; white-space: nowrap; }
        .badge.b-critical { background: rgba(239, 68, 68, 0.15); color: #fca5a5; border: 1px solid rgba(239, 68, 68, 0.4); }
        .badge.b-confirmed { background: rgba(239, 68, 68, 0.1); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); }
        .badge.b-suspected { background: rgba(245, 158, 11, 0.15); color: #fcd34d; border: 1px solid rgba(245, 158, 11, 0.4); }
        .badge.b-watch { background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.4); }
        .badge.b-normal { background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.4); }
        .badge.b-resolved { background: rgba(148, 163, 184, 0.15); color: #cbd5e1; border: 1px solid rgba(148, 163, 184, 0.4); }
        .badge.b-unknown { background: rgba(148, 163, 184, 0.1); color: #94a3b8; border: 1px dashed rgba(148,163,184,0.5); }
        .badge.b-good { background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.4); }
        .badge.b-degraded { background: rgba(245, 158, 11, 0.15); color: #fcd34d; border: 1px solid rgba(245, 158, 11, 0.4); }
        .badge.b-sim { background: rgba(251, 146, 60, 0.18); color: #fdba74; border: 1px solid rgba(251,146,60,0.5); }

        .data-table { width: 100%; border-collapse: collapse; text-align: left; }
        .data-table th { padding: 10px 13px; color: var(--text-muted); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border); white-space: nowrap; }
        .data-table td { padding: 12px 13px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem; }
        .data-table tr.clickable { cursor: pointer; }
        .data-table tr.clickable:hover td { background: rgba(255,255,255,0.03); }
        .data-table tr.selected td { background: rgba(16,185,129,0.08); }
        .data-table tr:last-child td { border-bottom: none; }

        .stat-row { display: flex; justify-content: space-between; align-items: center; padding: 9px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.87rem; }
        .stat-row:last-child { border-bottom: none; }

        .health-tile { background: var(--bg-base); border: 1px solid var(--border); border-radius: 8px; padding: 14px; }
        .health-tile .h-label { color: var(--text-muted); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
        .health-tile .h-value { font-size: 0.95rem; font-weight: 700; display: flex; align-items: center; gap: 7px; }
        .dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; flex-shrink: 0; }
        .dot.healthy { background: var(--accent); box-shadow: 0 0 6px var(--accent); }
        .dot.degraded { background: var(--warn); box-shadow: 0 0 6px var(--warn); }
        .dot.disconnected, .dot.unavailable { background: var(--danger); box-shadow: 0 0 6px var(--danger); }
        .dot.unknown { background: #64748b; }

        .map-wrapper { width: 100%; border-radius: 8px; overflow: hidden; border: 1px solid var(--border); background: #1e293b; position: relative; z-index: 1;}
        .leaflet-layer, .leaflet-control-zoom-in, .leaflet-control-zoom-out, .leaflet-control-attribution { filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%); }
        .weather-layer { filter: none !important; mix-blend-mode: screen; }

        .net-online { background: rgba(16, 185, 129, 0.15); color: #6ee7b7; padding: 4px 10px; border-radius: 20px; font-size: 0.72rem; border: 1px solid rgba(16, 185, 129, 0.4); display: flex; align-items: center; gap: 5px; font-weight: 600;}
        .net-offline { background: rgba(239, 68, 68, 0.15); color: #fca5a5; padding: 4px 10px; border-radius: 20px; font-size: 0.72rem; border: 1px solid rgba(239, 68, 68, 0.4); display: flex; align-items: center; gap: 5px; font-weight: 600;}

        .tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--border); margin-bottom: 18px; flex-wrap: wrap; }
        .tab-btn { padding: 9px 15px; background: transparent; border: none; color: var(--text-muted); font-size: 0.82rem; font-weight: 600; cursor: pointer; border-bottom: 2px solid transparent; }
        .tab-btn:hover { color: var(--text-main); }
        .tab-btn.active { color: var(--accent); border-bottom-color: var(--accent); }

        .freshness-tag { font-size: 0.72rem; color: var(--text-muted); }
        .freshness-tag.stale { color: var(--warn); }

        .layer-toggle { display: flex; align-items: center; gap: 7px; padding: 7px 10px; background: var(--bg-base); border: 1px solid var(--border); border-radius: 6px; font-size: 0.78rem; cursor: pointer; user-select: none; }
        .layer-toggle input { accent-color: var(--accent); }

        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal { background: var(--bg-panel); border: 1px solid var(--border); border-radius: 12px; padding: 26px; max-width: 480px; width: 100%; max-height: 86vh; overflow-y: auto; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); }
        .modal h3 { margin-bottom: 14px; }
        .modal .stat-row { font-size: 0.85rem; }
        .modal textarea, .modal select, .modal input[type=text] { width: 100%; background: rgba(11,17,32,0.6); border: 1px solid var(--border); color: white; border-radius: 6px; padding: 9px 11px; font-size: 0.85rem; margin-top: 6px; font-family: inherit; }

        .demo-banner { background: linear-gradient(90deg, rgba(251,146,60,0.2), rgba(251,146,60,0.05)); border: 1px solid rgba(251,146,60,0.5); color: #fdba74; padding: 10px 18px; border-radius: 8px; font-size: 0.82rem; font-weight: 600; margin-bottom: 18px; display: flex; align-items: center; gap: 10px; }

        .reliability-bar-track { width: 100%; height: 7px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden; margin-top: 4px; }
        .reliability-bar-fill { height: 100%; background: var(--accent); }

        .topology-tree { font-family: 'Consolas', monospace; font-size: 0.82rem; line-height: 1.9; color: var(--text-muted); background: var(--bg-base); border: 1px solid var(--border); border-radius: 8px; padding: 16px; }
        .node-badge-master { color: #fde047; font-weight: 700; }
        .node-badge-field { color: #93c5fd; font-weight: 700; }

        .pipeline-flow { display: flex; align-items: flex-start; overflow-x: auto; padding: 10px 4px 20px; }
        .flow-node { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 92px; cursor: pointer; }
        .flow-node-circle { width: 42px; height: 42px; border-radius: 50%; background: var(--bg-base); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 0.95rem; color: var(--text-muted); transition: all 0.15s; }
        .flow-node:hover .flow-node-circle { border-color: var(--accent); color: var(--text-main); }
        .flow-node.done .flow-node-circle { border-color: var(--accent); color: var(--accent); }
        .flow-node.active .flow-node-circle { border-color: var(--accent); color: var(--accent); background: rgba(16,185,129,0.14); box-shadow: 0 0 0 4px rgba(16,185,129,0.12); }
        .flow-node-label { margin-top: 8px; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.4px; color: var(--text-muted); text-align: center; }
        .flow-node.active .flow-node-label, .flow-node.done .flow-node-label { color: var(--accent); }
        .flow-connector { flex: 1 0 18px; height: 2px; background: var(--border); margin-top: 21px; min-width: 14px; }
        .flow-connector.done { background: var(--accent); }

        .stage-detail { display: flex; gap: 16px; align-items: flex-start; background: var(--bg-base); border: 1px solid var(--border); border-radius: 10px; padding: 18px; }
        .stage-detail-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.3); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
        .stage-detail-body { flex: 1; min-width: 0; }
        .stage-detail-title { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 4px; }
        .stage-detail-desc { color: var(--text-muted); font-size: 0.82rem; margin-bottom: 12px; }
        .stage-detail-readout { background: var(--bg-panel); border: 1px solid var(--border); border-left: 3px solid var(--accent); border-radius: 6px; padding: 12px 14px; font-family: 'Consolas', monospace; font-size: 0.82rem; color: var(--text-main); line-height: 1.5; word-break: break-word; }
        .stage-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 14px; }

        .empty-state { text-align: center; padding: 40px 20px; color: var(--text-muted); }
        .evidence-list { list-style: none; padding: 0; margin: 0; }
        .evidence-list li { padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.83rem; display: flex; gap: 8px; }
        .evidence-list li:last-child { border-bottom: none; }
        .evidence-list li i { color: var(--accent); margin-top: 3px; }

        .action-bar { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; }
        .conf-key { color: var(--text-muted); }

        ::-webkit-scrollbar { width: 9px; height: 9px; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
    `;
    document.head.appendChild(style);

    // ==========================================
    // 2. ROLES & PERMISSIONS
    // ==========================================
    const ROLES = ['VIEWER', 'ANALYST', 'INCIDENT_OPERATOR', 'SUPERVISOR', 'SYSTEM_ADMIN'];
    const ROLE_LABELS = { VIEWER: 'Viewer', ANALYST: 'Analyst', INCIDENT_OPERATOR: 'Incident Operator', SUPERVISOR: 'Supervisor', SYSTEM_ADMIN: 'System Administrator' };
    const ROLE_PERMS = {
        VIEWER: [],
        ANALYST: ['view_evidence', 'run_simulation', 'replay', 'add_notes'],
        INCIDENT_OPERATOR: ['view_evidence', 'run_simulation', 'replay', 'acknowledge', 'response_workflow', 'prepare_alert'],
        SUPERVISOR: ['view_evidence', 'run_simulation', 'replay', 'acknowledge', 'response_workflow', 'prepare_alert', 'approve_alert', 'stand_down', 'merge_split'],
        SYSTEM_ADMIN: ['view_evidence', 'configuration', 'integrations', 'flags', 'users']
    };
    function can(perm) { return (ROLE_PERMS[state.currentRole] || []).includes(perm); }

    // ==========================================
    // 3. MOCK DATA LAYER (clearly separated from a future REST/WebSocket/MQTT layer)
    // ==========================================
    let seq = 1000;
    function uid(prefix) { seq += 1; return prefix + '-' + seq; }
    function nowIso() { return new Date().toISOString(); }
    function timeAgo(iso) {
        const s = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 1000));
        if (s < 60) return s + 's ago';
        if (s < 3600) return Math.round(s / 60) + 'm ago';
        return Math.round(s / 3600) + 'h ago';
    }

    const state = {
        currentRole: 'SUPERVISOR',
        currentView: 'overview',
        selectedIncidentId: null,
        selectedNodeId: null,
        selectedPipelineStage: 'RAW',
        selectedHazardTab: 'FIRE',
        replayEvaluatorMode: false,
        fireMode: 'LIVE',
        fireStep: 0,
        firePlaying: false,
        fireTimer: null,
        demoRunning: false,
        internetOnline: true,
        masterUnavailable: false,
        system: { nodes: 4, packets: 24812 },
        activeMapInstance: null,
        onlineLayers: null,
        offlineLayers: null,
        fireMapInstance: null,
        nodesMapInstance: null
    };

    const localGISData = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "properties": { "name": "Validation Sector Zone", "risk": "High" },
            "geometry": { "type": "Polygon", "coordinates": [[[77.53, 13.02], [77.62, 13.02], [77.62, 13.08], [77.53, 13.08], [77.53, 13.02]]] }
        }]
    };

    // ---- Nodes (fleet) ----
    state.nodes = [
        { id: 'Master-Node-01', role: 'MASTER', zone: 'Validation Prototype Sector', lat: 13.05, lng: 77.58, connectivity: 'ONLINE', heartbeat: nowIso(), telemetryFreshness: '4s ago', battery: 91, solar: 'ACTIVE', firmware: 'v2.4.1', signalQuality: 'HIGH', firmwareOutdated: false, reliability: { H: 0.98, Q: 0.95, K: 0.97 }, baseline: 'READY', diagnostics: { esp32: 'HEALTHY', storage: '92%', lora: '98% / HEALTHY', uptime: '14d 08h 12m' },
          sensors: [
            { id: 'S-T1', name: 'Temperature', type: 'thermal', value: '31.4°C', measuredAt: nowIso(), receivedAt: nowIso(), health: 0.99, quality: 0.95, consistency: 0.97, status: 'VALID', anomaly: 'NONE' },
            { id: 'S-SM1', name: 'Smoke / PM2.5', type: 'particulate', value: '18 µg/m³', measuredAt: nowIso(), receivedAt: nowIso(), health: 0.97, quality: 0.93, consistency: 0.95, status: 'VALID', anomaly: 'NONE' },
            { id: 'S-H1', name: 'Humidity', type: 'humidity', value: '46%', measuredAt: nowIso(), receivedAt: nowIso(), health: 0.99, quality: 0.96, consistency: 0.98, status: 'VALID', anomaly: 'NONE' },
            { id: 'S-G1', name: 'Gas / MQ-7', type: 'gas', value: '4 ppm', measuredAt: nowIso(), receivedAt: nowIso(), health: 0.96, quality: 0.9, consistency: 0.94, status: 'VALID', anomaly: 'NONE' }
          ] },
        { id: 'Field-Node-02', role: 'FIELD', zone: 'North Ridge', lat: 13.062, lng: 77.591, connectivity: 'ONLINE', heartbeat: nowIso(), telemetryFreshness: '11s ago', battery: 74, solar: 'ACTIVE', firmware: 'v2.4.1', signalQuality: 'HIGH', firmwareOutdated: false, reliability: { H: 0.95, Q: 0.9, K: 0.93 }, baseline: 'READY', diagnostics: { esp32: 'HEALTHY', storage: '81%', lora: '94% / HEALTHY', uptime: '9d 02h 40m' },
          sensors: [
            { id: 'S-T2', name: 'Temperature', type: 'thermal', value: '58.9°C', measuredAt: nowIso(), receivedAt: nowIso(), health: 0.93, quality: 0.88, consistency: 0.85, status: 'VALID', anomaly: 'ELEVATED' },
            { id: 'S-SM2', name: 'Smoke / PM2.5', type: 'particulate', value: '210 µg/m³', measuredAt: nowIso(), receivedAt: nowIso(), health: 0.91, quality: 0.86, consistency: 0.82, status: 'VALID', anomaly: 'ELEVATED' }
          ] },
        { id: 'Field-Node-03', role: 'FIELD', zone: 'East Riverbank', lat: 13.041, lng: 77.571, connectivity: 'DEGRADED', heartbeat: '3m ago', telemetryFreshness: '3m ago', battery: 38, solar: 'CHARGING', firmware: 'v2.3.9', signalQuality: 'MODERATE', firmwareOutdated: true, reliability: { H: 0.7, Q: 0.62, K: 0.68 }, baseline: 'RECOVERING', diagnostics: { esp32: 'HEALTHY', storage: '65%', lora: '61% / DEGRADED', uptime: '2d 14h 05m' },
          sensors: [
            { id: 'S-W1', name: 'Water Level', type: 'water', value: '2.3 m', measuredAt: '3m ago', receivedAt: '3m ago', health: 0.71, quality: 0.6, consistency: 0.66, status: 'VALID', anomaly: 'NONE' }
          ] },
        { id: 'Field-Node-04', role: 'FIELD', zone: 'South Gate', lat: 13.035, lng: 77.588, connectivity: 'OFFLINE', heartbeat: '41m ago', telemetryFreshness: '41m ago', battery: 12, solar: 'INACTIVE', firmware: 'v2.3.9', signalQuality: 'UNKNOWN', firmwareOutdated: true, reliability: { H: 0.1, Q: 0.1, K: 0.2 }, baseline: 'FROZEN', diagnostics: { esp32: 'UNREACHABLE', storage: 'UNKNOWN', lora: '0% / OFFLINE', uptime: '—' }, sensors: [] }
    ];

    // ---- Incidents ----
    state.incidents = [
        { id: 'INC-2201', hazard: 'FIRE', state: 'CRITICAL', infoCondition: 'GOOD', severity: 91, priority: 1, location: { lat: 13.062, lng: 77.591, name: 'North Ridge' },
          footprint: { current: 180, warning: 420, projection: 800, buffer: 1000 }, projectionHorizon: '90 min', freshnessSec: 8,
          evidence: ['4 temperature sensors exceed baseline', '3 smoke sensors corroborate the event', 'anomaly persisted for 96 seconds', 'wind direction supports propagation toward North Ridge treeline', 'sensor reliability is HIGH'],
          recommendation: 'Issue CONFIRMED fire alert for North Ridge zone and dispatch response team.', currentAction: 'Awaiting supervisor alert approval', assignedAuthority: 'District Fire & Emergency Services',
          correlationBasis: 'Correlated because 3 sensors are within 250 m and anomalies occurred within 90 seconds.', correlatedNodeIds: ['Field-Node-02', 'Master-Node-01'],
          createdAt: new Date(Date.now() - 12 * 60000).toISOString(), updatedAt: new Date(Date.now() - 8000).toISOString(), source: 'EDGE' },
        { id: 'INC-2202', hazard: 'FLOOD', state: 'SUSPECTED', infoCondition: 'DEGRADED', severity: 54, priority: 2, location: { lat: 13.041, lng: 77.571, name: 'East Riverbank' },
          footprint: { current: 0, warning: 260, projection: 500, buffer: 650 }, projectionHorizon: '4 hr', freshnessSec: 190,
          evidence: ['Water level rising 0.4 m/hr over last 3 readings', 'Rainfall trend upward for 2 hours', 'Only 1 node reporting — corroboration limited'],
          recommendation: 'Hold for additional corroboration; node reliability currently DEGRADED.', currentAction: 'Analyst reviewing evidence', assignedAuthority: 'District Disaster Management Authority',
          correlationBasis: 'Single-node observation — spatial/temporal correlation pending additional sensors.', correlatedNodeIds: ['Field-Node-03'],
          createdAt: new Date(Date.now() - 40 * 60000).toISOString(), updatedAt: new Date(Date.now() - 190000).toISOString(), source: 'EDGE' },
        { id: 'INC-2189', hazard: 'POLLUTION', state: 'WATCH', infoCondition: 'GOOD', severity: 28, priority: 4, location: { lat: 13.05, lng: 77.585, name: 'Validation Sector Core' },
          footprint: { current: 0, warning: 150, projection: 150, buffer: 200 }, projectionHorizon: '—', freshnessSec: 300,
          evidence: ['PM2.5 mildly elevated above baseline', 'Meteorology consistent with local dust, not combustion'],
          recommendation: 'Continue monitoring; no operator action required.', currentAction: 'Monitoring', assignedAuthority: 'Environmental Monitoring Cell',
          correlationBasis: 'Single sensor, within normal seasonal variance.', correlatedNodeIds: ['Master-Node-01'],
          createdAt: new Date(Date.now() - 3 * 3600000).toISOString(), updatedAt: new Date(Date.now() - 300000).toISOString(), source: 'EDGE' },
        { id: 'INC-2150', hazard: 'FIRE', state: 'RESOLVED', infoCondition: 'GOOD', severity: 12, priority: 6, location: { lat: 13.03, lng: 77.60, name: 'West Perimeter' },
          footprint: { current: 0, warning: 0, projection: 0, buffer: 0 }, projectionHorizon: '—', freshnessSec: 86400,
          evidence: ['Confirmed extinguished by ground response, 08:40 IST', 'No thermal anomaly for 6 consecutive hours'],
          recommendation: 'Closed — no further action.', currentAction: 'Closed', assignedAuthority: 'District Fire & Emergency Services',
          correlationBasis: 'N/A — resolved incident.', correlatedNodeIds: [],
          createdAt: new Date(Date.now() - 26 * 3600000).toISOString(), updatedAt: new Date(Date.now() - 20 * 3600000).toISOString(), source: 'UI' }
    ];
    state.selectedIncidentId = state.incidents[0].id;

    // ---- Alerts ----
    state.alerts = [
        { id: 'ALT-551', incidentId: 'INC-2189', hazard: 'POLLUTION', state: 'ACKNOWLEDGED', targetZone: 'Validation Sector Core', recipients: 'Environmental Monitoring Cell', channel: 'ONLINE', createdTime: new Date(Date.now() - 2 * 3600000).toISOString(), approvalIdentity: 'S. Rao (Supervisor)', deliveryStatus: 'ACKNOWLEDGED', reason: 'Routine monitoring notice', freshnessSec: 7200 },
        { id: 'ALT-550', incidentId: 'INC-2150', hazard: 'FIRE', state: 'ISSUED', targetZone: 'West Perimeter', recipients: 'Fire & Emergency Services, NDMA Liaison', channel: 'OFFLINE', createdTime: new Date(Date.now() - 25 * 3600000).toISOString(), approvalIdentity: 'S. Rao (Supervisor)', deliveryStatus: 'DELIVERED', reason: 'Confirmed fire, resource dispatch', freshnessSec: 90000 }
    ];

    // ---- Responses ----
    state.responses = [
        { id: 'RSP-77', incidentId: 'INC-2189', state: 'ACKNOWLEDGED', team: 'Env. Monitoring Cell — Unit B', createdAt: new Date(Date.now() - 3600000).toISOString() },
        { id: 'RSP-76', incidentId: 'INC-2150', state: 'RESOLVED', team: 'Fire Response Unit 3', createdAt: new Date(Date.now() - 24 * 3600000).toISOString() }
    ];

    // ---- Audit trail (append-only) ----
    state.audit = [];
    function pushAudit({ action, entity, before, after, reason, source, correlationId }) {
        state.audit.unshift({
            eventId: uid('AUD'), serverTimestamp: nowIso(), originalTimestamp: nowIso(),
            actor: ROLE_LABELS[state.currentRole] + ' (demo user)', role: state.currentRole,
            action, entity: entity || '—', before: before || '—', after: after || '—',
            reason: reason || '—', correlationId: correlationId || '—', source: source || 'UI'
        });
        if (state.audit.length > 300) state.audit.length = 300;
    }
    pushAudit({ action: 'System initialized', entity: 'SYSTEM', source: 'SYSTEM' });

    // ---- Simulation / Failure lab ----
    state.simLab = {
        scenarioId: 'SCN-0001', scenarioVersion: 'v1.0', running: false, step: 0,
        injected: [], expectedBehavior: '—', actualBehavior: '—'
    };
    const FAILURE_TYPES = ['Missing sensor', 'Stale sensor', 'Sensor drift', 'Contradictory sensors', 'Communication loss', 'Communication recovery', 'Master node failure', 'Internet failure', 'Partial node failure'];

    // ---- Mock API layer (stand-in for future REST/WebSocket/MQTT) ----
    const api = {
        getIncidents: () => state.incidents,
        getIncident: (id) => state.incidents.find(i => i.id === id),
        getNodes: () => state.nodes,
        getNode: (id) => state.nodes.find(n => n.id === id),
        getTelemetry: (nodeId) => (state.nodes.find(n => n.id === nodeId) || {}).sensors || [],
        getSystemHealth: () => computeSystemHealth(),
        getAlerts: () => state.alerts,
        getAuditEvents: () => state.audit,
        getSimulationState: () => state.simLab
    };

    function computeSystemHealth() {
        const online = state.internetOnline;
        const masterNode = state.nodes.find(n => n.role === 'MASTER');
        const masterOk = !state.masterUnavailable && masterNode && masterNode.connectivity === 'ONLINE';
        const fieldNodes = state.nodes.filter(n => n.role === 'FIELD');
        const fieldOnline = fieldNodes.filter(n => n.connectivity === 'ONLINE').length;
        return {
            overall: !online ? 'DISCONNECTED' : state.masterUnavailable ? 'MASTER UNAVAILABLE' : fieldOnline < fieldNodes.length ? 'DEGRADED' : 'HEALTHY',
            internet: online ? 'HEALTHY' : 'DISCONNECTED',
            master: masterOk ? 'HEALTHY' : 'MASTER UNAVAILABLE',
            fieldNodes: fieldOnline + ' / ' + fieldNodes.length + ' ONLINE',
            lastSync: online ? 'Just now' : '6m ago (cached)',
            dataFreshness: online ? 'LIVE' : 'STALE (cached)',
            backend: online ? 'HEALTHY' : 'UNKNOWN',
            lora: masterNode ? masterNode.diagnostics.lora : 'UNKNOWN',
            batteryHealth: 'NOMINAL',
            solar: 'ACTIVE (3/4 nodes)',
            storage: 'NOMINAL',
            uptime: masterNode ? masterNode.diagnostics.uptime : 'UNKNOWN'
        };
    }

    // ==========================================
    // 4. SHARED UI HELPERS
    // ==========================================
    const NAV = [
        { id: 'overview', label: 'Overview', icon: 'fa-solid fa-border-all' },
        { id: 'firespread', label: 'Fire Spread', icon: 'fa-solid fa-fire' },
        { id: 'multihazard', label: 'Multi-Hazard & Simulation', icon: 'fa-solid fa-flask' },
        { id: 'nodes', label: 'Nodes & Network', icon: 'fa-solid fa-tower-broadcast' },
        { id: 'telemetry', label: 'Telemetry & Intelligence', icon: 'fa-solid fa-diagram-project' },
        { id: 'alertmgmt', label: 'Alert Management', icon: 'fa-solid fa-bell' }
    ];

    function stateBadgeClass(s) {
        const map = { CRITICAL: 'b-critical', CONFIRMED: 'b-confirmed', SUSPECTED: 'b-suspected', WATCH: 'b-watch', NORMAL: 'b-normal', RESOLVED: 'b-resolved' };
        return map[s] || 'b-unknown';
    }
    function infoCondBadgeClass(c) {
        const map = { GOOD: 'b-good', DEGRADED: 'b-degraded', UNKNOWN: 'b-unknown' };
        return map[c] || 'b-unknown';
    }
    function healthDot(status) {
        const map = { HEALTHY: 'healthy', DEGRADED: 'degraded', DISCONNECTED: 'disconnected', 'MASTER UNAVAILABLE': 'unavailable', UNKNOWN: 'unknown' };
        return map[status] || 'unknown';
    }
    function hazardIcon(h) {
        const map = { FIRE: 'fa-solid fa-fire', FLOOD: 'fa-solid fa-water', POLLUTION: 'fa-solid fa-smog', LANDSLIDE: 'fa-solid fa-mountain', EXTREME_HEAT: 'fa-solid fa-temperature-high', UNKNOWN: 'fa-solid fa-circle-question' };
        return map[h] || 'fa-solid fa-circle-question';
    }
    function hazardLabel(h) {
        const map = { FIRE: 'Fire', FLOOD: 'Flood', POLLUTION: 'Pollution', LANDSLIDE: 'Landslide', EXTREME_HEAT: 'Extreme Heat', UNKNOWN: 'Unknown Hazard' };
        return map[h] || h;
    }
    function freshTag(sec) {
        const stale = sec > 120;
        const label = sec < 60 ? sec + 's ago' : sec < 3600 ? Math.round(sec / 60) + 'm ago' : Math.round(sec / 3600) + 'h ago';
        return `<span class="freshness-tag ${stale ? 'stale' : ''}"><i class="fa-solid ${stale ? 'fa-triangle-exclamation' : 'fa-circle-check'}"></i> ${label}</span>`;
    }
    function permBtn(perm, label, onclick, extraClass) {
        const disabled = !can(perm);
        return `<button class="${extraClass || 'btn-secondary'}" ${disabled ? 'disabled title="Not permitted for your current role"' : `onclick="${onclick}"`}>${label}</button>`;
    }
    function openModal(html) {
        closeModal();
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.id = 'modal-overlay';
        overlay.innerHTML = `<div class="modal">${html}</div>`;
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
        document.body.appendChild(overlay);
    }
    function closeModal() {
        const el = document.getElementById('modal-overlay');
        if (el) el.remove();
    }

    // ==========================================
    // 5. BUILD CORE DOM STRUCTURE
    // ==========================================
    document.body.innerHTML = `
        <div id="login-screen">
            <div class="login-box">
                <div class="login-brand">
                    <h2><i class="fa-solid fa-microchip" style="color:var(--accent)"></i> NexAlert OS</h2>
                    <p>Authority Command Center — Environmental Intelligence Network</p>
                </div>
                <div class="input-group">
                    <label>Username</label>
                    <input type="text" id="username" class="login-input">
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" id="password" class="login-input">
                </div>
                <button id="login-btn" class="btn-primary full">SECURE LOGIN</button>
                <p id="login-err" style="color:var(--danger); font-size:0.85rem; text-align:center; display:none; margin-top:15px; font-weight:500;">Authentication failed. Try again.</p>
                <p class="login-hint">Prototype credentials: admin / admin</p>
            </div>
        </div>

        <div id="app-layout">
            <aside class="sidebar">
                <div class="sidebar-brand"><i class="fa-solid fa-microchip"></i> NexAlert Command</div>
                ${NAV.map(n => `<div class="nav-item" data-view="${n.id}" tabindex="0" role="button" aria-label="${n.label}"><i class="${n.icon}"></i> ${n.label}</div>`).join('')}
                <div style="flex:1;"></div>
                <div class="nav-item" id="logout-btn" tabindex="0" role="button"><i class="fa-solid fa-power-off"></i> Disconnect System</div>
            </aside>
            <main class="main-content">
                <header class="header">
                    <h2 id="header-title" style="font-size:1.2rem;">Overview</h2>
                    <div class="flex gap-4 align-center wrap">
                        <div id="net-badge-header"></div>
                        <span class="text-muted text-sm">${state.system.nodes} NODES</span>
                        <select class="role-select" id="role-select" aria-label="Current role">
                            ${ROLES.map(r => `<option value="${r}" ${r === state.currentRole ? 'selected' : ''}>${ROLE_LABELS[r]}</option>`).join('')}
                        </select>
                        <button class="btn-primary small" id="demo-btn"><i class="fa-solid fa-play"></i> Run Demo Scenario</button>
                    </div>
                </header>
                <div id="demo-banner-slot"></div>
                ${NAV.map(n => `<div id="view-${n.id}" class="view-container"></div>`).join('')}
            </main>
        </div>
    `;
    document.getElementById('view-overview').classList.add('active');

    // ==========================================
    // 6. VIEW RENDERERS
    // ==========================================

    function renderDemoBanner() {
        const slot = document.getElementById('demo-banner-slot');
        if (!slot) return;
        slot.innerHTML = state.demoRunning
            ? `<div style="padding:0 28px;"><div class="demo-banner"><i class="fa-solid fa-flask"></i> DEMO / SIMULATION MODE — walking through a synthetic incident lifecycle. No real hazard is occurring.</div></div>`
            : '';
    }

    // ---- OVERVIEW ----
    function renderOverview() {
        document.getElementById('view-overview').innerHTML = `
            <div class="panel">
                <div class="panel-header" style="margin-bottom:15px;">
                    <div class="flex align-center gap-4">
                        <h3><i class="fa-solid fa-map" style="color:var(--info); margin-right:8px;"></i> Regional Situation Map</h3>
                        <div id="net-badge-dash"></div>
                    </div>
                </div>
                <div class="map-wrapper" id="dash-map" style="height: 440px;"></div>
            </div>

            <div class="panel" style="margin-bottom:0;">
                <div class="panel-header"><h3><i class="fa-solid fa-tower-broadcast" style="color:var(--accent); margin-right:8px;"></i>Node Status</h3></div>
                <table class="data-table">
                    <tr><th>Node</th><th>Role</th><th>Zone</th><th>Connectivity</th><th>Battery</th><th>Signal</th><th>Heartbeat</th></tr>
                    ${state.nodes.map(n => `
                        <tr>
                            <td style="font-family:monospace;">${n.id}</td>
                            <td>${n.role === 'MASTER' ? '<span class="node-badge-master">MASTER</span>' : '<span class="node-badge-field">FIELD</span>'}</td>
                            <td class="text-muted">${n.zone}</td>
                            <td><span class="dot ${n.connectivity === 'ONLINE' ? 'healthy' : n.connectivity === 'DEGRADED' ? 'degraded' : 'disconnected'}"></span> ${n.connectivity}</td>
                            <td>${n.battery}%</td>
                            <td>${n.signalQuality}</td>
                            <td class="text-muted text-sm">${typeof n.heartbeat === 'string' && n.heartbeat.includes('T') ? timeAgo(n.heartbeat) : n.heartbeat}</td>
                        </tr>`).join('')}
                </table>
            </div>
        `;
        app.initMap('dash-map', 'net-badge-dash');
        updateHeaderNetBadge();
    }

    function updateHeaderNetBadge() {
        const el = document.getElementById('net-badge-header');
        if (!el) return;
        el.innerHTML = state.internetOnline
            ? `<span class="net-online"><i class="fa-solid fa-wifi"></i> ONLINE</span>`
            : `<span class="net-offline"><i class="fa-solid fa-tower-cell"></i> OFFLINE — cached data</span>`;
    }

    // ---- FIRE SPREAD ----
    function renderFireSpread() {
        const inc = state.incidents.find(i => i.hazard === 'FIRE' && i.state !== 'RESOLVED') || state.incidents[0];
        document.getElementById('view-firespread').innerHTML = `
            <div class="panel">
                <div class="panel-header">
                    <div>
                        <h3><i class="fa-solid fa-fire" style="color:var(--danger); margin-right:8px;"></i>Fire Spread — ${inc.id}</h3>
                        <div class="panel-sub">Model v3.2.1 · Recomputed <span id="fire-recompute-time">just now</span> <span class="badge b-sim" style="margin-left:6px;">${state.fireMode}</span></div>
                    </div>
                    <div class="flex gap-2">
                        <button class="btn-secondary ${state.fireMode === 'LIVE' ? 'btn-primary' : ''}" onclick="app.setFireMode('LIVE')">LIVE</button>
                        <button class="btn-secondary ${state.fireMode === 'SIMULATION' ? 'btn-primary' : ''}" onclick="app.setFireMode('SIMULATION')">SIMULATION</button>
                    </div>
                </div>

                ${state.fireMode === 'SIMULATION' ? `
                <div class="action-bar" style="margin-top:0; margin-bottom:16px;">
                    <button class="btn-secondary" onclick="app.fireControl('play')"><i class="fa-solid fa-play"></i> Play</button>
                    <button class="btn-secondary" onclick="app.fireControl('pause')"><i class="fa-solid fa-pause"></i> Pause</button>
                    <button class="btn-secondary" onclick="app.fireControl('reset')"><i class="fa-solid fa-rotate-left"></i> Reset</button>
                    <button class="btn-secondary" onclick="app.fireControl('step')"><i class="fa-solid fa-forward-step"></i> Step</button>
                    <input type="range" min="0" max="10" value="${state.fireStep}" oninput="app.fireScrub(this.value)" style="flex:1; min-width:160px; accent-color:var(--accent);">
                    <span class="text-xs text-muted">t+${state.fireStep * 10}min</span>
                </div>` : ''}

                <div class="grid-2" style="align-items:start;">
                    <div>
                        <div class="text-xs text-muted" style="margin-bottom:8px;">Layers</div>
                        <div class="flex wrap gap-2" style="margin-bottom:14px;">
                            ${['Terrain', 'Fuel', 'Moisture', 'Wind', 'Physical Footprint', 'Warning', 'Projection', 'Operational Buffer', 'Risk', 'Exposure'].map(l => `
                                <label class="layer-toggle"><input type="checkbox" checked data-layer="${l}"> ${l}</label>`).join('')}
                        </div>
                        <div class="map-wrapper" id="fire-map" style="height:340px;"></div>
                        <div class="text-xs text-muted" style="margin-top:8px;">${state.fireMode} demo geometry — concentric zones are illustrative, not a validated fire-behavior model. Zones: physical footprint (solid) · warning/projection (translucent) · operational buffer (dashed outline).</div>
                    </div>
                    <div>
                        <div class="panel" style="background:var(--bg-base); margin-bottom:14px;">
                            <h4 class="text-sm" style="margin-bottom:10px;">Environmental Context</h4>
                            <div class="stat-row"><span class="text-muted">Wind FROM</span><strong>NW, 18 km/h</strong></div>
                            <div class="stat-row"><span class="text-muted">Propagation TO</span><strong>SE</strong></div>
                            <div class="stat-row"><span class="text-muted">Terrain / slope</span><strong>Moderate, 12°</strong></div>
                            <div class="stat-row"><span class="text-muted">Fuel condition</span><strong>Dry, high load</strong></div>
                            <div class="stat-row"><span class="text-muted">Moisture</span><strong>14% (low)</strong></div>
                            <div class="stat-row"><span class="text-muted">Model version</span><strong>v3.2.1</strong></div>
                            <button class="btn-secondary" style="margin-top:8px; width:100%;" onclick="app.recomputeFire()">Recompute model</button>
                        </div>
                        <div class="panel" style="background:var(--bg-base); margin-bottom:0;">
                            <h4 class="text-sm" style="margin-bottom:10px;">Impact Panel <span class="badge b-sim">DEMO DATA</span></h4>
                            <div class="stat-row"><span class="text-muted">Area affected</span><strong>${(inc.footprint.current / 1000 * 3.14).toFixed(2)} km²</strong></div>
                            <div class="stat-row"><span class="text-muted">Population exposure</span><strong>~ 340 people</strong></div>
                            <div class="stat-row"><span class="text-muted">Roads</span><strong>2 segments</strong></div>
                            <div class="stat-row"><span class="text-muted">Schools</span><strong>0</strong></div>
                            <div class="stat-row"><span class="text-muted">Hospitals</span><strong>0</strong></div>
                            <div class="stat-row"><span class="text-muted">Utilities</span><strong>1 substation</strong></div>
                            <div class="stat-row"><span class="text-muted">Critical assets</span><strong>1 water tower</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        app.initSimpleMap('fire-map', inc);
    }

    // ---- MULTI-HAZARD & SIMULATION ----
    const HAZARD_EVIDENCE_FIELDS = {
        FIRE: ['Temperature', 'Smoke / PM', 'Gas', 'Spread geometry', 'Wind', 'Terrain', 'Fuel'],
        FLOOD: ['Water level', 'Rainfall', 'Trend', 'Persistence', 'Node observations', 'Inundation'],
        POLLUTION: ['PM', 'Gas', 'Meteorology', 'Spatial corroboration', 'Baseline quality'],
        LANDSLIDE: ['Vibration', 'Soil', 'Moisture', 'Rainfall'],
        EXTREME_HEAT: ['Temperature', 'Humidity', 'Heat context', 'Duration'],
        UNKNOWN: ['Anomaly', 'Evidence', 'Sensor information', 'Context']
    };
    function renderMultiHazard() {
        const hazards = Object.keys(HAZARD_EVIDENCE_FIELDS);
        document.getElementById('view-multihazard').innerHTML = `
            <div class="panel">
                <div class="panel-header"><h3><i class="fa-solid fa-flask" style="color:var(--purple); margin-right:8px;"></i>Multi-Hazard & Simulation</h3></div>
                <div class="tabs">
                    ${hazards.map(h => `<button class="tab-btn ${state.selectedHazardTab === h ? 'active' : ''}" onclick="app.selectHazardTab('${h}')">${hazardLabel(h)}</button>`).join('')}
                    <button class="tab-btn ${state.selectedHazardTab === 'SIMLAB' ? 'active' : ''}" onclick="app.selectHazardTab('SIMLAB')">Simulation / Failure Lab</button>
                </div>
                <div id="multihazard-body">${state.selectedHazardTab === 'SIMLAB' ? renderSimLabBody() : renderHazardBody(state.selectedHazardTab)}</div>
            </div>
        `;
    }
    function renderHazardBody(hz) {
        const fields = HAZARD_EVIDENCE_FIELDS[hz];
        const list = state.incidents.filter(i => i.hazard === hz);
        return `
            <div class="grid-2">
                <div>
                    <h4 class="text-sm" style="margin-bottom:10px;">Evidence model</h4>
                    <ul class="evidence-list">${fields.map(f => `<li><i class="fa-solid fa-vial"></i> ${f}</li>`).join('')}</ul>
                </div>
                <div>
                    <h4 class="text-sm" style="margin-bottom:10px;">Incidents for this hazard</h4>
                    ${list.length ? `<table class="data-table"><tr><th>ID</th><th>State</th><th>Severity</th></tr>
                        ${list.map(i => `<tr><td style="font-family:monospace">${i.id}</td><td><span class="badge ${stateBadgeClass(i.state)}">${i.state}</span></td><td>${i.severity}</td></tr>`).join('')}
                        </table>` : `<div class="empty-state">No incidents currently tracked for this hazard.</div>`}
                </div>
            </div>`;
    }
    function renderSimLabBody() {
        const sl = state.simLab;
        return `
            <div class="grid-2" style="margin-bottom:16px;">
                <div>
                    <div class="stat-row"><span class="text-muted">Scenario ID</span><strong>${sl.scenarioId}</strong></div>
                    <div class="stat-row"><span class="text-muted">Scenario version</span><strong>${sl.scenarioVersion}</strong></div>
                    <div class="stat-row"><span class="text-muted">Step</span><strong>${sl.step}</strong></div>
                    <div class="stat-row"><span class="text-muted">Timestamp</span><strong>${nowIso().slice(11, 19)}</strong></div>
                </div>
                <div>
                    <div class="stat-row"><span class="text-muted">Injected failure(s)</span><strong>${sl.injected.length ? sl.injected.join(', ') : 'None'}</strong></div>
                    <div class="stat-row"><span class="text-muted">Expected behavior</span><strong>${sl.expectedBehavior}</strong></div>
                    <div class="stat-row"><span class="text-muted">Actual behavior</span><strong>${sl.actualBehavior}</strong></div>
                    <label class="layer-toggle" style="margin-top:8px;"><input type="checkbox" ${state.replayEvaluatorMode ? 'checked' : ''} onchange="app.toggleEvaluatorMode()"> Evaluator / Replay mode (reveals ground truth)</label>
                </div>
            </div>
            <div class="action-bar" style="margin-top:0;">
                <button class="btn-secondary" onclick="app.simControl('start')"><i class="fa-solid fa-play"></i> Start</button>
                <button class="btn-secondary" onclick="app.simControl('pause')"><i class="fa-solid fa-pause"></i> Pause</button>
                <button class="btn-secondary" onclick="app.simControl('reset')"><i class="fa-solid fa-rotate-left"></i> Reset</button>
                <button class="btn-secondary" onclick="app.simControl('step')"><i class="fa-solid fa-forward-step"></i> Step</button>
                <button class="btn-secondary" onclick="app.simControl('replay')"><i class="fa-solid fa-clock-rotate-left"></i> Replay</button>
            </div>
            <h4 class="text-sm" style="margin:16px 0 8px;">Inject failure</h4>
            <div class="flex wrap gap-2">
                ${FAILURE_TYPES.map(f => `<button class="btn-secondary" onclick="app.injectFailure('${f}')">${f}</button>`).join('')}
            </div>
            ${state.replayEvaluatorMode ? `<div class="text-xs text-muted" style="margin-top:14px;">Ground truth (evaluator only): injected failures directly manipulate node connectivity and system health shown on Overview / Nodes & Network — this is SIMULATION data, never real telemetry.</div>` : ''}
        `;
    }

    // ---- NODES & NETWORK ----
    function renderNodes() {
        const sel = api.getNode(state.selectedNodeId) || state.nodes[0];
        const master = state.nodes.find(n => n.role === 'MASTER');
        const fields = state.nodes.filter(n => n.role === 'FIELD');
        document.getElementById('view-nodes').innerHTML = `
            <div class="panel">
                <div class="panel-header"><h3><i class="fa-solid fa-tower-broadcast" style="color:var(--info); margin-right:8px;"></i>Node Fleet</h3></div>
                <table class="data-table">
                    <tr><th>Node</th><th>Role</th><th>Connectivity</th><th>Heartbeat</th><th>Battery</th><th>Signal</th><th>Firmware</th><th>Baseline</th></tr>
                    ${state.nodes.map(n => `
                        <tr class="clickable ${n.id === sel.id ? 'selected' : ''}" onclick="app.selectNode('${n.id}')">
                            <td style="font-family:monospace;">${n.id}</td>
                            <td>${n.role === 'MASTER' ? '<span class="node-badge-master">MASTER</span>' : '<span class="node-badge-field">FIELD</span>'}</td>
                            <td><span class="dot ${n.connectivity === 'ONLINE' ? 'healthy' : n.connectivity === 'DEGRADED' ? 'degraded' : 'disconnected'}"></span> ${n.connectivity}</td>
                            <td class="text-muted text-sm">${typeof n.heartbeat === 'string' && n.heartbeat.includes('T') ? timeAgo(n.heartbeat) : n.heartbeat}</td>
                            <td>${n.battery}%</td>
                            <td>${n.signalQuality}</td>
                            <td>${n.firmware} ${n.firmwareOutdated ? '<span class="badge b-degraded">UPDATE</span>' : ''}</td>
                            <td>${n.baseline}</td>
                        </tr>`).join('')}
                </table>
            </div>
            <div class="grid-2">
                <div class="panel" style="margin-bottom:0;">
                    <div class="panel-header"><h3 class="text-sm">Topology</h3></div>
                    <div class="topology-tree">
                        <span class="node-badge-master">${master.id}</span> (MASTER)<br>
                        ${fields.map((n, idx) => `&nbsp;&nbsp;${idx === fields.length - 1 ? '└──' : '├──'} <span class="node-badge-field">${n.id}</span> · ${n.zone} <span class="dot ${n.connectivity === 'ONLINE' ? 'healthy' : n.connectivity === 'DEGRADED' ? 'degraded' : 'disconnected'}"></span>`).join('<br>')}
                    </div>
                    <div class="map-wrapper" id="nodes-map" style="height:260px; margin-top:14px;"></div>
                    <div class="text-xs text-muted" style="margin-top:8px;">Blue markers = field nodes · Yellow marker = master node · Dotted lines = logical LoRa links.</div>
                </div>
                <div class="panel" style="margin-bottom:0;">
                    <div class="panel-header"><h3 class="text-sm">Diagnostics — ${sel.id}</h3></div>
                    <div class="stat-row"><span class="text-muted">Zone</span><strong>${sel.zone}</strong></div>
                    <div class="stat-row"><span class="text-muted">Telemetry freshness</span><strong>${sel.telemetryFreshness}</strong></div>
                    <div class="stat-row"><span class="text-muted">Power (battery / solar)</span><strong>${sel.battery}% / ${sel.solar}</strong></div>
                    <div class="stat-row"><span class="text-muted">ESP32 compute</span><strong>${sel.diagnostics.esp32}</strong></div>
                    <div class="stat-row"><span class="text-muted">LoRa</span><strong>${sel.diagnostics.lora}</strong></div>
                    <div class="stat-row"><span class="text-muted">Storage</span><strong>${sel.diagnostics.storage}</strong></div>
                    <div class="stat-row"><span class="text-muted">Uptime</span><strong>${sel.diagnostics.uptime}</strong></div>
                    <div class="stat-row"><span class="text-muted">Baseline status</span><strong>${sel.baseline}</strong></div>
                    <h4 class="text-sm" style="margin:14px 0 8px;">Sensors</h4>
                    ${sel.sensors.length ? sel.sensors.map(s => renderSensorCard(s)).join('') : `<div class="empty-state">No sensor data — node unreachable.</div>`}
                </div>
            </div>
        `;
        app.initFleetMap('nodes-map');
    }
    function renderSensorCard(s) {
        const R = (s.health * s.quality * s.consistency);
        return `<div style="background:var(--bg-base); border:1px solid var(--border); border-radius:8px; padding:10px 12px; margin-bottom:8px;">
            <div class="flex space-between"><strong class="text-sm">${s.name}</strong><span class="text-xs text-muted">${s.value}</span></div>
            <div class="text-xs text-muted" style="margin-top:2px;">measured ${typeof s.measuredAt === 'string' && s.measuredAt.includes('T') ? timeAgo(s.measuredAt) : s.measuredAt} · anomaly: ${s.anomaly}</div>
            <div class="reliability-bar-track"><div class="reliability-bar-fill" style="width:${Math.round(R * 100)}%; background:${R > 0.8 ? 'var(--accent)' : R > 0.5 ? 'var(--warn)' : 'var(--danger)'}"></div></div>
            <div class="text-xs text-muted" style="margin-top:4px;">R = H(${s.health.toFixed(2)}) × Q(${s.quality.toFixed(2)}) × K(${s.consistency.toFixed(2)}) = ${R.toFixed(2)}</div>
        </div>`;
    }

    // ---- TELEMETRY & INTELLIGENCE ----
    const PIPELINE_STAGES = ['RAW', 'QUALITY', 'HEALTH', 'RELIABILITY', 'BASELINE', 'ANOMALY', 'EVIDENCE', 'CONFIDENCE', 'SEVERITY', 'RISK', 'STATE'];
    const PIPELINE_META = {
        RAW: { icon: 'fa-solid fa-database', desc: 'Raw sensor packet as received over LoRa, before any processing.' },
        QUALITY: { icon: 'fa-solid fa-check-double', desc: 'Signal and packet integrity assessed from LoRa RSSI and link quality.' },
        HEALTH: { icon: 'fa-solid fa-heart-pulse', desc: 'Per-sensor health score derived from drift and missing-reading checks.' },
        RELIABILITY: { icon: 'fa-solid fa-shield-halved', desc: 'Composite reliability: R = Health × Quality × Consistency.' },
        BASELINE: { icon: 'fa-solid fa-chart-line', desc: "Comparison against the sensor's learned historical baseline." },
        ANOMALY: { icon: 'fa-solid fa-triangle-exclamation', desc: 'Deviation from baseline — magnitude and how long it has persisted.' },
        EVIDENCE: { icon: 'fa-solid fa-magnifying-glass', desc: 'Evidence points gathered in support of a hazard hypothesis.' },
        CONFIDENCE: { icon: 'fa-solid fa-scale-balanced', desc: 'Cross-node corroboration within the spatial/temporal correlation window.' },
        SEVERITY: { icon: 'fa-solid fa-gauge-high', desc: 'Operational severity index computed for the incident.' },
        RISK: { icon: 'fa-solid fa-radiation', desc: 'Hazard-specific risk, assessed independently — never merged across hazards.' },
        STATE: { icon: 'fa-solid fa-flag', desc: 'Final incident state and information condition after this pass.' }
    };
    function renderTelemetry() {
        const inc = api.getIncident(state.selectedIncidentId) || state.incidents[0];
        const idx = PIPELINE_STAGES.indexOf(state.selectedPipelineStage);
        document.getElementById('view-telemetry').innerHTML = `
            <div class="panel">
                <div class="panel-header"><h3><i class="fa-solid fa-diagram-project" style="color:var(--info); margin-right:8px;"></i>Telemetry Pipeline</h3><span class="text-xs text-muted">Inspecting incident ${inc.id} · Stage ${idx + 1} of ${PIPELINE_STAGES.length}</span></div>
                <div class="pipeline-flow">
                    ${PIPELINE_STAGES.map((s, i) => `
                        ${i > 0 ? `<div class="flow-connector ${i <= idx ? 'done' : ''}"></div>` : ''}
                        <div class="flow-node ${s === state.selectedPipelineStage ? 'active' : ''} ${i < idx ? 'done' : ''}" onclick="app.selectPipelineStage('${s}')">
                            <div class="flow-node-circle"><i class="${PIPELINE_META[s].icon}"></i></div>
                            <div class="flow-node-label">${s}</div>
                        </div>`).join('')}
                </div>
                <div id="pipeline-stage-body">${pipelineStageBody(state.selectedPipelineStage, inc)}</div>
            </div>
        `;
    }
    function pipelineStageBody(stage, inc) {
        const sample = {
            RAW: `Raw packet from ${inc.correlatedNodeIds[0] || 'Field-Node-02'}: seq #48213, sensorType=thermal, value=58.9, unit=°C, ts=${nowIso()}`,
            QUALITY: `Signal quality assessed at 0.90 (HIGH) based on LoRa RSSI and packet integrity.`,
            HEALTH: `Sensor health H=0.95 — no drift or missing-reading flags in the last 20 samples.`,
            RELIABILITY: `Reliability R = H × Q × K = 0.95 × 0.90 × 0.93 = 0.80 (HIGH)`,
            BASELINE: `Baseline status READY — 30-day learned baseline available for this sensor.`,
            ANOMALY: `Anomaly magnitude +3.2σ above baseline, persisted 96 seconds.`,
            EVIDENCE: inc.evidence.length ? inc.evidence.join(' · ') : 'Insufficient evidence.',
            CONFIDENCE: `Evidence corroborated by ${inc.correlatedNodeIds.length} node(s) within spatial/temporal correlation window.`,
            SEVERITY: `Operational severity index: ${inc.severity} / 100 (impact-weighted, not a probability).`,
            RISK: `Hazard-specific risk assessed independently — not merged with other hazards.`,
            STATE: `Incident state: ${inc.state} (Information Condition: ${inc.infoCondition})`
        };
        const idx = PIPELINE_STAGES.indexOf(stage);
        const meta = PIPELINE_META[stage];
        return `
            <div class="stage-detail">
                <div class="stage-detail-icon"><i class="${meta.icon}"></i></div>
                <div class="stage-detail-body">
                    <div class="stage-detail-title"><h4>${stage}</h4><span class="text-xs text-muted">Stage ${idx + 1} of ${PIPELINE_STAGES.length}</span></div>
                    <div class="stage-detail-desc">${meta.desc}</div>
                    <div class="stage-detail-readout">${sample[stage] || 'N/A'}</div>
                    <div class="stage-nav">
                        <button class="btn-secondary" ${idx === 0 ? 'disabled' : ''} onclick="app.selectPipelineStage('${PIPELINE_STAGES[Math.max(0, idx - 1)]}')"><i class="fa-solid fa-chevron-left"></i> Previous</button>
                        <button class="btn-secondary" ${idx === PIPELINE_STAGES.length - 1 ? 'disabled' : ''} onclick="app.selectPipelineStage('${PIPELINE_STAGES[Math.min(PIPELINE_STAGES.length - 1, idx + 1)]}')">Next <i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>`;
    }

    // ---- ALERT MANAGEMENT ----
    const ALERT_LIFECYCLE = ['DRAFT', 'APPROVED', 'ISSUED', 'DELIVERING', 'DELIVERED', 'OPENED', 'ACKNOWLEDGED'];
    function renderAlertMgmt() {
        const alerts = api.getAlerts();
        document.getElementById('view-alertmgmt').innerHTML = `
            <div class="panel">
                <div class="panel-header"><h3><i class="fa-solid fa-bell" style="color:var(--warn); margin-right:8px;"></i>Alert Management</h3>
                    ${permBtn('prepare_alert', 'Prepare New Alert', `app.openIssueAlert('${state.selectedIncidentId}')`, 'btn-primary')}
                </div>
                <table class="data-table">
                    <tr><th>Alert</th><th>Incident</th><th>Hazard</th><th>State</th><th>Target Zone</th><th>Channel</th><th>Delivery</th><th>Freshness</th></tr>
                    ${alerts.map(a => `
                        <tr>
                            <td style="font-family:monospace;">${a.id}</td>
                            <td style="font-family:monospace;">${a.incidentId}</td>
                            <td><i class="${hazardIcon(a.hazard)}"></i> ${hazardLabel(a.hazard)}</td>
                            <td><span class="badge b-watch">${a.state}</span></td>
                            <td>${a.targetZone}</td>
                            <td><span class="badge ${a.channel === 'ONLINE' ? 'b-good' : a.channel === 'OFFLINE' ? 'b-degraded' : 'b-unknown'}">${a.channel}</span></td>
                            <td>${a.deliveryStatus}</td>
                            <td>${freshTag(a.freshnessSec)}</td>
                        </tr>`).join('')}
                    ${!alerts.length ? '<tr><td colspan="8" class="empty-state">No alerts issued.</td></tr>' : ''}
                </table>
            </div>
            <div class="panel">
                <div class="panel-header"><h3 class="text-sm">Delivery Channels</h3></div>
                <div class="grid-3">
                    <div class="health-tile"><div class="h-label">Online Channel (App / Web Push)</div><div class="h-value"><span class="dot healthy"></span> AVAILABLE</div></div>
                    <div class="health-tile"><div class="h-label">Offline Channel (LoRa Broadcast)</div><div class="h-value"><span class="dot healthy"></span> AVAILABLE</div></div>
                    <div class="health-tile"><div class="h-label">Cell Broadcast / Satellite</div><div class="h-value"><span class="badge b-unknown">INTEGRATION / NOT IMPLEMENTED</span></div></div>
                </div>
            </div>
        `;
    }

    // ==========================================
    // 7. EXTERNAL SCRIPT SEQUENCING
    // ==========================================
    document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' }));
    document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }));
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    document.head.appendChild(leafletScript);

    // ==========================================
    // 8. SPA ROUTER & APP CONTROLLER
    // ==========================================
    const VIEW_RENDERERS = {
        overview: renderOverview, firespread: renderFireSpread,
        multihazard: renderMultiHazard, nodes: renderNodes, telemetry: renderTelemetry, alertmgmt: renderAlertMgmt
    };
    const VIEW_TITLES = {
        overview: 'Overview', firespread: 'Fire Spread',
        multihazard: 'Multi-Hazard & Simulation', nodes: 'Nodes & Network', telemetry: 'Telemetry & Intelligence',
        alertmgmt: 'Alert Management'
    };

    window.app = {
        switchView: function(viewName) {
            state.currentView = viewName;
            document.querySelectorAll('.nav-item[data-view]').forEach(el => el.classList.remove('active'));
            const activeNav = document.querySelector(`.nav-item[data-view="${viewName}"]`);
            if (activeNav) activeNav.classList.add('active');
            document.getElementById('header-title').innerText = VIEW_TITLES[viewName] || viewName;
            document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
            document.getElementById('view-' + viewName).classList.add('active');
            if (state.activeMapInstance) { state.activeMapInstance.remove(); state.activeMapInstance = null; }
            if (state.fireMapInstance) { state.fireMapInstance.remove(); state.fireMapInstance = null; }
            if (state.nodesMapInstance) { state.nodesMapInstance.remove(); state.nodesMapInstance = null; }
            renderDemoBanner();
            (VIEW_RENDERERS[viewName] || function(){})();
        },

        // ---- Leaflet helpers ----
        initMap: function(containerId, badgeId) {
            if (typeof L === 'undefined') { setTimeout(() => app.initMap(containerId, badgeId), 100); return; }
            const map = L.map(containerId).setView([13.05, 77.58], 12);
            state.activeMapInstance = map;
            const onlineTile = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 });
            const weatherTile = L.tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=YOUR_API_KEY_HERE', { opacity: 0.6, className: 'weather-layer', maxZoom: 19 });
            state.onlineLayers = L.layerGroup([onlineTile, weatherTile]);
            state.offlineLayers = L.geoJSON(localGISData, { style: () => ({ color: '#3b82f6', weight: 2, fillColor: '#93c5fd', fillOpacity: 0.15 }) });
            state.nodes.forEach(n => {
                const color = n.role === 'MASTER' ? '#fde047' : '#60a5fa';
                const icon = L.divIcon({ className: '', html: `<div style="background:${color}; width:13px; height:13px; border-radius:50%; border:2px solid white; box-shadow:0 0 8px ${color};"></div>` });
                L.marker([n.lat, n.lng], { icon }).addTo(map).bindPopup(`<b style="color:black">${n.id}</b><br><span style="color:black">${n.connectivity}</span>`);
            });
            state.incidents.filter(i => i.state !== 'RESOLVED').forEach(i => {
                L.circle([i.location.lat, i.location.lng], { radius: i.footprint.warning || 100, color: i.hazard === 'FIRE' ? '#ef4444' : '#3b82f6', fillOpacity: 0.12, weight: 1, dashArray: '4' }).addTo(map);
            });
            app.updateNetworkMode(badgeId);
            setTimeout(() => map.invalidateSize(), 200);
        },

        initSimpleMap: function(containerId, inc) {
            if (typeof L === 'undefined') { setTimeout(() => app.initSimpleMap(containerId, inc), 100); return; }
            const map = L.map(containerId, { zoomControl: true }).setView([inc.location.lat, inc.location.lng], 14);
            state.fireMapInstance = map;
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
            const scale = 1 + state.fireStep * 0.15;
            if (inc.footprint.buffer) L.circle([inc.location.lat, inc.location.lng], { radius: inc.footprint.buffer * scale, color: '#94a3b8', fillOpacity: 0, weight: 1.5, dashArray: '6' }).addTo(map);
            if (inc.footprint.projection) L.circle([inc.location.lat, inc.location.lng], { radius: inc.footprint.projection * scale, color: '#f59e0b', fillOpacity: 0.06, weight: 1 }).addTo(map);
            if (inc.footprint.warning) L.circle([inc.location.lat, inc.location.lng], { radius: inc.footprint.warning * scale, color: '#f59e0b', fillOpacity: 0.1, weight: 1 }).addTo(map);
            if (inc.footprint.current) L.circle([inc.location.lat, inc.location.lng], { radius: inc.footprint.current * scale, color: '#ef4444', fillOpacity: 0.35, weight: 2 }).addTo(map);
            L.marker([inc.location.lat, inc.location.lng]).addTo(map).bindPopup(`<b style="color:black">${inc.id}</b>`);
            setTimeout(() => map.invalidateSize(), 200);
        },

        initFleetMap: function(containerId) {
            if (typeof L === 'undefined') { setTimeout(() => app.initFleetMap(containerId), 100); return; }
            const map = L.map(containerId).setView([13.05, 77.58], 12);
            state.nodesMapInstance = map;
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
            const master = state.nodes.find(n => n.role === 'MASTER');
            state.nodes.forEach(n => {
                const color = n.role === 'MASTER' ? '#fde047' : '#60a5fa';
                const icon = L.divIcon({ className: '', html: `<div style="background:${color}; width:13px; height:13px; border-radius:50%; border:2px solid white; box-shadow:0 0 8px ${color};"></div>` });
                L.marker([n.lat, n.lng], { icon }).addTo(map).bindPopup(`<b style="color:black">${n.id}</b>`);
                if (n.role === 'FIELD' && master) L.polyline([[master.lat, master.lng], [n.lat, n.lng]], { color: '#64748b', weight: 1.5, dashArray: '4' }).addTo(map);
            });
            setTimeout(() => map.invalidateSize(), 200);
        },

        updateNetworkMode: function(badgeId) {
            if (!state.activeMapInstance) return;
            const map = state.activeMapInstance;
            const badge = document.getElementById(badgeId);
            if (state.internetOnline) {
                if (map.hasLayer(state.offlineLayers)) map.removeLayer(state.offlineLayers);
                state.onlineLayers.addTo(map);
                if (badge) { badge.className = 'net-online'; badge.innerHTML = '<i class="fa-solid fa-wifi"></i> ONLINE (Weather & Grid)'; }
            } else {
                if (map.hasLayer(state.onlineLayers)) map.removeLayer(state.onlineLayers);
                state.offlineLayers.addTo(map);
                if (badge) { badge.className = 'net-offline'; badge.innerHTML = '<i class="fa-solid fa-tower-cell"></i> OFFLINE (Local GIS, cached)'; }
            }
        },

        // ---- Role ----
        setRole: function(role) {
            state.currentRole = role;
            pushAudit({ action: 'Role switched', entity: 'SESSION', after: ROLE_LABELS[role], source: 'UI' });
            app.switchView(state.currentView);
        },

        // ---- Alerts ----
        openIssueAlert: function(incidentId) {
            const inc = api.getIncident(incidentId);
            if (!inc) return;
            openModal(`
                <h3><i class="fa-solid fa-bell" style="color:var(--warn); margin-right:8px;"></i>Issue Alert Confirmation</h3>
                <div class="stat-row"><span class="text-muted">Target zone</span><strong>${inc.location.name}</strong></div>
                <div class="stat-row"><span class="text-muted">Hazard</span><strong>${hazardLabel(inc.hazard)}</strong></div>
                <div class="stat-row"><span class="text-muted">Incident state</span><span class="badge ${stateBadgeClass(inc.state)}">${inc.state}</span></div>
                <div class="stat-row"><span class="text-muted">Freshness</span>${freshTag(inc.freshnessSec)}</div>
                <div class="stat-row"><span class="text-muted">Rationale</span><span class="text-sm">${inc.recommendation}</span></div>
                <label class="text-sm" style="display:block; margin-top:10px;">Approval identity<input type="text" id="alert-approver" placeholder="Your name / role" value="${ROLE_LABELS[state.currentRole]}"></label>
                <div class="action-bar"><button class="btn-primary" onclick="app.confirmIssueAlert('${inc.id}')">Confirm & Issue</button><button class="btn-secondary" onclick="closeModalGlobal()">Cancel</button></div>
            `);
        },
        confirmIssueAlert: function(incidentId) {
            const inc = api.getIncident(incidentId);
            const approver = document.getElementById('alert-approver').value || ROLE_LABELS[state.currentRole];
            const alertObj = { id: uid('ALT'), incidentId: inc.id, hazard: inc.hazard, state: 'ISSUED', targetZone: inc.location.name, recipients: inc.assignedAuthority, channel: state.internetOnline ? 'ONLINE' : 'OFFLINE', createdTime: nowIso(), approvalIdentity: approver, deliveryStatus: 'DELIVERING', reason: inc.recommendation, freshnessSec: 0 };
            state.alerts.unshift(alertObj);
            pushAudit({ action: 'Alert issued', entity: alertObj.id, after: 'ISSUED', reason: 'Operator confirmed', correlationId: inc.id });
            closeModal();
            app.switchView('alertmgmt');
        },

        // ---- Fire spread ----
        setFireMode: function(mode) { state.fireMode = mode; renderFireSpread(); },
        fireControl: function(cmd) {
            if (cmd === 'play') {
                state.firePlaying = true;
                clearInterval(state.fireTimer);
                state.fireTimer = setInterval(() => { state.fireStep = Math.min(10, state.fireStep + 1); renderFireSpread(); if (state.fireStep >= 10) clearInterval(state.fireTimer); }, 1200);
            } else if (cmd === 'pause') { state.firePlaying = false; clearInterval(state.fireTimer); }
            else if (cmd === 'reset') { state.firePlaying = false; clearInterval(state.fireTimer); state.fireStep = 0; renderFireSpread(); }
            else if (cmd === 'step') { state.fireStep = Math.min(10, state.fireStep + 1); renderFireSpread(); }
        },
        fireScrub: function(val) { state.fireStep = parseInt(val, 10); renderFireSpread(); },
        recomputeFire: function() {
            pushAudit({ action: 'Fire model recomputed', entity: 'fire-v3.2.1', after: 'New version event', source: 'SYSTEM' });
            document.getElementById('fire-recompute-time').innerText = 'just now';
        },

        // ---- Multi-hazard / sim lab ----
        selectHazardTab: function(hz) { state.selectedHazardTab = hz; renderMultiHazard(); },
        toggleEvaluatorMode: function() { state.replayEvaluatorMode = !state.replayEvaluatorMode; renderMultiHazard(); },
        simControl: function(cmd) {
            const sl = state.simLab;
            if (cmd === 'start') { sl.running = true; sl.expectedBehavior = 'System should degrade gracefully and flag affected incidents.'; }
            if (cmd === 'pause') sl.running = false;
            if (cmd === 'reset') { sl.step = 0; sl.injected = []; sl.expectedBehavior = '—'; sl.actualBehavior = '—'; }
            if (cmd === 'step') sl.step += 1;
            if (cmd === 'replay') { pushAudit({ action: 'Simulation replay started', entity: sl.scenarioId, source: 'REPLAY' }); }
            pushAudit({ action: 'Simulation ' + cmd, entity: sl.scenarioId, source: 'SYSTEM' });
            renderMultiHazard();
        },
        injectFailure: function(type) {
            const sl = state.simLab;
            sl.injected.push(type);
            sl.actualBehavior = type + ' applied — see Overview / Nodes & Network for effect.';
            if (type === 'Master node failure') state.masterUnavailable = true;
            if (type === 'Internet failure') state.internetOnline = false;
            if (type === 'Partial node failure') { const n = state.nodes.find(x => x.role === 'FIELD'); if (n) n.connectivity = 'OFFLINE'; }
            if (type === 'Communication recovery') { state.masterUnavailable = false; state.internetOnline = true; state.nodes.forEach(n => n.connectivity = 'ONLINE'); }
            pushAudit({ action: 'Simulated failure injected', entity: type, source: 'SYSTEM', reason: 'SIMULATION — Failure Lab' });
            renderMultiHazard();
        },

        // ---- Nodes ----
        selectNode: function(id) { state.selectedNodeId = id; renderNodes(); },

        // ---- Telemetry ----
        selectPipelineStage: function(stage) {
            state.selectedPipelineStage = stage;
            renderTelemetry();
        },

        // ---- Demo scenario ----
        runDemoScenario: function() {
            if (state.demoRunning) return;
            state.demoRunning = true;
            renderDemoBanner();
            const inc = state.incidents.find(i => i.id === 'INC-2202') || state.incidents[1];
            const steps = [
                () => { inc.state = 'NORMAL'; inc.infoCondition = 'GOOD'; pushAudit({ action: 'Demo: baseline normal', entity: inc.id, source: 'SYSTEM' }); },
                () => { inc.state = 'WATCH'; pushAudit({ action: 'Demo: sensor anomaly detected', entity: inc.id, source: 'SYSTEM' }); },
                () => { inc.state = 'SUSPECTED'; pushAudit({ action: 'Demo: incident suspected', entity: inc.id, source: 'SYSTEM' }); },
                () => { inc.state = 'CONFIRMED'; inc.infoCondition = 'GOOD'; pushAudit({ action: 'Demo: corroborated by multiple sensors — confirmed', entity: inc.id, source: 'SYSTEM' }); },
                () => { inc.state = 'CRITICAL'; inc.severity = 88; pushAudit({ action: 'Demo: escalated to critical', entity: inc.id, source: 'SYSTEM' }); },
                () => { pushAudit({ action: 'Demo: recommendation generated for supervisor review', entity: inc.id, source: 'SYSTEM' }); },
                () => { pushAudit({ action: 'Demo: human approval granted', entity: inc.id, after: 'APPROVED', source: 'UI' }); },
                () => { app.confirmIssueAlertSilent(inc.id); },
                () => { const r = { id: uid('RSP'), incidentId: inc.id, state: 'ASSIGNED', team: 'Demo Response Unit', createdAt: nowIso() }; state.responses.unshift(r); pushAudit({ action: 'Demo: response assigned', entity: r.id, source: 'SYSTEM' }); },
                () => { state.internetOnline = false; pushAudit({ action: 'Demo: internet failure simulated', entity: 'SYSTEM', source: 'SYSTEM' }); },
                () => { pushAudit({ action: 'Demo: authority operating in degraded/offline mode', entity: 'SYSTEM', source: 'SYSTEM' }); },
                () => { state.internetOnline = true; pushAudit({ action: 'Demo: connectivity recovered', entity: 'SYSTEM', source: 'SYSTEM' }); },
                () => { inc.state = 'RESOLVED'; state.demoRunning = false; pushAudit({ action: 'Demo: incident resolved', entity: inc.id, source: 'SYSTEM' }); renderDemoBanner(); }
            ];
            let i = 0;
            const run = () => { if (i < steps.length) { steps[i](); i++; app.switchView(state.currentView); setTimeout(run, 1400); } };
            run();
        },
        confirmIssueAlertSilent: function(incidentId) {
            const inc = api.getIncident(incidentId);
            const alertObj = { id: uid('ALT'), incidentId: inc.id, hazard: inc.hazard, state: 'ISSUED', targetZone: inc.location.name, recipients: inc.assignedAuthority, channel: state.internetOnline ? 'ONLINE' : 'OFFLINE', createdTime: nowIso(), approvalIdentity: ROLE_LABELS[state.currentRole], deliveryStatus: 'DELIVERING', reason: inc.recommendation, freshnessSec: 0 };
            state.alerts.unshift(alertObj);
            pushAudit({ action: 'Demo: alert issued', entity: alertObj.id, source: 'SYSTEM', correlationId: inc.id });
        },

        // ---- Auth ----
        login: function() {
            const u = document.getElementById('username').value;
            const p = document.getElementById('password').value;
            if (u === 'admin' && p === 'admin') {
                document.getElementById('login-screen').style.display = 'none';
                document.getElementById('app-layout').style.display = 'flex';
                pushAudit({ action: 'Operator login', entity: 'SESSION', source: 'UI' });
                app.switchView('overview');
            } else {
                document.getElementById('login-err').style.display = 'block';
            }
        },
        logout: function() {
            document.getElementById('app-layout').style.display = 'none';
            document.getElementById('login-screen').style.display = 'flex';
            document.getElementById('password').value = '';
            document.getElementById('login-err').style.display = 'none';
            pushAudit({ action: 'Operator logout', entity: 'SESSION', source: 'UI' });
            if (state.activeMapInstance) { state.activeMapInstance.remove(); state.activeMapInstance = null; }
        }
    };
    window.closeModalGlobal = closeModal;

    // ==========================================
    // 9. EVENT LISTENERS
    // ==========================================
    document.getElementById('login-btn').addEventListener('click', app.login);
    document.getElementById('password').addEventListener('keypress', (e) => { if (e.key === 'Enter') app.login(); });
    document.getElementById('logout-btn').addEventListener('click', app.logout);
    document.getElementById('logout-btn').addEventListener('keypress', (e) => { if (e.key === 'Enter') app.logout(); });
    document.getElementById('demo-btn').addEventListener('click', app.runDemoScenario);
    document.getElementById('role-select').addEventListener('change', (e) => app.setRole(e.target.value));

    document.querySelectorAll('.nav-item[data-view]').forEach(item => {
        item.addEventListener('click', () => app.switchView(item.getAttribute('data-view')));
        item.addEventListener('keypress', (e) => { if (e.key === 'Enter') app.switchView(item.getAttribute('data-view')); });
    });

    window.addEventListener('online', () => { state.internetOnline = true; updateHeaderNetBadge(); if (state.currentView === 'overview') app.updateNetworkMode('net-badge-dash'); });
    window.addEventListener('offline', () => { state.internetOnline = false; updateHeaderNetBadge(); if (state.currentView === 'overview') app.updateNetworkMode('net-badge-dash'); });
};
