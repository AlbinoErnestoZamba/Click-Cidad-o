import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Home as HomeIcon, PlusCircle, BarChart2, Newspaper, User, PieChart } from 'lucide-react';

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

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
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
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/home" element={<HomePage />} />
                      <Route path="/report" element={<ReportPage />} />
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
