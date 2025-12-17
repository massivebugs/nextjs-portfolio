import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    // For static export, we need to disable the built-in image optimization
    unoptimized: true
  }
}

export default nextConfig
