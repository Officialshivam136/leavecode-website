import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Container, Section } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { industrySolutions } from '@/data/homepageData';

export function IndustrySolutionsSection() {
  return (
    <Section spacing="default" className="border-b border-surface-border bg-slate-900/30">
      <Container size="wide">
        <SectionHeading
          badge="Specialized Sectors"
          title="Tailored Solutions For Demanding Verticals"
          description="Domain-specific digital architectures designed to handle compliance, high catalogue throughput, and targeted regional audiences."
        />

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {industrySolutions.map((ind) => (
            <div
              key={ind.name}
              className="p-5 sm:p-6 rounded-2xl bg-surface-card border border-surface-border hover:border-surface-border-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white font-display">
                  {ind.name}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {ind.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {ind.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-850 text-slate-300 border border-surface-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-surface-border">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-white transition-colors"
                >
                  <span>Request Sector Case Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
