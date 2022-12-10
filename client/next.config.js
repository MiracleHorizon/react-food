/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MOCK_API_URL: process.env.MOCK_API_URL
  }
}

module.exports = nextConfig
