import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Lock, Mail, User, CreditCard, ArrowLeft } from 'lucide-react';

const Auth = ({ onLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [bi, setBi] = useState('');

  useEffect(() => {
    // Verificar se veio da Landing Page com intenção de registo
    if (location.state?.mode === 'register') {
      setIsRegister(true);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); 
    navigate('/dashboard');
  };

  const images = {
    loginSide: "/assets/login-side.png"
  };

  return (
    <div className="auth-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        <ArrowLeft size={18} /> Voltar para o Início
      </button>

      <section className="access-section no-padding">
        <div className="split-container full-height">
          {/* Left Side: Image */}
          <div className="split-image" style={{ backgroundImage: `url(${images.loginSide})` }}>
            <div className="split-overlay">
              <div className="overlay-content">
                <h2>Juntos construímos uma comunidade melhor.</h2>
                <p>O GovLink é o seu canal directo com a administração local em Angola.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="split-form-container">
            <div className="form-wrapper page-enter">
              <div className="form-header">
                <div className="auth-logo" onClick={() => navigate('/')}>GovLink</div>
                <h3>{isRegister ? 'Criar nova conta' : 'Bem-vindo de volta'}</h3>
                <p>{isRegister ? 'Registe-se para começar a participar' : 'Insira os seus dados para aceder ao sistema'}</p>
              </div>

              <form onSubmit={handleSubmit} className="modern-form">
                {isRegister && (
                  <>
                    <div className="form-group">
                      <label className="input-label">Nome Completo</label>
                      <div className="input-with-icon">
                        <User size={18} className="icon" />
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Ex: Albino Ernesto"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="input-label">Bilhete de Identidade (BI)</label>
                      <div className="input-with-icon">
                        <CreditCard size={18} className="icon" />
                        <input
                          type="text"
                          className="input-field"
                          placeholder="000000000LA000"
                          value={bi}
                          onChange={(e) => setBi(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="form-group">
                  <label className="input-label">E-mail</label>
                  <div className="input-with-icon">
                    <Mail size={18} className="icon" />
                    <input
                      type="email"
                      className="input-field"
                      placeholder="seuemail@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="input-label">Palavra-passe</label>
                  <div className="input-with-icon">
                    <Lock size={18} className="icon" />
                    <input
                      type="password"
                      className="input-field"
                      placeholder="********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {!isRegister && (
                  <div className="flex justify-between items-center mb-6">
                    <label className="flex items-center gap-2 text-xs text-muted cursor-pointer">
                      <input type="checkbox" /> Lembrar-me
                    </label>
                    <a href="#" className="text-xs text-primary font-semibold">Esqueceu a senha?</a>
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-full py-4 text-md mt-4">
                  {isRegister ? 'Criar Minha Conta' : 'Entrar no Sistema'}
                </button>
              </form>

              <div className="form-footer">
                {isRegister ? (
                  <p>Já tem uma conta? <button onClick={() => setIsRegister(false)} className="text-secondary font-bold border-none bg-transparent cursor-pointer">Fazer Login</button></p>
                ) : (
                  <p>Ainda não tem conta? <button onClick={() => setIsRegister(true)} className="text-secondary font-bold border-none bg-transparent cursor-pointer">Criar Conta</button></p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
