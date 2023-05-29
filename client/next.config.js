/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CLIENT_API: process.env.CLIENT_API,
    SERVER_API: process.env.SERVER_API
  },
  images: {
    domains: [
      process.env.CLIENT_API,
      process.env.SERVER_API,
      'eda.yandex',
      'avatars.mds.yandex.net',
      'yastatic.net'
    ]
  }
}

module.exports = nextConfig
