import React from 'react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { Container } from '../ui/Container';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';
import { StartProjectButton } from './StartProjectButton';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-surface-border">
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Editorial Wordmark */}
          <Link
            href="/"
            className="flex items-center space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light rounded-lg p-1"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-light flex items-center justify-center font-bold text-white shadow-glow-sm group-hover:scale-105 transition-transform">
              <span className="font-mono text-base tracking-tighter">LC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white font-display">
                LeaveCode<span className="text-brand-accent">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <DesktopNavigation />

          {/* Header Action CTAs (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://meetings.hubspot.com/harry18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-surface-border transition-colors flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-light" />
              <span>Book a Call</span>
            </a>

            <StartProjectButton size="md">
              Get Started Today
            </StartProjectButton>
          </div>

          {/* Mobile Navigation Trigger */}
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
