'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Building,
  Mail,
  User,
  Phone,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { useProjectModal } from '@/context/ProjectModalContext';

export function StartProjectModal() {
  const { isOpen, closeModal, defaultService } = useProjectModal();

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    serviceCategory: defaultService || 'web-development',
    estimatedBudget: '$5,000 - $15,000',
    timelineRequirement: 'Within 30-60 Days',
    projectScopeDescription: '',
    consentAcknowledged: true,
  });

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceCategory: defaultService }));
    }
  }, [defaultService]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

    try {
      const response = await fetch(`${apiBaseUrl}/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          businessEmail: formData.workEmail,
          phoneNumber: formData.phoneNumber || '',
          companyOrWebsite: formData.companyName || '',
          serviceOfInterest: formData.serviceCategory || 'web-development',
          budgetRange: '5k-15k',
          projectDescription: `[Modal Consultation — Budget: ${formData.estimatedBudget}, Timeline: ${formData.timelineRequirement}] ${formData.projectScopeDescription}`,
          consentGiven: Boolean(formData.consentAcknowledged),
          honeypot: '',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Unable to submit enquiry at this time.');
      }

      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'lead_submission',
          event_label: 'start_project_modal',
          service_of_interest: formData.serviceCategory,
          reference_id: data.data?.referenceId || 'CONFIRMED',
        });
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.warn('Inquiry submission notice:', err.message);
      setErrorMessage(err.message || 'Network error communicating with backend.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-surface-card border border-surface-border rounded-2xl shadow-2xl p-6 sm:p-8 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-surface-border pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-light">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-display">
                Start Your Project Live
              </h2>
              <p className="text-xs text-slate-400">
                Direct consultation with our engineering team in Florida &amp; New Delhi
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-surface-border transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Project Brief Received!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. An engineering director from our team will review your specifications and follow up within 1 business day.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={closeModal}
                className="px-6 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-sm shadow-glow-sm transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-800/60 text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Business Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Company / Organization
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Acme Global Inc"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Phone (Optional)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Service Domain *
                </label>
                <select
                  value={formData.serviceCategory}
                  onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-surface-border text-white text-xs focus:outline-none focus:border-brand-light cursor-pointer"
                >
                  <option value="web-development">Full-Stack Next.js Web</option>
                  <option value="mobile-app-development">Mobile Apps (iOS/Android)</option>
                  <option value="ecommerce-development">Headless E-Commerce</option>
                  <option value="seo-services">Enterprise &amp; Local SEO</option>
                  <option value="performance-marketing">PPC &amp; Performance Ads</option>
                  <option value="ui-ux-branding">UI/UX &amp; Design Systems</option>
                  <option value="website-maintenance">24/7 SLA Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Budget Allocation
                </label>
                <select
                  value={formData.estimatedBudget}
                  onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-surface-border text-white text-xs focus:outline-none focus:border-brand-light cursor-pointer"
                >
                  <option value="$2,000 - $5,000">$2,000 - $5,000 USD</option>
                  <option value="$5,000 - $15,000">$5,000 - $15,000 USD</option>
                  <option value="$15,000 - $30,000">$15,000 - $30,000 USD</option>
                  <option value="$30,000+">$30,000+ USD (Enterprise)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Target Delivery
                </label>
                <select
                  value={formData.timelineRequirement}
                  onChange={(e) => setFormData({ ...formData, timelineRequirement: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-surface-border text-white text-xs focus:outline-none focus:border-brand-light cursor-pointer"
                >
                  <option value="Rush (< 30 Days)">Urgent (&lt; 30 Days)</option>
                  <option value="Standard (30-60 Days)">Standard (30-60 Days)</option>
                  <option value="Flexible / Strategic">Flexible / Strategic</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">
                Project Scope &amp; Deliverables *
              </label>
              <textarea
                required
                rows={3}
                value={formData.projectScopeDescription}
                onChange={(e) => setFormData({ ...formData, projectScopeDescription: e.target.value })}
                placeholder="Tell us about your objectives, current architecture, or key features..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-light"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-surface-border">
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero spam • Strict NDA protection</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2.5 rounded-xl border border-surface-border text-slate-400 hover:text-white hover:bg-slate-900 text-xs font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold text-xs shadow-glow-sm transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Project Brief</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
