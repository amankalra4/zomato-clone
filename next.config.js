/** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true"
// });

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["b.zmtcdn.com"]
  },
  config: {
    zomatoAPI: process.env.NEXT_PUBLIC_ZOMATO_API
  }
};
