import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Users,
  MapPin,
  CheckCircle2,
  Cpu,
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
import { WhereWeAreSection } from '@/components/home/WhereWeAreSection';

export const metadata: Metadata = {
  title: 'About LeaveCode Technologies | Global Digital Engineering Agency',
  description:
    'Learn about LeaveCode Technologies, our verified dual-office presence in Lake Worth, Florida and New Delhi, India, our engineering culture, and our track record in digital engineering.',
  alternates: {
    canonical: 'https://leavecode.com/about',
  },
  openGraph: {
    title: 'About LeaveCode Technologies | Global Digital Engineering Agency',
    description:
      'Learn about LeaveCode Technologies, our dual-office footprint in Florida and New Delhi, our leadership, and delivery ethos.',
    url: 'https://leavecode.com/about',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
};

export default function AboutPage() {
  const leadershipValues = [
    {
      title: 'Zero Vanity Metrics',
      desc: 'We engineer digital systems for throughput, conversion reliability, and organic search longevity—not bloated slide decks.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Dual-Continental Continuity',
      desc: 'US project management in Lake Worth, FL paired with high-velocity engineering teams in New Delhi provides 24-hour delivery velocity.',
      icon: <Globe2 className="w-5 h-5 text-brand-light" />,
    },
    {
      title: 'Modern Type-Safe Stacks',
      desc: 'Next.js App Router, TypeScript, Tailwind CSS, and scalable microservices eliminate runtime crashes and expensive rewrites.',
      icon: <Cpu className="w-5 h-5 text-brand-accent" />,
    },
    {
      title: 'Strict Quality Standards',
      desc: 'Automated test suites, WCAG 2.1 AA accessibility, and continuous Lighthouse audits back every single client release.',
      icon: <Award className="w-5 h-5 text-amber-400" />,
    },
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Foundation & Agency Launch',
      detail: 'LeaveCode Technologies initialized web development and performance marketing services for early-stage commercial clients.',
    },
    {
      year: '2020',
      title: 'Cross-Border Expansion',
      detail: 'Established our Lake Worth, Florida presence to serve North American retail, healthcare, and professional services companies.',
    },
    {
      year: '2022',
      title: '100+ Commercial Deployments',
      detail: 'Surpassed 100 successful production client rollouts across custom web apps, e-commerce stores, and high-ranking SEO campaigns.',
    },
    {
      year: '2024–2026',
      title: 'Enterprise Next.js Architecture',
      detail: 'Pioneered full-stack TypeScript migrations, headless commerce builds, and core web vitals optimization across global portfolios.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'About LeaveCode' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-primary/10 text-brand-light border border-brand-primary/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>About LeaveCode Technologies</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.15]">
                  Engineering High-Performance Digital Systems for Ambitious Businesses
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  LeaveCode is a full-service technology and digital growth agency operating across North America and South Asia. We build modern, accessible web architectures and data-backed search strategies that drive measurable commercial outcomes.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <PrimaryButton href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Connect with Leadership
                  </PrimaryButton>
                  <SecondaryButton href="/portfolio" size="lg">
                    Browse Client Portfolio
                  </SecondaryButton>
                </div>
              </div>

              {/* Global Office Footprint Showcase */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-card border border-surface-border space-y-5 shadow-surface-card">
                <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                  <Globe2 className="w-4 h-4 text-brand-light" />
                  <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
                    Where We Are • Global Footprint
                  </h3>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://maps.app.goo.gl/Z5upXKGAcwwycL7x5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-slate-950 border border-brand-primary/40 hover:border-brand-light transition-colors space-y-1.5 group"
                  >
                    <div className="flex items-center justify-between text-white font-semibold text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-accent" />
                        <span>India Corporate Office (Bijnor)</span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-light group-hover:underline">
                        Locate on Map &rarr;
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                      House Number-24, Village and Post-Kharak, Distt, Bijnor, Uttar Pradesh 246701
                    </p>
                  </a>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-surface-border space-y-1">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      <MapPin className="w-4 h-4 text-brand-light" />
                      <span>United States Headquarters</span>
                    </div>
                    <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                      6770 Lantana Road Suite #6, Lake Worth, FL 33467 (USA)
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-surface-border space-y-1">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>New Delhi Technology Hub</span>
                    </div>
                    <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                      D-324, Street No-11, Near Laxmi Nagar Metro, New Delhi 110092
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-xs font-mono text-slate-400 border-t border-surface-border flex items-center justify-between">
                  <span>Registered Business Entity</span>
                  <span className="text-brand-light">Verified Operational Hubs</span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Core Values Section */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              badge="Our Operating Philosophy"
              title="Built on Rigor, Transparency, and Engineering Excellence"
              description="We avoid agency fluff. Every decision is grounded in measurable uptime, conversion rate, and performance metrics."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 md:mt-10">
              {leadershipValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-all space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-surface-border flex items-center justify-center">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{val.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Company Journey / Milestones */}
        <Section spacing="default" className="border-b border-surface-border bg-slate-900/30">
          <Container size="wide">
            <SectionHeading
              badge="Milestones & Track Record"
              title="From Agile Agency to Global Digital Partner"
              description="Over six years of continuous engineering and digital optimization across diverse industries."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 md:mt-10">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-950 border border-surface-border flex flex-col justify-between space-y-4"
                >
                  <div className="text-3xl font-mono font-extrabold text-brand-light">{m.year}</div>
                  <h4 className="text-base font-bold text-white">{m.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{m.detail}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Where We Are & Interactive Map Section */}
        <WhereWeAreSection />

        {/* CTA */}
        <CTASection
          badge="Partner With Us"
          title="Ready to Scale Your Digital Infrastructure?"
          description="Speak directly with our senior technology team to evaluate your architecture, migration roadmap, or marketing goals."
          primaryAction={{
            label: 'Schedule Architectural Consultation',
            href: '/contact',
          }}
          secondaryAction={{
            label: 'Explore Pricing Packages',
            href: '/pricing',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
