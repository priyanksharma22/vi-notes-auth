import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Dashboard from './Dashboard';

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('login');
  };

  if (page === 'dashboard') return <Dashboard user={user} onLogout={handleLogout} />;
  if (page === 'register') return <RegisterPage onSwitch={() => setPage('login')} onLogin={handleLogin} />;
  return <LoginPage onSwitch={() => setPage('register')} onLogin={handleLogin} />;
}

export default App;