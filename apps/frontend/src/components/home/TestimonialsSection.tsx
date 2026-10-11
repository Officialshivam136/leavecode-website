import React from 'react';
import { Container, Section } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialCard } from '../ui/TestimonialCard';

const clientEndorsements = [
  {
    quote:
      'LeaveCode overhauled our web platform and digital visibility with exceptional diligence. Their engineering team kept our architecture fast, secure, and intuitive for our customers.',
    clientName: 'Managing Principal',
    role: 'Operations & Technology',
    company: 'Enterprise Commerce Client',
    projectScope: 'Custom Web & Performance',
  },
  {
    quote:
      'The transition from our legacy CMS to a decoupled web architecture was executed smoothly with zero interruption to our ongoing customer inquiries.',
    clientName: 'Practice Director',
    role: 'Clinical Operations',
    company: 'Healthcare Practice Partner',
    projectScope: 'Web Application & SEO',
  },
];

export function TestimonialsSection() {
  return (
    <Section spacing="default" className="border-b border-surface-border bg-slate-900/20">
      <Container size="wide">
        <SectionHeading
          badge="Client Collaboration"
          title="Engineered With Trust & Measurable Reliability"
          description="Direct feedback from commercial teams partnering with LeaveCode on custom applications and digital growth initiatives."
        />

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {clientEndorsements.map((t, idx) => (
            <TestimonialCard
              key={idx}
              quote={t.quote}
              clientName={t.clientName}
              role={t.role}
              company={t.company}
              projectScope={t.projectScope}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
