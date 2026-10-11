import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | LeaveCode Technologies',
  description:
    'Privacy Policy of Leavecode Technologies Private Limited regarding user data collection, processing, and protection.',
  alternates: {
    canonical: 'https://leavecode.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | LeaveCode Technologies',
    description:
      'Privacy Policy of Leavecode Technologies Private Limited regarding user data collection, processing, and protection.',
    url: 'https://leavecode.com/privacy-policy',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        </Container>

        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              level="h1"
              badge="Compliance & Governance"
              title="Privacy Policy"
              description="Last updated: October 2026. How LeaveCode Technologies handles and safeguards your personal and commercial information."
            />
          </Container>
        </Section>

        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide" className="max-w-4xl space-y-8 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white font-display">1. Information We Collect</h2>
              <p>
                LeaveCode Technologies collects information provided voluntarily when you submit an inquiry form, request a project quote, communicate with our engineering team, or subscribe to our insights newsletter. This may include your name, business email address, phone number, company name, and project specifications.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white font-display">2. Use of Information</h2>
              <p>
                We use collected information solely to provide technical proposals, deliver contracted software engineering services, execute digital marketing campaigns, process verified invoices, and maintain professional client communications. We never sell, rent, or monetize your contact information to third parties.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white font-display">3. Confidentiality & Non-Disclosure (NDA)</h2>
              <p>
                All proprietary client assets, codebase architectures, business metrics, and strategic communications are handled under strict confidentiality. We sign formal Non-Disclosure Agreements upon request prior to detailed architectural discovery.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white font-display">4. Cookies & Analytics</h2>
              <p>
                Our public website utilizes privacy-compliant analytics cookies (Google Analytics 4) to understand aggregate traffic volumes, browser types, and conversion funnels. You may disable cookies via your browser preferences without losing site access.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white font-display">5. Contact Information</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request data deletion, contact our Data Governance Officer at <a href="mailto:privacy@leavecode.com" className="text-brand-light underline">privacy@leavecode.com</a> or write to LeaveCode Technologies, 6770 Lantana Road Suite #6, Lake Worth, FL 33467.
              </p>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
