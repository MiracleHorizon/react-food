/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MOCK_API_URL: process.env.MOCK_API_URL,
    SERVER_API: process.env.SERVER_API,
    CART_ID: process.env.CART_ID
  },
  images: {
    domains: ['eda.yandex', 'avatars.mds.yandex.net', 'yastatic.net']
  }
}

module.exports = nextConfig
