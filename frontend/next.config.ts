import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@getpara/web-sdk", "@getpara/react-sdk"],
};

export default nextConfig;
