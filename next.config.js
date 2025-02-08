/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out', // Optional: Change output directory (default is "out")
	reactStrictMode : true,
	experimental: {
    serverActions: true, // Enable Server Actions
  },
	images: {
		unoptimized: true,
    domains: ["hvacseoagency.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "hvacseoagency.com",
        port: "8080",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
