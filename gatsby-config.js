module.exports = {
  siteMetadata: {
    title: 'OZE Toruń',
    description: 'Portal o odnawialnych źródłach energii w Toruniu i Kujawach',
    siteUrl: 'https://oze-torun.pages.dev',
    author: 'Redakcja OZE Toruń',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-source-filesystem', options: { name: 'blog', path: `${__dirname}/content/blog` } },
    { resolve: 'gatsby-transformer-remark', options: { plugins: [] } },
  ],
};
