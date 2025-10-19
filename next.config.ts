import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        // add external domains here if the design uses remote images
        remotePatterns: [],
    },
};

export default nextConfig;
