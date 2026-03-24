import React from 'react';
import { Link } from 'gatsby';
const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '6rem 2rem', background: 'var(--parchment)', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: '5rem', color: 'var(--burgundy)', fontWeight: 400 }}>404</h1>
    <p style={{ fontFamily: "'EB Garamond', serif", fontStyle: 'italic', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Strona nie istnieje</p>
    <Link to="/" style={{ marginTop: '1.5rem', fontFamily: "'Cinzel', serif", color: 'var(--burgundy)', fontSize: '0.8rem', letterSpacing: '0.06em' }}>← Strona główna</Link>
  </div>
);
export default NotFound;
