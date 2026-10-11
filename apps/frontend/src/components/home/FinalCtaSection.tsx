import React from 'react';
import { CTASection } from '../ui/CTASection';

export function FinalCtaSection() {
  return (
    <CTASection
      badge="Start Your Digital Transformation"
      title="Ready to Build an Exceptional Digital Product?"
      description="Connect directly with our engineering team in Florida or New Delhi to discuss your project requirements, technical architecture, and growth timeline."
      primaryAction={{
        label: 'Schedule Architecture Consultation',
        href: '/contact',
      }}
      secondaryAction={{
        label: 'Calculate Project Estimate',
        href: '/quote',
      }}
    />
  );
}
