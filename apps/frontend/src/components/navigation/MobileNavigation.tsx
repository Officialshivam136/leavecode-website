'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import { servicesData } from './ServicesDropdown';
import { PrimaryButton, SecondaryButton } from '../ui/Buttons';
import { cn } from '../ui/Container';
import { useProjectModal } from '@/context/ProjectModalContext';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();
  const { openModal } = useProjectModal();

  const toggleOpen = () => setIsOpen(!isOpen);
  const close = () => {
    setIsOpen(false);
    setServicesExpanded(false);
  };

  const navLinks = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Tech Stack', href: '/#tech-stack' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <div className="lg:hidden">
      {/* Mobile Toggle Button */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close Menu' : 'Open Navigation Menu'}
        className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-surface-border cursor-pointer select-none"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop & Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-50 bg-slate-950/95 backdrop-blur-xl border-t border-surface-border overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Services Collapsible Section */}
            <div>
              <button
                type="button"
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="w-full flex items-center justify-between py-3 text-base font-semibold text-white font-display border-b border-surface-border"
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-slate-400 transition-transform duration-200',
                    servicesExpanded && 'rotate-180 text-brand-light'
                  )}
                />
              </button>

              {servicesExpanded && (
                <div className="py-2 pl-3 space-y-2 border-l border-brand-primary/30 mt-2">
                  {servicesData.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={close}
                      className="block py-2 text-sm text-slate-300 hover:text-white"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Standard Nav Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={cn(
                    'block py-3 text-base font-semibold border-b border-surface-border/50 font-display transition-colors',
                    isActive ? 'text-brand-light' : 'text-slate-300 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs & Dual-Office Quick Contact */}
          <div className="pt-8 space-y-3">
            <button
              type="button"
              onClick={() => {
                close();
                openModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-brand-primary hover:bg-brand-hover text-white font-semibold text-sm shadow-glow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Project Live</span>
              <span className="text-xs">&rarr;</span>
            </button>

            <PrimaryButton href="/quote" onClick={close} className="w-full justify-center">
              Build Project Estimate
            </PrimaryButton>

            <SecondaryButton href="/contact" onClick={close} className="w-full justify-center" icon={<PhoneCall className="w-4 h-4" />}>
              Talk To Engineering
            </SecondaryButton>

            <div className="pt-4 text-center text-xs text-slate-500">
              Offices in New Delhi, India &amp; Florida, USA
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
