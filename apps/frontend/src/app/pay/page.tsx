import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CreditCard,
  ShieldCheck,
  Lock,
  ArrowRight,
  CheckCircle2,
  Building,
  HelpCircle,
  Clock,
} from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Buttons';

export const metadata: Metadata = {
  title: 'Secure Client Invoice & Milestone Payment Portal | LeaveCode Technologies',
  description:
    'Make secure online invoice and retainer milestone payments to LeaveCode Technologies via corporate card, ACH, or wire transfer.',
  alternates: {
    canonical: 'https://leavecode.com/pay',
  },
  openGraph: {
    title: 'Client Payment Portal | LeaveCode Technologies',
    description:
      'Secure payment processing for active LeaveCode client invoices and retainer agreements.',
    url: 'https://leavecode.com/pay',
    siteName: 'LeaveCode Technologies',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PaymentPortalPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Client Payment Portal' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              badge="Client Invoicing & Settlements"
              title="Secure Client Payment Portal"
              description="Settle project milestone deposits, monthly SEO retainers, or SLA maintenance invoices with bank-grade 256-bit encryption."
            />
          </Container>
        </Section>

        {/* Payment Methods & Invoice Lookup */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide" className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Payment Processing Card */}
              <div className="p-8 rounded-2xl bg-surface-card border border-surface-border space-y-6 shadow-surface-card flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-light">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">Pay by Card or Digital Wallet</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We accept Visa, MasterCard, American Express, and corporate purchasing cards with automated receipt generation.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Invoice Number *</label>
                      <input
                        type="text"
                        placeholder="e.g. INV-2026-084"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Company / Client Name *</label>
                      <input
                        type="text"
                        placeholder="Your Company Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Payment Amount (USD) *</label>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <a
                    href="mailto:billing@leavecode.com?subject=Invoice Payment Inquiry"
                    className="w-full py-3 px-4 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-glow-sm transition-all text-center"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Proceed to Secure Checkout</span>
                  </a>

                  <div className="text-center text-[11px] font-mono text-slate-500 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>256-Bit SSL Encrypted Processing</span>
                  </div>
                </div>
              </div>

              {/* Bank Wire / ACH Information Card */}
              <div className="p-8 rounded-2xl bg-surface-card border border-surface-border space-y-6 shadow-surface-card flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-surface-border flex items-center justify-center text-slate-300">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">ACH &amp; International Wire Transfer</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    For enterprise retainers and invoices exceeding $5,000 USD, direct bank transfer is recommended to eliminate processing fees.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-950 border border-surface-border space-y-2.5 text-xs font-mono">
                    <div className="text-slate-400">
                      Beneficiary: <span className="text-white font-semibold">LeaveCode Technologies</span>
                    </div>
                    <div className="text-slate-400">
                      US Entity: <span className="text-white">Lake Worth, FL 33467 (USA)</span>
                    </div>
                    <div className="text-slate-400">
                      Currency: <span className="text-emerald-400 font-semibold">USD / EUR / INR</span>
                    </div>
                    <div className="text-slate-400">
                      Processing Time: <span className="text-white">1–2 Business Days</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400">
                    To receive specific routing details and SWIFT/BIC codes for wire transfers, please contact our accounts department directly.
                  </p>
                </div>

                <div className="pt-4">
                  <SecondaryButton href="mailto:billing@leavecode.com" size="md" className="w-full justify-center">
                    Request Wire Transfer Instructions
                  </SecondaryButton>
                </div>
              </div>
            </div>

            {/* Assistance Banner */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-900/50 border border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-brand-light flex-shrink-0" />
                <div className="text-xs text-slate-300">
                  Questions about an existing invoice? Our finance team is available Monday–Friday 9AM–6PM EST.
                </div>
              </div>
              <a
                href="mailto:billing@leavecode.com"
                className="text-xs font-mono font-semibold text-brand-light hover:text-white transition-colors"
              >
                billing@leavecode.com &rarr;
              </a>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
