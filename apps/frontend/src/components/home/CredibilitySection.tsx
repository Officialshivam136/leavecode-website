import React from 'react';
import { MapPin, Globe2, ShieldCheck, Mail, Phone } from 'lucide-react';
import { Container } from '../ui/Container';
import { verifiedOfficeInfo } from '@/data/homepageData';

export function CredibilitySection() {
  return (
    <section className="py-6 bg-slate-900/40 border-b border-surface-border">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Bijnor Corporate Office (Clickable Map Link) */}
          <a
            href={verifiedOfficeInfo.bijnorMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-surface-card border border-surface-border hover:border-brand-light transition-colors flex items-start gap-3.5 group"
          >
            <div className="p-2.5 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-light flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-brand-light group-hover:underline">
                Corporate HQ • Locate Map &rarr;
              </div>
              <div className="text-sm font-bold text-white font-display">Bijnor, UP (India)</div>
              <div className="text-xs text-slate-400">House No-24, Kharak, Bijnor 246701</div>
            </div>
          </a>

          {/* 2. Commercial Track Record */}
          <div className="p-4 rounded-xl bg-surface-card border border-surface-border flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Track Record</div>
              <div className="text-sm font-bold text-white font-display">140+ Deployments</div>
              <div className="text-xs text-slate-400">Trusted Global Client Base</div>
            </div>
          </div>

          {/* 3. Verified USA & Delhi Centers */}
          <a
            href="#where-we-are"
            className="p-4 rounded-xl bg-surface-card border border-surface-border hover:border-brand-light transition-colors flex items-start gap-3.5 group"
          >
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-brand-light">
                Where We Are
              </div>
              <div className="text-sm font-bold text-white font-display">Lake Worth, FL &amp; Delhi</div>
              <div className="text-xs text-slate-400">USA &amp; India Advisory Centers</div>
            </div>
          </a>

          {/* 4. Direct Engineering Communication */}
          <div className="p-4 rounded-xl bg-surface-card border border-surface-border flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Contact</div>
              <div className="text-sm font-bold text-white font-display">{verifiedOfficeInfo.phones.indiaPrimary}</div>
              <div className="text-xs text-slate-400">{verifiedOfficeInfo.emails.primary}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
