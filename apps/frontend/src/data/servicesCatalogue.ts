export interface ServiceDetail {
  slug: string;
  legacyUrl: string;
  category: 'Engineering' | 'Growth' | 'Design & Strategy' | 'Support';
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  targetAudience: string;
  customerProblems: { problem: string; impact: string }[];
  businessOutcomes: { outcome: string; metric: string }[];
  deliverables: { title: string; description: string }[];
  process: { phase: string; title: string; description: string }[];
  techStack: string[];
  caseEvidence: {
    clientOrProject: string;
    summary: string;
    deliverables: string;
  };
  pricingAndTimelineFactors: {
    factor: string;
    description: string;
  }[];
  faqs: { id: string; question: string; answer: string }[];
  relatedServices: { title: string; slug: string }[];
  relatedArticles: { title: string; href: string }[];
}

export const servicesCatalogue: ServiceDetail[] = [
  {
    slug: 'web-development',
    legacyUrl: '/web-design-development',
    category: 'Engineering',
    title: 'Custom Web & Application Engineering',
    metaTitle: 'Custom Web & Application Development Services | LeaveCode Technologies',
    metaDescription:
      'High-performance full-stack web applications engineered with Next.js 14, Node.js, and TypeScript. Sub-second performance, strict security, and scalable architecture.',
    h1: 'Custom Web & Enterprise Application Engineering',
    tagline:
      'Engineered for organizations transitioning beyond sluggish CMS templates to scalable, sub-second web platforms.',
    targetAudience:
      'B2B firms, mid-market businesses, and digital ventures requiring high-availability web portals, customer-facing applications, or custom SaaS interfaces.',
    customerProblems: [
      {
        problem: 'Monolithic CMS Bottlenecks',
        impact: 'Legacy WordPress or plugin-heavy architectures suffer from bloated JavaScript payloads, high TTFB, and frequent plugin update conflicts.',
      },
      {
        problem: 'Poor Mobile Core Web Vitals',
        impact: 'Failing Google LCP and INP metrics degrades organic search visibility and drives up visitor bounce rates on mobile networks.',
      },
      {
        problem: 'Rigid Functional Limitations',
        impact: 'Inability to integrate custom business workflows, multi-step quotation engines, or secure customer portals without fragile hacks.',
      },
    ],
    businessOutcomes: [
      {
        outcome: 'Sub-Second Page Delivery',
        metric: 'Server-rendered pages with LCP under 1.2s and near-instant initial response.',
      },
      {
        outcome: 'Hardened Security Posture',
        metric: 'Decoupled frontend eliminates database exposure to public browser clients.',
      },
      {
        outcome: 'Higher Organic Conversion',
        metric: 'Clean DOM hierarchies and zero layout shifts maximize form engagement.',
      },
    ],
    deliverables: [
      {
        title: 'Full-Stack Next.js 14 Application',
        description: 'Server components, client boundary isolation, dynamic OpenGraph generators, and static generation (ISR).',
      },
      {
        title: 'Node.js & Express REST Backend',
        description: 'Robust API services secured with Helmet, CORS controls, rate limiters, and end-to-end Zod request validation.',
      },
      {
        title: 'Database Architecture & Persistence',
        description: 'Scalable MongoDB Atlas data modeling with indexed collections, automated backups, and connection pooling.',
      },
      {
        title: 'CI/CD Pipeline & Edge Deployment',
        description: 'Automated linting, TypeScript build verification, and deployment to Vercel Edge or cloud infrastructure.',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'Technical Scoping',
        description: 'Auditing existing systems, mapping user journeys, and specifying API and database contracts.',
      },
      {
        phase: '02',
        title: 'Design System & Architecture',
        description: 'Creating modular Figma component systems and defining the monorepo directory topology.',
      },
      {
        phase: '03',
        title: 'Iterative Sprint Development',
        description: 'Two-week development sprints delivering working software with strict TypeScript compilation.',
      },
      {
        phase: '04',
        title: 'Zero-Downtime Migration',
        description: 'Testing 301 URL redirects, verifying canonical tags, and running lighthouse performance benchmarks.',
      },
    ],
    techStack: ['Next.js 14', 'React 18', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Tailwind CSS'],
    caseEvidence: {
      clientOrProject: 'Vydamed Healthcare Platform',
      summary: 'Re-engineered the legacy clinical booking and inquiry platform into a responsive, high-speed web application.',
      deliverables: 'Decoupled frontend, custom patient inquiry routing, and sub-150ms server response times.',
    },
    pricingAndTimelineFactors: [
      {
        factor: 'Data Migration Scope',
        description: 'Volume of legacy database records, media assets, and historical URL structures requiring edge redirect mapping.',
      },
      {
        factor: 'Third-Party API Integrations',
        description: 'Complexity of external CRM connections, payment gateways, or custom ERP synchronization pipelines.',
      },
      {
        factor: 'User Role & Authentication Hierarchy',
        description: 'Single-tier public views versus multi-role authenticated member dashboards with permissions.',
      },
    ],
    faqs: [
      {
        id: 'faq-web-1',
        question: 'Will our existing rankings drop if we migrate from WordPress to Next.js?',
        answer:
          'No, provided migration is executed correctly. We conduct an exhaustive 1:1 URL inventory, preserve on-page metadata, and implement permanent 301 server redirects so search engines seamlessly transfer page authority.',
      },
      {
        id: 'faq-web-2',
        question: 'Who owns the source code once the website is completed?',
        answer:
          'You retain 100% intellectual property and full ownership of your Git repository, configuration files, and assets upon project completion.',
      },
      {
        id: 'faq-web-3',
        question: 'How long does a custom web application take to build?',
        answer:
          'Standard high-performance corporate platforms generally take 4 to 6 weeks. More complex applications with user portals or customized business logic typically span 8 to 12 weeks.',
      },
    ],
    relatedServices: [
      { title: 'Technical & Organic SEO Growth', slug: 'seo-services' },
      { title: 'UI/UX Design & Brand Systems', slug: 'ui-ux-branding' },
      { title: '24/7 SLA & Website Maintenance', slug: 'website-maintenance' },
    ],
    relatedArticles: [
      {
        title: 'Migrating from Legacy Monolithic WordPress to Next.js 14 Without Losing Rankings',
        href: '/blog',
      },
      {
        title: 'Shared Zod Schemas in TypeScript Monorepos: Eliminating Validation Drift',
        href: '/blog',
      },
    ],
  },
  {
    slug: 'mobile-app-development',
    legacyUrl: '/mobile-app-development',
    category: 'Engineering',
    title: 'Mobile Application Engineering',
    metaTitle: 'Mobile App Development (iOS & Android) | LeaveCode Technologies',
    metaDescription:
      'High-performance cross-platform iOS and Android mobile applications engineered with React Native. Offline-first data caching, intuitive UX, and secure backend integration.',
    h1: 'Native & Cross-Platform Mobile Application Development',
    tagline:
      'Crafting fluid, responsive mobile experiences for iOS and Android with shared TypeScript codebases.',
    targetAudience:
      'Companies launching customer-facing mobile utilities, on-demand service platforms, or internal workforce tools requiring reliable mobile performance.',
    customerProblems: [
      {
        problem: 'Disjointed iOS & Android Codebases',
        impact: 'Managing two separate codebases doubles development overhead and creates feature parity lag between platforms.',
      },
      {
        problem: 'Poor Offline Resilience',
        impact: 'Mobile users encountering connectivity drops experience app crashes or loss of unsaved form data.',
      },
      {
        problem: 'Substandard App Store Acceptance',
        impact: 'Failure to comply with strict Apple App Store and Google Play guidelines leads to costly submission rejections.',
      },
    ],
    businessOutcomes: [
      {
        outcome: 'Unified Codebase Efficiency',
        metric: 'Up to 70% shared logic across iOS and Android with native performance feel.',
      },
      {
        outcome: 'Smooth 60 FPS Interactions',
        metric: 'Hardware-accelerated animations and restrained re-renders.',
      },
      {
        outcome: 'Guaranteed Store Compliance',
        metric: 'Zero-rejection deployment pipeline adhering to strict mobile privacy guidelines.',
      },
    ],
    deliverables: [
      {
        title: 'Cross-Platform React Native App',
        description: 'Production iOS and Android application with platform-adaptive navigation, gestures, and UI components.',
      },
      {
        title: 'Offline Storage & State Cache',
        description: 'Persistent local storage enabling smooth operation even in intermittent network conditions.',
      },
      {
        title: 'Push Notification Infrastructure',
        description: 'Integrated notification service for transactional alerts, reminders, and user engagement.',
      },
      {
        title: 'App Store Submission & Release',
        description: 'Preparation of store assets, privacy manifests, release certificates, and submission management.',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'UX Flow & Wireframes',
        description: 'Mapping mobile-first thumb zones, state transitions, and offline interaction patterns.',
      },
      {
        phase: '02',
        title: 'Component Development',
        description: 'Building native-bridged interactive components with responsive layout constraints.',
      },
      {
        phase: '03',
        title: 'API Integration & Security',
        description: 'Connecting secure REST endpoints with JWT token rotation and encrypted credential storage.',
      },
      {
        phase: '04',
        title: 'Store Publishing',
        description: 'Executing TestFlight / Google Play internal tracks and managing final store approvals.',
      },
    ],
    techStack: ['React Native', 'TypeScript', 'Expo / Bare Workflow', 'Node.js', 'Redux / Zustand', 'REST APIs'],
    caseEvidence: {
      clientOrProject: 'Mobile Service Booking Prototype',
      summary: 'Developed an on-demand service dispatch interface featuring geolocated scheduling and real-time status updates.',
      deliverables: 'React Native iOS/Android app, push notifications, and administrative dispatch dashboard.',
    },
    pricingAndTimelineFactors: [
      {
        factor: 'Hardware API Integrations',
        description: 'Requirements for native camera, GPS background tracking, Bluetooth, or biometric authentication.',
      },
      {
        factor: 'Real-Time Sync Protocols',
        description: 'WebSocket or server-sent event requirements for live user messaging or geospatial tracking.',
      },
      {
        factor: 'Store Compliance Requirements',
        description: 'Healthcare or financial privacy compliance protocols requiring third-party security audits.',
      },
    ],
    faqs: [
      {
        id: 'faq-mob-1',
        question: 'Should we build native apps or choose cross-platform React Native?',
        answer:
          'React Native offers the ideal balance for 95% of commercial applications, allowing a single TypeScript codebase to produce native iOS and Android binaries at significantly lower maintenance costs.',
      },
      {
        id: 'faq-mob-2',
        question: 'Do you handle the App Store and Google Play submission process?',
        answer:
          'Yes. We handle privacy manifests, store metadata, screenshot asset generation, and build signing to ensure smooth approval on both stores.',
      },
      {
        id: 'faq-mob-3',
        question: 'Can the mobile app share API services with our web platform?',
        answer:
          'Yes. Using our monorepo architecture, your web application and mobile app share the exact same Express backend and Zod validation contracts.',
      },
    ],
    relatedServices: [
      { title: 'Custom Web & Application Engineering', slug: 'web-development' },
      { title: 'UI/UX Design & Brand Systems', slug: 'ui-ux-branding' },
      { title: 'App Store Optimization (ASO)', slug: 'app-store-optimization' },
    ],
    relatedArticles: [
      {
        title: 'Core Web Vitals in 2026: Why INP and Sub-Second TTFB Matter More Than Ever',
        href: '/blog',
      },
    ],
  },
  {
    slug: 'ecommerce-development',
    legacyUrl: '/ecommerce-website-design',
    category: 'Engineering',
    title: 'Headless & Custom E-Commerce',
    metaTitle: 'Headless & Custom E-Commerce Development | LeaveCode Technologies',
    metaDescription:
      'Custom e-commerce platforms engineered for rapid checkout conversions, inventory synchronization, and secure multi-currency payment processing.',
    h1: 'Headless & Scalable E-Commerce Engineering',
    tagline:
      'Engineered digital storefronts designed for frictionless checkouts and high product catalog throughput.',
    targetAudience:
      'Direct-to-consumer brands, multi-category retailers, and B2B distributors needing fast catalog browsing, custom checkout logic, or multi-currency support.',
    customerProblems: [
      {
        problem: 'Checkout Cart Abandonment',
        impact: 'Slow, multi-page checkout flows with laggy payment transitions cause substantial revenue drop-offs.',
      },
      {
        problem: 'Catalog Latency Under Traffic Spikes',
        impact: 'Promotional campaigns crash slow databases or cause excruciating category filter lag.',
      },
      {
        problem: 'Inflexible Payment & Tax Routing',
        impact: 'Standard template stores struggle with cross-border tax calculation and multiple regional payment gateways.',
      },
    ],
    businessOutcomes: [
      {
        outcome: 'Higher Checkout Completion',
        metric: 'Single-page, lightning-fast checkout with instant validation.',
      },
      {
        outcome: 'Resilient Catalog Navigation',
        metric: 'Faceted filtering and sub-50ms instant product search.',
      },
      {
        outcome: 'Reliable Inventory Sync',
        metric: 'Real-time stock reservation preventing overselling during sales spikes.',
      },
    ],
    deliverables: [
      {
        title: 'Headless Storefront Frontend',
        description: 'Next.js storefront optimized for instant category browsing, image CDN delivery, and rich product schema.',
      },
      {
        title: 'Commerce Engine / Shopify Backend',
        description: 'Integration with Shopify Storefront API, WooCommerce REST, or custom Node.js order processing.',
      },
      {
        title: 'Payment Gateway Integration',
        description: 'Secure, PCI-compliant Stripe, Razorpay, or PayPal payment capture with webhook idempotency.',
      },
      {
        title: 'Schema.org Product & Review Rich Snippets',
        description: 'Structured data markup for Google Shopping, in-stock indicators, and organic pricing rich results.',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'Catalog Modeling',
        description: 'Defining product attributes, variants, category taxonomies, and inventory sync schedules.',
      },
      {
        phase: '02',
        title: 'Conversion UX Wireframes',
        description: 'Optimizing product detail pages (PDP), sticky buy actions, and frictionless cart mini-drawers.',
      },
      {
        phase: '03',
        title: 'API & Gateway Engineering',
        description: 'Wiring secure checkout sessions, tax calculation APIs, and automated confirmation emails.',
      },
      {
        phase: '04',
        title: 'Load Testing & Cutover',
        description: 'Stress-testing catalog search under high concurrency and verifying tracking pixels.',
      },
    ],
    techStack: ['Next.js', 'Shopify Storefront API', 'Stripe', 'Node.js', 'MongoDB Atlas', 'Tailwind CSS'],
    caseEvidence: {
      clientOrProject: 'Buyonik E-Commerce Engine',
      summary: 'Developed an online commerce storefront emphasizing structured product categorization and clear checkout flow.',
      deliverables: 'Fast product filtering, multi-item cart management, and seamless gateway checkout.',
    },
    pricingAndTimelineFactors: [
      {
        factor: 'Catalog Volume & Variant Hierarchy',
        description: 'Number of SKU records, complex variant matrices (size/color/material), and custom bundle logic.',
      },
      {
        factor: 'Backend Integration Complexity',
        description: 'Synchronizing third-party ERPs, warehouse management systems (WMS), or dropshipping suppliers.',
      },
      {
        factor: 'Multi-Region Currency & Tax Rules',
        description: 'Automated VAT/GST calculation, localized currency conversions, and international shipping tables.',
      },
    ],
    faqs: [
      {
        id: 'faq-ecom-1',
        question: 'What is the advantage of headless commerce over standard Shopify templates?',
        answer:
          'Headless commerce decouples the frontend user experience from the commerce database, allowing custom layouts, faster load speeds, and tailored checkout flows while still leveraging Shopify or Stripe for transaction processing.',
      },
      {
        id: 'faq-ecom-2',
        question: 'How do you handle product inventory updates and stock alerts?',
        answer:
          'We implement real-time webhook listeners that update catalog inventory instantly across channels, preventing out-of-stock purchases.',
      },
      {
        id: 'faq-ecom-3',
        question: 'Are product schema tags included for Google Shopping rich snippets?',
        answer:
          'Yes. Every product page is rendered with full Schema.org Product, Offer, and AggregateRating JSON-LD structured data.',
      },
    ],
    relatedServices: [
      { title: 'Custom Web & Application Engineering', slug: 'web-development' },
      { title: 'Technical & Organic SEO Growth', slug: 'seo-services' },
      { title: 'Performance Media & PPC Management', slug: 'performance-marketing' },
    ],
    relatedArticles: [
      {
        title: 'Core Web Vitals in 2026: Why INP and Sub-Second TTFB Matter More Than Ever',
        href: '/blog',
      },
    ],
  },
  {
    slug: 'seo-services',
    legacyUrl: '/search-engine-optimization',
    category: 'Growth',
    title: 'Technical & Organic SEO Growth',
    metaTitle: 'Technical & Enterprise SEO Services | LeaveCode Technologies',
    metaDescription:
      'Comprehensive search engine optimization encompassing technical site architecture, Schema.org integration, Core Web Vitals, and organic search visibility.',
    h1: 'Technical & Enterprise Organic SEO Architecture',
    tagline:
      'Engineered search visibility built on sound crawlability, semantic markup, and Core Web Vitals compliance.',
    targetAudience:
      'Companies facing organic ranking stagnation, preparing for a site migration, or aiming to outrank aggressive competitors through technical superiority.',
    customerProblems: [
      {
        problem: 'Crawl Bloat & Indexing Inefficiencies',
        impact: 'Search bots waste crawl budget on staging pages, duplicate tags, or broken redirect chains.',
      },
      {
        problem: 'Under-Optimized Structured Data',
        impact: 'Missing out on Google Rich Snippets, Knowledge Panels, and FAQ highlights due to absent JSON-LD schema.',
      },
      {
        problem: 'Migration Rank Drops',
        impact: 'Rebuilding a website without an audit-backed 301 redirection plan destroys years of backlink value.',
      },
    ],
    businessOutcomes: [
      {
        outcome: 'Protected & Elevated Domain Rank',
        metric: '100% preservation of historical backlink equity via disciplined edge redirects.',
      },
      {
        outcome: 'Rich Snippet Eligibility',
        metric: 'Structured Organization, Service, and FAQ schemas recognized by Google.',
      },
      {
        outcome: 'Sustained Organic Lead Volume',
        metric: 'Higher ranking for commercial-intent keywords without reliance on paid media.',
      },
    ],
    deliverables: [
      {
        title: 'Comprehensive Technical SEO Audit',
        description: 'Exhaustive crawl analysis of robots.txt, canonicalization, status codes, internal link graphs, and indexation.',
      },
      {
        title: '301 Migration Redirect Architecture',
        description: 'Edge-level redirection maps ensuring legacy paths resolve permanently to their exact modern counterparts.',
      },
      {
        title: 'Semantic Schema.org JSON-LD Implementation',
        description: 'Custom structured data tailored to organizations, physical office locations, services, and editorial articles.',
      },
      {
        title: 'Core Web Vitals Remediation',
        description: 'Font preloading, cumulative layout shift eradication, and server-side rendering for optimal TTFB.',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'Baseline URL Inventory',
        description: 'Crawling all live and historical sitemaps to inventory high-equity landing pages and keyword footprints.',
      },
      {
        phase: '02',
        title: 'Architecture & Hierarchy Mapping',
        description: 'Restructuring site taxonomy into focused topic clusters with clean, semantic folder paths.',
      },
      {
        phase: '03',
        title: 'On-Page & Schema Integration',
        description: 'Drafting targeted metadata, descriptive H1/H2 hierarchies, and validating JSON-LD in Google Rich Results Test.',
      },
      {
        phase: '04',
        title: 'Search Console Monitoring',
        description: 'Submitting updated XML sitemaps, verifying index coverage, and validating zero 404 crawl spikes.',
      },
    ],
    techStack: ['Google Search Console', 'Schema.org JSON-LD', 'Next.js Metadata API', 'Lighthouse', 'Screaming Frog'],
    caseEvidence: {
      clientOrProject: 'Cummins IP Legal Practice & Real Estate Portals',
      summary: 'Executed on-page keyword structuring, local business schema integration, and technical crawl cleanup.',
      deliverables: 'Elimination of duplicate test URLs, improved local map visibility, and zero broken canonical references.',
    },
    pricingAndTimelineFactors: [
      {
        factor: 'Historical Site Size & Backlink Footprint',
        description: 'Number of indexed legacy URLs and external inbound links that must be safeguarded during restructuring.',
      },
      {
        factor: 'Competitive Landscape Intensity',
        description: 'Domain authority of incumbent competitors in your target geographic or commercial sector.',
      },
      {
        factor: 'Content & Topic Cluster Depth',
        description: 'Volume of specialized service sub-pages and educational resources needed to establish topical authority.',
      },
    ],
    faqs: [
      {
        id: 'faq-seo-1',
        question: 'How do you prevent ranking drops during a website rebuild?',
        answer:
          'We conduct an exhaustive pre-launch inventory of all existing URLs. We map every legacy page to its closest modern equivalent using server-side 301 redirects, ensuring search equity transfers smoothly.',
      },
      {
        id: 'faq-seo-2',
        question: 'Does Next.js support search engines as well as traditional WordPress?',
        answer:
          'Next.js with Server-Side Rendering (SSR) and Static Site Generation (SSG) is superior for modern SEO: search engine bots receive pure, fully formed HTML instantaneously without waiting for heavy client-side JavaScript execution.',
      },
      {
        id: 'faq-seo-3',
        question: 'What is the role of structured data (Schema.org)?',
        answer:
          'Structured data gives search engines unambiguous context about your organization, office locations, services, and articles, qualifying your site for enhanced rich results in Google SERPs.',
      },
    ],
    relatedServices: [
      { title: 'Custom Web & Application Engineering', slug: 'web-development' },
      { title: 'Performance Media & PPC Management', slug: 'performance-marketing' },
      { title: '24/7 SLA & Website Maintenance', slug: 'website-maintenance' },
    ],
    relatedArticles: [
      {
        title: 'Migrating from Legacy Monolithic WordPress to Next.js 14 Without Losing Rankings',
        href: '/blog',
      },
    ],
  },
  {
    slug: 'performance-marketing',
    legacyUrl: '/google-adwords',
    category: 'Growth',
    title: 'Performance Media & PPC Management',
    metaTitle: 'Performance Marketing & Google Ads Management | LeaveCode Technologies',
    metaDescription:
      'Targeted pay-per-click campaign architecture across Google Search, Display, and remarketing networks with transparent attribution and conversion focus.',
    h1: 'Performance Media & High-Conversion PPC Management',
    tagline:
      'Data-driven paid search and display campaigns designed to acquire high-intent business leads at positive ROI.',
    targetAudience:
      'Businesses requiring immediate, predictable lead inquiries while organic SEO matures, or companies seeking to scale proven customer acquisition channels.',
    customerProblems: [
      {
        problem: 'Wasted Budget on Broad Match Terms',
        impact: 'Spending ad spend on low-intent queries that fail to generate qualified sales conversations.',
      },
      {
        problem: 'Broken Attribution Tracking',
        impact: 'Inability to connect ad clicks to real CRM opportunities and closed contracts due to poor analytics configuration.',
      },
      {
        problem: 'Disconnected Landing Page Experiences',
        impact: 'Sending paid traffic to generic homepages with weak conversion paths ruins campaign Quality Scores.',
      },
    ],
    businessOutcomes: [
      {
        outcome: 'Lower Cost Per Qualified Lead',
        metric: 'Rigorous negative keyword pruning and tightly themed ad groups.',
      },
      {
        outcome: 'Transparent Revenue Attribution',
        metric: 'Full Google Analytics 4 (GA4) event measurement through to form submission.',
      },
      {
        outcome: 'Higher Quality Scores',
        metric: 'Matching ad copy tightly with fast, dedicated Next.js landing pages.',
      },
    ],
    deliverables: [
      {
        title: 'Keyword Architecture & Intent Analysis',
        description: 'Targeting commercial search intent with exact and phrase match structures to eliminate ad spend waste.',
      },
      {
        title: 'Ad Copywriting & Asset Testing',
        description: 'Compelling responsive search ads (RSAs), sitelinks, callout assets, and structured snippets.',
      },
      {
        title: 'Remarketing & Audience Retargeting',
        description: 'Re-engaging previous website visitors who browsed specific services without submitting an inquiry.',
      },
      {
        title: 'Conversion Tracking Setup',
        description: 'Server-side and client-side Google Tag Manager event tracking configured for accurate attribution.',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'Account & Conversion Audit',
        description: 'Reviewing historical ad data, tracking tags, and identifying leakage points in existing campaigns.',
      },
      {
        phase: '02',
        title: 'Campaign Architecture',
        description: 'Building single-theme ad groups, negative keyword lists, and localized bid adjustments.',
      },
      {
        phase: '03',
        title: 'Landing Page Alignment',
        description: 'Ensuring destination URLs match ad promises with clear value propositions and low friction forms.',
      },
      {
        phase: '04',
        title: 'Weekly Bid & Term Optimization',
        description: 'Refining search term reports, negative keyword additions, and device bid modifiers.',
      },
    ],
    techStack: ['Google Ads', 'Google Tag Manager', 'GA4', 'Looker Studio', 'Conversion API'],
    caseEvidence: {
      clientOrProject: 'B2B Lead Generation Campaigns',
      summary: 'Configured targeted Google Ads campaigns with custom conversion triggers for high-ticket commercial inquiries.',
      deliverables: 'Search campaign restructuring, negative keyword scrubbing, and dedicated conversion landing page routing.',
    },
    pricingAndTimelineFactors: [
      {
        factor: 'Monthly Media Spend Tier',
        description: 'Scale of monthly ad spend and number of concurrent search/display networks under management.',
      },
      {
        factor: 'Geographic Scope',
        description: 'Single city/regional local targeting versus multi-national campaigns across the US, UK, and India.',
      },
      {
        factor: 'Landing Page Engineering Needs',
        description: 'Utilizing existing website pages versus building dedicated, variant-tested landing pages.',
      },
    ],
    faqs: [
      {
        id: 'faq-ppc-1',
        question: 'How quickly do Google Ads campaigns begin generating inquiries?',
        answer:
          'Paid search campaigns can drive qualified visitors within 24 to 48 hours of launch. The first 2 to 4 weeks are dedicated to algorithmic learning, search term pruning, and bid calibration.',
      },
      {
        id: 'faq-ppc-2',
        question: 'Do we pay ad spend directly to Google or through LeaveCode?',
        answer:
          'You pay ad spend directly to Google via your own billing profile. LeaveCode charges a transparent management fee for strategy, setup, tracking, and continuous optimization.',
      },
      {
        id: 'faq-ppc-3',
        question: 'How do you prevent paying for irrelevant clicks?',
        answer:
          'We utilize phrase and exact match keyword targeting paired with comprehensive negative keyword lists to exclude informational or non-commercial queries.',
      },
    ],
    relatedServices: [
      { title: 'Technical & Organic SEO Growth', slug: 'seo-services' },
      { title: 'Custom Web & Application Engineering', slug: 'web-development' },
      { title: 'Social Media Strategy & Optimization', slug: 'social-media-marketing' },
    ],
    relatedArticles: [
      {
        title: 'Core Web Vitals in 2026: Why INP and Sub-Second TTFB Matter More Than Ever',
        href: '/blog',
      },
    ],
  },
  {
    slug: 'ui-ux-branding',
    legacyUrl: '/logo-designing',
    category: 'Design & Strategy',
    title: 'UI/UX Design & Brand Systems',
    metaTitle: 'UI/UX Design & Digital Brand Systems | LeaveCode Technologies',
    metaDescription:
      'Design systems, Figma component architectures, and responsive user interfaces created to guide visitors seamlessly toward conversion.',
    h1: 'UI/UX Design & Scalable Digital Brand Systems',
    tagline:
      'Transforming complex digital capabilities into clear, high-converting interfaces through disciplined design systems.',
    targetAudience:
      'Enterprises and growing companies needing a cohesive visual language, intuitive product UX, and a design system that accelerates engineering.',
    customerProblems: [
      {
        problem: 'Inconsistent Visual Identity',
        impact: 'Fragmented typography, mismatched button states, and dated aesthetics undermine client trust.',
      },
      {
        problem: 'High Cognitive Friction',
        impact: 'Complex navigation hierarchies and ambiguous forms cause high user frustration and drop-offs.',
      },
      {
        problem: 'Design-to-Code Bottlenecks',
        impact: 'Designs drafted without engineering constraints result in buggy, bloated code that deviates from the mockup.',
      },
    ],
    businessOutcomes: [
      {
        outcome: 'Cohesive Design Language',
        metric: 'Single source of truth in Figma with standardized color tokens, typography scales, and components.',
      },
      {
        outcome: 'Higher Conversion Velocity',
        metric: 'Frictionless multi-step forms and intuitive desktop/mobile layout rhythms.',
      },
      {
        outcome: 'WCAG 2.1 AA Compliance',
        metric: 'Accessible color contrasts and clear focus states across all interactive elements.',
      },
    ],
    deliverables: [
      {
        title: 'Complete Figma Design System',
        description: 'Auto-layout components, responsive variants, typography scales, and tokenized design variables.',
      },
      {
        title: 'High-Fidelity Page Mockups',
        description: 'Mobile, tablet, and widescreen layouts for all core templates, service hubs, and form flows.',
      },
      {
        title: 'Interactive Clickable Prototypes',
        description: 'Demonstrating navigation transitions, modal behaviors, and micro-interactions before engineering starts.',
      },
      {
        title: 'Visual Assets & Brand Guidelines',
        description: 'Vector logo suites, favicon sets, social preview templates, and custom technology graphics.',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'User Flow Mapping',
        description: 'Auditing visitor journeys, intent signals, and defining low-friction paths to inquiry.',
      },
      {
        phase: '02',
        title: 'Wireframing & Hierarchy',
        description: 'Drafting layout structure and editorial typography hierarchy before introducing color.',
      },
      {
        phase: '03',
        title: 'Visual Design & Tokens',
        description: 'Applying refined surfaces, restrained gradients, and distinctive electric indigo brand accents.',
      },
      {
        phase: '04',
        title: 'Developer Handoff',
        description: 'Annotating component states and mapping token variables directly to Tailwind CSS configuration.',
      },
    ],
    techStack: ['Figma', 'Tailwind CSS Tokens', 'WCAG Contrast Tools', 'Framer Motion Specs'],
    caseEvidence: {
      clientOrProject: 'LeaveCode Modernization Design System',
      summary: 'Designed an architectural dark design system with obsidian surfaces, electric indigo accents, and clear typography.',
      deliverables: 'Modular tokens, responsive containers, accessible button states, and interactive components.',
    },
    pricingAndTimelineFactors: [
      {
        factor: 'Template & View Variety',
        description: 'Total number of unique page layouts, interactive calculators, and modal states required.',
      },
      {
        factor: 'Brand Identity Scope',
        description: 'Refreshing an existing visual identity versus establishing a new logo mark, brand rules, and typography system.',
      },
      {
        factor: 'Prototype Depth',
        description: 'Static wireframes versus complex interactive Figma prototypes modeling edge cases.',
      },
    ],
    faqs: [
      {
        id: 'faq-ux-1',
        question: 'Do you design with engineering feasibility in mind?',
        answer:
          'Always. Because our design and engineering practices operate in unison, every Figma component is built to directly map to Tailwind CSS classes and React Server Component standards.',
      },
      {
        id: 'faq-ux-2',
        question: 'Will we receive the complete Figma design files?',
        answer:
          'Yes. Full edit access to the organized Figma project, including component libraries, tokens, and wireframes, is handed over to your team.',
      },
      {
        id: 'faq-ux-3',
        question: 'How do you ensure accessibility standards are met?',
        answer:
          'We test all text against WCAG 2.1 AA contrast requirements (minimum 4.5:1 ratio for body copy) and specify explicit keyboard focus rings for all interactive controls.',
      },
    ],
    relatedServices: [
      { title: 'Custom Web & Application Engineering', slug: 'web-development' },
      { title: 'Mobile Application Engineering', slug: 'mobile-app-development' },
      { title: 'Headless & Custom E-Commerce', slug: 'ecommerce-development' },
    ],
    relatedArticles: [
      {
        title: 'Shared Zod Schemas in TypeScript Monorepos: Eliminating Validation Drift',
        href: '/blog',
      },
    ],
  },
  {
    slug: 'social-media-marketing',
    legacyUrl: '/social-media-optimization',
    category: 'Growth',
    title: 'Social Media Strategy & Optimization',
    metaTitle: 'Social Media Marketing & Optimization (SMO) | LeaveCode Technologies',
    metaDescription:
      'Strategic brand storytelling, structured channel optimization, and creative audience outreach across active commercial networks.',
    h1: 'Strategic Social Media Optimization & Brand Growth',
    tagline:
      'Building authentic commercial authority across LinkedIn, Meta, and digital networks through consistent, value-first storytelling.',
    targetAudience:
      'B2B firms, service providers, and brands looking to establish an active, credible executive voice and engage qualified industry prospects.',
    customerProblems: [
      {
        problem: 'Inconsistent Channel Presence',
        impact: 'Sporadic, low-quality posts make a company appear inactive to prospective clients conducting due diligence.',
      },
      {
        problem: 'Generic Stock Content',
        impact: 'Stock imagery and uninspired captions fail to capture attention in crowded algorithmic feeds.',
      },
      {
        problem: 'Zero Lead Attribution',
        impact: 'Social activity occurs in a silo without generating referrals or measurable website traffic.',
      },
    ],
    businessOutcomes: [
      {
        outcome: 'Enhanced Brand Credibility',
        metric: 'Polished, professional channel assets reflecting company expertise.',
      },
      {
        outcome: 'Referral Traffic Growth',
        metric: 'Engaging content driving qualified visitors back to primary service landing pages.',
      },
      {
        outcome: 'Algorithmic Distribution',
        metric: 'Content formats tailored to specific platform distribution algorithms.',
      },
    ],
    deliverables: [
      {
        title: 'Channel Optimization & Branding',
        description: 'Complete overhaul of profile headers, company descriptions, custom links, and featured content.',
      },
      {
        title: 'Strategic Content Calendar',
        description: 'Monthly planning of technical insights, project showcases, and company milestone announcements.',
      },
      {
        title: 'Custom Graphic & Carousel Creation',
        description: 'High-contrast editorial graphics and carousels designed according to brand design system guidelines.',
      },
      {
        title: 'Performance & Engagement Analytics',
        description: 'Monthly reporting analyzing reach, engagement rate, top-performing topics, and referral click-throughs.',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'Voice & Positioning Audit',
        description: 'Analyzing existing brand voice, competitor channels, and high-engagement industry topics.',
      },
      {
        phase: '02',
        title: 'Theme & Template Definition',
        description: 'Developing reusable graphic templates and establishing core editorial content pillars.',
      },
      {
        phase: '03',
        title: 'Creation & Approval',
        description: 'Drafting monthly copy and visual assets with organized milestone review checkpoints.',
      },
      {
        phase: '04',
        title: 'Publishing & Engagement',
        description: 'Scheduled publishing during optimal engagement windows and monitoring follower interactions.',
      },
    ],
    techStack: ['LinkedIn Pages', 'Meta Business Suite', 'Figma Assets', 'Analytics Tracking'],
    caseEvidence: {
      clientOrProject: 'Agency Social Presence Modernization',
      summary: 'Restructured social media asset pipelines into clean editorial formats highlighting technical capabilities and project delivery.',
      deliverables: 'Branded channel assets, content frameworks, and tracking of referral visitors to service hubs.',
    },
    pricingAndTimelineFactors: [
      {
        factor: 'Monthly Publishing Frequency',
        description: 'Number of unique, branded editorial posts and carousel graphics delivered per week.',
      },
      {
        factor: 'Supported Platform Count',
        description: 'Focusing exclusively on primary networks (e.g., LinkedIn & X) versus multi-network distribution.',
      },
      {
        factor: 'Original Asset Creation Needs',
        description: 'Text and graphic posts versus custom short-form video snippets and motion teasers.',
      },
    ],
    faqs: [
      {
        id: 'faq-smo-1',
        question: 'Which social platforms are most effective for B2B technology companies?',
        answer:
          'For professional technology and digital services, LinkedIn is the primary driver of qualified inquiries and talent acquisition, supplemented by strategic brand presence on X/Twitter and YouTube for technical deep dives.',
      },
      {
        id: 'faq-smo-2',
        question: 'Do you create the graphics as well as write the post copy?',
        answer:
          'Yes. Our team authors the technical commentary and pairs it with custom brand-aligned graphics and carousels.',
      },
      {
        id: 'faq-smo-3',
        question: 'Do we have approval before content is published?',
        answer:
          'Always. Content is batched in advance inside a shared editorial calendar for your team to review, modify, or approve.',
      },
    ],
    relatedServices: [
      { title: 'Performance Media & PPC Management', slug: 'performance-marketing' },
      { title: 'UI/UX Design & Brand Systems', slug: 'ui-ux-branding' },
      { title: 'Technical & Organic SEO Growth', slug: 'seo-services' },
    ],
    relatedArticles: [
      {
        title: 'Migrating from Legacy Monolithic WordPress to Next.js 14 Without Losing Rankings',
        href: '/blog',
      },
    ],
  },
  {
    slug: 'app-store-optimization',
    legacyUrl: '/app-store-optimization-aso',
    category: 'Growth',
    title: 'App Store Optimization (ASO)',
    metaTitle: 'App Store Optimization (ASO) Services | LeaveCode Technologies',
    metaDescription:
      'Improve iOS App Store and Google Play organic visibility, keyword indexation, and store listing conversion rates with proven ASO strategies.',
    h1: 'App Store Optimization (ASO) & Organic App Growth',
    tagline:
      'Maximizing organic discoverability and store conversion rates across Apple App Store and Google Play listings.',
    targetAudience:
      'Mobile product creators, startups, and enterprises seeking organic app download growth without relying exclusively on paid acquisition.',
    customerProblems: [
      {
        problem: 'Invisible in Search Results',
        impact: 'Apps fail to appear for high-volume, commercial-intent search keywords within store algorithms.',
      },
      {
        problem: 'Low Store Impression-to-Install Conversion',
        impact: 'Uncompelling screenshot galleries and vague descriptions cause prospective users to abandon the store page.',
      },
      {
        problem: 'Inattention to Algorithm Updates',
        impact: 'Apple App Store and Google Play algorithmic shifts cause sudden, unexplained drops in keyword rankings.',
      },
    ],
    businessOutcomes: [
      {
        outcome: 'Higher Organic Discovery',
        metric: 'Indexing across top-tier keyword search volumes in target categories.',
      },
      {
        outcome: 'Elevated Conversion Rates',
        metric: 'Polished visual screenshots communicating core user benefits instantly.',
      },
      {
        outcome: 'Lower Blended Acquisition Cost',
        metric: 'Reducing overall cost per install (CPI) by supplementing paid campaigns with organic installs.',
      },
    ],
    deliverables: [
      {
        title: 'Keyword Mining & Metadata Architecture',
        description: 'Optimizing App Name, Subtitle, Keywords field (iOS), and Short/Long descriptions (Google Play).',
      },
      {
        title: 'Screenshot Gallery & Icon Design',
        description: 'Designing high-converting screenshot cards with clear value propositions for all device display sizes.',
      },
      {
        title: 'Category & Competitive Benchmarking',
        description: 'Analyzing competitor keyword positioning, review velocity, and category dynamics.',
      },
      {
        title: 'Rating & Review Strategy',
        description: 'Frameworks for in-app review prompts during positive user moments to improve average store rating.',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'Current Listing Audit',
        description: 'Evaluating current organic keyword visibility, install conversion rate, and store assets.',
      },
      {
        phase: '02',
        title: 'Semantic Keyword Research',
        description: 'Identifying high-intent search queries with optimal search volume and manageable keyword difficulty.',
      },
      {
        phase: '03',
        title: 'Creative Asset Production',
        description: 'Creating high-resolution preview screenshots illustrating actual app workflows and benefits.',
      },
      {
        phase: '04',
        title: 'Testing & Iteration',
        description: 'Submitting updated metadata and tracking rank progression and store conversion over time.',
      },
    ],
    techStack: ['App Store Connect', 'Google Play Console', 'Figma Screenshot Systems', 'ASO Tracking Tools'],
    caseEvidence: {
      clientOrProject: 'Mobile Storefront Optimization',
      summary: 'Restructured store listing assets and metadata for mobile applications, clarifying primary functionality.',
      deliverables: 'Optimized keyword sets, refreshed multi-device screenshot suites, and improved listing clarity.',
    },
    pricingAndTimelineFactors: [
      {
        factor: 'Target Store Scope',
        description: 'Optimizing exclusively for the Apple App Store, Google Play, or synchronized execution across both.',
      },
      {
        factor: 'Localization Requirements',
        description: 'Targeting a single domestic language market versus multi-country localization across regional stores.',
      },
      {
        factor: 'Creative Asset Deliverables',
        description: 'Static screenshot design versus animated app preview video production.',
      },
    ],
    faqs: [
      {
        id: 'faq-aso-1',
        question: 'How do Apple App Store and Google Play ranking algorithms differ?',
        answer:
          'Apple uses a dedicated 100-character keyword field, Title, and Subtitle for indexation, ignoring the body description for rank. Google Play crawls the entire title, short description, and long description using natural language processing.',
      },
      {
        id: 'faq-aso-2',
        question: 'How often should app store metadata be updated?',
        answer:
          'We recommend updating keyword metadata and testing screenshot variations every 4 to 6 weeks to respond to changing store trends and competitor movements.',
      },
      {
        id: 'faq-aso-3',
        question: 'Can ASO lower our paid ad costs for app installs?',
        answer:
          'Yes. A higher listing conversion rate improves ad campaign performance on Apple Search Ads and Google App Campaigns, lowering your overall blended acquisition cost.',
      },
    ],
    relatedServices: [
      { title: 'Mobile Application Engineering', slug: 'mobile-app-development' },
      { title: 'Performance Media & PPC Management', slug: 'performance-marketing' },
      { title: 'UI/UX Design & Brand Systems', slug: 'ui-ux-branding' },
    ],
    relatedArticles: [
      {
        title: 'Core Web Vitals in 2026: Why INP and Sub-Second TTFB Matter More Than Ever',
        href: '/blog',
      },
    ],
  },
  {
    slug: 'website-maintenance',
    legacyUrl: '/website-maintenance-packages',
    category: 'Support',
    title: '24/7 SLA, Security & Maintenance',
    metaTitle: 'Website Maintenance & 24/7 SLA Support | LeaveCode Technologies',
    metaDescription:
      'Proactive web infrastructure management, automated security updates, speed audits, database backups, and continuous uptime supervision.',
    h1: '24/7 Web Infrastructure Maintenance & SLA Support',
    tagline:
      'Continuous performance monitoring, security patch management, and guaranteed technical support for mission-critical web platforms.',
    targetAudience:
      'Organizations whose operations rely on uninterrupted website availability, transactional integrity, and rapid engineering response times.',
    customerProblems: [
      {
        problem: 'Unexpected Downtime & Lost Revenue',
        impact: 'Outages occurring outside office hours go unnoticed, causing lost client opportunities and brand damage.',
      },
      {
        problem: 'Unmonitored Security Vulnerabilities',
        impact: 'Unpatched dependencies, expired SSL certificates, and obsolete libraries expose infrastructure to exploits.',
      },
      {
        problem: 'Gradual Performance Degradation',
        impact: 'Unchecked database growth, uncompressed image uploads, and broken redirects degrade page speed over time.',
      },
    ],
    businessOutcomes: [
      {
        outcome: '99.9% Uptime Assurance',
        metric: 'Continuous external health monitoring checking endpoint availability every 60 seconds.',
      },
      {
        outcome: 'Proactive Vulnerability Mitigation',
        metric: 'Automated npm dependency audits and zero unpatched critical vulnerabilities.',
      },
      {
        outcome: 'Guaranteed Emergency Response',
        metric: 'Dedicated SLA response times for critical production issues.',
      },
    ],
    deliverables: [
      {
        title: '24/7 Synthetic Uptime Monitoring',
        description: 'Automated ping checks from global regions with immediate alerting to engineering leads.',
      },
      {
        title: 'Security Patching & Dependency Updates',
        description: 'Regular updates of Node.js modules, framework versions, security libraries, and environment variables.',
      },
      {
        title: 'Daily Automated Database Backups',
        description: 'Encrypted offsite database snapshots with tested one-click restoration procedures.',
      },
      {
        title: 'Monthly Performance & Speed Reports',
        description: 'Lighthouse Core Web Vitals checks, server latency graphs, and technical recommendations.',
      },
    ],
    process: [
      {
        phase: '01',
        title: 'Infrastructure Onboarding',
        description: 'Reviewing current server configs, DNS records, database clusters, and installing telemetry monitors.',
      },
      {
        phase: '02',
        title: 'Baseline Security Hardening',
        description: 'Updating outdated libraries, establishing SSL auto-renewal, and configuring web application firewalls.',
      },
      {
        phase: '03',
        title: 'Active Supervision',
        description: 'Continuous monitoring of memory usage, disk capacity, and HTTP status codes.',
      },
      {
        phase: '04',
        title: 'Monthly Review & Optimization',
        description: 'Delivering transparent monthly maintenance logs detailing completed updates and performance health.',
      },
    ],
    techStack: ['Uptime Monitoring', 'MongoDB Atlas Backups', 'Vercel / Cloudflare Edge', 'Sentry Alerting'],
    caseEvidence: {
      clientOrProject: 'Enterprise Platform Maintenance SLA',
      summary: 'Maintained zero-downtime reliability across client web applications through proactive patching and database backups.',
      deliverables: '24/7 uptime monitoring, regular dependency audits, and responsive emergency bug remediation.',
    },
    pricingAndTimelineFactors: [
      {
        factor: 'SLA Response Window',
        description: 'Standard 24-hour response versus emergency 1-hour critical response guarantees.',
      },
      {
        factor: 'Infrastructure Footprint',
        description: 'Single web server versus multi-service architectures with microservices, Redis, and database clusters.',
      },
      {
        factor: 'Included Monthly Development Hours',
        description: 'Pure monitoring and security patching versus packages including dedicated engineering hours for new features.',
      },
    ],
    faqs: [
      {
        id: 'faq-maint-1',
        question: 'What happens if our website goes down outside of business hours?',
        answer:
          'Our monitoring services ping your endpoints every 60 seconds from multiple geographic locations. If an outage is detected, automated alerts notify our engineering team immediately to begin remediation.',
      },
      {
        id: 'faq-maint-2',
        question: 'Are development updates included in the maintenance plan?',
        answer:
          'Yes. Our retainer tiers include designated developer hours every month that can be used for new page builds, form tweaks, graphic updates, or feature enhancements.',
      },
      {
        id: 'faq-maint-3',
        question: 'Can you maintain a codebase that LeaveCode did not build?',
        answer:
          'Yes. We begin with a code audit to assess architecture, test coverage, and security before establishing an ongoing maintenance SLA.',
      },
    ],
    relatedServices: [
      { title: 'Custom Web & Application Engineering', slug: 'web-development' },
      { title: 'Technical & Organic SEO Growth', slug: 'seo-services' },
      { title: 'Headless & Custom E-Commerce', slug: 'ecommerce-development' },
    ],
    relatedArticles: [
      {
        title: 'Migrating from Legacy Monolithic WordPress to Next.js 14 Without Losing Rankings',
        href: '/blog',
      },
    ],
  },
];
