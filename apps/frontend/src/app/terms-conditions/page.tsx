import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms & Conditions | LeaveCode Technologies',
  description:
    'Terms and conditions governing web development, SEO retainers, consulting agreements, and digital services delivered by Leavecode Technologies Private Limited.',
  alternates: {
    canonical: 'https://leavecode.com/terms-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | LeaveCode Technologies',
    description:
      'Terms and conditions governing web development, SEO retainers, consulting agreements, and digital services delivered by Leavecode Technologies Private Limited.',
    url: 'https://leavecode.com/terms-conditions',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
        </Container>

        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              level="h1"
              badge="Client Agreement"
              title="Terms & Conditions"
              description="Last updated: October 2026. Standard commercial engagement terms for digital services provided by LeaveCode Technologies."
            />
          </Container>
        </Section>

        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide" className="max-w-4xl space-y-8 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white font-display">1. Engagement & Deliverables</h2>
              <p>
                All project scopes, engineering milestones, and deliverables are formally outlined in an executed Statement of Work (SOW) or digital package agreement. Any alterations to agreed functionality require written approval and may adjust delivery timelines or costs.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white font-display">2. Intellectual Property & Ownership</h2>
              <p>
                Upon final payment settlement of all invoices associated with an engagement, full intellectual property rights, repository codebases, and custom design assets transfer irrevocably to the client, excluding LeaveCode proprietary boilerplates and standard open-source libraries.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white font-display">3. Payment & Invoicing Terms</h2>
              <p>
                Fixed-price milestones are due within 14 calendar days of invoice presentation. Ongoing monthly retainers (SEO, PPC management, SLA maintenance) are billed at the beginning of each billing cycle. Payments may be made via credit card, ACH, or bank wire transfer.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white font-display">4. Warranty & Defect Resolution</h2>
              <p>
                LeaveCode provides a 30-day post-launch warranty on custom development, during which time any bugs or defects in approved specifications are remediated at zero additional cost.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white font-display">5. Governing Law</h2>
              <p>
                These terms shall be governed in accordance with applicable commercial laws of the State of Florida (for US engagements) and Indian commercial statutes (for domestic India operations).
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
