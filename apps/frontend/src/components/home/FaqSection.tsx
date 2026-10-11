import React from 'react';
import { Container, Section } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FAQAccordion } from '../ui/FAQAccordion';

const homepageFaqs = [
  {
    id: 'faq-tech-stack',
    question: 'What technologies, frameworks, and CMS platforms does LeaveCode support?',
    answer:
      'We support modern battle-tested ecosystems tailored to your business: Frontend & Web (Next.js, React, TypeScript, Tailwind CSS), Backend & APIs (Node.js, Express, Python, REST & GraphQL), E-Commerce & CMS (Shopify & Shopify Plus, WooCommerce, WordPress Headless, Webflow), Mobile (React Native, iOS, Android), and Cloud & Databases (AWS, Vercel, MongoDB, PostgreSQL, Docker). If you have an existing legacy system or specialized infrastructure, our architects review and integrate with zero disruption.',
  },
  {
    id: 'faq-1',
    question: 'How does LeaveCode ensure search rankings are preserved during a website rebuild?',
    answer:
      'We run a comprehensive 1:1 inventory of all accessible URLs, establish permanent 301 redirect mappings for legacy paths, preserve existing on-page keyword signals, and implement valid Schema.org structured data to protect and elevate domain authority.',
  },
  {
    id: 'faq-2',
    question: 'Why choose a decoupled Next.js + Node.js stack over WordPress or page builders?',
    answer:
      'A decoupled Next.js architecture delivers sub-second page loads, eliminates vulnerable third-party plugins, scales effortlessly to high concurrency, and guarantees strict WCAG 2.1 accessibility and Core Web Vitals scores without bloated script overhead.',
  },
  {
    id: 'faq-3',
    question: 'Where are LeaveCode’s engineering teams and offices located?',
    answer:
      'LeaveCode Technologies operates dual international facilities: our International Client Center in Lake Worth, Florida (USA) and our Technology Development Center in New Delhi (India). Both offices collaborate seamlessly to provide continuous engineering coverage.',
  },
  {
    id: 'faq-4',
    question: 'Can you build custom internal portals and client dashboards in addition to public websites?',
    answer:
      'Yes. Using our monorepo architecture, we develop unified web applications featuring secure authentication, role-based access control, MongoDB Atlas database persistence, and customized client portals.',
  },
  {
    id: 'faq-5',
    question: 'What are the typical project turnaround timelines?',
    answer:
      'Project durations depend on scope complexity: standard marketing platforms and high-converting service portals typically ship within 3 to 5 weeks, while enterprise multi-platform web applications and custom commerce engines span 6 to 12 weeks with milestone reviews.',
  },
];

export function FaqSection() {
  return (
    <Section spacing="default" className="border-b border-surface-border">
      <Container>
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Clear Answers on Technology, Process & Engagement"
          description="Everything you need to know about partnering with LeaveCode on custom digital engineering and search marketing initiatives."
        />

        <div className="mt-8 md:mt-10">
          <FAQAccordion items={homepageFaqs} />
        </div>
      </Container>
    </Section>
  );
}
