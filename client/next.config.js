/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER_API: process.env.SERVER_API
  },
  images: {
    domains: ['eda.yandex', 'avatars.mds.yandex.net', 'yastatic.net']
  }
}

module.exports = nextConfig
