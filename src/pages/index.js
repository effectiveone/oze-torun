import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="OZE Toruń — Portal energetyczny" description="Portal o energii odnawialnej w Toruniu i Kujawach" siteName="OZE Toruń" />

      <div style={{ background: 'var(--parchment-dark)', borderBottom: '3px double var(--border)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>✦ AKTUALNOŚCI ENERGETYCZNE ✦</p>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: 'var(--burgundy-dark)', lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
            Odnawialne Źródła Energii<br/>w Toruniu i Kujawach
          </h1>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 2rem', fontStyle: 'italic' }}>
            Kronika transformacji energetycznej regionu kujawsko-pomorskiego. Fotowoltaika, wiatr, biomasa.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/blog" style={{ background: 'var(--burgundy)', color: 'var(--parchment)', padding: '0.7rem 1.75rem', fontFamily: "'Cinzel', serif", fontSize: '0.8rem', letterSpacing: '0.06em', textDecoration: 'none' }}>PRZEGLĄDAJ ARTYKUŁY</Link>
            <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ border: '2px solid var(--gold)', color: 'var(--gold)', padding: '0.7rem 1.75rem', fontFamily: "'Cinzel', serif", fontSize: '0.8rem', letterSpacing: '0.06em', textDecoration: 'none' }}>✦ AUDYT ENERGETYCZNY</a>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1.5rem 4rem' }}>
        {posts.length > 0 ? (
          <>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-muted)', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '2rem', borderBottom: '2px double var(--border)', paddingBottom: '0.75rem' }}>
              ✦ NAJNOWSZE ARTYKUŁY ✦
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {posts.slice(0, 6).map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)}
            </div>
            {posts.length > 6 && <div style={{ textAlign: 'center' }}><Link to="/blog" style={{ fontFamily: "'Cinzel', serif", color: 'var(--burgundy)', fontSize: '0.82rem', letterSpacing: '0.06em', border: '1px solid var(--border)', padding: '0.5rem 1.5rem', display: 'inline-block', textDecoration: 'none' }}>WSZYSTKIE ARTYKUŁY ({posts.length}) ›</Link></div>}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>✦ ✦ ✦</p>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.5rem', fontWeight: 400, color: 'var(--burgundy)' }}>Artykuły wkrótce</h2>
            <p style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>Kronika OZE dla Torunia i Kujaw jest w przygotowaniu.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes { fields { slug } excerpt(pruneLength: 180) frontmatter { title date(formatString: "D MMMM YYYY", locale: "pl") tags } }
    }
  }
`;

export default IndexPage;
