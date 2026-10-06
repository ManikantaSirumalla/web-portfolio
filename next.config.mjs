/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "umbc.edu" },
      { protocol: "https", hostname: "www.umbc.edu" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  async redirects() {
    return [{ source: "/projects/reptrack-pro", destination: "/projects/zealo", permanent: true }];
  },
};

export default nextConfig;
