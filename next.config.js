const { redirect } = require('next/dist/server/api-utils')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/eyo",
        destination: "/about/me/eyo"
      },
      {
        source: "/items/:slug",
        destination: "/procucts/:slug",
      }
    ]
  }
}

module.exports = nextConfig
