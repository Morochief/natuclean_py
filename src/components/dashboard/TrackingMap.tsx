/** @jsxImportSource solid-js */
import { onMount, onCleanup } from 'solid-js';
import type { Map as LeafletMap, Marker } from 'leaflet';

// Mock vehicle positions (Asunción, Paraguay area)
const mockVehicles = [
    { id: 'Truck-01', lat: -25.2867, lng: -57.6470, status: 'en_ruta', driver: 'Juan Pérez' },
    { id: 'Van-03', lat: -25.2734, lng: -57.5189, status: 'cargando', driver: 'María García' },
    { id: 'Truck-02', lat: -25.3006, lng: -57.5801, status: 'entregado', driver: 'Carlos López' },
    { id: 'Van-01', lat: -25.3393, lng: -57.5225, status: 'en_ruta', driver: 'Ana Martínez' },
];

const statusColors: Record<string, string> = {
    en_ruta: '#f59e0b',
    cargando: '#06b6d4',
    entregado: '#22c55e',
    alerta: '#ef4444',
};

export default function TrackingMap() {
    let mapContainer: HTMLDivElement | undefined;
    let map: LeafletMap | null = null;
    const markers: Marker[] = [];

    onMount(async () => {
        if (!mapContainer) return;

        // Dynamic import Leaflet (only on client)
        const L = await import('leaflet');

        // Initialize map centered on Asunción
        map = L.map(mapContainer).setView([-25.2867, -57.6470], 12);

        // Add tile layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add vehicle markers
        mockVehicles.forEach(vehicle => {
            const color = statusColors[vehicle.status] || '#64748b';

            const icon = L.divIcon({
                className: 'vehicle-marker',
                html: `
          <div style="
            width: 32px;
            height: 32px;
            background: ${color};
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="1">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>
        `,
                iconSize: [32, 32],
                iconAnchor: [16, 16],
            });

            const marker = L.marker([vehicle.lat, vehicle.lng], { icon })
                .addTo(map!)
                .bindPopup(`
          <strong>${vehicle.id}</strong><br/>
          Conductor: ${vehicle.driver}<br/>
          Estado: ${vehicle.status}
        `);

            markers.push(marker);
        });
    });

    onCleanup(() => {
        if (map) {
            map.remove();
        }
    });

    return (
        <div class="map-container">
            <div class="map-container__header">
                <h3 class="map-container__title">Seguimiento en Vivo</h3>
                <div class="map-legend">
                    <span class="legend-item">
                        <span class="legend-dot" style="background: #f59e0b"></span>
                        En Ruta
                    </span>
                    <span class="legend-item">
                        <span class="legend-dot" style="background: #22c55e"></span>
                        Entregado
                    </span>
                    <span class="legend-item">
                        <span class="legend-dot" style="background: #06b6d4"></span>
                        Cargando
                    </span>
                </div>
            </div>
            <div ref={mapContainer} class="map-container__map"></div>

            <style>{`
        .map-legend {
          display: flex;
          gap: 16px;
          font-size: 0.75rem;
          color: var(--dashboard-muted);
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .vehicle-marker {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
        </div>
    );
}
