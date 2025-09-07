// frontend/src/App.tsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('token');
    if (saved) setToken(saved);
  }, []);

  const handleAuthed = (t: string) => {
    localStorage.setItem('token', t);
    setToken(t);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  return (
    <>
      <header className="topbar">
        <div className="logo">1nr Racing Team</div>
        <nav>
          <Link to="/">Home</Link>
          {token ? (
            <button className="cta" onClick={logout}>Logout</button>
          ) : (
            <button className="cta" onClick={() => navigate('/login')}>Login / Sign Up</button>
          )}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onAuthed={handleAuthed} />} />
      </Routes>

      <footer className="footer">© 2025 1nr Racing Team</footer>
    </>
  );
}

export default App;
