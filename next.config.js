/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: "http://193.141.127.116/denaapi1/api/",
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://193.141.127.116/denaapi1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
