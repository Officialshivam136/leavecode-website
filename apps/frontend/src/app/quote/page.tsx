'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Send,
  Sparkles,
  Layers,
  Clock,
  DollarSign,
  AlertCircle,
} from 'lucide-react';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { Container, Section } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PrimaryButton } from '@/components/ui/Buttons';

export default function QuotePage() {
  const [projectType, setProjectType] = useState<'informative' | 'ecommerce' | 'custom_app'>('informative');
  const [pageCount, setPageCount] = useState<'1-5' | '6-12' | '13-25' | '25+'>('6-12');
  const [features, setFeatures] = useState<string[]>(['seo', 'responsive']);
  const [timeline, setTimeline] = useState<'rush' | 'standard' | 'flexible'>('standard');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });

  const toggleFeature = (f: string) => {
    if (features.includes(f)) {
      setFeatures(features.filter((item) => item !== f));
    } else {
      setFeatures([...features, f]);
    }
  };

  const calculateEstimate = () => {
    let base = projectType === 'informative' ? 1800 : projectType === 'ecommerce' ? 3500 : 5000;
    if (pageCount === '6-12') base += 800;
    if (pageCount === '13-25') base += 1800;
    if (pageCount === '25+') base += 3200;

    base += features.length * 400;
    if (timeline === 'rush') base *= 1.25;

    return Math.round(base);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

    try {
      const res = await fetch(`${apiBaseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          businessEmail: formData.email,
          phoneNumber: formData.phone || '',
          companyOrWebsite: formData.company || '',
          serviceOfInterest:
            projectType === 'ecommerce' ? 'ecommerce-development' : 'web-development',
          budgetRange: '5k-15k',
          projectDescription: `Interactive Quote Scope ($${calculateEstimate()} Est.): Type=${projectType}, Pages=${pageCount}, Timeline=${timeline}, Features=${features.join(
            ', '
          )}. Notes: ${formData.notes || 'None'}`,
          consentGiven: true,
          honeypot: '',
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'lead_submission',
          event_label: 'interactive_quote_estimator',
          service_of_interest:
            projectType === 'ecommerce' ? 'ecommerce-development' : 'web-development',
          value: calculateEstimate(),
          currency: 'USD',
          reference_id: data?.data?.referenceId || 'CONFIRMED',
        });
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* Breadcrumb Navigation */}
        <Container size="wide" className="pt-6">
          <Breadcrumbs items={[{ label: 'Interactive Project Quote Estimator' }]} />
        </Container>

        {/* Hero Section */}
        <Section spacing="sm" className="border-b border-surface-border">
          <Container size="wide">
            <SectionHeading
              level="h1"
              badge="Interactive Scope Estimator"
              title="Calculate Your Project Scope & Estimate"
              description="Customize your requirements for custom web presence, headless e-commerce, or full-stack software development to receive a transparent architectural and cost breakdown."
            />
          </Container>
        </Section>

        {/* Interactive Estimator Form */}
        <Section spacing="default" className="border-b border-surface-border">
          <Container size="wide" className="max-w-5xl">
            {submitted ? (
              <div className="p-10 rounded-2xl bg-surface-card border border-emerald-800 text-center space-y-6 max-w-2xl mx-auto shadow-surface-card">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Project Estimate Submitted!
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our engineering team in Lake Worth, FL and New Delhi has received your scope parameters (Est. ${calculateEstimate().toLocaleString()}). We will review your technical specifications and deliver a formal architectural proposal within 1 business day.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <PrimaryButton href="/" size="md">
                    Return to Homepage
                  </PrimaryButton>
                  <PrimaryButton href="/portfolio" size="md">
                    Browse Portfolio
                  </PrimaryButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: Interactive Configurator */}
                <div className="lg:col-span-7 space-y-8">
                  {/* Step 1: Project Type */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand-primary text-white text-xs flex items-center justify-center">1</span>
                      Select Platform Architecture:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setProjectType('informative')}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          projectType === 'informative'
                            ? 'bg-brand-primary/10 border-brand-primary text-white shadow-glow-sm'
                            : 'bg-surface-card border-surface-border text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="font-semibold text-sm">Informative Website</div>
                        <div className="text-xs text-slate-400 mt-1">Corporate &amp; lead capture</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setProjectType('ecommerce')}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          projectType === 'ecommerce'
                            ? 'bg-brand-primary/10 border-brand-primary text-white shadow-glow-sm'
                            : 'bg-surface-card border-surface-border text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="font-semibold text-sm">E-Commerce Storefront</div>
                        <div className="text-xs text-slate-400 mt-1">Catalog, cart &amp; checkout</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setProjectType('custom_app')}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          projectType === 'custom_app'
                            ? 'bg-brand-primary/10 border-brand-primary text-white shadow-glow-sm'
                            : 'bg-surface-card border-surface-border text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="font-semibold text-sm">Custom Web App</div>
                        <div className="text-xs text-slate-400 mt-1">Complex workflows &amp; APIs</div>
                      </button>
                    </div>
                  </div>

                  {/* Step 2: Page Complexity */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand-primary text-white text-xs flex items-center justify-center">2</span>
                      Estimated Page / Screen Volume:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {(['1-5', '6-12', '13-25', '25+'] as const).map((pages) => (
                        <button
                          key={pages}
                          type="button"
                          onClick={() => setPageCount(pages)}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            pageCount === pages
                              ? 'bg-brand-primary/10 border-brand-primary text-white font-semibold'
                              : 'bg-surface-card border-surface-border text-slate-400 hover:text-white'
                          }`}
                        >
                          <div className="text-sm">{pages} Pages</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Key Functional Features */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand-primary text-white text-xs flex items-center justify-center">3</span>
                      Included Technical Modules:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'seo', label: 'Technical SEO & Schema Markup' },
                        { id: 'responsive', label: 'Mobile-First UI & Responsive Grid' },
                        { id: 'cms', label: 'Headless CMS / Blog Management' },
                        { id: 'payments', label: 'Payment Gateway Integration' },
                        { id: 'analytics', label: 'Advanced GA4 & Conversion Tracking' },
                        { id: 'security', label: 'SLA Maintenance & Security Hardening' },
                      ].map((item) => {
                        const checked = features.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => toggleFeature(item.id)}
                            className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                              checked
                                ? 'bg-slate-900 border-brand-light text-white'
                                : 'bg-surface-card border-surface-border text-slate-400 hover:text-slate-300'
                            }`}
                          >
                            <span className="text-xs font-medium">{item.label}</span>
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center text-xs ${
                                checked ? 'bg-brand-primary text-white' : 'border border-slate-600'
                              }`}
                            >
                              {checked && '✓'}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div className="space-y-4 pt-4 border-t border-surface-border">
                    <div className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand-primary text-white text-xs flex items-center justify-center">4</span>
                      Your Contact &amp; Company Details:
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-card border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light"
                          placeholder="Jane Smith"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-card border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light"
                          placeholder="jane@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Phone Number (Optional)</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-card border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1">Company / Website</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-card border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Project Notes &amp; Objectives</label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-card border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light"
                        placeholder="Describe your current site, specific design requirements, or migration deadlines..."
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Live Summary & Submission Card */}
                <div className="lg:col-span-5">
                  <div className="sticky top-28 p-7 rounded-2xl bg-surface-card border border-surface-border space-y-6 shadow-surface-card">
                    <div className="flex items-center gap-2 border-b border-surface-border pb-3">
                      <Calculator className="w-5 h-5 text-brand-light" />
                      <h3 className="text-base font-bold font-mono text-white uppercase tracking-wider">
                        Estimated Scope Summary
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between text-xs py-1 border-b border-surface-border/60">
                        <span className="text-slate-400">Architecture:</span>
                        <span className="text-white font-mono uppercase font-semibold">{projectType.replace('_', ' ')}</span>
                      </div>

                      <div className="flex justify-between text-xs py-1 border-b border-surface-border/60">
                        <span className="text-slate-400">Page Volume:</span>
                        <span className="text-white font-mono font-semibold">{pageCount} Pages</span>
                      </div>

                      <div className="flex justify-between text-xs py-1 border-b border-surface-border/60">
                        <span className="text-slate-400">Active Modules:</span>
                        <span className="text-white font-mono font-semibold">{features.length} Selected</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950 border border-brand-primary/40 text-center space-y-1">
                        <div className="text-xs font-mono text-slate-400 uppercase">Estimated Budget Range</div>
                        <div className="text-3xl font-mono font-extrabold text-brand-light">
                          ${calculateEstimate().toLocaleString()}
                          <span className="text-xs font-normal text-slate-500 ml-1">USD</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono">
                          *Subject to final engineering requirements specification
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 px-4 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-glow-sm transition-all disabled:opacity-50 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>{loading ? 'Submitting Scope...' : 'Submit Scope for Formal Proposal'}</span>
                      </button>

                      <div className="text-center text-[11px] text-slate-500 font-mono flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Strict NDA &amp; Zero Spam Policy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}
