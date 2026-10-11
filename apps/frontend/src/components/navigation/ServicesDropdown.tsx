import React from 'react';
import Link from 'next/link';
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Palette,
  Search,
  TrendingUp,
  Share2,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { cn } from '../ui/Container';

export interface ServiceCategory {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export const servicesData: ServiceCategory[] = [
  {
    title: 'Full-Stack Web Development',
    description: 'High-performance Next.js, Node.js & React enterprise applications.',
    href: '/services/web-development',
    icon: <Code2 className="w-5 h-5 text-brand-primary" />,
  },
  {
    title: 'Mobile App Engineering',
    description: 'Native iOS, Android & cross-platform React Native solutions.',
    href: '/services/mobile-app-development',
    icon: <Smartphone className="w-5 h-5 text-brand-accent" />,
  },
  {
    title: 'Headless & E-Commerce',
    description: 'Scalable multi-channel commerce architectures and Shopify stores.',
    href: '/services/ecommerce-development',
    icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
  },
  {
    title: 'UI/UX & Brand Identity',
    description: 'Design systems, Figma wireframes & high-converting product interfaces.',
    href: '/services/ui-ux-branding',
    icon: <Palette className="w-5 h-5 text-purple-400" />,
  },
  {
    title: 'Enterprise SEO & Search Growth',
    description: 'Technical audits, programmatic SEO & organic market domination.',
    href: '/services/seo-services',
    icon: <Search className="w-5 h-5 text-amber-400" />,
  },
  {
    title: 'Performance & Paid Media',
    description: 'Data-driven Google Ads, Meta Ads & ROI-focused remarketing.',
    href: '/services/performance-marketing',
    icon: <TrendingUp className="w-5 h-5 text-rose-400" />,
  },
  {
    title: 'Social & Brand Management',
    description: 'Targeted social media optimization and organic brand engagement.',
    href: '/services/social-media-marketing',
    icon: <Share2 className="w-5 h-5 text-sky-400" />,
  },
  {
    title: '24/7 SLA & Maintenance',
    description: 'Zero-downtime infrastructure maintenance, security & patch audits.',
    href: '/services/website-maintenance',
    icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
  },
];

interface ServicesDropdownProps {
  onClose?: () => void;
  className?: string;
}

export function ServicesDropdown({ onClose, className }: ServicesDropdownProps) {
  return (
    <div
      role="menu"
      aria-label="Services Submenu"
      className={cn(
        'w-[740px] p-6 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-surface-border shadow-2xl shadow-black/80',
        'grid grid-cols-2 gap-4 animate-in fade-in zoom-in-95 duration-150',
        className
      )}
    >
      {servicesData.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          onClick={onClose}
          className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-850 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-light"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-950 border border-surface-border flex-shrink-0 group-hover:border-brand-light/30 transition-colors">
            {s.icon}
          </div>
          <div className="space-y-1">
            <div className="text-sm font-semibold text-white group-hover:text-brand-light transition-colors flex items-center gap-1 font-display">
              <span>{s.title}</span>
              <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-light" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {s.description}
            </p>
          </div>
        </Link>
      ))}

      {/* Direct Tech Stack Explorer Link */}
      <div className="col-span-2 pt-3 mt-1 border-t border-surface-border flex items-center justify-between text-xs">
        <span className="text-slate-400">Looking for our supported frameworks, databases &amp; cloud stacks?</span>
        <Link
          href="/#tech-stack"
          onClick={onClose}
          className="font-semibold text-brand-light hover:text-white flex items-center gap-1 transition-colors"
        >
          <span>Explore Tech Stack Ecosystem</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
