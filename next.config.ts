/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': './src/components',
      '@/lib': './src/lib',
      '@/types': './src/types'
    };
    return config;
  }
};

export default nextConfig;
