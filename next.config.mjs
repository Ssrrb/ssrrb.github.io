import createNextIntlPlugin from "next-intl/plugin";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

/** @type {import('next').NextConfig} */
const createConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const nextConfig = {
    reactStrictMode: true,
    ...(isDev ? {} : { output: "export" }),
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };

  return withNextIntl(nextConfig);
};

export default createConfig;
