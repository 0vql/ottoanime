/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  spa: true,
  reactStrictMode: true,
  images: {
    domains: ["gogocdn.net"],
  },
});
