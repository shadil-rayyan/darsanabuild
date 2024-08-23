import withNextra from 'nextra';
import themeConfig from './theme.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Ensure SWC minification is enabled
};

// Combine Nextra configuration with your Next.js configuration
export default withNextra({
  theme: 'nextra-theme-docs',
  themeConfig,
})(nextConfig);
