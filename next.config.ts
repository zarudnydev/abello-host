import { API_URL } from '@/services/api';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['cdn.dummyjson.com'],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: `${API_URL}/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
