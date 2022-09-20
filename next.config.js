/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['localhost'],
  },
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });
    return cfg;
  },
};
