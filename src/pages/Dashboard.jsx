import React from 'react';
import { mockStats, mockProblems } from '../data/mockData';
import { CheckCircle, Clock, Users, ShieldCheck } from 'lucide-react';
import MapView from '../components/MapView';

const Dashboard = () => {
  const mapMarkers = mockProblems.map(p => ({
    position: [p.lat, p.lng],
    title: p.title,
    content: `${p.category} - ${p.status}`
  }));

  return (
    <div className="page-enter p-4">
      <div className="mb-6">
        <h1 className="text-lg">Painel de Impacto</h1>
        <p className="text-muted text-xs">Acompanhe as estatísticas gerais da sua região.</p>
      </div>

      <div className="stats-grid">
        <div className="card text-center flex flex-col items-center border-t-4" style={{ borderTop: '4px solid var(--secondary)' }}>
          <div className="mb-2 p-2 rounded-full" style={{ backgroundColor: '#FEE2E2', color: 'var(--secondary)' }}>
            <CheckCircle size={24} />
          </div>
          <span className="text-lg font-bold">{mockStats.totalResolved}</span>
          <span className="text-xs text-muted">Resolvidos</span>
        </div>
        
        <div className="card text-center flex flex-col items-center border-t-4" style={{ borderTop: '4px solid var(--status-pending)' }}>
          <div className="mb-2 p-2 rounded-full" style={{ backgroundColor: '#FEF3C7', color: 'var(--status-pending)' }}>
            <Clock size={24} />
          </div>
          <span className="text-lg font-bold">{mockStats.pendingReview}</span>
          <span className="text-xs text-muted">Pendentes</span>
        </div>

        <div className="card text-center flex flex-col items-center border-t-4" style={{ borderTop: '4px solid var(--primary)' }}>
          <div className="mb-2 p-2 rounded-full" style={{ backgroundColor: '#DBEAFE', color: 'var(--primary)' }}>
            <Users size={24} />
          </div>
          <span className="text-lg font-bold">{mockStats.activeUsers}</span>
          <span className="text-xs text-muted">Cidadãos Activos</span>
        </div>

        <div className="card text-center flex flex-col items-center border-t-4" style={{ borderTop: '4px solid #4F46E5' }}>
          <div className="mb-2 p-2 rounded-full" style={{ backgroundColor: '#E0E7FF', color: '#4F46E5' }}>
            <ShieldCheck size={24} />
          </div>
          <span className="text-lg font-bold">{mockStats.transparencyScore}</span>
          <span className="text-xs text-muted">Transparência</span>
        </div>
      </div>

      <div className="card mt-6 no-padding overflow-hidden">
        <div className="p-4 flex justify-between items-center">
          <h3 className="text-sm font-bold">Mapa de Ocorrências (Luanda)</h3>
          <span className="badge badge-secondary">{mockProblems.length} Reportes no Mapa</span>
        </div>
        <MapView 
          height="400px" 
          markers={mapMarkers} 
          zoom={12}
        />
      </div>
    </div>
  );
};

export default Dashboard;
