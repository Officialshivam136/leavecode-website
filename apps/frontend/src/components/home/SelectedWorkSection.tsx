import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container, Section } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { SecondaryButton } from '../ui/Buttons';
import { verifiedProjects } from '@/data/homepageData';

export function SelectedWorkSection() {
  return (
    <Section spacing="default" className="border-b border-surface-border bg-slate-900/20">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 md:mb-8">
          <SectionHeading
            align="left"
            badge="Selected Work"
            title="Engineered Products & Client Case Studies"
            description="Verified systems, commerce engines, and digital applications delivered across various industries."
            className="mx-0 max-w-2xl"
          />

          <SecondaryButton
            href="/portfolio"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Complete Portfolio
          </SecondaryButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verifiedProjects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              category={p.category}
              summary={p.summary}
              impactMetrics={p.deliverables}
              tags={p.tags}
              href={p.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
