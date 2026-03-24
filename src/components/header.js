import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => (
  <header>
    <div style={{ background: 'var(--burgundy-dark)', borderBottom: '3px double var(--gold)', padding: '1.25rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{ display: 'block', fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--gold)', letterSpacing: '0.1em', fontWeight: 600 }}>
            ✦ OZE Toruń ✦
          </span>
          <span style={{ display: 'block', fontFamily: "'EB Garamond', serif", fontSize: '0.85rem', color: 'rgba(201,149,42,0.7)', letterSpacing: '0.15em', fontStyle: 'italic', marginTop: '0.2rem' }}>
            Energia Odnawialna Kujaw i Pomorza
          </span>
        </Link>
        <nav style={{ display: 'flex', gap: '2rem', marginTop: '0.25rem', borderTop: '1px solid rgba(201,149,42,0.3)', paddingTop: '0.75rem' }}>
          <Link to="/" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(201,149,42,0.85)', fontSize: '0.8rem', letterSpacing: '0.08em', textDecoration: 'none' }}>STRONA GŁÓWNA</Link>
          <Link to="/blog" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(201,149,42,0.85)', fontSize: '0.8rem', letterSpacing: '0.08em', textDecoration: 'none' }}>ARTYKUŁY</Link>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.08em', textDecoration: 'none', fontWeight: 600 }}>✦ AUDYT ENERGETYCZNY</a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
