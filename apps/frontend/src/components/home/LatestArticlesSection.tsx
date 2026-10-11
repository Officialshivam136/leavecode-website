import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container, Section } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { BlogCard } from '../ui/BlogCard';
import { SecondaryButton } from '../ui/Buttons';

const featuredArticles = [
  {
    title: 'Migrating from Legacy Monolithic WordPress to Next.js 14 Without Losing Organic Rankings',
    excerpt: 'A comprehensive technical blueprint for auditing URLs, preserving backlink equity with 301 edge redirects, and achieving 100/100 Core Web Vitals.',
    category: 'Technical SEO',
    publishDate: 'Oct 2026',
    readTime: '6 min read',
    href: '/blog',
  },
  {
    title: 'Shared Zod Schemas in TypeScript Monorepos: Eliminating Validation Drift Between Frontend & Express',
    excerpt: 'How creating a cross-cutting @shared package ensures end-to-end data integrity for contact forms, project calculators, and client portals.',
    category: 'Architecture',
    publishDate: 'Oct 2026',
    readTime: '5 min read',
    href: '/blog',
  },
  {
    title: 'Core Web Vitals in 2026: Why INP and Sub-Second TTFB Matter More Than Ever for B2B Conversions',
    excerpt: 'Understanding the impact of server components, edge streaming, and lightweight asset bundles on real-world visitor engagement and conversion velocity.',
    category: 'Engineering',
    publishDate: 'Oct 2026',
    readTime: '4 min read',
    href: '/blog',
  },
];

export function LatestArticlesSection() {
  return (
    <Section spacing="default" className="border-b border-surface-border bg-slate-900/20">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 md:mb-8">
          <SectionHeading
            align="left"
            badge="Engineering Insights"
            title="Perspectives on Architecture & Growth"
            description="Deep-dive articles and actionable technical guides authored by our engineering practice."
            className="mx-0 max-w-2xl"
          />

          <SecondaryButton href="/blog" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            View All Publications
          </SecondaryButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredArticles.map((art) => (
            <BlogCard
              key={art.title}
              title={art.title}
              excerpt={art.excerpt}
              category={art.category}
              publishDate={art.publishDate}
              readTime={art.readTime}
              href={art.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
