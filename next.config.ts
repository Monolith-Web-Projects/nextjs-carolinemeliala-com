import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dmusemagz.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.net-a-porter.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
