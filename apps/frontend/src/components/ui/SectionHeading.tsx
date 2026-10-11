import React from 'react';
import { cn } from './Container';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  level?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  level = 'h2',
  className,
  ...props
}: SectionHeadingProps) {
  const HeadingTag = level;

  return (
    <div
      className={cn(
        'space-y-4 max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
      {...props}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-primary/10 border border-brand-primary/20 text-brand-light">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <HeadingTag className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15]">
        {title}
      </HeadingTag>

      {description && (
        <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
