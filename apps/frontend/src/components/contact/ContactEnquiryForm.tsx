'use client';

import React, { useState } from 'react';
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Shield,
  Building,
  Mail,
  User,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { PrimaryButton } from '../ui/Buttons';

interface FormState {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyOrWebsite: string;
  serviceOfInterest: string;
  budgetRange: string;
  projectDescription: string;
  consentGiven: boolean;
  honeypot: string; // Anti-spam hidden field
}

const initialFormState: FormState = {
  fullName: '',
  businessEmail: '',
  phoneNumber: '',
  companyOrWebsite: '',
  serviceOfInterest: 'web-development',
  budgetRange: 'flexible',
  projectDescription: '',
  consentGiven: false,
  honeypot: '',
};

export function ContactEnquiryForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [successResponse, setSuccessResponse] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field-specific error as user types
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setServerError(null);
    setValidationErrors({});
    setSuccessResponse(null);

    // Client-side quick validation check
    if (!formData.consentGiven) {
      setValidationErrors({ consentGiven: 'You must acknowledge consent to submit an inquiry.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${apiBaseUrl}/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.details && Array.isArray(result.details)) {
          const fieldErrors: Record<string, string> = {};
          result.details.forEach((item: { field: string; message: string }) => {
            fieldErrors[item.field] = item.message;
          });
          setValidationErrors(fieldErrors);
          setServerError('Please review the highlighted fields below.');
        } else {
          setServerError(result.error || 'Unable to submit your inquiry. Please try again.');
        }
        setIsSubmitting(false);
        return;
      }

      // Success
      const refId = result.data?.referenceId || 'CONFIRMED';
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'lead_submission',
          event_label: 'contact_page_form',
          service_of_interest: formData.serviceOfInterest,
          budget_range: formData.budgetRange,
          reference_id: refId,
        });
      }
      setSuccessResponse({
        referenceId: refId,
        message: result.message || 'Inquiry received successfully.',
      });
      setFormData(initialFormState);
    } catch (err: any) {
      setServerError(
        'Connection error: Unable to contact the LeaveCode API server. Please verify your connection or email info@leavecode.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-surface-card border border-surface-border p-6 sm:p-10 shadow-surface-card">
      {successResponse ? (
        <div className="p-8 rounded-xl bg-slate-900 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white font-display">
            Inquiry Successfully Transmitted
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            {successResponse.message}
          </p>
          <div className="p-3 rounded-lg bg-slate-950 font-mono text-xs text-slate-400 max-w-xs mx-auto">
            Reference Tracking ID: <span className="text-white font-bold">{successResponse.referenceId}</span>
          </div>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setSuccessResponse(null)}
              className="text-xs font-semibold text-brand-light hover:underline"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Top Info Notice */}
          <div className="flex items-center gap-2 pb-4 border-b border-surface-border text-xs font-mono text-slate-400">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>End-to-End Server Validated Inquiry Gateway</span>
          </div>

          {/* General Server Error Banner */}
          {serverError && (
            <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-400" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Anti-Spam Hidden Honeypot Field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp-field">Leave this field blank</label>
            <input
              type="text"
              id="hp-field"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          {/* Name & Corporate Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-xs font-semibold uppercase font-mono text-slate-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-brand-light" />
                <span>Full Name <span className="text-rose-400">*</span></span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                  validationErrors.fullName ? 'border-rose-500' : 'border-surface-border'
                } text-white placeholder-slate-600 focus-visible:ring-2 focus-visible:ring-brand-light text-sm`}
              />
              {validationErrors.fullName && (
                <p className="text-xs text-rose-400">{validationErrors.fullName}</p>
              )}
            </div>

            {/* Business Email */}
            <div className="space-y-2">
              <label htmlFor="businessEmail" className="text-xs font-semibold uppercase font-mono text-slate-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-light" />
                <span>Corporate Email <span className="text-rose-400">*</span></span>
              </label>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                required
                value={formData.businessEmail}
                onChange={handleChange}
                placeholder="jane@company.com"
                className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                  validationErrors.businessEmail ? 'border-rose-500' : 'border-surface-border'
                } text-white placeholder-slate-600 focus-visible:ring-2 focus-visible:ring-brand-light text-sm`}
              />
              {validationErrors.businessEmail && (
                <p className="text-xs text-rose-400">{validationErrors.businessEmail}</p>
              )}
            </div>
          </div>

          {/* Phone & Company Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Number (Optional) */}
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="text-xs font-semibold uppercase font-mono text-slate-300 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-accent" />
                <span>Phone Number (Optional)</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                  validationErrors.phoneNumber ? 'border-rose-500' : 'border-surface-border'
                } text-white placeholder-slate-600 focus-visible:ring-2 focus-visible:ring-brand-light text-sm`}
              />
              {validationErrors.phoneNumber && (
                <p className="text-xs text-rose-400">{validationErrors.phoneNumber}</p>
              )}
            </div>

            {/* Company or Website */}
            <div className="space-y-2">
              <label htmlFor="companyOrWebsite" className="text-xs font-semibold uppercase font-mono text-slate-300 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-brand-accent" />
                <span>Company or Website</span>
              </label>
              <input
                type="text"
                id="companyOrWebsite"
                name="companyOrWebsite"
                value={formData.companyOrWebsite}
                onChange={handleChange}
                placeholder="Acme Enterprises / acme.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-surface-border text-white placeholder-slate-600 focus-visible:ring-2 focus-visible:ring-brand-light text-sm"
              />
            </div>
          </div>

          {/* Service & Budget Tier */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service of Interest */}
            <div className="space-y-2">
              <label htmlFor="serviceOfInterest" className="text-xs font-semibold uppercase font-mono text-slate-300">
                Service of Interest <span className="text-rose-400">*</span>
              </label>
              <select
                id="serviceOfInterest"
                name="serviceOfInterest"
                value={formData.serviceOfInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-surface-border text-white focus-visible:ring-2 focus-visible:ring-brand-light text-sm"
              >
                <option value="web-development">Custom Web &amp; Application Development</option>
                <option value="mobile-app-development">Mobile Application Engineering (iOS/Android)</option>
                <option value="ecommerce-development">Headless &amp; Custom E-Commerce</option>
                <option value="seo-services">Technical &amp; Organic SEO Growth</option>
                <option value="performance-marketing">Performance Marketing &amp; Google Ads</option>
                <option value="ui-ux-branding">UI/UX Design &amp; Digital Brand Systems</option>
                <option value="social-media-marketing">Social Media Strategy &amp; Optimization</option>
                <option value="app-store-optimization">App Store Optimization (ASO)</option>
                <option value="website-maintenance">24/7 SLA &amp; Website Maintenance</option>
                <option value="other">Other / Multi-Discipline Enterprise Engagement</option>
              </select>
            </div>

            {/* Budget Range */}
            <div className="space-y-2">
              <label htmlFor="budgetRange" className="text-xs font-semibold uppercase font-mono text-slate-300">
                Planned Investment Tier
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-surface-border text-white focus-visible:ring-2 focus-visible:ring-brand-light text-sm"
              >
                <option value="flexible">Flexible / Scoping Consultation</option>
                <option value="under-5k">Under $5,000 / Starter Scope</option>
                <option value="5k-15k">$5,000 - $15,000 / Standard Modernization</option>
                <option value="15k-30k">$15,000 - $30,000 / Custom Full-Stack App</option>
                <option value="30k-50k">$30,000 - $50,000 / Multi-Platform Enterprise</option>
                <option value="50k-plus">$50,000+ / Dedicated Engineering Team</option>
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <label htmlFor="projectDescription" className="text-xs font-semibold uppercase font-mono text-slate-300 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-brand-light" />
              <span>Project Architecture &amp; Objectives <span className="text-rose-400">*</span></span>
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              required
              rows={4}
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Please describe your current systems, desired outcomes, key milestones, and target launch window..."
              className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                validationErrors.projectDescription ? 'border-rose-500' : 'border-surface-border'
              } text-white placeholder-slate-600 focus-visible:ring-2 focus-visible:ring-brand-light text-sm`}
            />
            {validationErrors.projectDescription && (
              <p className="text-xs text-rose-400">{validationErrors.projectDescription}</p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="space-y-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="consentGiven"
                checked={formData.consentGiven}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-surface-border bg-slate-950 text-brand-primary focus:ring-brand-light"
              />
              <span className="text-xs text-slate-400 leading-normal">
                I agree to allow LeaveCode Technologies to store and process this inquiry for the purpose of preparing our technical estimate and architectural consultation. Your data will never be sold or shared.
              </span>
            </label>
            {validationErrors.consentGiven && (
              <p className="text-xs text-rose-400 pl-7">{validationErrors.consentGiven}</p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <PrimaryButton
              size="lg"
              className="w-full justify-center"
              isLoading={isSubmitting}
              icon={<Send className="w-4 h-4" />}
            >
              Submit Technical Inquiry
            </PrimaryButton>
          </div>
        </form>
      )}
    </div>
  );
}
