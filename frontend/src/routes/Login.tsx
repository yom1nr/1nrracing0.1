// frontend/src/routes/Login.tsx
import React, { useState } from 'react';
import { login, register } from '../api';

type Props = { onAuthed: (token: string) => void };

const Login: React.FC<Props> = ({ onAuthed }) => {
  const [mode, setMode] = useState<'login'|'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      if (mode === 'login') {
        const res = await login(email, password);
        console.log('login res', res);
        onAuthed(res.token);
      } else {
        const res = await register(name, email, password);
        console.log('register res', res);
        onAuthed(res.token);
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || err.message || 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <div className="tabs">
          <button className={mode==='login'?'active':''} onClick={()=>setMode('login')}>Login</button>
          <button className={mode==='signup'?'active':''} onClick={()=>setMode('signup')}>Sign Up</button>
        </div>

        <form onSubmit={submit}>
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e=>setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
          />
          {error && <div className="error">{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? 'Please wait…' : (mode === 'login' ? 'Login' : 'Create account')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
