'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { ServicesDropdown } from './ServicesDropdown';
import { cn } from '../ui/Container';

export function DesktopNavigation() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setServicesOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Tech Stack', href: '/#tech-stack' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1">
      {/* Services Mega-Menu Trigger */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setServicesOpen(!servicesOpen)}
          aria-expanded={servicesOpen}
          aria-haspopup="menu"
          className={cn(
            'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer select-none',
            servicesOpen || pathname?.startsWith('/services')
              ? 'text-white bg-slate-850'
              : 'text-slate-300 hover:text-white hover:bg-slate-900'
          )}
        >
          <span>Services</span>
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform duration-200 text-slate-400',
              servicesOpen && 'rotate-180 text-brand-light'
            )}
          />
        </button>

        {servicesOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
            <ServicesDropdown onClose={() => setServicesOpen(false)} />
          </div>
        )}
      </div>

      {/* Standard Links */}
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors select-none',
              isActive
                ? 'text-white bg-slate-850 font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
