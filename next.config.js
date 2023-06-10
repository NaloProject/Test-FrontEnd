/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // Now will take into account SVGs as Component as well as SVGs in <Image> components rendered in an img tag
    config.module.rules.unshift({
      test: /\.svg$/i,
      use: ['@svgr/webpack', 'url-loader'],
      exclude: ['/node_modules'],
    })

    return config
  },
}

module.exports = nextConfig
