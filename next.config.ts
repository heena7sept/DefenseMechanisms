import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: isProduction ? '/LLMAttackSim' : '',
  basePath: isProduction ? '/LLMAttackSim' : '',
  output: 'export',
};

export default nextConfig;
