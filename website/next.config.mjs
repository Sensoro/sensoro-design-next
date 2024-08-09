import { createContentlayerPlugin } from 'next-contentlayer2';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
