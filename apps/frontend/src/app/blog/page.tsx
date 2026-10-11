import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/ui/CTASection';
import { publishedArticles } from '@/data/blogData';

interface BlogListingPageProps {
  searchParams?: {
    category?: string;
    tag?: string;
    page?: string;
  };
}

export async function generateMetadata({ searchParams }: BlogListingPageProps): Promise<Metadata> {
  const category = searchParams?.category;
  const tag = searchParams?.tag;
  const rawPage = searchParams?.page ? parseInt(searchParams.page, 10) : 1;
  const page = !isNaN(rawPage) && rawPage > 1 ? rawPage : 1;

  // Duplicate or filtered URL variants -> noindex, follow + canonical to base /blog
  const isFilteredVariant = Boolean(category || tag || searchParams?.page === '1');

  const title = category
    ? `${category} Engineering Insights | LeaveCode Technologies`
    : tag
    ? `Articles Tagged "${tag}" | LeaveCode Technologies`
    : page > 1
    ? `Engineering & Growth Insights — Page ${page} | LeaveCode Technologies`
    : 'Engineering & Growth Insights | LeaveCode Technologies';

  const description =
    'Technical publications, architectural guides, and search growth insights authored by the LeaveCode engineering practice.';

  const canonicalUrl =
    !isFilteredVariant && page > 1
      ? `https://leavecode.com/blog?page=${page}`
      : 'https://leavecode.com/blog';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    ...(isFilteredVariant
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
    openGraph: {
      title,
      description:
        'Actionable guides on decoupled Next.js architectures, Core Web Vitals, and technical SEO migrations.',
      url: canonicalUrl,
      siteName: 'LeaveCode Technologies',
      type: 'website',
    },
  };
}

export default function BlogListingPage({ searchParams }: BlogListingPageProps) {
  const categories = [
    'All Publications',
    'Architecture & Engineering',
    'Technical SEO & Growth',
    'UI/UX & Design Systems',
    'Infrastructure & Security',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Insights & Publications' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container>
            <SectionHeading
              level="h1"
              badge="Engineering Perspectives"
              title="Architectural Blueprints & Technical Insights"
              description="In-depth analysis on modern web engineering, zero-downtime SEO migrations, and full-stack performance optimization authored by our engineering practice."
            />
          </Container>
        </Section>

        {/* Article Grid */}
        <Section spacing="default">
          <Container size="wide" className="space-y-12">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pb-4 border-b border-surface-border">
              {categories.map((cat, idx) => (
                <span
                  key={cat}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    idx === 0
                      ? 'bg-brand-primary text-white shadow-glow-sm'
                      : 'bg-surface-card text-slate-400 hover:text-white border border-surface-border'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {publishedArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group flex flex-col justify-between p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-all duration-300 shadow-surface-card hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Meta Bar */}
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="px-2.5 py-1 rounded bg-brand-primary/10 text-brand-light font-semibold border border-brand-primary/20">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.publishedAt}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readingTimeMinutes} min read
                        </span>
                      </div>
                    </div>

                    {/* Title & Excerpt */}
                    <h2 className="text-2xl font-bold text-white group-hover:text-brand-light transition-colors font-display leading-tight">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-surface-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Read Link */}
                  <div className="pt-6 mt-6 border-t border-surface-border flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">
                      By {article.author.name}
                    </span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-white transition-colors"
                    >
                      <span>Read Publication</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Consultation CTA */}
        <CTASection
          badge="Engineering Discussion"
          title="Looking to Modernize Your Web Stack?"
          description="Speak directly with our technical leads in Florida or New Delhi to discuss your migration roadmap and performance targets."
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
