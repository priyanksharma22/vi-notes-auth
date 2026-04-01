import React, { useState } from 'react';

function RegisterPage({ onSwitch, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.message);
      onLogin(data.user);
    } catch {
      setError('Something went wrong');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Vi-Notes</h1>
        <p style={styles.subtitle}>Create your account</p>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input style={styles.input} type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input style={styles.input} type="password" placeholder="Password (min 6 chars)" value={password} onChange={e => setPassword(e.target.value)} required />
          <button style={styles.button} type="submit">Create Account</button>
        </form>
        <p style={styles.switch}>Already have an account? <span style={styles.link} onClick={onSwitch}>Sign in</span></p>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' },
  card: { background: '#fff', padding: '2.5rem', borderRadius: '12px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' },
  title: { textAlign: 'center', fontSize: '2rem', marginBottom: '0.5rem' },
  subtitle: { textAlign: 'center', color: '#666', marginBottom: '1.5rem' },
  error: { color: '#dc2626', background: '#fef2f2', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem' },
  input: { width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1.5px solid #e5e7eb', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box' },
  button: { width: '100%', padding: '0.8rem', background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' },
  switch: { textAlign: 'center', marginTop: '1rem', color: '#666' },
  link: { color: '#1a1a1a', fontWeight: '600', cursor: 'pointer' },
};

export default RegisterPage;