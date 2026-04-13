import React from 'react';
import { mockNews } from '../data/mockData';
import { Calendar, Tag, ChevronRight } from 'lucide-react';

const News = () => {
  return (
    <div className="page-enter p-4">
      <div className="mb-6">
        <h1 className="text-lg">Portal de Notícias</h1>
        <p className="text-muted text-xs">Actualizações oficiais do seu Município.</p>
      </div>

      <div className="flex-col gap-6">
        {mockNews.map(item => (
          <div key={item.id} className="card no-padding overflow-hidden">
            <div className="news-image-frame">
              <img 
                src={item.image} 
                alt={item.title} 
              />
              <span className="absolute top-3 left-3 badge badge-secondary shadow-md">
                {item.category}
              </span>
            </div>
            
            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-muted mb-2">
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>
              
              <h3 className="text-md font-bold mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-muted mb-4 line-clamp-2">{item.summary}</p>
              
              <button className="btn btn-text p-0 text-sm flex items-center gap-1">
                Ler notícia completa <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
