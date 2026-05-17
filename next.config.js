/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ESLint 9 flat config causes a circular JSON error when Next.js
    // tries to serialize the config during build. Run lint separately
    // via `npm run lint`.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
