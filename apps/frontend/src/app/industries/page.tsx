import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShoppingBag,
  Activity,
  Building,
  Scale,
  Car,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/ui/CTASection';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';

export const metadata: Metadata = {
  title: 'Industry Solutions | LeaveCode Technologies',
  description:
    'Tailored digital engineering and organic search solutions across Healthcare, E-Commerce, Real Estate, Legal & Corporate, and Logistics verticals.',
  alternates: {
    canonical: 'https://leavecode.com/industries',
  },
  openGraph: {
    title: 'Industry Solutions | LeaveCode Technologies',
    description:
      'Domain-specific software engineering and search marketing architectures for specialized commercial sectors.',
    url: 'https://leavecode.com/industries',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
};

export default function IndustriesPage() {
  const industries = [
    {
      title: 'E-Commerce & Digital Retail',
      icon: <ShoppingBag className="w-6 h-6 text-brand-light" />,
      desc: 'High-speed headless storefronts, catalog search optimization, frictionless cart checkouts, and multi-channel SEO to maximize return on ad spend (ROAS).',
      deliverables: [
        'Shopify / WooCommerce / Custom Next.js storefronts',
        'Structured product schema markup for Google Shopping',
        'Automated abandoned-cart recovery & payment integrations',
        'Mobile-first conversion rate optimization (CRO)',
      ],
      relevantServiceSlug: 'ecommerce-development',
    },
    {
      title: 'Healthcare, Clinical & Senior Care',
      icon: <Activity className="w-6 h-6 text-emerald-400" />,
      desc: 'HIPAA-conscious clinical web applications, patient booking workflows, local Google Map pack visibility, and patient educational content portals.',
      deliverables: [
        'Accessible, WCAG 2.1 AA patient scheduling portals',
        'Local SEO ranking for regional medical practices & clinics',
        'Secure patient enquiry forms with encrypted transport',
        'Fast mobile Core Web Vitals for emergency queries',
      ],
      relevantServiceSlug: 'web-development',
    },
    {
      title: 'Real Estate, Construction & Property',
      icon: <Building className="w-6 h-6 text-amber-400" />,
      desc: 'IDX/MLS-ready real estate platforms, immersive property showcase galleries, localized neighborhood search rankings, and qualified buyer lead funnels.',
      deliverables: [
        'Fast-loading architectural & interior photo galleries',
        'Geo-targeted local landing pages for hyper-local search',
        'Interactive mortgage calculators & inquiry scheduling',
        'Automated CRM lead notification webhooks',
      ],
      relevantServiceSlug: 'seo-services',
    },
    {
      title: 'Legal, Financial & Professional Services',
      icon: <Scale className="w-6 h-6 text-indigo-400" />,
      desc: 'Authoritative corporate websites, practice area knowledge bases, high-intent legal PPC campaigns, and compliant consultation intake pipelines.',
      deliverables: [
        'Authoritative editorial design & partner profiles',
        'High-value commercial keyword targeting & PPC ad copy',
        'Secure client document submission interfaces',
        'Full compliance with professional advertising standards',
      ],
      relevantServiceSlug: 'performance-marketing',
    },
    {
      title: 'Logistics, Transport & Supply Chain',
      icon: <Car className="w-6 h-6 text-cyan-400" />,
      desc: 'Freight quote calculators, fleet operational showcases, B2B customer portals, and corporate multi-location organic search architecture.',
      deliverables: [
        'Instant freight quote & dispatch inquiry estimators',
        'Fleet capability specifications & compliance certifications',
        'B2B partner portals with authenticated account access',
        'National SEO for commercial shipping and brokerage keywords',
      ],
      relevantServiceSlug: 'web-development',
    },
    {
      title: 'B2B Services & Technology Startups',
      icon: <Briefcase className="w-6 h-6 text-violet-400" />,
      desc: 'Modern SaaS marketing websites, documentation hubs, product tour interactions, and inbound content marketing funnels engineered for developer trust.',
      deliverables: [
        'Next.js marketing websites with sub-second page loads',
        'Interactive pricing calculators and feature comparisons',
        'HubSpot / Marketo / Zapier lead attribution integrations',
        'Comprehensive technical documentation layouts',
      ],
      relevantServiceSlug: 'web-development',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Industries & Verticals' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              level="h1"
              badge="Domain Expertise & Solutions"
              title="Targeted Digital Architecture for Regulated & High-Growth Sectors"
              description="Generic templates fail to account for industry compliance, unique user journeys, and sector-specific search intent. We tailor our engineering and marketing to your exact commercial model."
            />
          </Container>
        </Section>

        {/* Industries Grid */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-all"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-surface-border flex items-center justify-center">
                      {ind.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white font-display">{ind.title}</h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{ind.desc}</p>
                    </div>

                    <div className="pt-4 border-t border-surface-border space-y-3">
                      <div className="text-xs font-mono text-brand-light uppercase tracking-wider">
                        Tailored Deliverables:
                      </div>
                      <ul className="space-y-2">
                        {ind.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-light flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <SecondaryButton href={`/services/${ind.relevantServiceSlug}`} size="md" className="w-full justify-center">
                      Explore Matching Services
                    </SecondaryButton>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <CTASection
          badge="Tailored Project Scope"
          title="Looking for Industry-Specific Engineering?"
          description="Schedule a technical discussion to review compliance requirements, user flows, and conversion metrics for your sector."
          primaryAction={{
            label: 'Consult with Industry Specialist',
            href: '/contact',
          }}
          secondaryAction={{
            label: 'View Client Case Studies',
            href: '/portfolio',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
