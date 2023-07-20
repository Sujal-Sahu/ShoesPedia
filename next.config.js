/** @type {import('next').NextConfig} */


const nextConfig = {
  fontDir: './fonts',
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};



module.exports = nextConfig
