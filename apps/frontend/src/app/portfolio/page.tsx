import React from 'react';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/ui/CTASection';
import { allPortfolioProjects } from '@/data/portfolioCatalogue';
import { PortfolioListingClient } from '@/components/portfolio/PortfolioListingClient';

interface PortfolioPageProps {
  searchParams?: {
    category?: string;
    page?: string;
    filter?: string;
    sort?: string;
  };
}

export async function generateMetadata({ searchParams }: PortfolioPageProps): Promise<Metadata> {
  const category = searchParams?.category;
  const filter = searchParams?.filter;
  const sort = searchParams?.sort;
  const rawPage = searchParams?.page ? parseInt(searchParams.page, 10) : 1;
  const page = !isNaN(rawPage) && rawPage > 1 ? rawPage : 1;

  // Duplicate or low-value filtered/sorted URL variants -> noindex, follow + canonical to base /portfolio
  const isFilteredVariant = Boolean(category || filter || sort || searchParams?.page === '1');

  const title = category
    ? `${category} Portfolio & Case Studies | LeaveCode Technologies`
    : page > 1
    ? `Selected Portfolio & Client Case Studies — Page ${page} | LeaveCode Technologies`
    : 'Selected Portfolio & Client Case Studies | LeaveCode Technologies';

  const description = category
    ? `Explore verified ${category} client engagements, custom platforms, and engineering architectures delivered by LeaveCode Technologies.`
    : page > 1
    ? `Page ${page} of verified client engagements, e-commerce platforms, clinical web applications, and custom software case studies delivered by LeaveCode.`
    : 'Explore verified client engagements, e-commerce platforms, clinical web applications, architectural showcases, and engineering demonstration architectures delivered by LeaveCode.';

  const canonicalUrl =
    !isFilteredVariant && page > 1
      ? `https://leavecode.com/portfolio?page=${page}`
      : 'https://leavecode.com/portfolio';

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
      description,
      url: canonicalUrl,
      siteName: 'LeaveCode Technologies',
      type: 'website',
    },
  };
}

export default function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const categories = [
    'All Work',
    'E-Commerce',
    'Healthcare & Clinical',
    'Real Estate & Living',
    'Legal & Corporate',
  ];

  const initialCategory = searchParams?.category || 'All Work';
  const initialPage = searchParams?.page ? Math.max(1, parseInt(searchParams.page, 10) || 1) : 1;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Portfolio & Case Studies' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container>
            <SectionHeading
              level="h1"
              badge="Selected Case Studies & Portfolio"
              title="Engineered Digital Solutions & Client Engagements"
              description="A transparent inventory of verified commercial projects and engineering reference architectures delivered across diverse industries."
            />
          </Container>
        </Section>

        {/* Filterable Portfolio Listing */}
        <PortfolioListingClient
          initialProjects={allPortfolioProjects}
          categories={categories}
          initialCategory={initialCategory}
          initialPage={initialPage}
        />

        {/* CTA Section */}
        <CTASection
          badge="Launch Your Next Initiative"
          title="Ready to Build Your Custom Digital Product?"
          description="Speak directly with our engineering team in Lake Worth, Florida or New Delhi to discuss your technical architecture and delivery roadmap."
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
