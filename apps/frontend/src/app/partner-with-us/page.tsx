import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Handshake,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
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
  title: 'Partner With LeaveCode Technologies | Agency White-Label & Referral Program',
  description:
    'Collaborate with LeaveCode Technologies as an agency partner, white-label engineering provider, or referral affiliate with competitive margins.',
  alternates: {
    canonical: 'https://leavecode.com/partner-with-us',
  },
  openGraph: {
    title: 'Partner With LeaveCode Technologies',
    description:
      'Agency white-label development, technical co-venturing, and referral programs.',
    url: 'https://leavecode.com/partner-with-us',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
};

export default function PartnerWithUsPage() {
  const partnerTracks = [
    {
      title: 'Agency White-Label Delivery',
      desc: 'Extend your design or marketing agency capacity with our dedicated full-stack engineering and technical SEO teams working invisibly under your brand.',
      benefits: [
        'Strict Non-Disclosure Agreement (NDA) guarantees',
        'Direct Slack/Teams integration with your account managers',
        'Wholesale agency rate cards with predictable margins',
        'Senior QA and technical architecture reviews included',
      ],
      ctaText: 'Apply for White-Label Program',
    },
    {
      title: 'Affiliate & Referral Partners',
      desc: 'Introduce companies in need of custom software, e-commerce migrations, or enterprise SEO to LeaveCode and earn recurring revenue share.',
      benefits: [
        'Transparent 10% to 15% revenue share on closed contracts',
        'Prompt milestone payouts upon client invoice settlement',
        'Dedicated sales engineering support for pitch discovery calls',
        'Dedicated affiliate tracking and quarterly statements',
      ],
      ctaText: 'Join Referral Network',
    },
    {
      title: 'Strategic Co-Venturing & Integrations',
      desc: 'Are you a SaaS platform, hosting provider, or payment gateway? Let us collaborate on joint customer integrations and co-marketing webinars.',
      benefits: [
        'Certified implementation partner status',
        'Joint technical case studies and PR distribution',
        'Dedicated engineering sandbox and API integration support',
        'Direct co-selling pipeline sharing',
      ],
      ctaText: 'Propose Integration Partnership',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Partner With Us' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              level="h1"
              badge="Agency Partnerships & Collaborations"
              title="Scale Your Technical Output with a Reliable Global Partner"
              description="Whether you are an established design agency requiring high-velocity web engineering or a business consultant seeking reliable referral monetization, LeaveCode provides transparent partnerships."
            />
          </Container>
        </Section>

        {/* Partnership Tracks Grid */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnerTracks.map((track, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-all"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white font-display">{track.title}</h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{track.desc}</p>
                    </div>

                    <div className="pt-4 border-t border-surface-border space-y-3">
                      <div className="text-xs font-mono text-brand-light uppercase tracking-wider">
                        Key Advantages:
                      </div>
                      <ul className="space-y-2.5">
                        {track.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <PrimaryButton href="/contact" size="md" className="w-full justify-center">
                      {track.ctaText}
                    </PrimaryButton>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Trust & SLA Guarantees */}
        <Section spacing="default" className="border-b border-surface-border bg-slate-900/30">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-2xl bg-slate-950 border border-surface-border space-y-3">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Full NDA Protection</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We never contact your clients directly or disclose our white-label engagement without explicit prior authorization.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-surface-border space-y-3">
                <DollarSign className="w-8 h-8 text-brand-light mx-auto" />
                <h4 className="text-base font-bold text-white">Guaranteed Margins</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our wholesale engineering pricing gives your agency healthy 40%–60% margins on client billings.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-surface-border space-y-3">
                <TrendingUp className="w-8 h-8 text-brand-accent mx-auto" />
                <h4 className="text-base font-bold text-white">Dedicated Account Leads</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Seamless communication bridging US and Indian timezones with experienced technical scrum masters.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <CTASection
          badge="Start the Conversation"
          title="Ready to Partner with LeaveCode?"
          description="Send us a message or schedule an agency briefing call with our leadership team."
          primaryAction={{
            label: 'Discuss Agency Partnership',
            href: '/contact',
          }}
          secondaryAction={{
            label: 'View Our Portfolio',
            href: '/portfolio',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
