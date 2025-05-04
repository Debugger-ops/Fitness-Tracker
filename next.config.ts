import type { NextConfig } from 'next'; // Import Next.js config type

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }: { isServer: boolean }) {
    // Custom Webpack behavior
    return config;
  },
  images: {
    domains: ['img.freepik.com'], // Add your domain here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/500x500/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
