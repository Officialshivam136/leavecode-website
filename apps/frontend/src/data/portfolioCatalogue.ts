export type ProjectType = 'Verified Client Engagement' | 'Engineering Demonstration Architecture';

export interface CaseStudy {
  slug: string;
  title: string;
  projectType: ProjectType;
  category: 'E-Commerce' | 'Healthcare & Clinical' | 'Real Estate & Living' | 'Legal & Corporate' | 'Engineering Demonstration';
  image?: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  clientContext: {
    clientName: string;
    industry: string;
    region?: string;
    disclosureNote: string;
  };
  problemOrOpportunity: string;
  projectObjectives: string[];
  scopeOfWork: string[];
  strategyAndImplementation: {
    phase: string;
    description: string;
  }[];
  techStack: string[];
  metricsOrDeliverables: {
    label: string;
    value: string;
    note: string;
  }[];
  authorizedTestimonial?: {
    quote: string;
    author: string;
    title: string;
    authorizationNote: string;
  };
  relatedServices: {
    title: string;
    slug: string;
  }[];
}

export const portfolioCatalogue: CaseStudy[] = [
  {
    slug: 'buyonik-ecommerce',
    title: 'Buyonik E-Commerce Platform',
    projectType: 'Verified Client Engagement',
    category: 'E-Commerce',
    metaTitle: 'Buyonik E-Commerce Platform Case Study | LeaveCode Technologies',
    metaDescription:
      'Case study on engineering the Buyonik digital storefront platform with structured product browsing, checkout flow, and payment integration.',
    tagline:
      'A structured online commerce storefront built for product catalog navigation and checkout throughput.',
    clientContext: {
      clientName: 'Buyonik',
      industry: 'E-Commerce & Online Retail',
      region: 'International Retail',
      disclosureNote: 'Client presence identified and audited from LeaveCode production assets.',
    },
    problemOrOpportunity:
      'The client needed a scalable digital storefront to display an expanding catalog of merchandise, manage category browsing efficiently, and ensure reliable transaction handling without payment drop-offs.',
    projectObjectives: [
      'Structure intuitive product navigation across multiple product categories.',
      'Implement an efficient cart management and checkout pipeline.',
      'Ensure responsive viewing and performance across mobile and desktop devices.',
      'Maintain reliable uptime during promotional browsing periods.',
    ],
    scopeOfWork: [
      'Storefront layout and UI implementation.',
      'Product category hierarchy and filter architecture.',
      'Shopping cart session management and checkout forms.',
      'Payment gateway routing and transaction receipt notifications.',
      'Mobile viewport optimization and testing.',
    ],
    strategyAndImplementation: [
      {
        phase: 'Catalog Taxonomy & Hierarchy',
        description: 'Organized product categories and attributes to provide quick search and logical breadcrumbs for shoppers.',
      },
      {
        phase: 'Cart & Checkout Workflow',
        description: 'Engineered a streamlined checkout flow minimizing input steps and providing instant form validation.',
      },
      {
        phase: 'Payment Gateway Integration',
        description: 'Implemented secure payment processing with automated status webhooks for confirmed orders.',
      },
      {
        phase: 'Cross-Device Quality Assurance',
        description: 'Validated layout integrity, touch targets, and image loading speeds across mobile and tablet viewports.',
      },
    ],
    techStack: ['E-Commerce Storefront', 'Payment Gateway Integration', 'Responsive UI', 'REST APIs', 'Cloud Hosting'],
    metricsOrDeliverables: [
      { label: 'Platform Type', value: 'E-Commerce Storefront', note: 'Multi-category retail catalog' },
      { label: 'Checkout Model', value: 'Integrated Gateway', note: 'Secure multi-currency processing' },
      { label: 'Responsiveness', value: '100% Mobile Optimized', note: 'Adaptive grid for mobile viewports' },
    ],
    relatedServices: [
      { title: 'Headless & Custom E-Commerce', slug: 'ecommerce-development' },
      { title: 'Custom Web & Application Engineering', slug: 'web-development' },
      { title: '24/7 SLA & Website Maintenance', slug: 'website-maintenance' },
    ],
  },
  {
    slug: 'vydamed-healthcare',
    title: 'Vydamed Clinical & Healthcare Portal',
    projectType: 'Verified Client Engagement',
    category: 'Healthcare & Clinical',
    metaTitle: 'Vydamed Clinical Healthcare Portal Case Study | LeaveCode Technologies',
    metaDescription:
      'Case study on developing the Vydamed medical services platform focusing on patient information clarity, service accessibility, and consultation inquiries.',
    tagline:
      'Accessible clinical web platform designed for patient trust, service transparency, and responsive appointment inquiries.',
    clientContext: {
      clientName: 'Vydamed',
      industry: 'Healthcare & Medical Practice',
      region: 'Medical Services',
      disclosureNote: 'Client presence identified and audited from LeaveCode production assets.',
    },
    problemOrOpportunity:
      'Patients seeking healthcare solutions require immediate clarity regarding clinical specialties, practitioner credentials, and unambiguous inquiry channels, without confusing navigation or slow load times.',
    projectObjectives: [
      'Provide clear, authoritative information on medical specialties and treatment options.',
      'Ensure high accessibility compliance (WCAG) for patients across diverse visual needs.',
      'Streamline patient contact and appointment request workflows.',
      'Build patient confidence through verified professional presentation.',
    ],
    scopeOfWork: [
      'Specialty directory and clinical service page layouts.',
      'Accessible patient inquiry and consultation forms.',
      'Responsive design ensuring rapid access on smartphones.',
      'Local practice location and contact details mapping.',
      'Security headers and form data transmission protections.',
    ],
    strategyAndImplementation: [
      {
        phase: 'Clinical Hierarchy & Information Architecture',
        description: 'Structured clinical services into distinct medical categories with clear layperson explanations.',
      },
      {
        phase: 'Patient-First Accessible Design',
        description: 'Applied high-contrast typography, clear headings, and large touch targets for effortless navigation.',
      },
      {
        phase: 'Inquiry Routing & Data Validation',
        description: 'Built validated contact workflows routing prospective patient inquiries to designated clinic desks.',
      },
      {
        phase: 'Speed & Security Hardening',
        description: 'Implemented SSL certificates, security headers, and asset caching for dependable load times.',
      },
    ],
    techStack: ['Healthcare Web Portal', 'Accessible UI (WCAG)', 'Secure Inquiries', 'Responsive Framework'],
    metricsOrDeliverables: [
      { label: 'Platform Type', value: 'Clinical Web Platform', note: 'Patient services directory' },
      { label: 'Accessibility', value: 'High Contrast / Clean DOM', note: 'Optimized for patient readability' },
      { label: 'Inquiry Pipeline', value: 'Automated Routing', note: 'Multi-department consultation forms' },
    ],
    relatedServices: [
      { title: 'Custom Web & Application Engineering', slug: 'web-development' },
      { title: 'UI/UX Design & Brand Systems', slug: 'ui-ux-branding' },
      { title: 'Technical & Organic SEO Growth', slug: 'seo-services' },
    ],
  },
  {
    slug: 'twigden-custom-homes',
    title: 'Twigden Custom Homes Showcase',
    projectType: 'Verified Client Engagement',
    category: 'Real Estate & Living',
    metaTitle: 'Twigden Custom Homes Digital Showcase Case Study | LeaveCode Technologies',
    metaDescription:
      'Case study on building the architectural digital presence for Twigden Custom Homes with high-resolution estate galleries and contractor inquiry funnels.',
    tagline:
      'A refined architectural web presence designed to showcase estate craftsmanship and capture luxury builder inquiries.',
    clientContext: {
      clientName: 'Twigden Custom Homes',
      industry: 'Custom Home Building & Construction',
      region: 'Florida, USA',
      disclosureNote: 'Client presence identified and audited from LeaveCode production assets.',
    },
    problemOrOpportunity:
      'High-end custom residential construction requires a visual web experience that conveys premium craftsmanship, architectural precision, and credibility to prospective homeowners investing in luxury properties.',
    projectObjectives: [
      'Showcase high-resolution architectural photography with optimized compression to avoid latency.',
      'Establish brand authority and contractor credentials in the Florida residential market.',
      'Provide a frictionless consultation inquiry mechanism for prospective custom home buyers.',
      'Ensure layout elegance on desktop widescreen displays and mobile tablets.',
    ],
    scopeOfWork: [
      'Portfolio gallery with categorized architectural project showcases.',
      'Custom builder credentials and Florida building compliance highlights.',
      'Consultation intake funnel with project scope and budget parameters.',
      'Image CDN pipeline and lazy-loading implementation.',
    ],
    strategyAndImplementation: [
      {
        phase: 'Visual Asset Strategy',
        description: 'Curated high-resolution photography with modern image compression formats to preserve architectural detail without slow downloads.',
      },
      {
        phase: 'Architectural Grid Design',
        description: 'Developed balanced editorial layouts with generous whitespace to match the aesthetic standards of luxury homebuilding.',
      },
      {
        phase: 'High-Value Lead Intake',
        description: 'Designed a structured consultation form capturing lot location, estimated budget, and construction timeline.',
      },
      {
        phase: 'Local Search Architecture',
        description: 'Integrated local business schema and geographic identifiers for the Florida service area.',
      },
    ],
    techStack: ['Responsive Portfolio Gallery', 'Image Optimization Pipeline', 'Local Business Schema', 'Lead Intake Funnel'],
    metricsOrDeliverables: [
      { label: 'Platform Type', value: 'Architectural Showcase', note: 'Luxury residential portfolio' },
      { label: 'Media Optimization', value: 'Responsive WebP/PNG', note: 'High visual fidelity with fast load' },
      { label: 'Lead Capture', value: 'Consultation Pipeline', note: 'Custom intake form with budget scoping' },
    ],
    relatedServices: [
      { title: 'UI/UX Design & Brand Systems', slug: 'ui-ux-branding' },
      { title: 'Custom Web & Application Engineering', slug: 'web-development' },
      { title: 'Technical & Organic SEO Growth', slug: 'seo-services' },
    ],
  },
  {
    slug: 'cummins-ip-legal',
    title: 'Cummins IP PLLC Practice Portal',
    projectType: 'Verified Client Engagement',
    category: 'Legal & Corporate',
    metaTitle: 'Cummins IP PLLC Legal Practice Web Portal | LeaveCode Technologies',
    metaDescription:
      'Case study on structuring the intellectual property legal practice portal for Cummins IP PLLC, detailing patent, trademark, and litigation advisory services.',
    tagline:
      'Authoritative intellectual property advisory portal structured for practice area transparency and corporate consultation.',
    clientContext: {
      clientName: 'Cummins IP PLLC',
      industry: 'Intellectual Property Law',
      region: 'United States',
      disclosureNote: 'Client presence identified and audited from LeaveCode production assets.',
    },
    problemOrOpportunity:
      'Corporate innovators, patent filers, and technology enterprises require immediate proof of legal acumen, clear practice breakdowns, and direct communication channels with qualified IP attorneys.',
    projectObjectives: [
      'Clearly demarcate intellectual property practice disciplines: Patents, Trademarks, Copyrights, and IP Litigation.',
      'Communicate attorney credentials, admissions, and industry background with professional distinction.',
      'Facilitate secure, confidential legal consultation inquiries.',
      'Ensure adherence to legal ethics advertising requirements and clear disclosures.',
    ],
    scopeOfWork: [
      'Practice area directory architecture and dedicated service landing pages.',
      'Attorney biography and legal credential presentation.',
      'Confidential consultation inquiry form with client disclaimer notices.',
      'Professional corporate design system with authoritative legal aesthetics.',
    ],
    strategyAndImplementation: [
      {
        phase: 'Practice Discipline Taxonomy',
        description: 'Structured comprehensive sub-pages for patent prosecution, trademark filing, and intellectual property litigation.',
      },
      {
        phase: 'Professional Authority UX',
        description: 'Applied crisp typography, formal color palettes, and structured credential highlights to engender immediate client confidence.',
      },
      {
        phase: 'Compliant Intake Routing',
        description: 'Engineered consultation inquiry forms with clear legal disclaimers noting that inquiries do not establish attorney-client privilege.',
      },
      {
        phase: 'Technical SEO Optimization',
        description: 'Integrated Schema.org LegalService structured data highlighting office jurisdictions and practice categories.',
      },
    ],
    techStack: ['Legal Advisory Architecture', 'LegalService Schema.org', 'Confidential Lead Routing', 'Responsive Typography'],
    metricsOrDeliverables: [
      { label: 'Platform Type', value: 'Legal Practice Portal', note: 'Structured intellectual property hub' },
      { label: 'Structured Data', value: 'LegalService Schema', note: 'Verified organizational schema tags' },
      { label: 'Consultation Flow', value: 'Secure Intake', note: 'Inquiry forms with disclaimer logic' },
    ],
    relatedServices: [
      { title: 'Custom Web & Application Engineering', slug: 'web-development' },
      { title: 'Technical & Organic SEO Growth', slug: 'seo-services' },
      { title: 'UI/UX Design & Brand Systems', slug: 'ui-ux-branding' },
    ],
  },
  {
    slug: 'monorepo-saas-demonstration',
    title: 'Enterprise Decoupled Architecture Demo',
    projectType: 'Engineering Demonstration Architecture',
    category: 'Engineering Demonstration',
    metaTitle: 'Enterprise Decoupled Monorepo Architecture (Demo) | LeaveCode Technologies',
    metaDescription:
      'Engineering demonstration showcase detailing LeaveCode’s decoupled Next.js 14, Node.js Express, and shared Zod monorepo architecture blueprint.',
    tagline:
      'A reference architecture demonstration proving sub-second page performance, shared Zod contracts, and edge 301 redirection.',
    clientContext: {
      clientName: 'Internal Engineering Reference Architecture',
      industry: 'Software Engineering & Modern Web Architecture',
      region: 'Global / Open Architecture',
      disclosureNote: 'Clearly designated as an Engineering Demonstration Architecture created by LeaveCode leads, not a third-party client engagement.',
    },
    problemOrOpportunity:
      'Demonstrating the tangible architectural advantages of migrating away from slow, vulnerable legacy CMS installations into a modern TypeScript monorepo with verified benchmarks.',
    projectObjectives: [
      'Illustrate end-to-end type safety between frontend forms and Express backend APIs.',
      'Demonstrate 100/100 Core Web Vitals performance with server components.',
      'Showcase edge-level 301 redirection pipelines preserving legacy search equity.',
      'Provide a reference model for scalable B2B enterprise web platforms.',
    ],
    scopeOfWork: [
      'Next.js 14 App Router frontend with Tailwind CSS design tokens.',
      'Express REST backend secured with Helmet, CORS, and centralized error handling.',
      'Shared @leavecode/shared package providing cross-cutting Zod schemas.',
      'Resilient MongoDB Atlas connection pooling with fallback health check reporting.',
    ],
    strategyAndImplementation: [
      {
        phase: 'Monorepo Scaffolding',
        description: 'Orchestrated npm workspaces with clean dependency isolation and shared compiler configurations.',
      },
      {
        phase: 'Shared Contract Enforcement',
        description: 'Created strict Zod schemas compiled to .d.ts types, consumed across both frontend forms and backend routers.',
      },
      {
        phase: 'Performance & SEO Benchmarking',
        description: 'Validated server-side rendering, OpenGraph generation, and Schema.org structured data injection.',
      },
      {
        phase: 'Automated CI/CD Verification',
        description: 'Configured automated TypeScript compilation, Supertest integration tests, and Next.js static builds.',
      },
    ],
    techStack: ['Next.js 14', 'Node.js', 'Express', 'TypeScript', 'MongoDB Atlas', 'Zod', 'Tailwind CSS'],
    metricsOrDeliverables: [
      { label: 'Page Speed (LCP)', value: '< 1.1s', note: 'Server-rendered static HTML delivery' },
      { label: 'Type Safety', value: '100% End-to-End', note: 'Zero duplicate type definitions' },
      { label: 'Test Coverage', value: 'Passing Integration Tests', note: 'Supertest API verification' },
    ],
    relatedServices: [
      { title: 'Custom Web & Application Engineering', slug: 'web-development' },
      { title: 'Technical & Organic SEO Growth', slug: 'seo-services' },
      { title: '24/7 SLA & Website Maintenance', slug: 'website-maintenance' },
    ],
  },
];

// Combine detailed case studies with the 142 verified client engagements extracted from LeaveCode assets
import verifiedClientsData from './allPortfolioClients.json';

const verifiedList = (verifiedClientsData as CaseStudy[]).filter(
  (c) => !portfolioCatalogue.some((p) => p.slug === c.slug)
);

export const allPortfolioProjects: CaseStudy[] = [...portfolioCatalogue, ...verifiedList];
