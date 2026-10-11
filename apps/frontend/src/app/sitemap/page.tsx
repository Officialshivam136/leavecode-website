import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe, Layers, BookOpen, Briefcase, FileText } from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { servicesCatalogue } from '@/data/servicesCatalogue';
import { publishedArticles } from '@/data/blogData';

export const metadata: Metadata = {
  title: 'HTML Sitemap & Index Directory | LeaveCode Technologies',
  description:
    'Comprehensive navigational HTML sitemap indexing all public pages, services, articles, and utilities on LeaveCode Technologies.',
  alternates: {
    canonical: 'https://leavecode.com/sitemap',
  },
  openGraph: {
    title: 'HTML Sitemap & Index Directory | LeaveCode Technologies',
    description:
      'Comprehensive navigational HTML sitemap indexing all public pages, services, articles, and utilities on LeaveCode Technologies.',
    url: 'https://leavecode.com/sitemap',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
};

export default function HTMLSitemapPage() {
  const corePages = [
    { label: 'Homepage', href: '/' },
    { label: 'About LeaveCode', href: '/about' },
    { label: 'Services Overview Hub', href: '/services' },
    { label: 'Client Portfolio & Case Studies', href: '/portfolio' },
    { label: 'Pricing & Packages', href: '/pricing' },
    { label: 'Industry Verticals', href: '/industries' },
    { label: 'Careers & Culture', href: '/careers' },
    { label: 'Partner With Us', href: '/partner-with-us' },
    { label: 'Frequently Asked Questions (FAQs)', href: '/faqs' },
    { label: 'Engineering Insights & Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Interactive Project Quote Estimator', href: '/quote' },
    { label: 'Client Payment Portal', href: '/pay' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'HTML Sitemap' }]} />
        </Container>

        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              level="h1"
              badge="Site Directory & Architecture"
              title="LeaveCode HTML Sitemap"
              description="A structured navigational index of all publicly discoverable pages, service specifications, and published engineering articles."
            />
          </Container>
        </Section>

        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Core Navigation */}
              <div className="p-7 rounded-2xl bg-surface-card border border-surface-border space-y-4">
                <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                  <Globe className="w-5 h-5 text-brand-light" />
                  <h2 className="text-base font-bold text-white font-display uppercase tracking-wider">
                    Core Company Pages
                  </h2>
                </div>
                <ul className="space-y-2.5 text-xs">
                  {corePages.map((p) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className="text-slate-300 hover:text-brand-light transition-colors flex items-center justify-between"
                      >
                        <span>{p.label}</span>
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Digital Services */}
              <div className="p-7 rounded-2xl bg-surface-card border border-surface-border space-y-4">
                <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                  <Layers className="w-5 h-5 text-brand-accent" />
                  <h2 className="text-base font-bold text-white font-display uppercase tracking-wider">
                    Engineered Services
                  </h2>
                </div>
                <ul className="space-y-2.5 text-xs">
                  {servicesCatalogue.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-slate-300 hover:text-brand-light transition-colors flex items-center justify-between"
                      >
                        <span>{s.title}</span>
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Engineering Insights */}
              <div className="p-7 rounded-2xl bg-surface-card border border-surface-border space-y-4">
                <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-base font-bold text-white font-display uppercase tracking-wider">
                    Published Insights &amp; Articles
                  </h2>
                </div>
                <ul className="space-y-2.5 text-xs">
                  {publishedArticles.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/blog/${a.slug}`}
                        className="text-slate-300 hover:text-brand-light transition-colors flex items-center justify-between"
                      >
                        <span className="line-clamp-1">{a.title}</span>
                        <ArrowRight className="w-3 h-3 text-slate-500 flex-shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
