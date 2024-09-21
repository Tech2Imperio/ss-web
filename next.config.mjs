/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Replace with the protocol of your image source (http or https)
        hostname: "www.tailwindtap.com", // Replace with the hostname of your image source
      },
    ],
  },
};

export default nextConfig;
