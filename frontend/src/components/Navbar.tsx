import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  token: string | null;
  logout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ token, logout }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserName(user.name);
    } else {
      setUserName(null);
    }
  }, [token]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="topbar">
      <div className="logo" onClick={() => navigate('/')}>1nr Racing Team</div>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <span className="nav-link" onClick={() => scrollToSection('news')}>News</span>
        <span className="nav-link" onClick={() => scrollToSection('contact')}>Contact</span>

        {token && userName ? (
          <>
            <span className="nav-link">Hello, {userName}</span>
            <button className="cta" onClick={logout}>Logout</button>
          </>
        ) : (
          <button className="cta" onClick={() => navigate('/login')}>Login / Sign Up</button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
