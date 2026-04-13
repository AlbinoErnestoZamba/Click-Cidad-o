import React from 'react';
import { mockNews } from '../data/mockData';

const News = () => {
  return (
    <div className="page-enter p-4">
      <div className="mb-6">
        <h1 className="text-lg">Notícias do Local</h1>
        <p className="text-muted text-xs">Fique por dentro das acções do seu governo local.</p>
      </div>

      <div className="flex-col gap-4">
        {mockNews.map(item => (
          <div key={item.id} className="card">
            <span className="badge badge-progress mb-2" style={{ fontSize: '0.6rem' }}>{item.category}</span>
            <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted mb-3">{item.summary}</p>
            <div className="flex justify-between items-center text-xs text-muted">
              <span>{item.date}</span>
              <button className="btn btn-outline py-1 px-3" style={{ fontSize: '0.65rem' }}>Ler mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
