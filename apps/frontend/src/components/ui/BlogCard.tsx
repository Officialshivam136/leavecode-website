import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { cn } from './Container';

export interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  href: string;
  className?: string;
}

export function BlogCard({
  title,
  excerpt,
  category,
  publishDate,
  readTime,
  href,
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        'group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface-card border border-surface-border',
        'hover:border-surface-border-hover transition-all duration-300 shadow-surface-card hover:-translate-y-1',
        className
      )}
    >
      <div>
        {/* Meta Header */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4 font-mono">
          <span className="px-2.5 py-1 rounded bg-brand-primary/10 text-brand-light font-semibold border border-brand-primary/20">
            {category}
          </span>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {publishDate}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          </div>
        </div>

        {/* Title & Excerpt */}
        <h3 className="text-xl font-bold text-white group-hover:text-brand-light transition-colors font-display mb-3 line-clamp-2">
          <Link href={href} className="focus-visible:outline-none focus-visible:underline">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
          {excerpt}
        </p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 group-hover:text-brand-light transition-colors"
      >
        <span>Read Article</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
