import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Vi-Notes</h1>
        <div style={styles.right}>
          <span style={styles.email}>{user.email}</span>
          <button style={styles.button} onClick={onLogout}>Sign Out</button>
        </div>
      </header>
      <main style={styles.main}>
        <h2>Welcome back</h2>
        <p style={styles.text}>You are successfully logged in. Your writing sessions will appear here.</p>
      </main>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', background: '#f5f5f5' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#fff', borderBottom: '1px solid #e5e7eb' },
  logo: { fontSize: '1.5rem' },
  right: { display: 'flex', alignItems: 'center', gap: '1rem' },
  email: { color: '#666', fontSize: '0.9rem' },
  button: { padding: '0.4rem 1rem', background: 'transparent', border: '1.5px solid #1a1a1a', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' },
  main: { maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' },
  text: { color: '#666', marginTop: '0.5rem' },
};

export default Dashboard;