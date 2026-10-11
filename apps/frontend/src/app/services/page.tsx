import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Palette,
  Search,
  TrendingUp,
  Share2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/ui/CTASection';
import { servicesCatalogue } from '@/data/servicesCatalogue';

export const metadata: Metadata = {
  title: 'Digital Engineering & Growth Services | LeaveCode Technologies',
  description:
    'Comprehensive full-stack web and mobile application engineering, custom headless e-commerce, technical SEO, and 24/7 SLA maintenance services.',
  alternates: {
    canonical: 'https://leavecode.com/services',
  },
  openGraph: {
    title: 'Digital Engineering & Growth Services | LeaveCode Technologies',
    description:
      'Explore LeaveCode’s verified full-stack development, mobile engineering, SEO, and infrastructure maintenance capabilities.',
    url: 'https://leavecode.com/services',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
};

const iconMap: Record<string, React.ReactNode> = {
  'web-development': <Code2 className="w-6 h-6 text-brand-primary" />,
  'mobile-app-development': <Smartphone className="w-6 h-6 text-brand-accent" />,
  'ecommerce-development': <ShoppingBag className="w-6 h-6 text-emerald-400" />,
  'seo-services': <Search className="w-6 h-6 text-amber-400" />,
  'performance-marketing': <TrendingUp className="w-6 h-6 text-rose-400" />,
  'ui-ux-branding': <Palette className="w-6 h-6 text-purple-400" />,
  'social-media-marketing': <Share2 className="w-6 h-6 text-sky-400" />,
  'website-maintenance': <ShieldCheck className="w-6 h-6 text-indigo-400" />,
};

export default function ServicesOverviewPage() {
  const categories = ['Engineering', 'Growth', 'Design & Strategy', 'Support'] as const;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Services' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container>
            <SectionHeading
              level="h1"
              badge="Comprehensive Capabilities"
              title="Full-Stack Engineering & Scalable Growth Services"
              description="We design, engineer, and scale modern web applications, mobile platforms, and organic search architectures for companies prioritizing speed, security, and measurable commercial return."
            />
          </Container>
        </Section>

        {/* Services Grouped by Category */}
        <Section spacing="default">
          <Container size="wide" className="space-y-16">
            {categories.map((cat) => {
              const servicesInCat = servicesCatalogue.filter((s) => s.category === cat);
              if (servicesInCat.length === 0) return null;

              return (
                <div key={cat} className="space-y-6">
                  <div className="border-b border-surface-border pb-3 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-light" />
                      <span>{cat} Practices</span>
                    </h2>
                    <span className="text-xs font-mono text-slate-400">
                      {servicesInCat.length} Verified Capabilities
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesInCat.map((svc) => (
                      <div
                        key={svc.slug}
                        className="group flex flex-col justify-between p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-all duration-300 shadow-surface-card hover:-translate-y-1"
                      >
                        <div className="space-y-5">
                          {/* Header & Icon */}
                          <div className="flex items-start justify-between">
                            <div className="w-12 h-12 rounded-xl bg-slate-950 border border-surface-border flex items-center justify-center">
                              {iconMap[svc.slug]}
                            </div>
                            <span className="px-2.5 py-1 rounded text-xs font-mono bg-slate-850 text-slate-400 border border-surface-border">
                              {svc.category}
                            </span>
                          </div>

                          {/* Title & Tagline */}
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-brand-light transition-colors font-display mb-2">
                              <Link href={`/services/${svc.slug}`}>
                                {svc.title}
                              </Link>
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                              {svc.tagline}
                            </p>
                          </div>

                          {/* Deliverables Preview */}
                          <div className="space-y-2 pt-2 border-t border-surface-border/60">
                            <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
                              Core Deliverables:
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                              {svc.deliverables.slice(0, 4).map((d) => (
                                <li key={d.title} className="flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                  <span className="truncate">{d.title}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {svc.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-surface-border"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Link */}
                        <div className="pt-6 mt-6 border-t border-surface-border flex items-center justify-between">
                          <Link
                            href={`/services/${svc.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-light hover:text-white transition-colors"
                          >
                            <span>Explore Full Capability &amp; Scope</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </Container>
        </Section>

        {/* Global CTA Section */}
        <CTASection
          badge="Tailored Engineering Scope"
          title="Need a Specific Technical Architecture?"
          description="Speak with our technical leads in Florida or New Delhi to discuss your custom software, app, or search optimization requirements."
          primaryAction={{
            label: 'Schedule Architecture Consultation',
            href: '/contact',
          }}
          secondaryAction={{
            label: 'Calculate Project Estimate',
            href: '/quote',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
