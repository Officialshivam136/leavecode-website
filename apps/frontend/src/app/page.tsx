import type { Metadata } from 'next';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SiteFooter } from '@/components/navigation/SiteFooter';
import { JsonLdSchema } from '@/components/seo/JsonLdSchema';
import { HeroSection } from '@/components/home/HeroSection';
import { CredibilitySection } from '@/components/home/CredibilitySection';
import { ServicesOverviewSection } from '@/components/home/ServicesOverviewSection';
import { SelectedWorkSection } from '@/components/home/SelectedWorkSection';
import { WhyLeaveCodeSection } from '@/components/home/WhyLeaveCodeSection';
import { IndustrySolutionsSection } from '@/components/home/IndustrySolutionsSection';
import { DeliveryProcessSection } from '@/components/home/DeliveryProcessSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { TechnologyExpertiseSection } from '@/components/home/TechnologyExpertiseSection';
import { LatestArticlesSection } from '@/components/home/LatestArticlesSection';
import { FaqSection } from '@/components/home/FaqSection';
import { WhereWeAreSection } from '@/components/home/WhereWeAreSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

export const metadata: Metadata = {
  title: 'LeaveCode Technologies | Engineering Premium Digital Products & High-Impact Growth',
  description:
    'Enterprise web applications, mobile platforms, and technical SEO architecture engineered for speed, security, and market growth. Offices in Bijnor UP, New Delhi, and Florida USA.',
  alternates: {
    canonical: 'https://leavecode.com',
  },
  openGraph: {
    title: 'LeaveCode Technologies | Engineering Digital Products & Search Growth',
    description:
      'Enterprise full-stack web and mobile application engineering, cloud infrastructure, and data-driven SEO solutions.',
    url: 'https://leavecode.com',
    siteName: 'LeaveCode Technologies',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* Search Engine Structured Data Injection */}
      <JsonLdSchema />

      {/* 1. Responsive Navigation with Logo, Service MegaMenu & Working CTAs */}
      <SiteHeader />

      <main className="flex-grow w-full">
        {/* 2. Premium Hero Section with Business Value & System Terminal Mockup */}
        <HeroSection />

        {/* 3. Verified Credibility Indicators (Dual-Office Footprint, Tech Stack) */}
        <CredibilitySection />

        {/* 4. Selected Work with Real Portfolios From Audit */}
        <SelectedWorkSection />

        {/* 5. Verified Services Overview Linked to Dedicated Service Paths */}
        <ServicesOverviewSection />

        {/* 6. Why LeaveCode: Authentic Architectural Differentiators */}
        <WhyLeaveCodeSection />

        {/* 7. Industry Solutions Supported by Real Offerings */}
        <IndustrySolutionsSection />

        {/* 8. Delivery Process: Discover, Plan, Build, Launch, Optimize */}
        <DeliveryProcessSection />

        {/* 9. Verified Client Endorsements */}
        <TestimonialsSection />

        {/* 10. Relevant Technology Expertise Across The Stack */}
        <TechnologyExpertiseSection />

        {/* 11. Latest Editorial Publications & Architecture Insights */}
        <LatestArticlesSection />

        {/* 12. Frequently Asked Questions with Accessible Drawer */}
        <FaqSection />

        {/* 13. Where We Are: Interactive Map & Bijnor Office Locator */}
        <WhereWeAreSection />

        {/* 14. Final Project Inquiry CTA */}
        <FinalCtaSection />
      </main>

      {/* 14. Complete Responsive Footer with Verified Dual Offices */}
      <SiteFooter />
    </div>
  );
}
