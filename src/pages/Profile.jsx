import React from 'react';
import { mockUser } from '../data/mockData';
import { Award, Trophy, Star, Settings, LogOut, Camera, MapPin } from 'lucide-react';

const Profile = () => {
  return (
    <div className="page-enter">
      {/* Municipality Cover Photo */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={mockUser.coverPhoto} 
          alt="Vista do Município" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <div className="flex items-center gap-2 text-white">
            <MapPin size={18} />
            <span className="text-sm font-semibold">Município de Luanda Sul</span>
          </div>
        </div>
      </div>

      <div className="p-4 -mt-12 relative z-10">
        <div className="card mb-6 text-center py-6 relative pt-12">
          {/* Profile Picture with Upload UI */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <div className="relative group">
              <div className="w-24 h-24 bg-white rounded-full p-1 shadow-lg">
                <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
                  {mockUser.name.charAt(0)}
                </div>
              </div>
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors border border-gray-100">
                <Camera size={16} className="text-secondary" />
              </button>
            </div>
          </div>

          <h2 className="text-lg mb-1">{mockUser.name}</h2>
          <p className="text-xs text-muted mb-4">Cidadão Verificado • Desde Março 2024</p>
          
          <div className="flex justify-around border-top pt-4" style={{ borderTop: '1px solid var(--border)' }}>
            <div>
              <p className="text-lg font-bold">{mockUser.points}</p>
              <p className="text-xs text-muted">Pontos</p>
            </div>
            <div style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)', padding: '0 1.5rem' }}>
              <p className="text-lg font-bold">#{mockUser.ranking}</p>
              <p className="text-xs text-muted">Ranking</p>
            </div>
            <div>
              <p className="text-lg font-bold">{mockUser.reportsCount}</p>
              <p className="text-xs text-muted">Reportes</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
             <h3 className="text-sm font-semibold flex items-center gap-2">
              <Award size={18} className="text-secondary" />
              Minhas Conquistas
            </h3>
            <button className="text-xs text-secondary font-bold">Ver Tudo</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {mockUser.achievements.map((achievement, idx) => (
              <div key={idx} className="badge bg-red-50 text-red-700 border border-red-100" style={{ backgroundColor: '#FEF2F2', color: '#B91C1C', border: '1px solid #FEE2E2' }}>
                <Star size={12} className="mr-1" />
                {achievement}
              </div>
            ))}
          </div>
        </div>

        <div className="card bg-gray-50 mb-6" style={{ backgroundColor: '#F9FAFB' }}>
          <h3 className="text-sm font-semibold mb-2">Sistema de Reputação</h3>
          <p className="text-xs text-muted mb-3">
            Continue a participar activamente para se tornar um "Senior Cidadão".
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2" style={{ backgroundColor: '#E5E7EB' }}>
            <div className="bg-secondary h-2 rounded-full" style={{ width: '75%', backgroundColor: 'var(--secondary)' }}></div>
          </div>
          <p className="text-xs text-right mt-1 text-muted">750 / 1000 para a próxima patente</p>
        </div>

        <div className="flex flex-col gap-3">
          <button className="btn btn-primary w-full py-4 flex items-center justify-center gap-2">
            <Settings size={18} />
            Configurações da Conta
          </button>
          <button className="btn btn-outline w-full py-4 flex items-center justify-center gap-2 text-red-600 border-red-200">
            <LogOut size={18} />
            Sair do Sistema
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
