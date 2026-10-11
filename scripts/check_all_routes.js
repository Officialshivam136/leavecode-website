const http = require('http');

const routesToTest = [
  // Core marketing & hub routes
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/pricing',
  '/careers',
  '/partner-with-us',
  '/industries',
  '/faqs',
  '/blog',
  '/contact',
  '/quote',
  '/pay',
  '/thank-you',
  '/privacy-policy',
  '/terms-conditions',
  '/sitemap',
  '/design-system',

  // Services dynamic routes
  '/services/web-development',
  '/services/mobile-app-development',
  '/services/ecommerce-development',
  '/services/ui-ux-branding',
  '/services/seo-services',
  '/services/performance-marketing',
  '/services/social-media-marketing',
  '/services/website-maintenance',

  // Sample portfolio routes
  '/portfolio/buyonik-ecommerce',
  '/portfolio/vydamed-healthcare',
  '/portfolio/twigden-custom-homes',
  '/portfolio/smartinoutnavigation-img',
  '/portfolio/oakbridgeservicesinc-img',

  // Blog dynamic routes
  '/blog/migrating-wordpress-to-nextjs-without-losing-rankings',
  '/blog/shared-zod-schemas-typescript-monorepos',

  // SEO 301 Redirects check
  '/contact-us',
  '/informative-websites-form',
  '/e-commerce-websites-form',
  '/make-a-payment',
  '/our-seo-packages',
  '/our-smo-packages',
  '/designing-packages',
  '/website-maintenance-packages',
  '/life-at-leavecode',
  '/career',
  '/teams',
  '/awwards',
  '/happy-clients',
  '/web-design-development',
  '/ecommerce-website-design',
  '/search-engine-optimization',
  '/google-adwords',
  '/social-media-optimization'
];

function testRoute(path) {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:3000' + path, (res) => {
      resolve({
        path,
        statusCode: res.statusCode,
        location: res.headers.location || null
      });
    });
    req.on('error', (err) => {
      resolve({
        path,
        error: err.message
      });
    });
    req.setTimeout(6000, () => {
      req.destroy();
      resolve({ path, error: 'TIMEOUT' });
    });
  });
}

async function run() {
  console.log('Testing ' + routesToTest.length + ' routes against http://localhost:3000 ...\n');
  const results = [];
  for (const r of routesToTest) {
    const res = await testRoute(r);
    results.push(res);
  }

  const passed = results.filter(r => (r.statusCode >= 200 && r.statusCode < 400));
  const failed = results.filter(r => (!r.statusCode || r.statusCode >= 400));

  console.log('--- ROUTE CHECK SUMMARY ---');
  console.log('Total Tested: ' + results.length);
  console.log('Passed (200 OK or Valid Redirect): ' + passed.length);
  console.log('Failed / Errors: ' + failed.length + '\n');

  if (failed.length > 0) {
    console.log('Failures:');
    console.log(JSON.stringify(failed, null, 2));
  } else {
    console.log('Direct 200 OK Routes Sample:');
    results.filter(r => r.statusCode === 200).slice(0, 15).forEach(r => {
      console.log('  [200 OK] ' + r.path);
    });

    console.log('\nVerified 301/308 Redirects Sample:');
    results.filter(r => r.location).slice(0, 15).forEach(r => {
      console.log('  [' + r.statusCode + ' Redirect] ' + r.path + ' -> ' + r.location);
    });
  }
}

run();
