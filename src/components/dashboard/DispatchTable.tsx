/** @jsxImportSource solid-js */
import { createSignal, For, createMemo } from 'solid-js';

// Mock Data
const mockDispatches = [
    { id: 'DSP-001', client: 'ABC Corp', destination: 'Asunción Centro', status: 'en_ruta', eta: '14:30', driver: 'Juan Pérez', vehicle: 'Truck-01' },
    { id: 'DSP-002', client: 'XYZ Ltd', destination: 'Luque', status: 'cargando', eta: '15:00', driver: 'María García', vehicle: 'Van-03' },
    { id: 'DSP-003', client: '123 SA', destination: 'Fernando Zona Norte', status: 'entregado', eta: '12:45', driver: 'Carlos López', vehicle: 'Truck-02' },
    { id: 'DSP-004', client: 'Tech Paraguay', destination: 'San Lorenzo', status: 'en_ruta', eta: '16:15', driver: 'Ana Martínez', vehicle: 'Van-01' },
    { id: 'DSP-005', client: 'Importadora Sur', destination: 'Lambaré', status: 'pendiente', eta: '17:00', driver: 'Roberto Silva', vehicle: 'Truck-03' },
    { id: 'DSP-006', client: 'Distribuidora Este', destination: 'Mariano Roque Alonso', status: 'alerta', eta: '15:30', driver: 'Laura Benítez', vehicle: 'Van-02' },
];

const statusConfig: Record<string, { label: string; class: string }> = {
    en_ruta: { label: 'En Ruta', class: 'status-badge--warning' },
    cargando: { label: 'Cargando', class: 'status-badge--info' },
    entregado: { label: 'Entregado', class: 'status-badge--success' },
    pendiente: { label: 'Pendiente', class: 'status-badge--info' },
    alerta: { label: 'Alerta', class: 'status-badge--danger' },
};

export default function DispatchTable() {
    const [search, setSearch] = createSignal('');
    const [statusFilter, setStatusFilter] = createSignal('all');

    const filteredDispatches = createMemo(() => {
        return mockDispatches.filter(d => {
            const matchesSearch = d.client.toLowerCase().includes(search().toLowerCase()) ||
                d.id.toLowerCase().includes(search().toLowerCase()) ||
                d.destination.toLowerCase().includes(search().toLowerCase());
            const matchesStatus = statusFilter() === 'all' || d.status === statusFilter();
            return matchesSearch && matchesStatus;
        });
    });

    return (
        <div class="data-table">
            <div class="data-table__header">
                <h3 class="data-table__title">Despachos Activos</h3>
                <div class="data-table__actions">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={search()}
                        onInput={(e) => setSearch(e.currentTarget.value)}
                        class="table-search"
                    />
                    <select
                        value={statusFilter()}
                        onChange={(e) => setStatusFilter(e.currentTarget.value)}
                        class="table-filter"
                    >
                        <option value="all">Todos</option>
                        <option value="en_ruta">En Ruta</option>
                        <option value="cargando">Cargando</option>
                        <option value="entregado">Entregado</option>
                        <option value="pendiente">Pendiente</option>
                        <option value="alerta">Alerta</option>
                    </select>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Destino</th>
                        <th>Estado</th>
                        <th>ETA</th>
                        <th>Conductor</th>
                        <th>Vehículo</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={filteredDispatches()}>
                        {(dispatch) => (
                            <tr>
                                <td><strong>{dispatch.id}</strong></td>
                                <td>{dispatch.client}</td>
                                <td>{dispatch.destination}</td>
                                <td>
                                    <span class={`status-badge ${statusConfig[dispatch.status].class}`}>
                                        <span class="status-badge__dot"></span>
                                        {statusConfig[dispatch.status].label}
                                    </span>
                                </td>
                                <td>{dispatch.eta}</td>
                                <td>{dispatch.driver}</td>
                                <td>{dispatch.vehicle}</td>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>

            <style>{`
        .table-search,
        .table-filter {
          padding: 8px 12px;
          border: 1px solid var(--dashboard-border);
          border-radius: 8px;
          font-size: 0.875rem;
          background: var(--dashboard-surface);
          color: var(--dashboard-text);
        }
        
        .table-search:focus,
        .table-filter:focus {
          outline: none;
          border-color: var(--dashboard-accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .table-search {
          width: 200px;
        }
      `}</style>
        </div>
    );
}
