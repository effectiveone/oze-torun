import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--burgundy-dark)', borderTop: '3px double var(--gold)', padding: '3rem 0 1.5rem', marginTop: '4rem', textAlign: 'center' }}>
      <div className="container">
        <h3 style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)', fontSize: '1.2rem', letterSpacing: '0.1em', marginBottom: '0.5rem', borderBottom: 'none' }}>✦ OZE Toruń ✦</h3>
        <p style={{ fontFamily: "'EB Garamond', serif", color: 'rgba(201,149,42,0.6)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>Portal o odnawialnych źródłach energii w Toruniu i Kujawach</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(201,149,42,0.75)', fontSize: '0.75rem', letterSpacing: '0.06em', textDecoration: 'none' }}>STRONA GŁÓWNA</Link>
          <Link to="/blog" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(201,149,42,0.75)', fontSize: '0.75rem', letterSpacing: '0.06em', textDecoration: 'none' }}>ARTYKUŁY</Link>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.06em', textDecoration: 'none', fontWeight: 600 }}>✦ ECOAUDYT.APP</a>
        </div>
        <div style={{ borderTop: '1px solid rgba(201,149,42,0.2)', paddingTop: '1rem' }}>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.8rem', color: 'rgba(201,149,42,0.35)', fontStyle: 'italic' }}>Anno Domini {year} · OZE Toruń</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
