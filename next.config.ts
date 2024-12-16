import type { NextConfig } from "next";
import NextBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
	reactStrictMode: true
};

const withBundleAnalyzer = NextBundleAnalyzer({
	enabled: process.env.NODE_ENV === "production"
});

export default withBundleAnalyzer(nextConfig);
