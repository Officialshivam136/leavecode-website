import React from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Globe2 } from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactEnquiryForm } from '@/components/contact/ContactEnquiryForm';
import { WhereWeAreSection } from '@/components/home/WhereWeAreSection';
import { verifiedOfficeInfo } from '@/data/homepageData';

export const metadata: Metadata = {
  title: 'Contact Engineering & Project Inquiry | LeaveCode Technologies',
  description:
    'Contact LeaveCode Technologies. Schedule technical consultations, request project scoping estimates, or reach our offices in Bijnor UP, New Delhi, and Florida USA.',
  alternates: {
    canonical: 'https://leavecode.com/contact',
  },
  openGraph: {
    title: 'Contact LeaveCode Technologies',
    description: 'Direct inquiry channel to LeaveCode software architects and technical leads.',
    url: 'https://leavecode.com/contact',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
};

export default function ContactPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://leavecode.com/contact#localbusiness',
    name: verifiedOfficeInfo.legalName,
    url: 'https://leavecode.com',
    telephone: verifiedOfficeInfo.phones.indiaPrimary,
    email: verifiedOfficeInfo.emails.primary,
    hasMap: verifiedOfficeInfo.bijnorMapUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House Number-24, Village and Post-Kharak, Distt, Bijnor',
      addressLocality: 'Bijnor',
      addressRegion: 'Uttar Pradesh',
      postalCode: '246701',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.3855577,
      longitude: 78.1238768,
    },
    sameAs: [
      verifiedOfficeInfo.socials.facebook,
      verifiedOfficeInfo.socials.linkedin,
      verifiedOfficeInfo.socials.twitter,
      verifiedOfficeInfo.socials.instagram,
      verifiedOfficeInfo.socials.youtube,
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container>
            <SectionHeading
              level="h1"
              badge="Direct Engineering Channel"
              title="Initiate Your Project Scoping Consultation"
              description="Connect directly with our engineering teams in Bijnor, New Delhi, or Florida to review your requirements, evaluate system architecture, and map out a milestone roadmap."
            />
          </Container>
        </Section>

        {/* Contact Body & Interactive Form */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
              {/* Left Column: Verified Office Footprint & Channels */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white font-display">
                    Global Office Locations
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    LeaveCode operates verified corporate &amp; technical development facilities in Bijnor and New Delhi, India, alongside our international client advisory center in Florida, USA.
                  </p>
                </div>

                {/* Office Cards */}
                <div className="space-y-3.5">
                  {/* Bijnor Primary Office */}
                  <a
                    href={verifiedOfficeInfo.bijnorMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 rounded-2xl bg-surface-card border border-brand-primary/50 hover:border-brand-light transition-colors space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-brand-accent uppercase">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>India Registered Corporate Office (Bijnor)</span>
                      </div>
                      <span className="text-[10px] text-brand-light group-hover:underline">
                        Open Map &rarr;
                      </span>
                    </div>
                    <div className="font-semibold text-white font-display text-sm group-hover:text-brand-light transition-colors">
                      House Number-24, Village and Post-Kharak, Distt, Bijnor, Uttar Pradesh 246701
                    </div>
                    <div className="text-xs text-slate-400 font-mono pt-1">
                      Phone: {verifiedOfficeInfo.phones.indiaPrimary} / {verifiedOfficeInfo.phones.indiaSecondary}
                    </div>
                  </a>

                  {/* USA Office */}
                  <div className="p-4 rounded-2xl bg-surface-card border border-surface-border space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-light uppercase">
                      <Globe2 className="w-3.5 h-3.5" />
                      <span>United States Client Center</span>
                    </div>
                    <div className="font-semibold text-white font-display text-sm">
                      6770 Lantana Road Suite #6 Lake Worth, FL 33467 (USA)
                    </div>
                    <div className="text-xs text-slate-400 font-mono pt-0.5">
                      Phone: <a href="tel:+13862437860" className="text-slate-300 hover:text-white">{verifiedOfficeInfo.phones.usaPrimary}</a>
                    </div>
                  </div>

                  {/* New Delhi Office */}
                  <div className="p-4 rounded-2xl bg-surface-card border border-surface-border space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>New Delhi Technology Hub</span>
                    </div>
                    <div className="font-semibold text-white font-display text-sm">
                      D-324, Street No-11, Near Laxmi Nagar Metro, New Delhi 110092
                    </div>
                  </div>
                </div>

                {/* Direct Emails */}
                <div className="p-5 rounded-2xl bg-surface-card border border-surface-border space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Direct Email Routing
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">General Inquiries:</span>
                      <a href="mailto:info@leavecode.com" className="text-brand-light hover:underline font-semibold">
                        info@leavecode.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Sales &amp; Partnerships:</span>
                      <a href="mailto:harry@leavecode.com" className="text-brand-light hover:underline font-semibold">
                        harry@leavecode.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Careers &amp; HR:</span>
                      <a href="mailto:career@leavecode.com" className="text-slate-300 hover:underline">
                        career@leavecode.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Trust Signal */}
                <div className="p-4 rounded-xl bg-slate-900 border border-surface-border flex items-center gap-3 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Submissions are encrypted and reviewed strictly by our engineering management.</span>
                </div>
              </div>

              {/* Right Column: Live Working Contact & Inquiry Form */}
              <div className="lg:col-span-7">
                <ContactEnquiryForm />
              </div>
            </div>
          </Container>
        </Section>

        {/* Interactive Where We Are & Bijnor Office Google Map */}
        <WhereWeAreSection />
      </main>

      <SiteFooter />
    </div>
  );
}
