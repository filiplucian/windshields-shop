/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://maps.googleapis.com${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "frame-src 'self' https://www.google.com https://maps.google.com https://www.openstreetmap.org",
  "img-src 'self' data: https:",
  "connect-src 'self' https://maps.googleapis.com https://*.googleapis.com",
].join('; ')

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
    ]
  },
}

module.exports = nextConfig
