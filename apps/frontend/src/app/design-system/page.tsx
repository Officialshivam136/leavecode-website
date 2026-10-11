import React from 'react';
import type { Metadata } from 'next';
import {
  Code2,
  Smartphone,
  Search,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  Terminal,
} from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { BlogCard } from '@/components/ui/BlogCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { CTASection } from '@/components/ui/CTASection';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Internal UI Design System & Component Tokens',
  description: 'Internal LeaveCode design system preview and accessible component gallery.',
  alternates: {
    canonical: 'https://leavecode.com/design-system',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemPreviewPage() {
  const sampleFaq = [
    {
      id: 'faq-1',
      question: 'What technologies form the core of the LeaveCode modern stack?',
      answer:
        'We engineer full-stack systems using Next.js 14 (App Router) on the frontend for server-rendered speed and SEO authority, paired with Node.js/Express, TypeScript, and MongoDB Atlas for resilient backend microservices.',
    },
    {
      id: 'faq-2',
      question: 'How do you handle zero-downtime SEO migrations from legacy WordPress sites?',
      answer:
        'We execute complete 1:1 URL inventory audits, implement 301 edge redirects to preserve established backlink equity, and inject JSON-LD structured data to maximize search visibility.',
    },
    {
      id: 'faq-3',
      question: 'Where are LeaveCode’s physical engineering offices located?',
      answer:
        'LeaveCode operates an International Client Center in Lake Worth, Florida (USA) and a Technology Engineering Center in New Delhi (India).',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-brand-primary selection:text-white">
      {/* 1. Header Component Preview */}
      <SiteHeader />

      <main className="flex-grow">
        {/* Breadcrumbs Preview */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs
            items={[
              { label: 'Engineering System', href: '#' },
              { label: 'Design System & Component Library' },
            ]}
          />
        </Container>

        {/* Hero Section of Preview */}
        <Section spacing="sm">
          <Container>
            <SectionHeading
              badge="Design System Preview"
              title="Architectural Tokens & Component Suite"
              description="A cohesive, high-performance design language engineered for LeaveCode Technologies. Designed with deep navy surfaces, electric indigo accents, refined borders, and strict WCAG 2.1 AA focus rings."
            />

            {/* Design Tokens Color Palette Grid */}
            <div className="mt-12 p-8 rounded-2xl bg-surface-card border border-surface-border space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                Core Palette &amp; Surface Tokens
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <div className="space-y-2">
                  <div className="h-16 rounded-xl bg-slate-950 border border-surface-border flex items-center justify-center text-xs font-mono text-slate-400">
                    #070A0F
                  </div>
                  <div className="text-xs font-medium text-white">Slate 950 (Canvas)</div>
                </div>

                <div className="space-y-2">
                  <div className="h-16 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center text-xs font-mono text-slate-400">
                    #0D121B
                  </div>
                  <div className="text-xs font-medium text-white">Surface Card</div>
                </div>

                <div className="space-y-2">
                  <div className="h-16 rounded-xl bg-slate-850 border border-surface-border flex items-center justify-center text-xs font-mono text-slate-400">
                    #131A26
                  </div>
                  <div className="text-xs font-medium text-white">Slate 850 (Elevated)</div>
                </div>

                <div className="space-y-2">
                  <div className="h-16 rounded-xl bg-brand-primary shadow-glow-sm flex items-center justify-center text-xs font-mono text-white font-bold">
                    #4F46E5
                  </div>
                  <div className="text-xs font-medium text-white">Electric Indigo</div>
                </div>

                <div className="space-y-2">
                  <div className="h-16 rounded-xl bg-brand-accent flex items-center justify-center text-xs font-mono text-slate-950 font-bold">
                    #06B6D4
                  </div>
                  <div className="text-xs font-medium text-white">Precision Cyan</div>
                </div>

                <div className="space-y-2">
                  <div className="h-16 rounded-xl bg-emerald-500 flex items-center justify-center text-xs font-mono text-slate-950 font-bold">
                    #10B981
                  </div>
                  <div className="text-xs font-medium text-white">System Emerald</div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* 2. Interactive Buttons & States Preview */}
        <Section spacing="sm">
          <Container>
            <div className="space-y-6">
              <div className="border-b border-surface-border pb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-light" />
                <h3 className="text-lg font-bold text-white font-display">
                  1. Buttons &amp; Interactive Micro-States
                </h3>
              </div>

              <div className="flex flex-wrap gap-4 items-center p-6 rounded-2xl bg-surface-card border border-surface-border">
                <PrimaryButton size="lg">Primary Action (Large)</PrimaryButton>
                <PrimaryButton size="md">Primary Action (Medium)</PrimaryButton>
                <PrimaryButton size="sm">Primary (Small)</PrimaryButton>
                <PrimaryButton size="md" isLoading>
                  Saving State
                </PrimaryButton>
                <SecondaryButton size="md" icon={<Sparkles className="w-4 h-4 text-brand-light" />}>
                  Secondary Action
                </SecondaryButton>
                <SecondaryButton size="md" disabled>
                  Disabled State
                </SecondaryButton>
              </div>
            </div>
          </Container>
        </Section>

        {/* 3. Service Cards Preview */}
        <Section spacing="sm">
          <Container>
            <div className="space-y-6">
              <div className="border-b border-surface-border pb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-light" />
                <h3 className="text-lg font-bold text-white font-display">
                  2. Service Card Component
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                  title="Full-Stack Web Engineering"
                  description="Modern Next.js 14 web applications engineered with TypeScript, responsive Tailwind interfaces, and sub-second page performance."
                  icon={<Code2 className="w-6 h-6" />}
                  tags={['Next.js', 'React', 'TypeScript', 'Node.js']}
                  badge="Core Capability"
                  href="/services/web-development"
                />

                <ServiceCard
                  title="Mobile App Development"
                  description="Native iOS, Android, and cross-platform apps constructed with React Native and performant backend APIs."
                  icon={<Smartphone className="w-6 h-6" />}
                  tags={['React Native', 'iOS', 'Android', 'REST']}
                  badge="Cross-Platform"
                  href="/services/mobile-app-development"
                />

                <ServiceCard
                  title="Enterprise SEO & Organic Growth"
                  description="Full-scale technical audits, programmatic architecture, and high-converting keyword dominance strategies."
                  icon={<Search className="w-6 h-6" />}
                  tags={['Technical SEO', 'Schema.org', 'Core Web Vitals']}
                  badge="High ROI"
                  href="/services/seo-services"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* 4. Project Card Preview */}
        <Section spacing="sm">
          <Container>
            <div className="space-y-6">
              <div className="border-b border-surface-border pb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-light" />
                <h3 className="text-lg font-bold text-white font-display">
                  3. Project &amp; Case Study Card Component
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard
                  title="Buyonik Multi-Vendor Marketplace"
                  category="Headless E-Commerce"
                  summary="Engineered scalable e-commerce infrastructure supporting catalog synchronization, high-concurrency order processing, and payment gateway routing."
                  impactMetrics={[
                    { label: 'Architecture', value: 'Headless Next.js' },
                    { label: 'Uptime SLA', value: '99.99%' },
                  ]}
                  tags={['Next.js', 'Node.js', 'MongoDB', 'Stripe']}
                  href="/portfolio"
                />

                <ProjectCard
                  title="Vydamed Healthcare Clinical Platform"
                  category="Web Application"
                  summary="HIPAA-compliant patient booking portal and medical records synchronization tool developed for high data security and smooth clinician workflows."
                  impactMetrics={[
                    { label: 'Performance Score', value: '98 / 100' },
                    { label: 'Response Latency', value: '< 120ms' },
                  ]}
                  tags={['React', 'TypeScript', 'Express', 'Tailwind']}
                  href="/portfolio"
                  gradientFrom="from-brand-accent/20"
                  gradientTo="to-emerald-500/10"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* 5. Editorial Blog & Testimonial Preview */}
        <Section spacing="sm">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Blog Card */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white font-display">
                  4. Editorial Blog Card
                </h3>
                <BlogCard
                  title="Architecting Next.js 14 Monorepos for High-Growth Digital Agencies"
                  excerpt="How modern enterprise agencies streamline code sharing between public web portals, client dashboards, and microservice APIs with strict TypeScript contracts."
                  category="Engineering"
                  publishDate="Oct 11, 2026"
                  readTime="6 min read"
                  href="/blog"
                />
              </div>

              {/* Testimonial Card */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white font-display">
                  5. Verified Client Testimonial Card
                </h3>
                <TestimonialCard
                  quote="LeaveCode modernized our web infrastructure with precision. Their engineering team delivered our custom web application on schedule with exceptional code quality."
                  clientName="Executive Director"
                  role="Head of Operations"
                  company="Enterprise Partner"
                  projectScope="Full-Stack Web Engineering"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* 6. FAQ Accordion Preview */}
        <Section spacing="sm">
          <Container>
            <div className="space-y-6">
              <SectionHeading
                badge="Questions & Answers"
                title="Accessible FAQ Accordion"
                description="Interactive, keyboard-navigable accordion designed for high clarity and SEO FAQPage schema integration."
              />
              <FAQAccordion items={sampleFaq} />
            </div>
          </Container>
        </Section>

        {/* 7. CTA Section Component */}
        <CTASection
          badge="Start Your Digital Transformation"
          title="Ready to Build a High-Converting Technology Platform?"
          description="Speak directly with our engineering team in Florida or New Delhi to architect your custom software, web app, or growth engine."
          primaryAction={{
            label: 'Schedule Technical Consultation',
            href: '/contact',
          }}
          secondaryAction={{
            label: 'Explore Pricing Packages',
            href: '/pricing',
          }}
        />
      </main>

      {/* 8. Footer Component Preview */}
      <SiteFooter />
    </div>
  );
}
