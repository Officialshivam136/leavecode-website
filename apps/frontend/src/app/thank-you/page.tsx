import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';

export const metadata: Metadata = {
  title: 'Thank You for Reaching Out | LeaveCode Technologies',
  description:
    'Your inquiry has been successfully received by LeaveCode Technologies. An engineering lead will review your requirements shortly.',
  alternates: {
    canonical: 'https://leavecode.com/thank-you',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full flex items-center justify-center py-20">
        <Container size="default" className="text-center space-y-8 max-w-2xl">
          <div className="w-20 h-20 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-emerald-950/80 text-emerald-400 border border-emerald-800">
              Message Received
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Thank You for Contacting LeaveCode
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              We have received your message. A senior solutions architect from our Lake Worth, Florida or New Delhi engineering team will review your project scope and respond within 1 business day.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-3 text-left">
            <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
              What Happens Next?
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-brand-light font-bold">1.</span>
                <span>Our lead architects review your technical specs and domain requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-light font-bold">2.</span>
                <span>We prepare preliminary architectural options and estimated timeline milestones.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-light font-bold">3.</span>
                <span>We schedule a direct discovery consultation at your convenience.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <PrimaryButton href="/" size="lg">
              Return to Homepage
            </PrimaryButton>
            <SecondaryButton href="/portfolio" size="lg">
              Explore Client Portfolio
            </SecondaryButton>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
