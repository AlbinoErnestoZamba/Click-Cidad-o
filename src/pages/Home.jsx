import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, MapPin, Clock } from 'lucide-react';
import { mockProblems } from '../data/mockData';

const Home = () => {
  const [problems, setProblems] = useState(mockProblems);

  const handleVote = (id) => {
    setProblems(problems.map(p => 
      p.id === id ? { ...p, votes: p.votes + 1 } : p
    ));
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'recebido': return <span className="badge badge-pending">Recebido</span>;
      case 'em análise': return <span className="badge badge-progress">Em Análise</span>;
      case 'resolvido': return <span className="badge badge-resolved">Resolvido</span>;
      default: return null;
    }
  };

  return (
    <div className="page-enter p-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-lg">Problemas na Comunidade</h1>
          <p className="text-muted text-xs">Ordendados por prioridade (votos)</p>
        </div>
      </div>

      <div className="feed-container">
        {problems.sort((a, b) => b.votes - a.votes).map(problem => (
          <div key={problem.id} className="card">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-semibold">{problem.title}</h3>
              {getStatusBadge(problem.status)}
            </div>
            
            <p className="text-sm text-muted mb-3">{problem.description}</p>
            
            {problem.image && (
              <img src={problem.image} alt={problem.title} className="img-responsive mb-3" style={{ height: '160px', width: '100%' }} />
            )}

            <div className="flex items-center gap-3 text-xs text-muted mb-4">
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{problem.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{problem.date}</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-top pt-3" style={{ borderTop: '1px solid var(--border)' }}>
              <button 
                className="btn btn-outline py-1 px-3" 
                onClick={() => handleVote(problem.id)}
                style={{ fontSize: '0.75rem', gap: '0.25rem' }}
              >
                <ThumbsUp size={14} />
                <span>{problem.votes} Votos</span>
              </button>
              
              <div className="flex items-center gap-1 text-muted text-xs">
                <MessageSquare size={14} />
                <span>{problem.comments.length} Comentários</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
