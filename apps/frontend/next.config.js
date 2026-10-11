/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  async headers() {
    return [
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive',
          },
        ],
      },
      {
        source: '/thank-you',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/design-system',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/pay',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, follow',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Direct Service Permalinks Mapping to Canonical Category Pages (HTTP 301 Moved Permanently)
      {
        source: '/web-design-development',
        destination: '/services/web-development',
        statusCode: 301,
      },
      {
        source: '/mobile-app-development',
        destination: '/services/mobile-app-development',
        statusCode: 301,
      },
      {
        source: '/ecommerce-website-design',
        destination: '/services/ecommerce-development',
        statusCode: 301,
      },
      {
        source: '/logo-designing',
        destination: '/services/ui-ux-branding',
        statusCode: 301,
      },
      {
        source: '/search-engine-optimization',
        destination: '/services/seo-services',
        statusCode: 301,
      },
      {
        source: '/ecommerce-seo',
        destination: '/services/seo-services',
        statusCode: 301,
      },
      {
        source: '/enterprise-seo',
        destination: '/services/seo-services',
        statusCode: 301,
      },
      {
        source: '/local-seo',
        destination: '/services/seo-services',
        statusCode: 301,
      },
      {
        source: '/local-listing-optimization',
        destination: '/services/seo-services',
        statusCode: 301,
      },
      {
        source: '/google-adwords',
        destination: '/services/performance-marketing',
        statusCode: 301,
      },
      {
        source: '/adwords-management',
        destination: '/services/performance-marketing',
        statusCode: 301,
      },
      {
        source: '/remarketing-service',
        destination: '/services/performance-marketing',
        statusCode: 301,
      },
      {
        source: '/mobile-advertisement',
        destination: '/services/performance-marketing',
        statusCode: 301,
      },
      {
        source: '/mobile-app-marketing',
        destination: '/services/app-store-optimization',
        statusCode: 301,
      },
      {
        source: '/app-store-optimization-aso',
        destination: '/services/app-store-optimization',
        statusCode: 301,
      },
      {
        source: '/social-media-optimization',
        destination: '/services/social-media-marketing',
        statusCode: 301,
      },
      {
        source: '/social-media-optimization-2',
        destination: '/services/social-media-marketing',
        statusCode: 301,
      },
      {
        source: '/quora-marketing',
        destination: '/services/social-media-marketing',
        statusCode: 301,
      },
      {
        source: '/video-marketing',
        destination: '/services/social-media-marketing',
        statusCode: 301,
      },
      {
        source: '/guest-posting',
        destination: '/services/seo-services',
        statusCode: 301,
      },
      {
        source: '/end-to-end-content-marketing',
        destination: '/services/seo-services',
        statusCode: 301,
      },
      {
        source: '/digital-marketing-services',
        destination: '/services',
        statusCode: 301,
      },
      {
        source: '/domain-hosting',
        destination: '/services/website-maintenance',
        statusCode: 301,
      },

      // Legacy Package & Retainer URLs Mapping to /pricing
      {
        source: '/smo-packages-new',
        destination: '/pricing',
        statusCode: 301,
      },
      {
        source: '/our-smo-packages',
        destination: '/pricing',
        statusCode: 301,
      },
      {
        source: '/our-seo-packages',
        destination: '/pricing',
        statusCode: 301,
      },
      {
        source: '/designing-packages',
        destination: '/pricing',
        statusCode: 301,
      },
      {
        source: '/website-maintenance-packages',
        destination: '/services/website-maintenance',
        statusCode: 301,
      },

      // Contact & Interactive Quote Forms
      {
        source: '/contact-us',
        destination: '/contact',
        statusCode: 301,
      },
      {
        source: '/informative-websites-form',
        destination: '/quote',
        statusCode: 301,
      },
      {
        source: '/e-commerce-websites-form',
        destination: '/quote',
        statusCode: 301,
      },
      {
        source: '/make-a-payment',
        destination: '/pay',
        statusCode: 301,
      },

      // Company, Awards & Social Proof
      {
        source: '/awwards',
        destination: '/about',
        statusCode: 301,
      },
      {
        source: '/teams',
        destination: '/about',
        statusCode: 301,
      },
      {
        source: '/life-at-leavecode',
        destination: '/careers',
        statusCode: 301,
      },
      {
        source: '/career',
        destination: '/careers',
        statusCode: 301,
      },
      {
        source: '/happy-clients',
        destination: '/portfolio',
        statusCode: 301,
      },
      // Note: Deleted staging/test artifacts (/test, /test-2, /test_a) are intentionally NOT redirected to homepage (/); they return HTTP 404 Not Found.
    ];
  },
};

module.exports = nextConfig;
