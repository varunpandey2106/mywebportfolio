// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['jsx', 'js'],
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      scrollRestoration: true,
    },    
  }
  
  export default nextConfig
  