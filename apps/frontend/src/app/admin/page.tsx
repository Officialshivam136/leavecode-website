import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Editorial & Lead Administration Portal | LeaveCode Technologies',
  description: 'Restricted administrative console for LeaveCode Technologies editorial and lead management.',
  alternates: {
    canonical: 'https://leavecode.com/admin',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AdminPortalPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full flex items-center justify-center py-16">
        <Container size="sm" className="max-w-md">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-surface-border space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand-primary/15 border border-brand-primary/30 text-brand-light">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white font-display">
                  Protected Editorial &amp; Admin Console
                </h1>
                <p className="text-xs text-slate-400">
                  Authorized personnel only • JWT RBAC enforced
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Administrative operations for creating, editing, previewing, publishing, unpublishing, and deleting articles and leads are protected via authenticated REST endpoints at <code className="text-brand-light font-mono">/api/v1/blog/admin</code> and <code className="text-brand-light font-mono">/api/v1/leads</code>.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-surface-border flex items-center gap-2.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>This route is excluded from search indexing via noindex and robots.txt.</span>
            </div>

            <Link
              href="/"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-surface-border text-xs font-semibold text-white transition-colors"
            >
              <span>Return to Public Site</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </div>
  );
}
