import React from 'react';
import { DollarSign, Calendar, Link as LinkIcon, AlertCircle } from 'lucide-react';
import { mockBudgets, mockProblems } from '../data/mockData';

const Transparency = () => {
  return (
    <div className="page-enter p-4">
      <div className="mb-6">
        <h1 className="text-lg">Transparência Governamental</h1>
        <p className="text-muted text-xs">Acompanhe como o orçamento público é aplicado na sua comunidade.</p>
      </div>

      <div className="feed-container">
        {mockBudgets.map(budget => (
          <div key={budget.id} className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-semibold">{budget.title}</h3>
              <span className="badge badge-progress" style={{ fontSize: '0.6rem' }}>{budget.status}</span>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1 text-secondary font-bold">
                <DollarSign size={16} />
                <span>{budget.amount}</span>
              </div>
            </div>

            <div className="flex-col gap-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-muted">
                <Calendar size={14} />
                <span>Prazo: {budget.deadline}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <AlertCircle size={14} />
                <span>Finalidade: {budget.purpose}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-md" style={{ backgroundColor: '#F9FAFB', border: '1px dashed var(--border)' }}>
              <p className="text-xs font-semibold mb-2 flex items-center gap-1">
                <LinkIcon size={12} />
                Problemas Relacionados
              </p>
              {budget.relatedProblemIds.map(probId => {
                const prob = mockProblems.find(p => p.id === probId);
                return prob ? (
                  <div key={probId} className="flex justify-between items-center text-xs py-1">
                    <span className="text-muted">{prob.title}</span>
                    <span className="font-semibold" style={{ color: prob.status === 'resolvido' ? 'var(--secondary)' : 'var(--status-pending)' }}>
                      {prob.status}
                    </span>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="card mt-6 py-4 bg-primary text-white" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <h3 className="text-sm mb-1" style={{ color: 'white' }}>Score de Transparência</h3>
        <div className="flex items-end gap-2">
          <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>8.5</span>
          <span className="mb-2 text-xs" style={{ opacity: 0.8 }}>/ 10</span>
        </div>
        <p className="text-xs mt-2" style={{ opacity: 0.9 }}>
          Este município cumpre com 85% das metas de transparência activa.
        </p>
      </div>
    </div>
  );
};

export default Transparency;
