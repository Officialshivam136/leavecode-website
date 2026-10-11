'use client';

import React, { useState, useMemo } from 'react';
import {
  Code2,
  Server,
  ShoppingBag,
  Smartphone,
  Database,
  Search,
  ArrowRight,
  Calendar,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { Container, Section } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { PrimaryButton } from '../ui/Buttons';

type TechCategory = 'all' | 'web' | 'backend' | 'ecommerce' | 'mobile' | 'devops';

interface TechItem {
  name: string;
  category: TechCategory;
  categoryLabel: string;
  badge: string;
  description: string;
  bestFor: string;
  keyFeatures: string[];
}

const technologies: TechItem[] = [
  {
    name: 'Next.js & React',
    category: 'web',
    categoryLabel: 'Frontend & Web',
    badge: 'Enterprise SSR & SEO',
    description:
      'Server-side rendering, sub-second TTFB, and flawless SEO indexing engineered for high-concurrency web platforms.',
    bestFor: 'SaaS Platforms, Corporate Portals & Web Apps',
    keyFeatures: ['Core Web Vitals 100/100', 'Edge API Routes', 'Decoupled Frontends'],
  },
  {
    name: 'TypeScript & JavaScript',
    category: 'web',
    categoryLabel: 'Frontend & Web',
    badge: 'Strict Type Safety',
    description:
      'End-to-end typed contracts between database, APIs, and user interfaces preventing runtime bugs and regression.',
    bestFor: 'Enterprise Web Applications & Monorepos',
    keyFeatures: ['Zero Runtime Drift', 'Maintainable Codebases', 'Shared Data Contracts'],
  },
  {
    name: 'Tailwind CSS',
    category: 'web',
    categoryLabel: 'Frontend & Web',
    badge: 'High-Velocity Styling',
    description:
      'Ultra-compact utility styling delivering sub-15kB stylesheets and pixel-perfect responsive layouts on every screen.',
    bestFor: 'High-Converting Marketing & Product UIs',
    keyFeatures: ['Zero CSS Bloat', 'Design System Parity', 'Fluid Mobile Experience'],
  },
  {
    name: 'Node.js & Express',
    category: 'backend',
    categoryLabel: 'Backend & Cloud',
    badge: 'Event-Driven APIs',
    description:
      'Lightweight, non-blocking asynchronous REST and GraphQL services handling thousands of concurrent requests.',
    bestFor: 'Microservices, Webhooks & High-Volume APIs',
    keyFeatures: ['Sub-Millisecond Response', 'Rate Limiting & Security', 'Horizontal Scalability'],
  },
  {
    name: 'Python (Django & FastAPI)',
    category: 'backend',
    categoryLabel: 'Backend & Cloud',
    badge: 'Computation & Automation',
    description:
      'Robust application engines, high-speed automated scrapers, data processing pipelines, and AI/ML model integrations.',
    bestFor: 'Data Heavy Platforms & Backend Engines',
    keyFeatures: ['FastAPI Asynchronous I/O', 'Data Pipeline Orchestration', 'Automated Extraction'],
  },
  {
    name: 'Shopify & Shopify Plus',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & CMS',
    badge: 'High-Volume Commerce',
    description:
      'Custom Liquid and Hydrogen storefronts, custom checkout apps, and automated inventory syncing built for direct-to-consumer scale.',
    bestFor: 'Bespoke D2C Brands & Global E-Commerce',
    keyFeatures: ['Custom Checkout Workflows', 'ERP & 3PL Integration', 'Conversion Rate Optimization'],
  },
  {
    name: 'WordPress & WooCommerce',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & CMS',
    badge: 'Decoupled or Custom CMS',
    description:
      'Tailored bespoke theme engineering without fragile third-party plugins. Fast, highly secure, and easy for non-technical teams to edit.',
    bestFor: 'Editorial Portals, Content Brands & Catalogs',
    keyFeatures: ['Zero Bloated Plugins', 'Hardened Security & CDN', 'Custom Gutenberg Blocks'],
  },
  {
    name: 'Headless CMS (Sanity & Strapi)',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & CMS',
    badge: 'Omnichannel Content',
    description:
      'Structured content modeling with real-time editorial previews and multi-channel publishing to websites and mobile apps.',
    bestFor: 'Multi-Brand Enterprises & Marketing Teams',
    keyFeatures: ['Instant Live Preview', 'Multi-Language Support', 'Granular Role Governance'],
  },
  {
    name: 'React Native',
    category: 'mobile',
    categoryLabel: 'Mobile Development',
    badge: 'Unified iOS & Android',
    description:
      'A single clean TypeScript codebase powering 60fps native performance across both App Store and Google Play platforms.',
    bestFor: 'Consumer Apps, Marketplaces & Mobile Dashboards',
    keyFeatures: ['90%+ Code Sharing', 'Native Device APIs', 'Over-The-Air Updates'],
  },
  {
    name: 'Flutter & Native Mobile',
    category: 'mobile',
    categoryLabel: 'Mobile Development',
    badge: 'High-Fidelity Apps',
    description:
      'Expressive, natively compiled mobile solutions for complex animations, offline-first syncing, and custom device hardware.',
    bestFor: 'Specialized Hardware, Offline & Utility Apps',
    keyFeatures: ['Custom Skia Rendering', 'Offline-First Storage', 'Biometric & Camera APIs'],
  },
  {
    name: 'MongoDB Atlas & Document DB',
    category: 'devops',
    categoryLabel: 'Databases & DevOps',
    badge: 'Flexible Document Store',
    description:
      'High-availability clustering, automated geo-replication, compound indexing, and strict schema validation with Mongoose.',
    bestFor: 'Dynamic Catalogs, Leads & Real-Time Data',
    keyFeatures: ['Encrypted at Rest & In Flight', 'Zero-Downtime Scaling', 'Compound Indexing'],
  },
  {
    name: 'PostgreSQL & Relational DBs',
    category: 'devops',
    categoryLabel: 'Databases & DevOps',
    badge: 'ACID Financial Reliability',
    description:
      'Rock-solid relational data modeling with transactional integrity, foreign key constraints, and optimized SQL query pipelines.',
    bestFor: 'Fintech, Order Processing & Subscription Data',
    keyFeatures: ['Strict ACID Transactions', 'Connection Pooling', 'Complex Relational Joins'],
  },
  {
    name: 'AWS Cloud & Infrastructure',
    category: 'backend',
    categoryLabel: 'Backend & Cloud',
    badge: 'Enterprise Cloud Hosting',
    description:
      'Elastic cloud architecture including S3 asset storage, CloudFront edge caching, RDS managed databases, and Lambda compute.',
    bestFor: 'Global High-Availability Deployments',
    keyFeatures: ['99.99% Uptime SLA', 'Automated Offsite Backups', 'DDoS Protection & WAF'],
  },
  {
    name: 'Docker & CI/CD Pipelines',
    category: 'devops',
    categoryLabel: 'Databases & DevOps',
    badge: 'Automated Deployment',
    description:
      'Containerized development environments, automated GitHub Actions testing suites, and seamless zero-downtime production rollouts.',
    bestFor: 'Modern Continuous Delivery & DevOps',
    keyFeatures: ['Isolated Staging Environments', 'Automated Unit/E2E Tests', 'Instant Rollbacks'],
  },
];

const categoryTabs = [
  { id: 'all' as TechCategory, label: 'All Platforms', icon: Layers },
  { id: 'web' as TechCategory, label: 'Web & Frontend', icon: Code2 },
  { id: 'backend' as TechCategory, label: 'Backend & Cloud', icon: Server },
  { id: 'ecommerce' as TechCategory, label: 'E-Commerce & CMS', icon: ShoppingBag },
  { id: 'mobile' as TechCategory, label: 'Mobile Apps', icon: Smartphone },
  { id: 'devops' as TechCategory, label: 'Databases & DevOps', icon: Database },
];

export function TechnologyExpertiseSection() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTechnologies = useMemo(() => {
    return technologies.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.bestFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keyFeatures.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <Section id="tech-stack" spacing="default" className="border-b border-surface-border">
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          badge="Platforms & Tech Stack"
          title="Technologies & Ecosystems We Master"
          description="Explore the battle-tested frameworks, modern stacks, and cloud architectures our engineering team builds and maintains for clients worldwide."
        />

        {/* Filter Controls Bar */}
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-primary text-white shadow-glow-sm'
                      : 'bg-surface-card hover:bg-slate-850 text-slate-300 hover:text-white border border-surface-border'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. Next.js, Shopify, AWS)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-card border border-surface-border hover:border-surface-border-hover focus:border-brand-light focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
            />
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-colors flex flex-col justify-between space-y-4 shadow-surface-card"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-white font-display">
                    {tech.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium uppercase bg-slate-950 text-brand-light border border-brand-light/30">
                    {tech.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {tech.description}
                </p>

                <div className="pt-2 text-[11px] text-slate-400 border-t border-surface-border/60">
                  <span className="font-semibold text-slate-200">Ideal For:</span>{' '}
                  {tech.bestFor}
                </div>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {tech.keyFeatures.map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-950/80 border border-surface-border/60 text-[10px] text-slate-300 font-medium"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Fallback */}
        {filteredTechnologies.length === 0 && (
          <div className="mt-8 p-8 rounded-2xl bg-surface-card border border-surface-border text-center space-y-3">
            <p className="text-sm text-slate-300">
              No matching technologies found for &quot;{searchQuery}&quot;.
            </p>
            <p className="text-xs text-slate-400">
              We frequently work with custom, hybrid, and legacy stacks. Connect with our architects directly.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-brand-light hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Commercial Technical Consultation Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-brand-light/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-glow-sm">
          <div className="space-y-1 max-w-xl">
            <div className="text-xs font-mono font-medium text-brand-light uppercase tracking-wider">
              Have a custom stack or legacy code repository?
            </div>
            <div className="text-base font-bold text-white font-display">
              We audit, integrate, and modernize any existing tech infrastructure.
            </div>
            <p className="text-xs text-slate-400">
              Whether you need to migrate from WordPress to Next.js, connect an ERP system, or scale your cloud infrastructure, our engineering leadership conducts a free technical feasibility audit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0 w-full md:w-auto">
            <PrimaryButton
              href="/quote"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Stack Audit
            </PrimaryButton>

            <a
              href="https://meetings.hubspot.com/harry18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-surface-border hover:border-brand-light bg-surface-card text-white font-semibold text-xs transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-light" />
              <span>Talk to an Architect</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
