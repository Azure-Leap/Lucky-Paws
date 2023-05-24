/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**", pathname: "**" },
      { protocol: "http", hostname: "**", pathname: "**" },

      // { protocol: "https", hostname: "cdn.zochil.shop", pathname: "**" },
      // { protocol: "https", hostname: "tailwindui.com", pathname: "**" },
      // { protocol: "https", hostname: "images.pexels.com", pathname: "**" },
      // {
      //   protocol: "https",
      //   hostname: "dl5zpyw5k3jeb.cloudfront.net",
      //   pathname: "**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "cdn.royalcanin-weshare-online.io",
      //   pathname: "**",
      // },
      // { protocol: "https", hostname: "d2c-cdn.royalcanin.com", pathname: "**" },
      // { protocol: "https", hostname: "m.media-amazon.com", pathname: "**" },
      // { protocol: "https", hostname: "tailybuddy.com", pathname: "**" },
      // { protocol: "https", hostname: "media.tenor.com", pathname: "**" },
      // { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
    ],
  },
};

module.exports = nextConfig;
