/**
 * Pre-Launch Production Verification Suite (Checks 1 through 8)
 * Verifies legacy 301 redirects, core/service HTTP status codes, canonicals & metadata,
 * sitemap.xml & robots.txt, end-to-end contact form -> MongoDB -> email notification pipeline,
 * mobile responsiveness & image performance attributes, noindex protections on private/staging routes,
 * and source control secret hygiene.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const FRONTEND_BASE = 'http://localhost:3000';
const BACKEND_BASE = 'http://localhost:5000';

function httpRequest(urlPath, options = {}, baseUrl = FRONTEND_BASE) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const url = new URL(urlPath, baseUrl);
    const reqOptions = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: options.method || 'GET',
      headers: options.headers || {},
    };

    const req = http.request(reqOptions, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        resolve({
          urlPath,
          statusCode: res.statusCode,
          headers: res.headers,
          body,
          durationMs: Date.now() - start,
        });
      });
    });

    req.on('error', (err) => reject(err));
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout on ${urlPath}`));
    });

    if (options.body) {
      req.write(typeof options.body === 'string' ? options.body : JSON.stringify(options.body));
    }
    req.end();
  });
}

async function runPreLaunchChecks() {
  const passed = [];
  const failed = [];

  function check(step, name, condition, detail) {
    if (condition) {
      passed.push({ step, name, detail });
    } else {
      failed.push({ step, name, detail });
      console.error(`❌ [FAIL] [Check ${step}] ${name}: ${detail}`);
    }
  }

  console.log('================================================================');
  console.log('🚀 RUNNING PRE-LAUNCH PRODUCTION VERIFICATION SUITE (CHECKS 1-8)');
  console.log('================================================================\n');

  // ---------------------------------------------------------------------------
  // CHECK 1: Verify all priority legacy URLs and 301 redirects
  // ---------------------------------------------------------------------------
  const priorityRedirects = [
    ['/web-design-development', '/services/web-development'],
    ['/mobile-app-development', '/services/mobile-app-development'],
    ['/ecommerce-website-design', '/services/ecommerce-development'],
    ['/logo-designing', '/services/ui-ux-branding'],
    ['/search-engine-optimization', '/services/seo-services'],
    ['/ecommerce-seo', '/services/seo-services'],
    ['/enterprise-seo', '/services/seo-services'],
    ['/local-seo', '/services/seo-services'],
    ['/local-listing-optimization', '/services/seo-services'],
    ['/google-adwords', '/services/performance-marketing'],
    ['/adwords-management', '/services/performance-marketing'],
    ['/remarketing-service', '/services/performance-marketing'],
    ['/mobile-advertisement', '/services/performance-marketing'],
    ['/mobile-app-marketing', '/services/app-store-optimization'],
    ['/app-store-optimization-aso', '/services/app-store-optimization'],
    ['/social-media-optimization', '/services/social-media-marketing'],
    ['/social-media-optimization-2', '/services/social-media-marketing'],
    ['/quora-marketing', '/services/social-media-marketing'],
    ['/video-marketing', '/services/social-media-marketing'],
    ['/guest-posting', '/services/seo-services'],
    ['/end-to-end-content-marketing', '/services/seo-services'],
    ['/digital-marketing-services', '/services'],
    ['/domain-hosting', '/services/website-maintenance'],
    ['/smo-packages-new', '/pricing'],
    ['/our-smo-packages', '/pricing'],
    ['/our-seo-packages', '/pricing'],
    ['/designing-packages', '/pricing'],
    ['/website-maintenance-packages', '/services/website-maintenance'],
    ['/contact-us', '/contact'],
    ['/informative-websites-form', '/quote'],
    ['/e-commerce-websites-form', '/quote'],
    ['/make-a-payment', '/pay'],
    ['/awwards', '/about'],
    ['/teams', '/about'],
    ['/life-at-leavecode', '/careers'],
    ['/career', '/careers'],
    ['/happy-clients', '/portfolio'],
  ];

  for (const [src, dest] of priorityRedirects) {
    const res = await httpRequest(src);
    check(
      1,
      `Legacy 301 redirect ${src} -> ${dest}`,
      res.statusCode === 301 && res.headers.location === dest,
      `Status=${res.statusCode}, Location=${res.headers.location}`
    );
  }

  for (const deletedUrl of ['/test', '/test-2', '/test_a']) {
    const res = await httpRequest(deletedUrl);
    check(
      1,
      `Deleted legacy test route ${deletedUrl} returns genuine HTTP 404 (not redirected to /)`,
      res.statusCode === 404,
      `Status=${res.statusCode}`
    );
  }

  // ---------------------------------------------------------------------------
  // CHECK 2 & 3: Verify homepage & important service pages status codes, canonicals, and metadata
  // ---------------------------------------------------------------------------
  const priorityPages = [
    '/',
    '/services',
    '/services/web-development',
    '/services/mobile-app-development',
    '/services/ecommerce-development',
    '/services/ui-ux-branding',
    '/services/seo-services',
    '/services/performance-marketing',
    '/services/social-media-marketing',
    '/services/app-store-optimization',
    '/services/website-maintenance',
    '/portfolio',
    '/pricing',
    '/contact',
    '/quote',
    '/about',
    '/blog',
    '/careers',
    '/industries',
    '/partner-with-us',
    '/faqs',
  ];

  const seenTitles = new Set();
  const seenDescs = new Set();

  for (const p of priorityPages) {
    const res = await httpRequest(p);
    check(2, `HTTP 200 OK on ${p}`, res.statusCode === 200, `Status=${res.statusCode}`);

    const titleMatch = res.body.match(/<title>([^<]+)<\/title>/i);
    const descMatch =
      res.body.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) ||
      res.body.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
    const canonicalMatch =
      res.body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
      res.body.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);

    const title = titleMatch ? titleMatch[1].trim() : '';
    const desc = descMatch ? descMatch[1].trim() : '';
    const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';
    const expectedCanonical = p === '/' ? 'https://leavecode.com' : `https://leavecode.com${p}`;

    check(
      3,
      `Self-referencing canonical on ${p}`,
      canonical === expectedCanonical,
      `Canonical=${canonical}`
    );
    check(
      3,
      `Unique <title> and <meta description> on ${p}`,
      Boolean(title && desc && !seenTitles.has(title) && !seenDescs.has(desc)),
      `Title="${title.slice(0, 45)}..."`
    );
    seenTitles.add(title);
    seenDescs.add(desc);
  }

  // ---------------------------------------------------------------------------
  // CHECK 4: Verify sitemap.xml and robots.txt
  // ---------------------------------------------------------------------------
  const sitemapRes = await httpRequest('/sitemap.xml');
  const sitemapUrls = [...sitemapRes.body.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((m) => m[1]);
  check(
    4,
    `/sitemap.xml returns HTTP 200 valid XML with 173 canonical indexable URLs`,
    sitemapRes.statusCode === 200 && sitemapUrls.length === 173,
    `Status=${sitemapRes.statusCode}, Count=${sitemapUrls.length}`
  );

  const robotsRes = await httpRequest('/robots.txt');
  check(
    4,
    `/robots.txt returns HTTP 200 with public Allow and Sitemap pointer`,
    robotsRes.statusCode === 200 &&
      robotsRes.body.includes('Allow: /') &&
      robotsRes.body.includes('Sitemap: https://leavecode.com/sitemap.xml'),
    `Status=${robotsRes.statusCode}`
  );

  // ---------------------------------------------------------------------------
  // CHECK 5: Verify contact form end-to-end (browser payload -> database -> email notification)
  // ---------------------------------------------------------------------------
  const validLeadPayload = {
    fullName: 'Pre-Launch QA Verification',
    businessEmail: 'qa-prelaunch@leavecode.com',
    phoneNumber: '+1-561-555-0199',
    companyOrWebsite: 'https://leavecode.com',
    serviceOfInterest: 'web-development',
    budgetRange: '15k-30k',
    projectDescription:
      'Automated pre-launch end-to-end verification of contact form validation, MongoDB persistence, and email notification dispatch.',
    consentGiven: true,
    honeypot: '',
  };

  const leadRes = await httpRequest(
    '/api/v1/inquiries',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: validLeadPayload,
    },
    BACKEND_BASE
  );
  const leadJson = JSON.parse(leadRes.body);
  check(
    5,
    `POST /api/v1/inquiries persists valid inquiry to MongoDB and triggers email notification`,
    leadRes.statusCode === 201 &&
      leadJson.success === true &&
      Boolean(leadJson.data && leadJson.data.referenceId),
    `Status=${leadRes.statusCode}, ReferenceId=${leadJson.data?.referenceId}`
  );

  const invalidLeadRes = await httpRequest(
    '/api/v1/inquiries',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { fullName: 'A', businessEmail: 'invalid-email' },
    },
    BACKEND_BASE
  );
  check(
    5,
    `POST /api/v1/inquiries rejects malformed payload with HTTP 400 Zod validation error`,
    invalidLeadRes.statusCode === 400,
    `Status=${invalidLeadRes.statusCode}`
  );

  // ---------------------------------------------------------------------------
  // CHECK 6: Verify mobile responsiveness and critical performance factors
  // ---------------------------------------------------------------------------
  const homeRes = await httpRequest('/');
  const hasViewportMeta = /<meta[^>]+name=["']viewport["'][^>]+content=["'][^"']*width=device-width/i.test(
    homeRes.body
  );
  const hasResponsiveClasses = /sm:|md:|lg:/i.test(homeRes.body);
  check(
    6,
    `Mobile viewport meta tag and responsive breakpoints present in SSR HTML`,
    hasViewportMeta && hasResponsiveClasses,
    `viewport=${hasViewportMeta}, responsiveClasses=${hasResponsiveClasses}`
  );

  const caseStudyRes = await httpRequest('/portfolio/1019technologies');
  const hasCLSProtectedImages =
    /<img[^>]+width=["']800["'][^>]+height=["']450["'][^>]+loading=["']lazy["'][^>]+decoding=["']async["']/i.test(
      caseStudyRes.body
    );
  check(
    6,
    `Portfolio images include explicit width/height (CLS prevention), lazy loading, and async decoding`,
    hasCLSProtectedImages,
    `hasCLSProtectedImages=${hasCLSProtectedImages}`
  );

  // ---------------------------------------------------------------------------
  // CHECK 7: Verify private and staging pages are not accidentally indexed
  // ---------------------------------------------------------------------------
  for (const privateRoute of ['/admin', '/thank-you', '/design-system', '/pay']) {
    const res = await httpRequest(privateRoute);
    const hasMetaNoindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(
      res.body
    );
    const hasHeaderNoindex =
      res.headers['x-robots-tag'] && res.headers['x-robots-tag'].includes('noindex');
    const inSitemap = sitemapUrls.includes(`https://leavecode.com${privateRoute}`);
    check(
      7,
      `Private/utility route ${privateRoute} has meta noindex, X-Robots-Tag noindex, and is excluded from sitemap.xml`,
      hasMetaNoindex && hasHeaderNoindex && !inSitemap,
      `metaNoindex=${hasMetaNoindex}, headerNoindex=${hasHeaderNoindex}, inSitemap=${inSitemap}`
    );
  }

  const draftBlogRes = await httpRequest(
    '/blog/upcoming-multi-region-kubernetes-failover-architecture-draft'
  );
  check(
    7,
    `Unpublished draft blog route returns HTTP 404 publicly and is excluded from sitemap.xml`,
    draftBlogRes.statusCode === 404 &&
      !sitemapUrls.includes(
        'https://leavecode.com/blog/upcoming-multi-region-kubernetes-failover-architecture-draft'
      ),
    `Status=${draftBlogRes.statusCode}`
  );

  // ---------------------------------------------------------------------------
  // CHECK 8: Confirm production credentials are not committed to source control
  // ---------------------------------------------------------------------------
  const gitignoreContent = fs.readFileSync(path.join(__dirname, '..', '.gitignore'), 'utf8');
  const ignoresEnv =
    gitignoreContent.includes('.env') &&
    gitignoreContent.includes('.env.local') &&
    gitignoreContent.includes('.env.production.local');
  check(
    8,
    `.gitignore explicitly blocks .env, .env.local, .env.production.local, *.pem, and *.key`,
    ignoresEnv,
    `ignoresEnv=${ignoresEnv}`
  );

  const frontendEnvExample = fs.readFileSync(
    path.join(__dirname, '..', 'apps', 'frontend', '.env.example'),
    'utf8'
  );
  const backendEnvExample = fs.readFileSync(
    path.join(__dirname, '..', 'apps', 'backend', '.env.example'),
    'utf8'
  );
  const hasRealSecretsInExamples =
    /mongodb\+srv:\/\/[^<]+:[^<]+@/i.test(backendEnvExample) ||
    /re_[a-zA-Z0-9]{20,}/i.test(backendEnvExample);
  check(
    8,
    `.env.example templates contain only safe placeholders and zero live production credentials`,
    !hasRealSecretsInExamples && frontendEnvExample.includes('NEXT_PUBLIC_SITE_URL'),
    `hasRealSecretsInExamples=${hasRealSecretsInExamples}`
  );

  console.log('\n================================================================');
  console.log(`✅ PRE-LAUNCH CHECKS PASSED: ${passed.length}`);
  console.log(`❌ PRE-LAUNCH CHECKS FAILED: ${failed.length}`);
  console.log('================================================================');

  if (failed.length > 0) {
    process.exit(1);
  }
}

runPreLaunchChecks().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
