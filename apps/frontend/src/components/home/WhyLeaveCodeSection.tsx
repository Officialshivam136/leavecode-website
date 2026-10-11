import React from 'react';
import { Cpu, ShieldCheck, Zap, GitMerge, FileCode, CheckCircle2 } from 'lucide-react';
import { Container, Section } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

const differentiators = [
  {
    icon: <Cpu className="w-6 h-6 text-brand-primary" />,
    title: 'Custom Tailored Solutions Over Clunky Templates',
    description: 'We replace fragile, slow-loading generic templates with clean, lightning-fast digital solutions built specifically for your business goals and customer journey.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-accent" />,
    title: 'Zero-Risk SEO & Traffic Preservation',
    description: 'Every existing URL, backlink, and organic keyword position is preserved with precision mapping so your business never loses organic search visibility.',
  },
  {
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    title: 'Sub-Second Page Speed & Mobile Conversion',
    description: 'We build for real visitors on all mobile devices, achieving sub-second load times that keep bounce rates minimal and maximize customer checkout conversion.',
  },
  {
    icon: <GitMerge className="w-6 h-6 text-purple-400" />,
    title: 'White-Label Agency Excellence',
    description: 'We work seamlessly as your dedicated technology and marketing arm, offering transparent white-label delivery with strict NDA guarantees and reliable turnaround.',
  },
  {
    icon: <FileCode className="w-6 h-6 text-amber-400" />,
    title: '100% Client Ownership & No Lock-In',
    description: 'You own your website, code, design files, and domain configurations completely upon delivery with zero recurring license penalties or vendor lock-in.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-sky-400" />,
    title: 'Dual-Continent Advisory & 24/7 Support',
    description: 'Direct communication with dedicated project directors across Lake Worth, Florida and India, giving you around-the-clock delivery velocity and peace of mind.',
  },
];

export function WhyLeaveCodeSection() {
  return (
    <Section spacing="default" className="border-b border-surface-border">
      <Container size="wide">
        <SectionHeading
          badge="Why LeaveCode"
          title="Engineered for Scalability, Speed & Commercial Impact"
          description="We combine enterprise software engineering principles with data-driven search marketing to build digital platforms that outlast competitors."
        />

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-colors shadow-surface-card space-y-3.5"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-surface-border flex items-center justify-center">
                {d.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                {d.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
