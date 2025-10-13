import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper font handling with Turbopack
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
