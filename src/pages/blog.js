import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Artykuły" description="Artykuły o OZE w Toruniu" siteName="OZE Toruń" />
      <div className="container" style={{ padding: '3rem 1.5rem 4rem' }}>
        <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 400, fontSize: '2.5rem', color: 'var(--burgundy-dark)', letterSpacing: '0.06em', textAlign: 'center', borderBottom: '2px double var(--border)', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
          ✦ Artykuły ✦
        </h1>
        <p style={{ fontFamily: "'EB Garamond', serif", color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>{posts.length} artykułów w archiwum</p>
        {posts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {posts.map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)}
          </div>
        ) : <p style={{ textAlign: 'center', fontFamily: "'EB Garamond', serif", color: 'var(--text-muted)', padding: '3rem 0', fontStyle: 'italic' }}>Artykuły pojawią się wkrótce.</p>}
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

export default BlogPage;
