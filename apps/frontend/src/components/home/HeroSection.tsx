import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Calendar, Phone, Award, Star } from 'lucide-react';
import { Container } from '../ui/Container';
import { PrimaryButton, SecondaryButton } from '../ui/Buttons';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-10 md:pb-16 border-b border-surface-border">
      {/* Background Subtle Gradient & Mesh Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Natural Human Agency Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Live Operational Capability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900 border border-brand-light/30 text-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Worldwide Digital Marketing &amp; Web Development Agency</span>
            </div>

            {/* Clear, High-Converting Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold text-white tracking-tight font-display leading-[1.15] max-w-2xl">
              Don&apos;t Worry, LeaveCode is the Best Agency for Your Web &amp; Growth.
            </h1>

            {/* Natural Supporting Copy extracted from LeaveCode */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              We offer one-stop digital marketing, bespoke web design, and authoritative SEO services trusted by clients across the globe. We research your industry, understand your customers, and optimize your conversions to keep you ahead of competition.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <PrimaryButton
                href="/quote"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Free SEO Audit &amp; Proposal
              </PrimaryButton>

              <a
                href="https://meetings.hubspot.com/harry18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-surface-border hover:border-brand-light bg-surface-card hover:bg-slate-850 text-white font-semibold text-sm transition-colors"
              >
                <Calendar className="w-4 h-4 text-brand-light" />
                <span>Book a Discovery Call</span>
              </a>
            </div>

            {/* Direct Value Checkpoints */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 border-t border-surface-border text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>White-Label SEO &amp; Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-light flex-shrink-0" />
                <span>Guaranteed Uptime &amp; Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>USA &amp; India Client Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Trust Commercial Results Showcase (Human Agency Portfolio Card) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-surface-card border border-surface-border shadow-2xl shadow-black/80 p-5 sm:p-6 space-y-4 backdrop-blur-xl">
              {/* Card Header: Client Performance Overview */}
              <div className="flex items-center justify-between border-b border-surface-border pb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white font-display uppercase tracking-wider">
                    Agency Performance Guarantee
                  </span>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                </div>
              </div>

              {/* Direct Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-surface-border space-y-0.5">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Commercial Deployments</div>
                  <div className="text-xl font-bold text-white font-display">140+ Projects</div>
                  <div className="text-[10px] text-emerald-400">Delivered Globally</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-surface-border space-y-0.5">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Client Retention</div>
                  <div className="text-xl font-bold text-white font-display">96.8%</div>
                  <div className="text-[10px] text-brand-light">Long-Term Retainers</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-surface-border space-y-0.5">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Starting Retainer</div>
                  <div className="text-xl font-bold text-white font-display">$250 / mo</div>
                  <div className="text-[10px] text-brand-accent">Fixed Monthly Pricing</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-surface-border space-y-0.5">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Support Availability</div>
                  <div className="text-xl font-bold text-white font-display">24/7 Hours</div>
                  <div className="text-[10px] text-purple-400">Phone, Email &amp; Chat</div>
                </div>
              </div>

              {/* Quick Contact Direct Action Banner */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-brand-primary/30 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Need immediate consultation?</div>
                  <div className="text-xs font-bold text-white mt-0.5">Call Our Direct Line</div>
                </div>
                <a
                  href="tel:+918126852802"
                  className="px-3.5 py-1.5 rounded-lg bg-brand-primary hover:bg-brand-hover text-white text-xs font-semibold shadow-glow-sm transition-all"
                >
                  +91 (812) 685-2802
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
