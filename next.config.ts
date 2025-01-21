import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  images: {
    domains: ['res.cloudinary.com'], // Add the allowed hostname here
  },
};


export default nextConfig;
