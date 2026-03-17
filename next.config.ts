import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // INDISPENSABLE pour créer le dossier /out
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Vos options du fichier .mjs
  },
};

export default nextConfig;
