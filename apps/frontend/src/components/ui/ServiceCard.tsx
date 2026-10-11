import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from './Container';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
  href: string;
  badge?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  tags,
  href,
  badge,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-surface-card border border-surface-border',
        'hover:border-surface-border-hover hover:bg-slate-900 transition-all duration-300 shadow-surface-card',
        'hover:-translate-y-1 hover:shadow-glow-sm',
        className
      )}
    >
      <div>
        {/* Top Icon & Badge Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-light group-hover:scale-105 group-hover:bg-brand-primary/20 group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          {badge && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              {badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white group-hover:text-brand-light transition-colors font-display mb-3">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Tags and Action Link */}
      <div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-850 text-slate-400 border border-surface-border"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 group-hover:text-brand-light transition-colors focus-visible:ring-1 focus-visible:ring-brand-light rounded"
        >
          <span>Explore Capability</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
