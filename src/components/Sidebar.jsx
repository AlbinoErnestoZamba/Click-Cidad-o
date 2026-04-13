import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BarChart2, PlusCircle, Newspaper, PieChart, User } from 'lucide-react';

const Sidebar = ({ onLogout }) => {
  const navItems = [
    { to: "/dashboard", icon: <PieChart size={20} />, label: "Painel de Impacto" },
    { to: "/home", icon: <Home size={20} />, label: "Início" },
    { to: "/transparency", icon: <BarChart2 size={20} />, label: "Transparência" },
    { to: "/report", icon: <PlusCircle size={20} />, label: "Reportar Problema" },
    { to: "/news", icon: <Newspaper size={20} />, label: "Notícias" },
    { to: "/profile", icon: <User size={20} />, label: "Meu Perfil" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">GovLink</div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            key={item.to} 
            to={item.to} 
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="sidebar-footer" style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <button 
          onClick={onLogout}
          className="sidebar-item" 
          style={{ width: '100%', background: 'transparent', border: 'none', cursor: 'pointer', justifySelf: 'flex-end', color: '#FDA4AF' }}
        >
          <User size={20} />
          <span>Sair do Sistema</span>
        </button>
        <div style={{ marginTop: '1rem', fontSize: '0.7rem', opacity: 0.5 }}>v1.0.0 Protótipo</div>
      </div>
    </aside>
  );
};

export default Sidebar;
