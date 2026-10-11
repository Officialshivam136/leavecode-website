/**
 * Comprehensive Automated Technical SEO Verification Suite
 * Validates all 18 Technical SEO requirements and 9 test categories against live Next.js + Express servers.
 */
const http = require('http');

const FRONTEND_BASE = 'http://localhost:3000';
const BACKEND_BASE = 'http://localhost:5000';

function fetchUrl(urlPath, baseUrl = FRONTEND_BASE) {
  return new Promise((resolve, reject) => {
    const req = http.get(`${baseUrl}${urlPath}`, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        resolve({
          urlPath,
          statusCode: res.statusCode,
          headers: res.headers,
          body,
        });
      });
    });
    req.on('error', (err) => reject(err));
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${urlPath}`));
    });
  });
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]+)<\/title>/i);
  return m ? m[1].trim() : null;
}

function extractMetaContent(html, attrName, attrValue) {
  const regex1 = new RegExp(
    `<meta[^>]+${attrName}=["']${attrValue}["'][^>]+content=["']([^"']+)["']`,
    'i'
  );
  const regex2 = new RegExp(
    `<meta[^>]+content=["']([^"']+)["'][^>]+${attrName}=["']${attrValue}["']`,
    'i'
  );
  const m = html.match(regex1) || html.match(regex2);
  return m ? m[1].trim() : null;
}

function extractCanonical(html) {
  const regex1 = /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i;
  const regex2 = /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i;
  const m = html.match(regex1) || html.match(regex2);
  return m ? m[1].trim() : null;
}

function extractJsonLdBlocks(html) {
  const blocks = [];
  const regex = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    blocks.push(match[1].trim());
  }
  return blocks;
}

const INDEXABLE_PAGES = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/pricing',
  '/quote',
  '/contact',
  '/careers',
  '/industries',
  '/partner-with-us',
  '/blog',
  '/faqs',
  '/privacy-policy',
  '/terms-conditions',
  '/sitemap',
  '/services/web-development',
  '/services/mobile-app-development',
  '/services/ecommerce-development',
  '/services/ui-ux-branding',
  '/services/seo-services',
  '/services/performance-marketing',
  '/services/social-media-marketing',
  '/services/app-store-optimization',
  '/services/website-maintenance',
  '/blog/migrating-wordpress-to-nextjs-without-losing-rankings',
  '/blog/shared-zod-schemas-typescript-monorepos',
  '/portfolio/1019technologies',
  '/portfolio/buyonik-ecommerce',
  '/portfolio/monorepo-saas-demonstration',
];

const NOINDEX_PAGES = [
  { path: '/thank-you', expectedHeader: 'noindex, nofollow' },
  { path: '/design-system', expectedHeader: 'noindex, nofollow' },
  { path: '/pay', expectedHeader: 'noindex, follow' },
  { path: '/admin', expectedHeader: 'noindex, nofollow, noarchive' },
];

const APPROVED_301_REDIRECTS = [
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

const GENUINE_404_URLS = [
  '/test',
  '/test-2',
  '/test_a',
  '/non-existent-page-xyz-999',
  '/services/invalid-service-slug',
  '/portfolio/invalid-portfolio-slug',
  '/blog/invalid-blog-slug',
  '/blog/upcoming-multi-region-kubernetes-failover-architecture-draft',
];

async function runVerification() {
  const results = {
    passed: [],
    failed: [],
  };

  function record(category, checkName, ok, detail) {
    const entry = { category, checkName, detail };
    if (ok) {
      results.passed.push(entry);
    } else {
      results.failed.push(entry);
      console.error(`❌ [FAIL] [${category}] ${checkName}: ${detail}`);
    }
  }

  console.log('================================================================');
  console.log('🚀 RUNNING FULL TECHNICAL SEO VERIFICATION SUITE');
  console.log('================================================================\n');

  // 1, 2, 7, 9: Test all indexable pages for View-Source SSR HTML, Canonicals, Unique Metadata, OpenGraph, Breadcrumbs & JSON-LD
  const titlesMap = new Map();
  const descriptionsMap = new Map();

  for (const pagePath of INDEXABLE_PAGES) {
    const encodedPath = encodeURI(pagePath);
    const res = await fetchUrl(encodedPath);

    record(
      '1. View-Source HTML & SSR',
      `HTTP 200 on ${pagePath}`,
      res.statusCode === 200,
      `Status=${res.statusCode}`
    );

    const hasH1 = /<h1[\s>]/i.test(res.body);
    const hasMain = /<main[\s>]/i.test(res.body);
    const hasHeader = /<header[\s>]/i.test(res.body);
    const hasFooter = /<footer[\s>]/i.test(res.body);

    record(
      '1. View-Source HTML & SSR',
      `Server-rendered semantic landmarks (<header>, <main>, <h1>, <footer>) on ${pagePath}`,
      hasH1 && hasMain && hasHeader && hasFooter,
      `h1=${hasH1}, main=${hasMain}, header=${hasHeader}, footer=${hasFooter}`
    );

    // Canonical check
    const canonical = extractCanonical(res.body);
    const expectedCanonical =
      pagePath === '/' ? 'https://leavecode.com' : `https://leavecode.com${pagePath}`;
    record(
      '2. Canonical URLs',
      `Self-referencing canonical on ${pagePath}`,
      canonical === expectedCanonical,
      `Expected="${expectedCanonical}", Found="${canonical}"`
    );

    // Ensure noindex is NOT present on indexable pages
    const robotsMeta = extractMetaContent(res.body, 'name', 'robots');
    const isNoindex = robotsMeta && robotsMeta.toLowerCase().includes('noindex');
    record(
      '4. Robots Directives',
      `Indexable page ${pagePath} is not blocked by noindex`,
      !isNoindex,
      `robots="${robotsMeta || 'index, follow (default)'}"`
    );

    // Unique Title & Description check
    const title = extractTitle(res.body);
    const description = extractMetaContent(res.body, 'name', 'description');
    const ogTitle = extractMetaContent(res.body, 'property', 'og:title');
    const ogDesc = extractMetaContent(res.body, 'property', 'og:description');

    record(
      '7. Metadata Uniqueness & Social',
      `Non-empty <title>, <meta description>, and OpenGraph tags on ${pagePath}`,
      Boolean(title && description && ogTitle && ogDesc),
      `title="${title?.slice(0, 45)}...", og:title=${Boolean(ogTitle)}`
    );

    if (title) {
      if (titlesMap.has(title)) {
        record(
          '7. Metadata Uniqueness & Social',
          `Unique <title> on ${pagePath}`,
          false,
          `Duplicate title "${title}" shared with ${titlesMap.get(title)}`
        );
      } else {
        titlesMap.set(title, pagePath);
        record(
          '7. Metadata Uniqueness & Social',
          `Unique <title> on ${pagePath}`,
          true,
          `"${title}"`
        );
      }
    }

    if (description) {
      if (descriptionsMap.has(description)) {
        record(
          '7. Metadata Uniqueness & Social',
          `Unique <meta description> on ${pagePath}`,
          false,
          `Duplicate description shared with ${descriptionsMap.get(description)}`
        );
      } else {
        descriptionsMap.set(description, pagePath);
        record(
          '7. Metadata Uniqueness & Social',
          `Unique <meta description> on ${pagePath}`,
          true,
          `Length=${description.length} chars`
        );
      }
    }

    // Accessible Breadcrumbs check on inner pages
    if (pagePath !== '/') {
      const hasBreadcrumbNav = /aria-label=["']Breadcrumb["']/i.test(res.body);
      record(
        '11. Accessible Breadcrumbs',
        `Accessible <nav aria-label="Breadcrumb"> on ${pagePath}`,
        hasBreadcrumbNav,
        `hasBreadcrumbNav=${hasBreadcrumbNav}`
      );
    }

    // JSON-LD Structured Data check
    const jsonLdBlocks = extractJsonLdBlocks(res.body);
    record(
      '9. Structured Data Consistency',
      `JSON-LD blocks present on ${pagePath}`,
      jsonLdBlocks.length > 0,
      `Found ${jsonLdBlocks.length} JSON-LD script block(s)`
    );

    const detectedTypes = [];
    for (const rawBlock of jsonLdBlocks) {
      try {
        const parsed = JSON.parse(rawBlock);
        const nodes = parsed['@graph'] ? parsed['@graph'] : [parsed];
        for (const node of nodes) {
          if (node['@type']) detectedTypes.push(node['@type']);
          // Ensure zero fabricated reviews or aggregate ratings
          const hasFakeRating = Boolean(node.aggregateRating || node.review || node.reviews);
          record(
            '9. Structured Data Consistency',
            `Zero fabricated reviews/ratings in ${node['@type']} on ${pagePath}`,
            !hasFakeRating,
            `hasFakeRating=${hasFakeRating}`
          );
        }
      } catch (e) {
        record(
          '9. Structured Data Consistency',
          `Valid JSON-LD syntax on ${pagePath}`,
          false,
          e.message
        );
      }
    }

    // Page-type specific schema checks
    if (pagePath !== '/') {
      record(
        '9. Structured Data Consistency',
        `BreadcrumbList JSON-LD present on ${pagePath}`,
        detectedTypes.includes('BreadcrumbList'),
        `Types=${detectedTypes.join(', ')}`
      );
    }
    if (pagePath.startsWith('/services/')) {
      record(
        '9. Structured Data Consistency',
        `Service JSON-LD present on ${pagePath}`,
        detectedTypes.includes('Service'),
        `Types=${detectedTypes.join(', ')}`
      );
    }
    if (pagePath === '/contact') {
      record(
        '9. Structured Data Consistency',
        `ProfessionalService (LocalBusiness) JSON-LD present on /contact`,
        detectedTypes.includes('ProfessionalService'),
        `Types=${detectedTypes.join(', ')}`
      );
    }
    if (pagePath.startsWith('/blog/')) {
      record(
        '9. Structured Data Consistency',
        `BlogPosting JSON-LD present on ${pagePath}`,
        detectedTypes.includes('BlogPosting'),
        `Types=${detectedTypes.join(', ')}`
      );
    }
    if (pagePath.startsWith('/portfolio/')) {
      record(
        '9. Structured Data Consistency',
        `TechArticle JSON-LD present on ${pagePath}`,
        detectedTypes.includes('TechArticle'),
        `Types=${detectedTypes.join(', ')}`
      );
    }
  }

  // Test Pagination & Filtered Duplicate URL Variant Handling (Req 17 & 18)
  const filteredPortfolioRes = await fetchUrl('/portfolio?category=E-Commerce');
  const filteredPortfolioCanonical = extractCanonical(filteredPortfolioRes.body);
  const filteredPortfolioRobots = extractMetaContent(filteredPortfolioRes.body, 'name', 'robots');
  record(
    '2. Canonical & Filtered Variants',
    `Filtered URL /portfolio?category=E-Commerce canonicalizes to /portfolio with noindex, follow`,
    filteredPortfolioCanonical === 'https://leavecode.com/portfolio' &&
      Boolean(filteredPortfolioRobots && filteredPortfolioRobots.includes('noindex')),
    `canonical="${filteredPortfolioCanonical}", robots="${filteredPortfolioRobots}"`
  );

  const paginatedPortfolioRes = await fetchUrl('/portfolio?page=2');
  const paginatedPortfolioCanonical = extractCanonical(paginatedPortfolioRes.body);
  const paginatedPortfolioTitle = extractTitle(paginatedPortfolioRes.body);
  record(
    '2. Canonical & Pagination',
    `Paginated URL /portfolio?page=2 has unique title and self-referencing canonical`,
    paginatedPortfolioCanonical === 'https://leavecode.com/portfolio?page=2' &&
      Boolean(paginatedPortfolioTitle && paginatedPortfolioTitle.includes('Page 2')),
    `canonical="${paginatedPortfolioCanonical}", title="${paginatedPortfolioTitle}"`
  );

  // Test Image Optimization Attributes on /portfolio/1019technologies (Req 12)
  const portfolio101Res = await fetchUrl('/portfolio/1019technologies');
  const hasOptimizedImg =
    /<img[^>]+alt=["'][^"']*1019technologies[^"']*["'][^>]+width=["']800["'][^>]+height=["']450["'][^>]+loading=["']lazy["'][^>]+decoding=["']async["']/i.test(
      portfolio101Res.body
    );
  record(
    '12. Image Optimization & Alt Text',
    `Descriptive alt, width, height, loading="lazy", decoding="async" on portfolio images`,
    hasOptimizedImg,
    `hasOptimizedImg=${hasOptimizedImg}`
  );

  // 3. Test XML Sitemap (/sitemap.xml)
  const sitemapRes = await fetchUrl('/sitemap.xml');
  const isXml =
    sitemapRes.statusCode === 200 &&
    /<urlset[^>]+sitemaps\.org\/schemas\/sitemap\/0\.9/i.test(sitemapRes.body);
  const locMatches = [...sitemapRes.body.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((m) => m[1]);
  record(
    '3. Sitemap Validity',
    `/sitemap.xml returns HTTP 200 valid XML with all published canonical URLs`,
    isXml && locMatches.length >= 170,
    `Status=${sitemapRes.statusCode}, URL count=${locMatches.length}`
  );

  const forbiddenInSitemap = [
    'https://leavecode.com/thank-you',
    'https://leavecode.com/design-system',
    'https://leavecode.com/pay',
    'https://leavecode.com/admin',
    'https://leavecode.com/test',
    'https://leavecode.com/test-2',
    'https://leavecode.com/test_a',
    'https://leavecode.com/web-design-development',
    'https://leavecode.com/blog/upcoming-multi-region-kubernetes-failover-architecture-draft',
  ];
  const leakedUrls = forbiddenInSitemap.filter((u) => locMatches.includes(u));
  record(
    '3. Sitemap Validity',
    `Zero noindex, draft, deleted, or redirect URLs in /sitemap.xml`,
    leakedUrls.length === 0,
    leakedUrls.length === 0 ? '0 non-canonical/noindex URLs found' : `Leaked: ${leakedUrls.join(', ')}`
  );

  // 4. Test /robots.txt and Noindex pages
  const robotsRes = await fetchUrl('/robots.txt');
  const robotsBody = robotsRes.body;
  const robotsValid =
    robotsRes.statusCode === 200 &&
    robotsBody.includes('Allow: /') &&
    robotsBody.includes('Disallow: /admin/') &&
    robotsBody.includes('Disallow: /thank-you') &&
    robotsBody.includes('Disallow: /design-system') &&
    robotsBody.includes('Disallow: /pay') &&
    robotsBody.includes('Sitemap: https://leavecode.com/sitemap.xml');
  record(
    '4. Robots Directives',
    `/robots.txt allows public crawling, disallows private routes, and declares Sitemap`,
    robotsValid,
    `Status=${robotsRes.statusCode}`
  );

  for (const item of NOINDEX_PAGES) {
    const res = await fetchUrl(item.path);
    const metaRobots = extractMetaContent(res.body, 'name', 'robots');
    const xRobotsHeader = res.headers['x-robots-tag'];
    record(
      '4. Robots Directives',
      `Noindex meta tag and X-Robots-Tag header on ${item.path}`,
      res.statusCode === 200 &&
        Boolean(metaRobots && metaRobots.includes('noindex')) &&
        Boolean(xRobotsHeader && xRobotsHeader.includes('noindex')),
      `meta="${metaRobots}", X-Robots-Tag="${xRobotsHeader}"`
    );
  }

  // 5. Test all 37 Approved Legacy 301 Redirects
  for (const [source, expectedDest] of APPROVED_301_REDIRECTS) {
    const res = await fetchUrl(source);
    const location = res.headers['location'];
    const ok = res.statusCode === 301 && location === expectedDest;
    record(
      '5. Redirect Destinations (HTTP 301)',
      `${source} -> ${expectedDest}`,
      ok,
      `Status=${res.statusCode}, Location="${location}"`
    );
  }

  // 6. Test Genuine HTTP 404 Status Codes (including deleted /test, /test-2, /test_a and draft slug)
  for (const url404 of GENUINE_404_URLS) {
    const res = await fetchUrl(url404);
    record(
      '6. Genuine 404 Status Codes',
      `HTTP 404 Not Found on ${url404} (not redirected to /)`,
      res.statusCode === 404,
      `Status=${res.statusCode}`
    );
  }

  // 8. Test Published vs. Draft Page Indexing (Preview mode + Backend API)
  const draftPreviewRes = await fetchUrl(
    '/blog/upcoming-multi-region-kubernetes-failover-architecture-draft?preview=true'
  );
  const draftPreviewRobots = extractMetaContent(draftPreviewRes.body, 'name', 'robots');
  record(
    '8. Published vs. Draft Indexing',
    `Draft article in preview mode (?preview=true) emits noindex, nofollow`,
    draftPreviewRes.statusCode === 200 &&
      Boolean(draftPreviewRobots && draftPreviewRobots.includes('noindex')),
    `Status=${draftPreviewRes.statusCode}, robots="${draftPreviewRobots}"`
  );

  try {
    const apiBlogRes = await fetchUrl('/api/v1/posts', BACKEND_BASE);
    const apiData = JSON.parse(apiBlogRes.body);
    const allPublished =
      apiBlogRes.statusCode === 200 &&
      Array.isArray(apiData.data) &&
      apiData.data.length > 0 &&
      apiData.data.every((p) => p.status === 'published');
    record(
      '8. Published vs. Draft Indexing',
      `Backend API /api/v1/posts returns only published posts (excludes drafts)`,
      allPublished,
      `Count=${apiData.data?.length || 0}, allPublished=${allPublished}`
    );

    const apiDraftRes = await fetchUrl(
      '/api/v1/posts/draft-securing-microservices-automated-patching',
      BACKEND_BASE
    );
    record(
      '8. Published vs. Draft Indexing',
      `Backend API /api/v1/posts/:draftSlug returns HTTP 404 Not Found for draft posts`,
      apiDraftRes.statusCode === 404,
      `Status=${apiDraftRes.statusCode}`
    );
  } catch (err) {
    record(
      '8. Published vs. Draft Indexing',
      `Backend API /api/v1/posts returns only published posts`,
      false,
      err.message
    );
  }

  console.log('\n================================================================');
  console.log(`✅ PASSED CHECKS: ${results.passed.length}`);
  console.log(`❌ FAILED CHECKS: ${results.failed.length}`);
  console.log('================================================================');

  if (results.failed.length > 0) {
    process.exit(1);
  }
}

runVerification().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
