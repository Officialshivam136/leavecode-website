import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Briefcase,
  Coffee,
  CheckCircle2,
  Code2,
  Zap,
  Heart,
  Globe2,
  ArrowRight,
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
  title: 'Careers & Culture at LeaveCode Technologies | Join Our Engineering Team',
  description:
    'Explore engineering, SEO, and product design career opportunities at LeaveCode Technologies across our Florida and New Delhi offices.',
  alternates: {
    canonical: 'https://leavecode.com/careers',
  },
  openGraph: {
    title: 'Careers & Culture at LeaveCode Technologies',
    description:
      'Join our high-performing team building modern digital software and organic search growth engines.',
    url: 'https://leavecode.com/careers',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
};

export default function CareersPage() {
  const openRoles = [
    {
      title: 'Senior Full-Stack Engineer (Next.js / Node.js)',
      department: 'Software Engineering',
      location: 'New Delhi, India / Hybrid',
      type: 'Full-time',
      desc: 'Architect and scale high-concurrency Next.js 14 applications, TypeScript monorepos, and REST/GraphQL microservices.',
    },
    {
      title: 'Technical SEO & Organic Growth Strategist',
      department: 'Search Marketing',
      location: 'New Delhi, India / Hybrid',
      type: 'Full-time',
      desc: 'Execute rigorous technical SEO audits, Core Web Vitals remediation, crawl budget optimizations, and high-impact digital outreach.',
    },
    {
      title: 'UI/UX Product Designer & Design Systems Lead',
      department: 'Product Design',
      location: 'Remote / US & India',
      type: 'Full-time',
      desc: 'Design accessible, high-conversion design systems in Figma and collaborate directly with frontend engineers implementing Tailwind CSS.',
    },
    {
      title: 'Client Solutions & Technical Account Director',
      department: 'Client Success',
      location: 'Lake Worth, FL (USA) / Hybrid',
      type: 'Full-time',
      desc: 'Lead North American client relationships, technical scoping, sprint reviews, and multi-disciplinary project deliveries.',
    },
  ];

  const benefits = [
    {
      title: 'High-Impact Engineering',
      desc: 'Work on production systems serving real commercial businesses with modern, non-legacy technology stacks.',
      icon: <Code2 className="w-5 h-5 text-brand-light" />,
    },
    {
      title: 'Continuous Learning Budget',
      desc: 'Annual stipend for technical certifications, conferences, and development tool licenses.',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Collaborative Environment',
      desc: 'Transparent, blame-free culture that prioritizes automated testing, peer reviews, and developer autonomy.',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
    },
    {
      title: 'Global Exposure',
      desc: 'Daily collaboration between our Lake Worth, Florida and New Delhi teams across international client accounts.',
      icon: <Globe2 className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Careers & Life at LeaveCode' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-primary/10 text-brand-light border border-brand-primary/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Careers &amp; Life at LeaveCode</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.15]">
                  Build Meaningful Digital Products with a World-Class Team
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  We are looking for engineers, designers, and search marketing specialists who take pride in writing clean, type-safe code and delivering measurable commercial impact.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <PrimaryButton href="#openings" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    View Open Positions
                  </PrimaryButton>
                  <SecondaryButton href="/about" size="lg">
                    Learn About Our Culture
                  </SecondaryButton>
                </div>
              </div>

              {/* Culture Badge Card */}
              <div className="lg:col-span-4 p-7 rounded-2xl bg-surface-card border border-surface-border space-y-4 shadow-surface-card">
                <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                  <Briefcase className="w-4 h-4 text-brand-light" />
                  <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
                    Our People Principles
                  </h3>
                </div>

                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-light flex-shrink-0 mt-0.5" />
                    <span>Focus on outcomes and shipping over unnecessary meetings.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-light flex-shrink-0 mt-0.5" />
                    <span>Comprehensive health coverage and paid leave policies.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-light flex-shrink-0 mt-0.5" />
                    <span>Open feedback culture and structured career progression paths.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Benefits Grid */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              badge="Why Join LeaveCode"
              title="Benefits Designed for Growth and Well-Being"
              description="We believe in creating an environment where ambitious talent can do the best work of their careers."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-all space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-surface-border flex items-center justify-center">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{b.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Open Positions Listing */}
        <Section spacing="default" id="openings" className="border-b border-surface-border bg-slate-900/30">
          <Container size="wide">
            <SectionHeading
              badge="Active Opportunities"
              title="Explore Current Open Positions"
              description="Find your next career milestone in software development, design, or growth marketing."
            />

            <div className="grid grid-cols-1 gap-4 mt-12 max-w-4xl mx-auto">
              {openRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-brand-primary/10 text-brand-light border border-brand-primary/20">
                        {role.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-surface-border">
                        {role.location}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                        {role.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display">{role.title}</h3>
                    <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">{role.desc}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <PrimaryButton href={`mailto:careers@leavecode.com?subject=Application for ${encodeURIComponent(role.title)}`} size="md">
                      Apply via Email
                    </PrimaryButton>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <CTASection
          badge="Don't See Your Role?"
          title="Send an Open Application"
          description="We are always eager to connect with talented engineers, SEO specialists, and designers. Send your GitHub or portfolio to careers@leavecode.com."
          primaryAction={{
            label: 'Submit Resume & Portfolio',
            href: 'mailto:careers@leavecode.com',
          }}
          secondaryAction={{
            label: 'About LeaveCode',
            href: '/about',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
