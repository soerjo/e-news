/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: [
      "jid.storage.googleapis.com",
      "internal.jurnalistika.id",
      "jurnalistika-s3.storage.googleapis.com",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  swcMinify: true,
  redirects: () => {
    return [
      {
        source: "/detail",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
