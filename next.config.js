const path = require('path')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "/styles/variables.scss";`
  },
  images: {
    domains: ['user-images.githubusercontent.com', 'www.cs.cornell.edu'],
    formats: ['image/avif', 'image/webp'],
  }
})