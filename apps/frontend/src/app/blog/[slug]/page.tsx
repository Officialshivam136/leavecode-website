import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  List,
  ArrowUpRight,
  ShieldCheck,
  Share2,
} from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/ui/CTASection';
import { publishedArticles, allBlogArticles, ClientBlogPost } from '@/data/blogData';

interface ArticlePageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    preview?: string;
  };
}

export async function generateStaticParams() {
  return publishedArticles
    .filter((a) => a.status !== 'draft' && !a.seo.noindex)
    .map((a) => ({
      slug: a.slug,
    }));
}

export async function generateMetadata({ params, searchParams }: ArticlePageProps): Promise<Metadata> {
  const isPreview = searchParams?.preview === 'true';
  const article = (isPreview ? allBlogArticles : publishedArticles).find(
    (a) => a.slug === params.slug
  );
  if (!article || (!isPreview && article.status === 'draft')) {
    return {
      title: '404 — Publication Not Found | LeaveCode Technologies',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const shouldNoindex = isPreview || article.status === 'draft' || Boolean(article.seo.noindex);

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
    alternates: {
      canonical: article.seo.canonicalOverride || `https://leavecode.com/blog/${article.slug}`,
    },
    ...(shouldNoindex
      ? {
          robots: {
            index: false,
            follow: false,
            nocache: true,
          },
        }
      : {}),
    openGraph: {
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      url: `https://leavecode.com/blog/${article.slug}`,
      siteName: 'LeaveCode Technologies',
      type: 'article',
    },
  };
}

export default function IndividualArticlePage({ params, searchParams }: ArticlePageProps) {
  const isPreview = searchParams?.preview === 'true';
  const article: ClientBlogPost | undefined = (isPreview ? allBlogArticles : publishedArticles).find(
    (a) => a.slug === params.slug
  );

  if (!article || (!isPreview && article.status === 'draft')) {
    notFound();
  }

  // Schema.org BlogPosting Structured Data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://leavecode.com/blog/${article.slug}#post`,
    headline: article.title,
    description: article.excerpt,
    datePublished: '2026-10-01T10:00:00Z',
    dateModified: '2026-10-05T12:00:00Z',
    author: {
      '@type': 'Organization',
      name: article.author.name,
      url: 'https://leavecode.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Leavecode Technologies Private Limited',
      url: 'https://leavecode.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://leavecode.com/blog/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* BlogPosting Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: article.title },
            ]}
          />
        </Container>

        {/* Article Header & Editorial Masthead */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="default">
            <div className="space-y-6 max-w-3xl mx-auto text-left">
              {/* Category & Read Time */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-light font-semibold border border-brand-primary/20">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.publishedAt}
                </span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readingTimeMinutes} min read
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.15]">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {article.excerpt}
              </p>

              {/* Author Attribution Card */}
              <div className="p-4 rounded-xl bg-surface-card border border-surface-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center text-brand-light">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-display">
                      {article.author.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {article.author.role}
                    </div>
                  </div>
                </div>

                <span className="text-[11px] font-mono uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded">
                  Verified Technical Practice
                </span>
              </div>
            </div>
          </Container>
        </Section>

        {/* Article Body & Table of Contents Layout */}
        <Section spacing="default">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
              {/* Sticky Table of Contents Sidebar */}
              <aside className="lg:col-span-4 order-2 lg:order-1">
                <div className="sticky top-28 p-6 rounded-2xl bg-surface-card border border-surface-border space-y-4">
                  <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                    <List className="w-4 h-4 text-brand-light" />
                    <h3 className="text-xs font-bold font-mono text-white uppercase tracking-wider">
                      Table of Contents
                    </h3>
                  </div>

                  <nav aria-label="Table of contents">
                    <ul className="space-y-2 text-xs font-mono">
                      {article.tableOfContents.map((toc) => (
                        <li key={toc.id}>
                          <a
                            href={`#${toc.id}`}
                            className="block py-1 text-slate-400 hover:text-white transition-colors"
                          >
                            {toc.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Consultation Mini-Callout */}
                  <div className="pt-4 border-t border-surface-border space-y-3">
                    <div className="text-xs font-medium text-slate-300">
                      Need help implementing this architecture?
                    </div>
                    <Link
                      href="/contact"
                      className="block text-center py-2 px-3 rounded-lg text-xs font-bold bg-brand-primary hover:bg-brand-hover text-white transition-colors shadow-glow-sm"
                    >
                      Talk With Our Architects
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Article Content */}
              <div className="lg:col-span-8 order-1 lg:order-2 space-y-8">
                <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300 leading-relaxed font-sans text-base">
                  {article.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('### ')) {
                      const headingText = paragraph.replace('### ', '');
                      const matchingToc = article.tableOfContents.find((t) =>
                        headingText.toLowerCase().includes(t.title.toLowerCase().slice(0, 15))
                      );
                      const id = matchingToc ? matchingToc.id : `section-${idx}`;

                      return (
                        <h2
                          key={idx}
                          id={id}
                          className="text-2xl font-bold text-white font-display pt-6 scroll-mt-28 border-b border-surface-border/50 pb-2"
                        >
                          {headingText}
                        </h2>
                      );
                    }

                    if (paragraph.startsWith('```')) {
                      const cleanCode = paragraph.replace(/```[a-z]*\n?/g, '');
                      return (
                        <pre
                          key={idx}
                          className="p-4 rounded-xl bg-slate-950 border border-surface-border font-mono text-xs text-brand-light overflow-x-auto"
                        >
                          <code>{cleanCode}</code>
                        </pre>
                      );
                    }

                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n- ').map((item) => item.replace(/^- /, ''));
                      return (
                        <ul key={idx} className="space-y-1.5 pl-5 list-disc text-slate-300">
                          {items.map((it, i) => (
                            <li key={i}>{it}</li>
                          ))}
                        </ul>
                      );
                    }

                    return <p key={idx}>{paragraph}</p>;
                  })}
                </div>

                {/* Author Full Bio Box */}
                <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface-card border border-surface-border space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center font-bold text-white font-display text-lg shadow-glow-sm">
                      LC
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-display">
                        About {article.author.name}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {article.author.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {article.author.bio}
                  </p>
                </div>

                {/* Related Articles */}
                {article.relatedArticles.length > 0 && (
                  <div className="pt-8 border-t border-surface-border space-y-4">
                    <h3 className="text-lg font-bold text-white font-display">
                      Related Engineering Publications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {article.relatedArticles.map((ra) => (
                        <Link
                          key={ra.slug}
                          href={`/blog/${ra.slug}`}
                          className="p-4 rounded-xl bg-surface-card border border-surface-border hover:border-brand-light/30 transition-colors flex items-center justify-between"
                        >
                          <span className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-white">
                            {ra.title}
                          </span>
                          <ArrowRight className="w-4 h-4 text-brand-light flex-shrink-0 ml-2" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>

        {/* Consultation CTA */}
        <CTASection
          badge="Ready To Migrate?"
          title="Discuss Your Next.js 14 Web Architecture"
          description="Speak directly with our engineering team in Florida or New Delhi to plan your transition with zero downtime and guaranteed rank retention."
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
