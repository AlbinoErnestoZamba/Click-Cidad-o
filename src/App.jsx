import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Home as HomeIcon, PlusCircle, BarChart2, Newspaper, User, PieChart } from 'lucide-react';
import { mockProblems as initialProblems } from './data/mockData';

// Pages
import HomePage from './pages/Home';
import ReportPage from './pages/Report';
import TransparencyPage from './pages/Transparency';
import NewsPage from './pages/News';
import DashboardPage from './pages/Dashboard';
import ProfilePage from './pages/Profile';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/Auth';

// Components
import Sidebar from './components/Sidebar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [problems, setProblems] = useState(initialProblems);
  const [feedItems, setFeedItems] = useState([
    { id: 1, text: "Novo reporte em Luanda Sul", time: "Há 2 min", type: "report" },
    { id: 2, text: "Obras concluídas no cazenga", time: "Há 15 min", type: "success" },
    { id: 3, text: "Orçamento participativo aberto em Talatona", time: "Hoje", type: "news" },
  ]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const handleVote = (id) => {
    setProblems(prev => prev.map(p => 
      p.id === id ? { ...p, votes: p.votes + 1 } : p
    ));
  };

  const handleAddReport = (newReport) => {
    const reportId = problems.length + 1;
    const report = {
      ...newReport,
      id: reportId,
      votes: 0,
      comments: [],
      date: new Date().toLocaleDateString('pt-AO'),
      status: 'recebido'
    };
    
    setProblems([report, ...problems]);
    
    // Add to activity feed
    setFeedItems([
      { id: Date.now(), text: `Novo reporte: ${report.title}`, time: "Agora", type: "report" },
      ...feedItems
    ]);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage feedItems={feedItems} />} />
        <Route 
          path="/login" 
          element={!isLoggedIn ? <AuthPage onLogin={handleLogin} /> : <Navigate to="/dashboard" replace />} 
        />

        {/* Private Routes (Protected) */}
        <Route 
          path="/*" 
          element={
            isLoggedIn ? (
              <div className="app-container">
                {/* Desktop Sidebar */}
                <Sidebar onLogout={handleLogout} />

                <div className="main-wrapper">
                  {/* Mobile Header */}
                  <header className="app-header">
                    <h1>GovLink</h1>
                    <button className="btn-icon">
                      <User size={24} color="white" />
                    </button>
                  </header>

                  <main className="app-content">
                    <Routes>
                      <Route path="/dashboard" element={<DashboardPage problems={problems} />} />
                      <Route path="/home" element={<HomePage problems={problems} onVote={handleVote} />} />
                      <Route path="/report" element={<ReportPage onAddReport={handleAddReport} />} />
                      <Route path="/transparency" element={<TransparencyPage />} />
                      <Route path="/news" element={<NewsPage />} />
                      <Route path="/profile" element={<ProfilePage />} />
                      <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    </Routes>
                  </main>

                  {/* Mobile Bottom Navigation */}
                  <nav className="bottom-nav">
                    <NavLink to="/home" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                      <HomeIcon size={24} />
                      <span>Início</span>
                    </NavLink>
                    <NavLink to="/transparency" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                      <BarChart2 size={24} />
                      <span>Transparência</span>
                    </NavLink>
                    <NavLink to="/report" className="nav-item">
                      <div className="fab-placeholder">
                        <PlusCircle size={32} color="var(--secondary)" fill="white" />
                      </div>
                      <span>Reportar</span>
                    </NavLink>
                    <NavLink to="/news" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                      <Newspaper size={24} />
                      <span>Notícias</span>
                    </NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                      <PieChart size={24} />
                      <span>Painel</span>
                    </NavLink>
                  </nav>
                </div>
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
