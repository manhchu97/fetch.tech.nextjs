/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'localhost',
      'api2-staging.fetch.tech',
      'wsrv.nl',
      '139.59.117.75',
    ],
    minimumCacheTTL: 60,
  },
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
