import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, author, tags } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} siteName="OZE Toruń" />
      <div className="container" style={{ padding: '2.5rem 1.5rem 5rem', maxWidth: '780px' }}>
        <Link to="/blog" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.06em', display: 'block', marginBottom: '2rem' }}>‹ POWRÓT DO ARTYKUŁÓW</Link>
        <header style={{ borderBottom: '2px double var(--border)', paddingBottom: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
          {tags && <div style={{ marginBottom: '0.75rem' }}>{tags.map(t => <span key={t} style={{ display: 'inline-block', background: 'var(--burgundy)', color: 'var(--parchment)', fontFamily: "'Cinzel', serif", fontSize: '0.62rem', padding: '0.15rem 0.6rem', marginRight: '0.4rem', letterSpacing: '0.06em' }}>{t}</span>)}</div>}
          <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', letterSpacing: '0.04em', color: 'var(--burgundy-dark)', marginBottom: '0.75rem', lineHeight: 1.2 }}>{title}</h1>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>✦ {date} · {author} ✦</p>
          {description && <p style={{ fontFamily: "'EB Garamond', serif", fontSize: '1.1rem', color: 'var(--burgundy-light)', fontStyle: 'italic', marginTop: '0.75rem', lineHeight: 1.65 }}>{description}</p>}
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html excerpt
      frontmatter { title description date(formatString: "D MMMM YYYY", locale: "pl") author tags }
    }
  }
`;

export default BlogPost;
