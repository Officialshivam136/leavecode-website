export interface ClientBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  category: 'Architecture & Engineering' | 'Technical SEO & Growth' | 'UI/UX & Design Systems' | 'Infrastructure & Security';
  tags: string[];
  readingTimeMinutes: number;
  publishedAt: string;
  status?: 'published' | 'draft';
  tableOfContents: { id: string; title: string }[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalOverride?: string;
    noindex?: boolean;
  };
  relatedArticles: { title: string; slug: string }[];
}

export const publishedArticles: ClientBlogPost[] = [
  {
    slug: 'migrating-wordpress-to-nextjs-without-losing-rankings',
    title: 'Migrating from Legacy Monolithic WordPress to Next.js 14 Without Losing Organic Rankings',
    excerpt:
      'A comprehensive technical blueprint for auditing legacy URLs, preserving backlink equity with 301 edge redirects, and achieving sub-second LCP scores on modern decoupled architectures.',
    category: 'Architecture & Engineering',
    readingTimeMinutes: 6,
    publishedAt: 'October 1, 2026',
    author: {
      name: 'LeaveCode Engineering Practice',
      role: 'Full-Stack Systems Architects',
      bio: 'Technical engineering leads at LeaveCode specializing in decoupled Next.js architectures, distributed APIs, and technical SEO migrations across our Florida and New Delhi offices.',
    },
    tags: ['Next.js 14', 'Technical SEO', 'WordPress Migration', 'Core Web Vitals'],
    seo: {
      metaTitle: 'Migrating WordPress to Next.js 14 Without Losing Rankings | LeaveCode',
      metaDescription:
        'Technical blueprint for auditing URLs, preserving backlink equity with 301 edge redirects, and achieving 100/100 Core Web Vitals on Next.js 14.',
    },
    tableOfContents: [
      { id: 'strategic-imperative', title: 'The Strategic Imperative: Beyond Monolithic CMS' },
      { id: 'pre-migration-inventory', title: '1. The Pre-Migration 1:1 URL Inventory' },
      { id: 'edge-redirects', title: '2. Edge-Level 301 Redirection Architecture' },
      { id: 'json-ld-schema', title: '3. Server-Rendered JSON-LD Structured Data' },
      { id: 'core-web-vitals', title: '4. Eradicating Core Web Vitals Regressions' },
      { id: 'conclusion', title: 'Summary & Operational Takeaway' },
    ],
    content: `### The Strategic Imperative: Beyond Monolithic CMS

For growing digital enterprises, monolithic CMS platforms like traditional WordPress frequently become organizational bottlenecks. While WordPress powers millions of websites, high-traffic commercial platforms encounter compounding friction: bloated asset bundles, unpredictable plugin conflicts, and creeping Time to First Byte (TTFB).

Migrating to Next.js 14 App Router unlocks server-rendered speed and zero-downtime reliability—but an uncalculated migration carries catastrophic SEO risks if existing URL equity is disregarded.

### 1. The Pre-Migration 1:1 URL Inventory

Every migration must begin with an exhaustive crawl of the live environment. Using automated crawlers and search console sitemaps, engineering teams must catalog:

- All active public \`200 OK\` URLs.
- Historical query parameters and legacy canonical tags.
- High-traffic landing pages identified via Google Search Console.
- Inbound backlink landing targets that cannot be severed.

### 2. Edge-Level 301 Redirection Architecture

Never rely on client-side JavaScript redirects for legacy URLs. Next.js edge routing allows mapping legacy permalinks directly to modern kebab-case equivalents before page rendering begins. 

\`\`\`typescript
export const migrationRedirects = [
  { source: '/web-design-development', destination: '/services/web-development', permanent: true },
  { source: '/search-engine-optimization', destination: '/services/seo-services', permanent: true }
];
\`\`\`

This guarantees that Googlebot receives an immediate \`301 Moved Permanently\` response, transferring 100% of link equity without multi-hop latency.

### 3. Server-Rendered JSON-LD Structured Data

Modern search engines rely on clear entity attribution. In Next.js, Schema.org \`Organization\`, \`Service\`, and \`TechArticle\` schemas can be server-rendered directly within the HTML payload, ensuring rich result eligibility on day one.

### 4. Eradicating Core Web Vitals Regressions

Page experience signals directly affect commercial search placement. Decoupled Next.js architectures solve legacy speed bottlenecks through:

1. **Zero Client-Side JavaScript for Static Text:** Server components render pure HTML.
2. **Deterministic Font Loading:** Next.js font optimization eliminates Cumulative Layout Shift (CLS).
3. **Sub-Second LCP:** Server-rendered payloads delivered directly from global edge CDNs.

### Summary & Operational Takeaway

Decoupled architecture is not merely an engineering aesthetic; it is a measurable commercial differentiator that accelerates organic conversion when built on disciplined migration principles.`,
    relatedArticles: [
      {
        title: 'Shared Zod Schemas in TypeScript Monorepos: Eliminating Validation Drift',
        slug: 'shared-zod-schemas-typescript-monorepos',
      },
    ],
  },
  {
    slug: 'shared-zod-schemas-typescript-monorepos',
    title: 'Shared Zod Schemas in TypeScript Monorepos: Eliminating Validation Drift Between Frontend & Express',
    excerpt:
      'How authoring single-source validation contracts in an isolated monorepo workspace guarantees end-to-end type safety, eliminates form vulnerabilities, and simplifies API maintenance.',
    category: 'Architecture & Engineering',
    readingTimeMinutes: 5,
    publishedAt: 'October 5, 2026',
    author: {
      name: 'LeaveCode Engineering Practice',
      role: 'Full-Stack Systems Architects',
      bio: 'Technical engineering leads at LeaveCode specializing in decoupled Next.js architectures, distributed APIs, and technical SEO migrations across our Florida and New Delhi offices.',
    },
    tags: ['TypeScript', 'Zod', 'Monorepo', 'Express', 'Architecture'],
    seo: {
      metaTitle: 'Shared Zod Schemas in TypeScript Monorepos | LeaveCode Technologies',
      metaDescription:
        'How creating a cross-cutting shared package ensures end-to-end data integrity for contact forms, project calculators, and client portals.',
    },
    tableOfContents: [
      { id: 'fragmented-contracts', title: 'The Architecture Problem: Fragmented Data Contracts' },
      { id: 'single-source-truth', title: 'Single Source of Truth with @leavecode/shared' },
      { id: 'developer-experience', title: 'Immediate Developer Experience & Security Gains' },
      { id: 'centralized-error-handling', title: 'Centralized Error Handling with Middleware' },
      { id: 'conclusion', title: 'Takeaways for Scalable Web Engineering' },
    ],
    content: `### The Architecture Problem: Fragmented Data Contracts

In conventional multi-tier web applications, the frontend team frequently writes client-side validation logic while the backend team authors separate request sanitizers. Over time, requirements drift: a telephone format accepted by the client is rejected by the API, or an unvalidated field bypasses the server directly into the database.

In a unified TypeScript monorepo, this discrepancy can be eliminated entirely using shared Zod validation packages.

### Single Source of Truth with @leavecode/shared

By encapsulating Zod schemas in an isolated monorepo workspace (such as \`packages/shared\`), both the Next.js React forms and the Node.js Express controllers import the exact same validation rules:

\`\`\`typescript
import { InquirySchema, InquiryInput } from '@leavecode/shared';

// Backend controller validation
inquiriesRouter.post('/', async (req, res, next) => {
  try {
    const validated = InquirySchema.parse(req.body);
    // Proceed with safe, typed persistence
  } catch (err) {
    next(err);
  }
});
\`\`\`

### Immediate Developer Experience & Security Gains

1. **Zero Type Duplication:** TypeScript interfaces are inferred directly from Zod using \`z.infer<typeof Schema>\`, avoiding parallel interface maintenance.
2. **Unified Error Trees:** A single centralized error middleware converts Zod issue trees into uniform JSON responses for predictable client handling.
3. **Compile-Time Safety:** Modifying a field constraint in the shared package immediately triggers TypeScript build warnings across both consuming applications.

### Centralized Error Handling with Middleware

When request payloads fail Zod validation, an Express error middleware cleanly catches and formats the failure:

\`\`\`typescript
if (err instanceof ZodError || err.name === 'ZodError' || 'issues' in err) {
  res.status(400).json({
    success: false,
    error: 'Validation failed',
    details: err.issues.map(e => ({ field: e.path.join('.'), message: e.message }))
  });
}
\`\`\`

### Takeaways for Scalable Web Engineering

Enforcing shared validation schemas at the workspace package boundary converts runtime surprises into compile-time certainties. Teams build faster, eliminate vulnerabilities, and deliver predictable digital products.`,
    relatedArticles: [
      {
        title: 'Migrating from Legacy Monolithic WordPress to Next.js 14 Without Losing Organic Rankings',
        slug: 'migrating-wordpress-to-nextjs-without-losing-rankings',
      },
    ],
    status: 'published',
  },
];

export const draftArticles: ClientBlogPost[] = [
  {
    slug: 'upcoming-multi-region-kubernetes-failover-architecture-draft',
    title: '[Draft] Multi-Region Kubernetes Failover & Zero-RPO Database Replication Blueprint',
    excerpt:
      'Internal engineering draft covering active-active PostgreSQL replication and automated edge DNS failover.',
    category: 'Infrastructure & Security',
    readingTimeMinutes: 8,
    publishedAt: 'Draft — Unscheduled',
    status: 'draft',
    author: {
      name: 'LeaveCode Engineering Practice',
      role: 'Full-Stack Systems Architects',
      bio: 'Technical engineering leads at LeaveCode specializing in decoupled Next.js architectures, distributed APIs, and technical SEO migrations.',
    },
    tags: ['Kubernetes', 'PostgreSQL', 'High Availability'],
    seo: {
      metaTitle: 'Draft: Multi-Region Kubernetes Failover | LeaveCode Internal',
      metaDescription: 'Internal unindexed engineering draft.',
      noindex: true,
    },
    tableOfContents: [
      { id: 'draft-overview', title: 'Draft Architecture Overview' },
    ],
    content: `### Draft Architecture Overview\n\nThis article is currently in editorial review and is excluded from public search indexing and XML sitemaps.`,
    relatedArticles: [],
  },
];

export const allBlogArticles: ClientBlogPost[] = [
  ...publishedArticles.map((article) => ({ ...article, status: 'published' as const })),
  ...draftArticles,
];

