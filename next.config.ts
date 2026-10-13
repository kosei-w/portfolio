import type { NextConfig } from "next";

// 人物サイト化（1ページ構成）で廃止した旧ページ。外部に貼られたリンクをトップへ流す
const RETIRED_PATHS = ["/about", "/works", "/works/:slug*", "/plans", "/contact"];

const nextConfig: NextConfig = {
  async redirects() {
    return RETIRED_PATHS.map((source) => ({ source, destination: "/", permanent: true }));
  },
};

export default nextConfig;
