import React from 'react';
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Palette,
  Search,
  TrendingUp,
  Share2,
  ShieldCheck,
} from 'lucide-react';
import { Container, Section } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';
import { verifiedServices } from '@/data/homepageData';

const iconMap: Record<string, React.ReactNode> = {
  'web-development': <Code2 className="w-6 h-6" />,
  'mobile-app-development': <Smartphone className="w-6 h-6" />,
  'ecommerce-development': <ShoppingBag className="w-6 h-6" />,
  'seo-services': <Search className="w-6 h-6" />,
  'performance-marketing': <TrendingUp className="w-6 h-6" />,
  'ui-ux-branding': <Palette className="w-6 h-6" />,
  'social-media-marketing': <Share2 className="w-6 h-6" />,
  'website-maintenance': <ShieldCheck className="w-6 h-6" />,
};

export function ServicesOverviewSection() {
  return (
    <Section spacing="default" className="border-b border-surface-border">
      <Container size="wide">
        <SectionHeading
          badge="Verified Capabilities"
          title="Digital Engineering & Performance Growth Services"
          description="Integrated technology and marketing solutions engineered for resilience, organic search supremacy, and conversion impact."
        />

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {verifiedServices.map((svc) => (
            <ServiceCard
              key={svc.slug}
              title={svc.title}
              description={svc.shortDesc}
              icon={iconMap[svc.slug] || <Code2 className="w-6 h-6" />}
              tags={svc.tags}
              href={svc.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
