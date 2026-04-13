import React, { useState } from 'react';
import { Camera, MapPin, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MapView from '../components/MapView';

const Report = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Infraestrutura',
    location: '',
    lat: -8.8383,
    lng: 13.2344
  });

  const handleMapClick = (latlng) => {
    setFormData({
      ...formData,
      lat: latlng.lat,
      lng: latlng.lng,
      location: `Coord: ${latlng.lat.toFixed(4)}, ${latlng.lng.toFixed(4)}`
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Relatório enviado com sucesso! Obrigado pela sua participação em Angola.');
    navigate('/dashboard');
  };

  return (
    <div className="page-enter p-4 pb-20">
      <div className="mb-6">
        <h1 className="text-lg">Reportar Problema</h1>
        <p className="text-muted text-xs">Selecione o local no mapa e detalhe o problema.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex-col gap-6">
        <div className="card no-padding overflow-hidden mb-4">
          <div className="p-3 bg-gray-50 border-bottom text-xs font-bold text-muted uppercase tracking-wider">
            1. Localize no Mapa
          </div>
          <MapView 
            height="250px" 
            onMapClick={handleMapClick}
            markers={[{ position: [formData.lat, formData.lng], title: "Seu Relatório" }]}
          />
          <div className="p-3 text-xs text-muted italic bg-light">
            Clique no mapa para ajustar a localização precisa.
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="input-group">
            <label className="input-label">Título do Problema</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="Ex: Buraco na via, Lixo acumulado..."
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Localização (Texto/Endereço)</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                className="input-field" 
                placeholder="Rua, Bairro, Município"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="input-group">
              <label className="input-label">Categoria</label>
              <select 
                className="input-field text-sm"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option>Infraestrutura</option>
                <option>Saneamento</option>
                <option>Energia</option>
                <option>Segurança</option>
                <option>Saúde</option>
                <option>Outros</option>
              </select>
            </div>

            <div className="input-group flex flex-col justify-end">
               <button type="button" className="btn btn-outline w-full h-[48px] text-xs">
                 <Camera size={18} /> Foto/Vídeo
               </button>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Descrição</label>
            <textarea 
              className="input-field" 
              rows="3" 
              placeholder="Descreva detalhadamente o que está a acontecer..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full py-4 mt-2" style={{ gap: '0.75rem' }}>
          <Send size={20} />
          Enviar Relatório Oficial
        </button>
      </form>
    </div>
  );
};

export default Report;
