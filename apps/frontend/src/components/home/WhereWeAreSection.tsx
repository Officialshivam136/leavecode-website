import React from 'react';
import { MapPin, Navigation, Phone, Mail, ExternalLink, Globe2, Building2 } from 'lucide-react';
import { Container, Section } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { verifiedOfficeInfo } from '@/data/homepageData';

export function WhereWeAreSection() {
  return (
    <Section id="where-we-are" spacing="default" className="border-b border-surface-border bg-slate-900/20">
      <Container size="wide">
        <SectionHeading
          badge="Where We Are"
          title="Locate Our Bijnor Office & Global Presence"
          description="Click on the interactive map or office address below to get instant directions and locate Leavecode Technologies Private Limited in Bijnor, Uttar Pradesh, alongside our US and New Delhi centers."
        />

        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Office Address Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Primary Card: Bijnor Corporate & Registered Office */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-card border-2 border-brand-primary/50 shadow-glow-sm space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/15 text-brand-light border border-brand-primary/30">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent animate-bounce" />
                  <span>Primary Corporate Office • Bijnor</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  Verified HQ
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white font-display">
                  Leavecode Technologies Private Limited
                </h3>
                <a
                  href={verifiedOfficeInfo.bijnorMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-slate-200 hover:text-brand-light transition-colors leading-relaxed group"
                >
                  <span className="underline decoration-brand-light/40 group-hover:decoration-brand-light underline-offset-4">
                    House Number-24, Village and Post-Kharak, Distt, Bijnor, Uttar Pradesh 246701
                  </span>
                </a>
              </div>

              {/* Direct Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-surface-border text-xs font-mono">
                <a
                  href="tel:+918126852802"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  <span>+91 (812) 685-2802</span>
                </a>
                <a
                  href="tel:+918383998506"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>+91 (838) 399-8506</span>
                </a>
                <a
                  href="mailto:info@leavecode.com"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors sm:col-span-2"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-light flex-shrink-0" />
                  <span>info@leavecode.com / harry@leavecode.com</span>
                </a>
              </div>

              {/* Direct Action Button to Locate Bijnor Office on Google Maps */}
              <div className="pt-1">
                <a
                  href={verifiedOfficeInfo.bijnorMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-primary hover:bg-brand-hover text-white font-semibold text-xs shadow-glow-sm transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Click to Locate Bijnor Office on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Secondary Card: United States Office */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-light uppercase">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>United States Client Center</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=6770+Lantana+Road+Suite+6+Lake+Worth+FL+33467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-brand-light hover:underline inline-flex items-center gap-1"
                >
                  <span>View Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white font-display">
                6770 Lantana Road Suite #6 Lake Worth, FL 33467 (USA)
              </p>
            </div>

            {/* Secondary Card: New Delhi Operations Hub */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-colors space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>New Delhi Technology Hub</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=D-324+Street+No-11+Near+Laxmi+Nagar+Metro+New+Delhi+110092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-brand-light hover:underline inline-flex items-center gap-1"
                >
                  <span>View Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white font-display">
                D-324, Street No-11, Near Laxmi Nagar Metro, New Delhi 110092
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Bijnor Google Map Embed & Direct Clickable Locator */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl bg-surface-card border border-surface-border overflow-hidden shadow-2xl">
            {/* Map Header Bar */}
            <div className="px-5 py-3.5 bg-slate-950 border-b border-surface-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white font-display">
                  Leavecode Technologies Pvt. Ltd. — Bijnor, Uttar Pradesh
                </span>
              </div>

              <a
                href={verifiedOfficeInfo.bijnorMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-primary/20 hover:bg-brand-primary text-brand-light hover:text-white border border-brand-primary/40 text-xs font-semibold transition-all"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Interactive Google Map Iframe */}
            <div className="relative flex-grow min-h-[340px] sm:min-h-[400px] w-full bg-slate-950">
              <iframe
                title="Leavecode Technologies Private Limited Bijnor Office Location Map"
                src={verifiedOfficeInfo.bijnorEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Clickable Bottom Locator Bar */}
            <a
              href={verifiedOfficeInfo.bijnorMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-slate-950 hover:bg-slate-900 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors group"
            >
              <div className="flex items-center gap-2 text-xs text-slate-300 group-hover:text-white">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>
                  <strong>Bijnor Office:</strong> House Number-24, Village and Post-Kharak, Distt, Bijnor, UP 246701
                </span>
              </div>
              <span className="text-xs font-semibold text-brand-light group-hover:underline inline-flex items-center gap-1 flex-shrink-0">
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
