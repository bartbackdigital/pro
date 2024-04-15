/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "cloud.proranje.nl" }],
  },
};

export default nextConfig;
