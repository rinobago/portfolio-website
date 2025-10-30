import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        // add external domains here if the design uses remote images
        remotePatterns: [],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
