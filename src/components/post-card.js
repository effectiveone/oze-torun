import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ title, excerpt, slug, date, tags }) => (
  <article style={{ background: 'var(--parchment-dark)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', padding: '1.5rem', transition: 'box-shadow 0.2s' }}
    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(109,28,46,0.12)'}
    onMouseLeave={e => e.currentTarget.style.boxShadow = ''}>
    <time style={{ display: 'block', fontFamily: "'Cinzel', serif", fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>✦ {date}</time>
    {tags && <div style={{ marginBottom: '0.5rem' }}>{tags.map(t => <span key={t} style={{ display: 'inline-block', background: 'var(--burgundy)', color: 'var(--parchment)', fontFamily: "'Cinzel', serif", fontSize: '0.62rem', padding: '0.15rem 0.5rem', marginRight: '0.3rem', letterSpacing: '0.06em' }}>{t}</span>)}</div>}
    <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1rem', fontWeight: 400, marginBottom: '0.6rem', letterSpacing: '0.03em', lineHeight: 1.3 }}>
      <Link to={`/blog${slug}`} style={{ color: 'var(--burgundy-dark)', textDecoration: 'none' }}
        onMouseEnter={e => e.target.style.color = 'var(--burgundy-light)'}
        onMouseLeave={e => e.target.style.color = 'var(--burgundy-dark)'}>{title}</Link>
    </h2>
    {excerpt && <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>{excerpt}</p>}
    <Link to={`/blog${slug}`} style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)', fontSize: '0.72rem', letterSpacing: '0.06em' }}>Czytaj dalej ›</Link>
  </article>
);

export default PostCard;
