import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ChevronRight, MessageSquare, ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/ui/CTASection';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { PrimaryButton } from '@/components/ui/Buttons';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs) | LeaveCode Technologies',
  description:
    'Answers to common questions regarding LeaveCode Technologies, our web engineering process, SEO methodology, pricing, timelines, and post-launch support.',
  alternates: {
    canonical: 'https://leavecode.com/faqs',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQs) | LeaveCode Technologies',
    description:
      'Everything you need to know about partnering with LeaveCode for software development and growth marketing.',
    url: 'https://leavecode.com/faqs',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
};

export default function FAQsPage() {
  const faqSections = [
    {
      category: 'General & Company Background',
      items: [
        {
          question: 'Where is LeaveCode Technologies located?',
          answer:
            'LeaveCode maintains a dual-office operational presence. Our United States headquarters is located at 6770 Lantana Road Suite #6, Lake Worth, FL 33467, overseeing client strategy and account management. Our India Technology Center is located at D-324, Street No-11, Near Laxmi Nagar Metro, New Delhi 110092, providing full-stack engineering and round-the-clock technical operations.',
        },
        {
          question: 'How long has LeaveCode been in business?',
          answer:
            'LeaveCode Technologies has been actively designing, engineering, and optimizing digital systems since 2018, having delivered over 140 commercial web solutions and marketing engagements across North America, Europe, and Asia.',
        },
        {
          question: 'Do you work with startups, SMBs, or enterprise accounts?',
          answer:
            'We serve ambitious organizations across all scales—from funded venture startups launching their initial web product to established healthcare networks, regional retail chains, and international B2B enterprises requiring enterprise SEO and application architecture.',
        },
      ],
    },
    {
      category: 'Web Engineering & Technology Stack',
      items: [
        {
          question: 'What technology stacks do you specialize in?',
          answer:
            'Our core engineering stack centers around Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Node.js, Express, and MongoDB / PostgreSQL. We also support headless Shopify, WordPress enterprise headless integrations, and cross-platform React Native mobile applications.',
        },
        {
          question: 'Will our website be mobile-responsive and fast?',
          answer:
            'Yes. Every platform engineered by LeaveCode is built mobile-first and optimized to achieve sub-1.5 second Largest Contentful Paint (LCP) times with strict adherence to Google Core Web Vitals and WCAG 2.1 AA accessibility guidelines.',
        },
        {
          question: 'Do you provide source code ownership and repository access?',
          answer:
            '100%. Upon final project sign-off and invoice settlement, all intellectual property, source code repositories (GitHub/GitLab), asset files, and deployment configurations are completely owned by the client without vendor lock-in.',
        },
      ],
    },
    {
      category: 'SEO & Organic Growth Methodology',
      items: [
        {
          question: 'How quickly can we expect results from your SEO services?',
          answer:
            'Search Engine Optimization is an organic compounding discipline. While technical crawl fixes, schema markup, and Core Web Vitals optimizations reflect in search console within 3 to 6 weeks, sustained competitive keyword rank increases and measurable traffic volume typically compound over 3 to 6 months of systematic execution.',
        },
        {
          question: 'Do you use white-hat or black-hat SEO techniques?',
          answer:
            'We strictly practice white-hat, Google Webmaster Guidelines-compliant methodologies. We do not use automated link networks, spun spam content, or hidden redirects. Our focus is on high-authority digital outreach, in-depth editorial content, and technical site architecture.',
        },
        {
          question: 'How do you track and report SEO performance?',
          answer:
            'Clients receive regular reporting dashboards integrated with Google Search Console, Google Analytics 4, and keyword ranking monitors, accompanied by scheduled bi-weekly or monthly strategic review calls with our senior growth strategists.',
        },
      ],
    },
    {
      category: 'Billing, Invoicing & Contracts',
      items: [
        {
          question: 'How do project billing and milestones work?',
          answer:
            'Fixed-scope web engineering projects typically follow a structured milestone schedule (e.g., 40% initial deposit, 30% milestone review, 30% final deployment and QA). Ongoing SEO and SLA maintenance packages operate on predictable monthly or quarterly retainers.',
        },
        {
          question: 'Where can existing clients pay invoices online?',
          answer:
            'Clients can conveniently make secure credit card, ACH, or wire payments anytime through our dedicated payment portal at https://leavecode.com/pay.',
        },
        {
          question: 'What happens after our website is launched?',
          answer:
            'Every deployment includes a 30-day post-launch warranty period covering bug resolutions and setup adjustments at no additional charge. Clients can also opt into our 24/7 SLA Website Maintenance Retainers for continued security patches, database backups, and feature enhancements.',
        },
      ],
    },
  ];

  // Schema.org FAQPage Structured Data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSections.flatMap((s) =>
      s.items.map((i) => ({
        '@type': 'Question',
        name: i.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: i.answer,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              level="h1"
              badge="Knowledge Base & Answers"
              title="Frequently Asked Questions"
              description="Transparent answers to common questions about our technical capabilities, international delivery model, SEO methodologies, and engagement contracts."
            />
          </Container>
        </Section>

        {/* FAQ Categories & Accordions */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide" className="max-w-4xl space-y-16">
            {faqSections.map((sec, idx) => (
              <div key={idx} className="space-y-6">
                <div className="border-b border-surface-border pb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-light" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {sec.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {sec.items.map((item, qIdx) => (
                    <div
                      key={qIdx}
                      className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-3"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.question}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Container>
        </Section>

        {/* CTA */}
        <CTASection
          badge="Still Have Questions?"
          title="Speak Directly With an Engineering Lead"
          description="We are ready to address specific architecture questions, review RFPs, or map out an implementation roadmap."
          primaryAction={{
            label: 'Contact Our Team',
            href: '/contact',
          }}
          secondaryAction={{
            label: 'Estimate Your Project',
            href: '/quote',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
