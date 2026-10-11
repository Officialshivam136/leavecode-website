'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, Sparkles, Calendar, ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container';
import { useProjectModal } from '@/context/ProjectModalContext';
import { verifiedOfficeInfo } from '@/data/homepageData';

const socialMediaHandles = [
  {
    name: 'Facebook',
    href: verifiedOfficeInfo.socials.facebook,
    hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: verifiedOfficeInfo.socials.linkedin,
    hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: verifiedOfficeInfo.socials.twitter,
    hoverClass: 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: verifiedOfficeInfo.socials.instagram,
    hoverClass: 'hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: verifiedOfficeInfo.socials.youtube,
    hoverClass: 'hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const { openModal } = useProjectModal();

  return (
    <footer className="w-full bg-slate-950 border-t border-surface-border pt-10 pb-8 text-slate-400">
      <Container size="wide">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-surface-border">
          {/* Column 1: Brand, Clickable Office Locations & Direct Contact */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-xl bg-brand-primary flex items-center justify-center font-bold text-white shadow-glow-sm">
                <span className="font-mono text-sm">LC</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                LeaveCode<span className="text-brand-accent">.</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Worldwide digital agency offering custom web development, mobile applications, white-label SEO, and authoritative growth marketing for clients across the globe.
            </p>

            {/* Direct High CTR Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-hover text-white font-semibold text-xs shadow-glow-sm transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-light" />
                <span>Get Free Project Proposal</span>
                <span className="text-xs">&rarr;</span>
              </button>

              <a
                href="https://meetings.hubspot.com/harry18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 border border-surface-border font-semibold text-xs transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-brand-light" />
                <span>Book a Call</span>
              </a>
            </div>

            {/* Real Physical Office Addresses (Clickable to Google Maps) */}
            <div className="space-y-3.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <span>India Corporate Office (Bijnor)</span>
                    <a
                      href={verifiedOfficeInfo.bijnorMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-brand-light hover:underline inline-flex items-center gap-0.5"
                    >
                      <span>Locate Map</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <a
                    href={verifiedOfficeInfo.bijnorMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-brand-light transition-colors underline decoration-slate-700 hover:decoration-brand-light underline-offset-2 block mt-0.5"
                  >
                    House Number-24, Village and Post-Kharak, Distt, Bijnor, Uttar Pradesh 246701
                  </a>
                  <div className="text-slate-500 text-[11px] mt-1">
                    Technology Hub: D-324, Near Laxmi Nagar Metro, New Delhi 110092
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-light flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">United States Office</div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=6770+Lantana+Road+Suite+6+Lake+Worth+FL+33467"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    6770 Lantana Road Suite #6 Lake Worth, FL 33467 (USA)
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Contact Phone & Emails */}
            <div className="pt-1 flex flex-col gap-2 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+918126852802"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-accent" />
                  <span>+91 (812) 685-2802</span>
                </a>
                <a
                  href="tel:+918383998506"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+91 (838) 399-8506</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-slate-300">
                <a
                  href="mailto:info@leavecode.com"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-light" />
                  <span>info@leavecode.com</span>
                </a>
                <a
                  href="mailto:harry@leavecode.com"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-light" />
                  <span>harry@leavecode.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Digital Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white font-display uppercase tracking-wider">
              Web &amp; Design
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/web-development" className="hover:text-white transition-colors">
                  Web Design &amp; Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development" className="hover:text-white transition-colors">
                  E-Commerce Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-branding" className="hover:text-white transition-colors">
                  Logo Design &amp; Branding
                </Link>
              </li>
              <li>
                <Link href="/services/website-maintenance" className="hover:text-white transition-colors">
                  Website Maintenance
                </Link>
              </li>
              <li>
                <Link href="/#tech-stack" className="hover:text-white transition-colors text-brand-light font-medium">
                  Technologies &amp; Frameworks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Growth & SEO */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white font-display uppercase tracking-wider">
              Digital Marketing
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/seo-services" className="hover:text-white transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/performance-marketing" className="hover:text-white transition-colors">
                  Google Adwords &amp; PPC
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing" className="hover:text-white transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/app-store-optimization" className="hover:text-white transition-colors">
                  App Store Optimization (ASO)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors text-brand-light font-medium">
                  Our SEO Packages (from $250/mo)
                </Link>
              </li>
              <li>
                <Link href="/#where-we-are" className="hover:text-white transition-colors text-emerald-400 font-medium">
                  Where We Are (Bijnor Map)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Portals */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white font-display uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us &amp; Our Team
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Client Portfolio &amp; Reviews
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Our Packages
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Life at Leavecode &amp; Careers
                </Link>
              </li>
              <li>
                <Link href="/partner-with-us" className="hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Industry Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us &amp; Office Map
                </Link>
              </li>
              <li>
                <Link href="/pay" className="inline-flex items-center gap-1 text-emerald-400 hover:text-white transition-colors font-medium">
                  <span>Make a Payment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Dedicated Social Media Handles & Follow Us Bar */}
        <div className="py-5 border-b border-surface-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Follow Us On Social Media:
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Connect with Leavecode Technologies across all official platforms
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {socialMediaHandles.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow LeaveCode on ${social.name}`}
                title={`Follow LeaveCode on ${social.name}`}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-surface-border text-slate-200 text-xs font-semibold transition-all ${social.hoverClass}`}
              >
                {social.icon}
                <span>{social.name}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Social Symbols & Legal Compliance */}
        <div className="pt-5 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-center lg:text-left">
            &copy; {currentYear} Leavecode Technologies Private Limited. All rights reserved.
          </div>

          {/* Social Symbols Row at the Very Bottom of the Page */}
          <div className="flex items-center gap-2" aria-label="Official Social Media Icons">
            {socialMediaHandles.map((social) => (
              <a
                key={`${social.name}-bottom-icon`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className={`w-9 h-9 rounded-lg bg-slate-900 border border-surface-border flex items-center justify-center text-slate-300 transition-all ${social.hoverClass}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
