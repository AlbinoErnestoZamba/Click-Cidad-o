import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, Users, MessageSquare, ArrowRight, ChevronDown,
  BarChart2, Zap, Activity, Globe, MapPin,
  Search, CheckCircle, Bell
} from 'lucide-react';

const LandingPage = ({ feedItems }) => {
  const navigate = useNavigate();

  const handleNavigate = (mode) => {
    navigate('/login', { state: { mode } });
  };

  const images = {
    hero: "/assets/hero.png"
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-container">
      {/* Dynamic Background Blobs */}
      <div className="blob-area">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Modern Sticky Nav */}
      <nav className="landing-nav glass sticky-nav">
        <div className="logo" onClick={() => navigate('/')}>GovLink</div>
        <div className="nav-links">
          <a onClick={() => scrollTo('sobre')}>Sobre</a>
          <a onClick={() => scrollTo('como-funciona')}>Como funciona</a>
          <a onClick={() => scrollTo('quem-somos')}>Quem somos</a>
        </div>
        <div className="nav-actions">
          <button className="btn btn-outline" onClick={() => navigate('/login')}>Entrar</button>
          <button className="btn btn-primary" onClick={() => navigate('/login', { state: { mode: 'register' } })}>Criar Conta</button>
        </div>
      </nav>

      {/* Hero Section 2.0 */}
      <section id="inicio" className="hero-section">
        <div className="hero-grid container">
          <div className="hero-content page-enter">
            <div className="live-badge">
              <span className="pulse"></span>
              Plataforma Ativa: +2.5k reportes registrados
            </div>

            <h1>O Futuro da <span>Cidadania</span> começa agora.</h1>
            <p>
              GovLink é a ponte tecnológica que conecta a juventude angolana à governação transparente.
              Reporte, acompanhe e transforme a sua comunidade em tempo real.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary hero-cta" onClick={() => navigate('/login', { state: { mode: 'register' } })}>
                Começar Agora — É Grátis
              </button>
              <button className="btn btn-outline" onClick={() => scrollTo('como-funciona')}>
                Ver como funciona
              </button>
            </div>

            {/* Quick Actions Bar */}
            <div className="quick-actions glass">
              <div className="action-item">
                <Search size={18} />
                <span>Pesquisar Orçamento</span>
              </div>
              <div className="action-divider"></div>
              <div className="action-item" onClick={() => handleNavigate('login')}>
                <Zap size={18} color="var(--secondary)" />
                <span>Reportar Agora</span>
              </div>
              <button className="btn btn-primary" onClick={() => handleNavigate('register')}>
                Começar
              </button>
            </div>

            <div className="hero-btns mt-6">
              <button className="btn btn-text" onClick={() => scrollTo('como-funciona')}>
                Saiba como funciona <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="hero-image-container page-enter" style={{ animationDelay: '0.2s' }}>
            <div className="hero-image-wrapper">
              <img src={images.hero} alt="Inovação em Angola" className="hero-img" />

              {/* Activity Feed Widget */}
              <div className="activity-widget glass-dark">
                <div className="widget-header">
                  <Activity size={16} />
                  <span>Atividade Recente</span>
                </div>
                <div className="widget-content">
                  {feedItems.map(item => (
                    <div key={item.id} className="feed-item">
                      <div className={`dot ${item.type}`}></div>
                      <div className="feed-text">
                        <p>{item.text}</p>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Badge */}
              <div className="hero-floating-card glass">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary p-2 rounded-xl text-white">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-800">85% Resolvidos</div>
                    <div className="text-[10px] text-gray-500">Taxa de sucesso nacional</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="text-secondary font-bold text-sm tracking-widest uppercase">Sobre o GovLink</span>
            <h2>Transparência e Participação</h2>
            <p>Construindo uma relação de confiança entre o cidadão e o governo.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon bg-blue">
                <Users size={32} />
              </div>
              <h3>Empoderamento Jovem</h3>
              <p>Damos as ferramentas necessárias para que a juventude tenha um papel central na governação local.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon bg-red">
                <Shield size={32} />
              </div>
              <h3>Monitoria Cívica</h3>
              <p>Acompanhe em tempo real como o orçamento do seu município está a ser aplicado.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon bg-amber">
                <MessageSquare size={32} />
              </div>
              <h3>Comunicação Direta</h3>
              <p>Crie uma relação de confiança e cobrança directa com os órgãos da administração pública.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="section bg-light relative">
        <div className="container">
          <div className="section-header">
            <span className="text-secondary font-bold text-sm tracking-widest uppercase"></span>
            <h2>Como funciona o GovLink</h2>
            <p>A tecnologia a favor da sua comunidade em 3 passos simples.</p>
          </div>

          <div className="features-detailed-grid">
            <div className="detail-card glass">
              <div className="detail-icon">
                <Shield size={32} />
              </div>
              <div className="detail-content">
                <span className="detail-number"></span>
                <h4>Identificação Segura</h4>
                <p>Validação via BI garantindo que cada voz é real e auditável pela administração.</p>
              </div>
            </div>

            <div className="detail-card glass">
              <div className="detail-icon">
                <MapPin size={32} />
              </div>
              <div className="detail-content">
                <span className="detail-number"></span>
                <h4>Mapeamento de Problemas</h4>
                <p>Geolocalização precisa para que as equipas técnicas saibam exactamente onde intervir.</p>
              </div>
            </div>

            <div className="detail-card glass">
              <div className="detail-icon">
                <BarChart2 size={32} />
              </div>
              <div className="detail-content">
                <span className="detail-number"></span>
                <h4>Acompanhamento Público</h4>
                <p>Receba actualizações sobre o estado do seu reporte até à sua total resolução.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section (formerly Impact) */}
      <section id="quem-somos" className="section bg-white relative">
        <div className="container">
          <div className="section-header">
            <span className="text-secondary font-bold text-sm tracking-widest uppercase"></span>
            <h2>Quem Somos</h2>
            <p>Uma iniciativa focada na modernização administrativa de Angola.</p>
          </div>

          <div className="impact-grid">
            <div className="impact-card glass">
              <div className="impact-icon"><Users size={32} /></div>
              <div className="impact-info">
                <h3>+15k</h3>
                <p>Membros Ativos</p>
              </div>
            </div>
            <div className="impact-card glass">
              <div className="impact-icon"><Globe size={32} /></div>
              <div className="impact-info">
                <h3>18</h3>
                <p>Províncias Ativas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer glass-dark">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">GovLink</div>
            <p>Construindo a transparência digital em Angola.</p>
            <div className="footer-links mt-4">
              <a href="#">Privacidade</a> • <a href="#">Termos</a> • <a href="#">Contacto</a>
            </div>
            <p className="mt-6 opacity-60">© 2024 GovLink Angola. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
