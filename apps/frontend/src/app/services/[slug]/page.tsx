import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Cpu,
  Layers,
  Clock,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTASection } from '@/components/ui/CTASection';
import { servicesCatalogue, ServiceDetail } from '@/data/servicesCatalogue';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Generate Static Params for all 8 verified services
export async function generateStaticParams() {
  return servicesCatalogue.map((svc) => ({
    slug: svc.slug,
  }));
}

// Generate dynamic SEO metadata with self-referencing canonical URLs
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesCatalogue.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://leavecode.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://leavecode.com/services/${service.slug}`,
      siteName: 'LeaveCode Technologies',
      type: 'website',
    },
  };
}

export default function IndividualServicePage({ params }: ServicePageProps) {
  const service: ServiceDetail | undefined = servicesCatalogue.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Schema.org Service JSON-LD Structured Data
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://leavecode.com/services/${service.slug}#service`,
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Leavecode Technologies Private Limited',
      url: 'https://leavecode.com',
    },
    serviceType: service.category,
    areaServed: ['US', 'IN', 'GB'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Deliverables`,
      itemListElement: service.deliverables.map((d, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: d.title,
          description: d.description,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* Service Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <SiteHeader />

      <main className="flex-grow w-full">
        {/* 1. Breadcrumbs */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title },
            ]}
          />
        </Container>

        {/* 2. Hero Section with Unique H1 & Intended Audience */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-brand-primary/10 border border-brand-primary/30 text-brand-light">
                  <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                  <span>{service.category} Practice</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.15]">
                  {service.h1}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  {service.tagline}
                </p>

                {/* Target Audience Highlight */}
                <div className="p-4 rounded-xl bg-slate-900 border border-surface-border flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-light flex-shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Intended Audience
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                      {service.targetAudience}
                    </p>
                  </div>
                </div>

                {/* Primary Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <PrimaryButton href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Discuss This Service
                  </PrimaryButton>
                  <SecondaryButton href="/quote" size="lg">
                    Calculate Project Estimate
                  </SecondaryButton>
                </div>
              </div>

              {/* Technical Capability Specs Card */}
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-surface-card border border-surface-border space-y-6 shadow-surface-card">
                <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                  <Cpu className="w-4 h-4 text-brand-light" />
                  <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
                    Core Technologies &amp; Methods
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-950 text-slate-200 border border-surface-border flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-surface-border space-y-2 text-xs text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>Delivery Mode:</span>
                    <span className="text-white font-medium">Sprint-Based Milestone Delivery</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Engineering Hubs:</span>
                    <span className="text-white font-medium">Florida, USA &amp; New Delhi, India</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Code Ownership:</span>
                    <span className="text-emerald-400 font-medium">100% Client Owned</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 3. Customer Problems & Business Outcomes */}
        <Section spacing="default" className="border-b border-surface-border bg-slate-900/20">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Problem Column */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <h2 className="text-2xl font-bold text-white font-display">
                    Common Operational &amp; Technical Bottlenecks
                  </h2>
                </div>
                <div className="space-y-4">
                  {service.customerProblems.map((cp, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-1.5"
                    >
                      <h4 className="text-base font-semibold text-white font-display">
                        {cp.problem}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {cp.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome Column */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-2xl font-bold text-white font-display">
                    Target Business &amp; Engineering Outcomes
                  </h2>
                </div>
                <div className="space-y-4">
                  {service.businessOutcomes.map((bo, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-1.5"
                    >
                      <h4 className="text-base font-semibold text-emerald-400 font-display">
                        {bo.outcome}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed font-mono text-xs">
                        {bo.metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 4. Specific Solutions & Deliverables Offered */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              badge="Concrete Scope"
              title="Specific Solutions & Deliverables Provided"
              description="Transparent scope boundaries defining exactly what is engineered, documented, and delivered."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.deliverables.map((d, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-colors space-y-3"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-white font-display">
                      {d.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed pl-7">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 5. Delivery Process */}
        <Section spacing="default" className="border-b border-surface-border bg-slate-900/30">
          <Container size="wide">
            <SectionHeading
              badge="Execution Pipeline"
              title="Phased Implementation Methodology"
              description="How our engineering practice plans, tests, and deploys this service from kickoff to sign-off."
            />

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step) => (
                <div
                  key={step.phase}
                  className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-2xl font-black font-mono text-brand-light">
                      {step.phase}
                    </span>
                    <h4 className="text-base font-bold text-white font-display">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
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

        {/* 6. Genuine Project Evidence */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-brand-primary/30 shadow-surface-card">
              <div className="max-w-3xl space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified Project Track Record
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {service.caseEvidence.clientOrProject}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  {service.caseEvidence.summary}
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-surface-border text-xs font-mono text-slate-400">
                  <span className="text-brand-light font-bold">Key Delivered Scope: </span>
                  <span>{service.caseEvidence.deliverables}</span>
                </div>
                <div className="pt-2">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-white transition-colors"
                  >
                    <span>Inspect Full Case Studies</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 7. Cost & Timeline Influencing Factors */}
        <Section spacing="default" className="border-b border-surface-border bg-slate-900/20">
          <Container size="wide">
            <SectionHeading
              badge="Scope Drivers"
              title="Factors Influencing Investment & Delivery Timelines"
              description="Transparent scope variables that determine engineering duration, sprint velocity, and resource allocation."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.pricingAndTimelineFactors.map((f, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-accent" />
                    <h4 className="text-base font-bold text-white font-display">
                      {f.factor}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 8. Service-Specific FAQs */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container>
            <SectionHeading
              badge="Service FAQs"
              title="Frequently Asked Questions"
              description={`Detailed answers regarding our ${service.title.toLowerCase()} practice.`}
            />

            <div className="mt-14">
              <FAQAccordion items={service.faqs} />
            </div>
          </Container>
        </Section>

        {/* 9. Related Services & Articles */}
        <Section spacing="default" className="border-b border-surface-border bg-slate-900/20">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Related Services */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-primary" />
                  <span>Complementary Engineering Practices</span>
                </h3>
                <div className="space-y-3">
                  {service.relatedServices.map((rs) => (
                    <Link
                      key={rs.slug}
                      href={`/services/${rs.slug}`}
                      className="group p-4 rounded-xl bg-surface-card border border-surface-border hover:border-brand-light/30 transition-colors flex items-center justify-between"
                    >
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {rs.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-light transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  <span>Relevant Technical Insights</span>
                </h3>
                <div className="space-y-3">
                  {service.relatedArticles.map((ra) => (
                    <Link
                      key={ra.title}
                      href={ra.href}
                      className="group p-4 rounded-xl bg-surface-card border border-surface-border hover:border-brand-light/30 transition-colors flex items-center justify-between"
                    >
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {ra.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-accent transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 10. Project Inquiry CTA Section */}
        <CTASection
          badge={`Initiate ${service.title}`}
          title="Ready to Architect Your Solution?"
          description={`Connect directly with our engineering team in Florida or New Delhi to review your specifications and map out your ${service.title.toLowerCase()} roadmap.`}
          primaryAction={{
            label: 'Schedule Technical Consultation',
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
