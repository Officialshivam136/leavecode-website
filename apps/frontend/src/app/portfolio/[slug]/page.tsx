import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Target,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowUpRight,
  Info,
} from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';
import { CTASection } from '@/components/ui/CTASection';
import { allPortfolioProjects, CaseStudy } from '@/data/portfolioCatalogue';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all portfolio projects
export async function generateStaticParams() {
  return allPortfolioProjects.map((p) => ({
    slug: p.slug,
  }));
}

// Dynamic SEO metadata with canonical URLs
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = allPortfolioProjects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: {
      canonical: `https://leavecode.com/portfolio/${project.slug}`,
    },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: `https://leavecode.com/portfolio/${project.slug}`,
      siteName: 'LeaveCode Technologies',
      type: 'article',
      ...(project.image
        ? {
            images: [
              {
                url: `https://leavecode.com${project.image}`,
                width: 800,
                height: 450,
                alt: `${project.title} — ${project.category} Case Study Screenshot`,
              },
            ],
          }
        : {}),
    },
  };
}

export default function IndividualCaseStudyPage({ params }: ProjectPageProps) {
  const project: CaseStudy | undefined = allPortfolioProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Structured Article / TechArticle Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `https://leavecode.com/portfolio/${project.slug}#article`,
    headline: project.title,
    description: project.metaDescription,
    ...(project.image ? { image: `https://leavecode.com${project.image}` } : {}),
    author: {
      '@type': 'Organization',
      name: 'Leavecode Technologies Private Limited',
      url: 'https://leavecode.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Leavecode Technologies Private Limited',
      url: 'https://leavecode.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://leavecode.com/portfolio/${project.slug}`,
    },
    about: {
      '@type': 'Thing',
      name: project.category,
    },
    proficiencyLevel: 'Expert',
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* Schema.org Injection */}
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
              { label: 'Portfolio', href: '/portfolio' },
              { label: project.title },
            ]}
          />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                {/* Project Type Badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-slate-900 border border-surface-border text-slate-300">
                    {project.category}
                  </span>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Client Project</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.15]">
                  {project.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  {project.tagline}
                </p>

                {/* Client / Engagement Context */}
                <div className="p-4 rounded-xl bg-slate-900 border border-surface-border flex items-start gap-3">
                  <Info className="w-4 h-4 text-brand-light flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <div className="font-mono text-slate-400 uppercase tracking-wider">
                      Client &amp; Engagement Context
                    </div>
                    <div className="text-slate-300">
                      <span className="font-semibold text-white">
                        {project.clientContext.clientName}
                      </span>{' '}
                      &bull; {project.clientContext.industry}
                      {project.clientContext.region && ` (${project.clientContext.region})`}
                    </div>
                    <div className="text-slate-500 italic pt-0.5">
                      {project.clientContext.disclosureNote}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <PrimaryButton href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Discuss Similar Project
                  </PrimaryButton>
                  <SecondaryButton href="/portfolio" size="lg">
                    Back to All Case Studies
                  </SecondaryButton>
                </div>
              </div>

              {/* Right Architectural Preview Card */}
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-surface-card border border-surface-border space-y-6 shadow-surface-card overflow-hidden">
                {project.image && (
                  <div className="rounded-xl overflow-hidden border border-surface-border bg-slate-950 -mx-1 -mt-1 shadow-md">
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.category} web application screenshot engineered by LeaveCode Technologies`}
                      width={800}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover max-h-56"
                    />
                  </div>
                )}

                <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                  <Layers className="w-4 h-4 text-brand-light" />
                  <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
                    Technical Specifications
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Technologies Utilized:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-slate-950 text-slate-200 border border-surface-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border space-y-3">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Deliverables / Metrics:
                  </div>
                  <div className="space-y-2">
                    {project.metricsOrDeliverables.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-950 border border-surface-border/60 flex flex-col space-y-0.5"
                      >
                        <div className="text-[11px] text-slate-500 font-mono uppercase">{m.label}</div>
                        <div className="text-sm font-bold text-white font-mono">{m.value}</div>
                        <div className="text-[11px] text-slate-400">{m.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Problem, Objectives & Scope */}
        <Section spacing="default" className="border-b border-surface-border bg-slate-900/20">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Problem Statement */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  <h2 className="text-2xl font-bold text-white font-display">
                    Problem &amp; Strategic Opportunity
                  </h2>
                </div>
                <div className="p-6 rounded-2xl bg-surface-card border border-surface-border text-slate-300 leading-relaxed text-sm sm:text-base">
                  {project.problemOrOpportunity}
                </div>

                {/* Scope of Work */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-bold text-white font-display">
                    Scope of Work
                  </h3>
                  <div className="space-y-2">
                    {project.scopeOfWork.map((scope, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-surface-card border border-surface-border flex items-center gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-light flex-shrink-0" />
                        <span>{scope}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Objectives */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-2xl font-bold text-white font-display">
                    Project Objectives
                  </h2>
                </div>
                <div className="space-y-3">
                  {project.projectObjectives.map((obj, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-1"
                    >
                      <div className="text-xs font-mono text-brand-accent uppercase">
                        Objective {idx + 1}
                      </div>
                      <p className="text-sm sm:text-base text-slate-200 font-medium">
                        {obj}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Strategy & Implementation Steps */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide">
            <div className="space-y-4 max-w-2xl mb-12">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-brand-primary/10 text-brand-light border border-brand-primary/20">
                Implementation Phasing
              </span>
              <h2 className="text-3xl font-extrabold text-white font-display">
                Strategy &amp; Architectural Execution
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.strategyAndImplementation.map((strat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xl font-bold font-mono text-brand-light">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-white font-display">
                      {strat.phase}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {strat.description}
                    </p>
                  </div>
                  <div className="h-1 w-full bg-slate-950 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-brand-primary w-full" />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Related Services Links */}
        <Section spacing="default" className="border-b border-surface-border bg-slate-900/20">
          <Container size="wide">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-light" />
                <span>Related Engineering &amp; Growth Practices</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.relatedServices.map((rs) => (
                  <Link
                    key={rs.slug}
                    href={`/services/${rs.slug}`}
                    className="group p-5 rounded-xl bg-surface-card border border-surface-border hover:border-brand-light/30 transition-colors flex items-center justify-between"
                  >
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {rs.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-light transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Project Inquiry CTA */}
        <CTASection
          badge="Start Your Project"
          title="Have a Similar System in Mind?"
          description="Speak with our engineering leads in Lake Worth, Florida or New Delhi to discuss your technical architecture and receive an estimated timeline."
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
