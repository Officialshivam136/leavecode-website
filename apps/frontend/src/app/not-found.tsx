import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, Home, Compass } from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container } from '@/components/ui/Container';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';

export const metadata: Metadata = {
  title: '404 Page Not Found | LeaveCode Technologies',
  description: 'The requested page could not be found on LeaveCode Technologies.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full flex items-center justify-center py-16">
        <Container size="default" className="text-center space-y-6 max-w-2xl">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-slate-900 text-amber-400 border border-amber-500/30">
              HTTP 404 • Resource Not Found
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg mx-auto">
              The URL you requested does not exist or has been permanently removed. Explore our core services, client portfolio, or HTML sitemap below.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <PrimaryButton href="/" size="md" icon={<Home className="w-4 h-4" />}>
              Return to Homepage
            </PrimaryButton>
            <SecondaryButton href="/services" size="md" icon={<Compass className="w-4 h-4" />}>
              Explore Services
            </SecondaryButton>
            <Link
              href="/sitemap"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-surface-border text-xs font-semibold text-slate-200 transition-colors"
            >
              <span>View HTML Sitemap</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-light" />
            </Link>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
