import React from 'react';
import { Quote } from 'lucide-react';
import { cn } from './Container';

export interface TestimonialCardProps {
  quote: string;
  clientName: string;
  role: string;
  company: string;
  projectScope?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  clientName,
  role,
  company,
  projectScope,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-surface-card border border-surface-border',
        'hover:border-surface-border-hover transition-all duration-300 shadow-surface-card',
        className
      )}
    >
      <Quote className="w-8 h-8 text-brand-primary/40 mb-4" />

      <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="pt-4 border-t border-surface-border flex items-center justify-between">
        <div>
          <div className="font-semibold text-white font-display text-sm">{clientName}</div>
          <div className="text-xs text-slate-400">
            {role}, <span className="text-slate-300 font-medium">{company}</span>
          </div>
        </div>

        {projectScope && (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-850 text-brand-light border border-surface-border">
            {projectScope}
          </span>
        )}
      </div>
    </div>
  );
}
