/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true"
// });

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["b.zmtcdn.com", "images.prismic.io"]
    },
    config: {
        zomatoAPI: process.env.NEXT_PUBLIC_ZOMATO_API,
        baseURL: process.env.NEXT_PUBLIC_ZOMATO_BASE_URL
    }
};
