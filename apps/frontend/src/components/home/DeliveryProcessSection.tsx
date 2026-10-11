import React from 'react';
import { Container, Section } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { deliveryProcess } from '@/data/homepageData';

export function DeliveryProcessSection() {
  return (
    <Section spacing="default" className="border-b border-surface-border">
      <Container size="wide">
        <SectionHeading
          badge="Structured Methodology"
          title="The 5-Phase Production Delivery Framework"
          description="A disciplined, transparent engineering pipeline that ensures predictability, strict scope alignment, and flawless launch execution."
        />

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {deliveryProcess.map((step) => (
            <div
              key={step.step}
              className="p-4 sm:p-5 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-primary/40 transition-colors flex flex-col justify-between space-y-3"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-brand-light">
                    {step.step}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-slate-950 text-slate-400 border border-surface-border">
                    {step.name}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-brand-primary to-brand-accent w-full" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
