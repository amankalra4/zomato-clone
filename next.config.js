/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['b.zmtcdn.com'],
  },
  config: {
    zomatoAPI: process.env.NEXT_PUBLIC_ZOMATO_API
  }
}
