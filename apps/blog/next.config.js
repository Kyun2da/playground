/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kyun2da-blog.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
