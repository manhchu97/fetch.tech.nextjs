/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost'],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
