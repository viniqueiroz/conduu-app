import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: isProd ? '/conduu-app' : '',
  assetPrefix: isProd ? '/conduu-app/' : '',
  images: {
    unoptimized: true, // O GitHub Pages não suporta otimização de imagem do Next.js
  },
};

export default nextConfig;
