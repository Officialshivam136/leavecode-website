import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  Zap,
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/ui/CTASection';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';

export const metadata: Metadata = {
  title: 'Pricing & Service Packages | LeaveCode Technologies',
  description:
    'Transparent pricing packages for SEO, Social Media Marketing, Web Design & Development, and SLA Website Maintenance retainers by LeaveCode Technologies.',
  alternates: {
    canonical: 'https://leavecode.com/pricing',
  },
  openGraph: {
    title: 'Pricing & Service Packages | LeaveCode Technologies',
    description:
      'Transparent pricing tiers for digital marketing, web engineering, and maintenance packages.',
    url: 'https://leavecode.com/pricing',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
};

export default function PricingPage() {
  const seoPackages = [
    {
      name: 'Essentials SEO (10 Keywords)',
      price: '$250',
      period: 'per month',
      tagline: 'Ideal for local businesses establishing primary regional visibility.',
      popular: false,
      features: [
        'Up to 10 Target Keywords',
        'Website Technical Health Audit & Broken Links Fix',
        'Google Business Profile & Map Pack Optimization',
        'On-Page Title, Meta Description & Heading Updates',
        'Robots.txt & XML Sitemap Configuration',
        'Monthly Traffic & Keyword Ranking Progress Reports',
        'Direct Email & Phone Support',
      ],
      ctaText: 'Get Started with Essentials',
    },
    {
      name: 'Elevate SEO (15 Keywords)',
      price: '$350',
      period: 'per month',
      tagline: 'Designed for scaling commercial businesses and high-intent local search dominance.',
      popular: true,
      features: [
        'Up to 15 Target Keywords',
        'Complete Competitor Gap & Keyword In-Depth Analysis',
        'Website Page Load Speed & Core Vitals Optimization',
        'Structured Schema Tag & Rich Snippets Implementation',
        'Guest Blog Posting & Authoritative Link Building',
        'Directory Submissions & Social Bookmarking',
        'Bi-Weekly Progress Reviews & Custom Reporting',
      ],
      ctaText: 'Get Started with Elevate',
    },
    {
      name: 'Dominance Enterprise SEO (30+ Keywords)',
      price: '$500',
      period: 'per month',
      tagline: 'National and international reach for multi-location brands and e-commerce platforms.',
      popular: false,
      features: [
        '30+ High-Value Target Keywords',
        'Full White-Label SEO Outreach & Link Acquisition',
        'Dedicated Senior SEO Strategist & Skype/Slack Channel',
        'Continuous Content Strategy, Blog & PR Outreach',
        'E-Commerce & Category Page Conversion Rate Audits',
        'Weekly Performance Tracking & Real-Time Analytics',
        'Priority Phone Support & Emergency Response',
      ],
      ctaText: 'Get Started with Dominance',
    },
  ];

  const devPackages = [
    {
      name: 'Professional Web Design & Development',
      price: '$999',
      period: 'one-time investment',
      tagline: 'Custom responsive web experience designed to turn visitors into booked clients.',
      scope: '5 to 8 Custom Responsive Pages',
      features: [
        'Custom Visual Design & Mobile-First Layouts',
        'High-Converting Landing Pages & Inquiry Forms',
        'Fast Page Load Speeds & Image Compression',
        'Google Search Console & Analytics GA4 Integration',
        'On-Page SEO Optimization Built-In',
        '30 Days Complimentary Post-Launch Support',
      ],
    },
    {
      name: 'E-Commerce Storefront Development',
      price: '$1,850',
      period: 'one-time investment',
      tagline: 'Custom online store engineered for high checkout conversion and catalog speed.',
      scope: 'Full Catalog & Payment System',
      features: [
        'Product Catalog Management & Filtering',
        'Seamless Shopping Cart & One-Page Checkout',
        'Secure Payment Gateway Setup (Credit Cards / Stripe / PayPal)',
        'Inventory Management & Order Notification Webhooks',
        'Mobile-Optimized Shopping Experience',
        '60 Days Dedicated Support & Admin Training',
      ],
    },
    {
      name: 'Website Maintenance & SLA Support',
      price: '$150',
      period: 'per month',
      tagline: 'Continuous security, uptime monitoring, and engineering assistance.',
      scope: 'Dedicated Support Retainer',
      features: [
        '24/7 Server & Website Uptime Monitoring',
        'Automated Daily Offsite Backups',
        'Security Patching, SSL Monitoring & Malware Scanning',
        'Dedicated Support Hours for Feature Tweaks & Copy Updates',
        'Priority Emergency Response Guarantee',
        'Monthly Speed & Uptime Verification Reports',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Pricing & Packages' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              level="h1"
              badge="Transparent Packages & Tiers"
              title="Predictable Investment for Engineered Growth"
              description="Whether scaling organic search rankings, launching a bespoke Next.js platform, or securing 24/7 engineering support, we provide clear scope and transparent deliverables."
            />
          </Container>
        </Section>

        {/* SEO Growth Packages */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-primary/10 text-brand-light border border-brand-primary/20">
                SEO &amp; Organic Search Tiers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-3">
                Engineered Search Engine Optimization Retainers
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Unified plans consolidating our original SEO and SMO packages with white-hat technical execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seoPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all ${
                    pkg.popular
                      ? 'bg-slate-900 border-brand-primary shadow-glow-sm ring-1 ring-brand-primary/50'
                      : 'bg-surface-card border-surface-border hover:border-surface-border-hover'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[11px] font-mono font-bold bg-brand-primary text-white uppercase tracking-wider shadow-sm">
                      Most Popular Tier
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white font-display">{pkg.name}</h3>
                      <div className="mt-3 flex items-baseline gap-1.5">
                        <span className="text-3xl font-extrabold text-white font-display">{pkg.price}</span>
                        <span className="text-xs text-slate-400 font-medium">/ {pkg.period}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{pkg.tagline}</p>
                    </div>

                    <div className="pt-4 border-t border-surface-border space-y-3">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Included Deliverables:
                      </div>
                      <ul className="space-y-2.5">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <PrimaryButton href="/contact" size="md" className="w-full justify-center">
                      {pkg.ctaText}
                    </PrimaryButton>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Web Engineering & Maintenance Packages */}
        <Section spacing="default" className="border-b border-surface-border bg-slate-900/30">
          <Container size="wide">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-950/80 text-brand-light border border-indigo-800">
                Web Development &amp; Support
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-3">
                Full-Stack Architecture &amp; Maintenance Tiers
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Tailored delivery scopes replacing outdated designing packages with modern production guarantees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {devPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-all"
                >
                  <div className="space-y-6">
                    <div>
                      <div className="text-xs font-mono text-brand-light uppercase">{pkg.scope}</div>
                      <h3 className="text-xl font-bold text-white font-display mt-1">{pkg.name}</h3>
                      <div className="mt-3 flex items-baseline gap-1.5">
                        <span className="text-3xl font-extrabold text-white font-display">{pkg.price}</span>
                        <span className="text-xs text-slate-400 font-medium">/ {pkg.period}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{pkg.tagline}</p>
                    </div>

                    <div className="pt-4 border-t border-surface-border space-y-3">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Scope Specifications:
                      </div>
                      <ul className="space-y-2.5">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <Check className="w-4 h-4 text-brand-light flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <SecondaryButton href="/quote" size="md" className="w-full justify-center">
                      Request Scope Proposal
                    </SecondaryButton>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing FAQs */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              badge="Pricing Clarifications"
              title="Frequently Asked Questions on Packages"
              description="Common questions about our retainer terms, custom milestones, and technical guarantees."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-2">
                <h4 className="text-base font-bold text-white">Do you require long-term lock-in contracts?</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No. Our SEO and Maintenance retainers operate on month-to-month or quarterly review cycles with a 30-day notice period. We earn client retention through verified performance and transparent analytics.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-2">
                <h4 className="text-base font-bold text-white">Can packages be customized for hybrid requirements?</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Absolutely. If your company requires full-stack Next.js re-engineering alongside local SEO or Google Ads management, we synthesize a bespoke milestone contract.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-2">
                <h4 className="text-base font-bold text-white">How do we pay for services?</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We accept ACH, wire transfer, corporate credit cards, and major digital payment options through our secure payment portal at /pay.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-2">
                <h4 className="text-base font-bold text-white">What is included in the 30-day post-launch warranty?</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every custom web development deployment includes zero-cost bug resolution, cross-device QA, and configuration support for 30 calendar days following DNS cutover.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <CTASection
          badge="Get Custom Scope"
          title="Need a Specific Deliverable or Custom Quote?"
          description="Use our interactive project quote estimator to get a breakdown customized to your exact requirements."
          primaryAction={{
            label: 'Interactive Project Estimator',
            href: '/quote',
          }}
          secondaryAction={{
            label: 'Contact Technical Sales',
            href: '/contact',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
