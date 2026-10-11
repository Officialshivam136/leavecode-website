import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from './Container';

export interface ProjectCardProps {
  title: string;
  category: string;
  summary: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  href: string;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

export function ProjectCard({
  title,
  category,
  summary,
  impactMetrics,
  tags,
  href,
  gradientFrom = 'from-brand-primary/20',
  gradientTo = 'to-brand-accent/10',
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-card border border-surface-border',
        'hover:border-surface-border-hover transition-all duration-300 shadow-surface-card hover:-translate-y-1 hover:shadow-glow-sm',
        className
      )}
    >
      {/* Abstract Mockup / Technology Graphic Banner */}
      <div className={cn('relative h-48 w-full bg-gradient-to-br border-b border-surface-border p-6 flex flex-col justify-between overflow-hidden', gradientFrom, gradientTo)}>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Top category label */}
        <div className="relative z-10 flex justify-between items-center">
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-950/80 backdrop-blur-md text-slate-300 border border-white/10">
            {category}
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur-md flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-brand-primary transition-colors">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Abstract Architectural Wireframe Overlay */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-300 tracking-wider">VERIFIED PRODUCTION SYSTEM</span>
        </div>
      </div>

      {/* Card Content & Proof Points */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-brand-light transition-colors font-display mb-2">
            {title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            {summary}
          </p>

          {/* Real Deliverable Metrics / Scope Points */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-850/80 border border-surface-border mb-6">
            {impactMetrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-xs text-slate-400 font-medium">{m.label}</div>
                <div className="text-base font-bold text-white font-mono">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills & Link */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-surface-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-brand-light rounded"
          >
            <span>View Architecture Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
