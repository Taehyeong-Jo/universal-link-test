/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
      {
        source: '/.well-known/assetlinks.json',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
