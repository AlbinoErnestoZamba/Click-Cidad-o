import React from 'react';
import { mockUser } from '../data/mockData';
import { Award, Trophy, Star, Settings, LogOut } from 'lucide-react';

const Profile = () => {
  return (
    <div className="page-enter p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg">Meu Perfil</h1>
        <div className="flex gap-2">
          <button className="btn-icon"><Settings size={20} /></button>
          <button className="btn-icon"><LogOut size={20} color="#EF4444" /></button>
        </div>
      </div>

      <div className="card mb-6 text-center py-6">
        <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: 'var(--primary)' }}>
          {mockUser.name.charAt(0)}
        </div>
        <h2 className="text-lg mb-1">{mockUser.name}</h2>
        <p className="text-xs text-muted mb-4">Membro desde Março 2024</p>
        
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
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <Award size={18} color="var(--primary)" />
          Minhas Conquistas
        </h3>
        <div className="flex flex-wrap gap-2">
          {mockUser.achievements.map((achievement, idx) => (
            <div key={idx} className="badge bg-green-50 text-green-700 border border-green-200" style={{ backgroundColor: '#F0FDF4', color: '#15803D', border: '1px solid #DCFCE7' }}>
              <Star size={12} className="mr-1" />
              {achievement}
            </div>
          ))}
        </div>
      </div>

      <div className="card bg-gray-50 mb-6" style={{ backgroundColor: '#F9FAFB' }}>
        <h3 className="text-sm font-semibold mb-2">Sistema de Reputação</h3>
        <p className="text-xs text-muted mb-3">
          Continue a participar activamente reportando e votando para subir no ranking e ganhar novos selos de participação.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2" style={{ backgroundColor: '#E5E7EB' }}>
          <div className="bg-primary h-2 rounded-full" style={{ width: '75%', backgroundColor: 'var(--primary)' }}></div>
        </div>
        <p className="text-xs text-right mt-1 text-muted">750 / 1000 para Senior Cidadão</p>
      </div>

      <button className="btn btn-outline w-full py-3 flex items-center justify-center gap-2">
        <Trophy size={18} />
        Ver Ranking Municipal
      </button>
    </div>
  );
};

export default Profile;
