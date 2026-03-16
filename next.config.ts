import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: 'https://dummyjson.com/:path*',
        },
      ],
    }
  },
  reactStrictMode: false,
}

export default nextConfig
