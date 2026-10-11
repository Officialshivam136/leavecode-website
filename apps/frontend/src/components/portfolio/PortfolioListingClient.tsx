'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { CaseStudy } from '@/data/portfolioCatalogue';
import { cn } from '@/components/ui/Container';

interface PortfolioListingClientProps {
  initialProjects: CaseStudy[];
  categories: string[];
  initialCategory?: string;
  initialPage?: number;
}

export function PortfolioListingClient({
  initialProjects,
  categories,
  initialCategory = 'All Work',
  initialPage = 1,
}: PortfolioListingClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    categories.includes(initialCategory) ? initialCategory : 'All Work'
  );

  const filteredProjects =
    activeCategory === 'All Work'
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeCategory);

  return (
    <Section spacing="default">
      <Container size="wide" className="space-y-12">
        {/* Category Filter Pills */}
        <nav aria-label="Portfolio category filter" className="flex flex-wrap items-center justify-center gap-2 pb-4 border-b border-surface-border">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none',
                  isActive
                    ? 'bg-brand-primary text-white shadow-glow-sm'
                    : 'bg-surface-card text-slate-400 hover:text-white hover:bg-slate-850 border border-surface-border'
                )}
              >
                {cat}
              </button>
            );
          })}
        </nav>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-all duration-300 shadow-surface-card hover:-translate-y-1"
              >
                {/* Visual Architectural Banner or Real Screenshot */}
                <div className="relative h-56 w-full bg-slate-900 flex flex-col justify-between border-b border-surface-border overflow-hidden">
                  {project.image ? (
                    <div className="absolute inset-0">
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.category} client case study screenshot engineered by LeaveCode Technologies`}
                        width={800}
                        height={450}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>
                  )}

                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">

                  {/* Top Bar Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-slate-950/90 text-slate-300 border border-surface-border">
                      {project.category}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-surface-border flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-brand-primary transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                    {/* Bottom Indicator Badge */}
                    <div className="relative z-10 flex items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>VERIFIED CLIENT PROJECT</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-light transition-colors font-display">
                      <Link href={`/portfolio/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Key Metrics / Scope Grid */}
                    <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-950 border border-surface-border mt-4">
                      {project.metricsOrDeliverables.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="text-[11px] text-slate-500 font-mono uppercase">{m.label}</div>
                          <div className="text-sm font-bold text-white font-mono">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer & Link */}
                  <div className="space-y-4 pt-4 border-t border-surface-border">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-surface-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-light hover:text-white transition-colors"
                    >
                      <span>Read Detailed Architecture Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
