import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from './Container';
import { PrimaryButton, SecondaryButton } from './Buttons';
import { cn } from './Container';

export interface CTASectionProps {
  badge?: string;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function CTASection({
  badge = 'Ready To Elevate Your Platform?',
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CTASectionProps) {
  return (
    <div className={cn('relative w-full overflow-hidden py-8 sm:py-12', className)}>
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-brand-light/20 p-6 sm:p-10 lg:p-12 text-center overflow-hidden shadow-2xl shadow-brand-primary/10">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/15 blur-[120px] rounded-full pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 border border-brand-primary/30 text-brand-light">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              <span>{badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.15]">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton
                href={primaryAction.href}
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                {primaryAction.label}
              </PrimaryButton>

              {secondaryAction && (
                <SecondaryButton href={secondaryAction.href} size="lg">
                  {secondaryAction.label}
                </SecondaryButton>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
