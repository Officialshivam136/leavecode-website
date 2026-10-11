'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useProjectModal } from '@/context/ProjectModalContext';
import { cn } from '../ui/Container';

interface StartProjectButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  defaultService?: string;
  children?: React.ReactNode;
}

export function StartProjectButton({
  size = 'md',
  className,
  defaultService,
  children = 'Start Project',
}: StartProjectButtonProps) {
  const { openModal } = useProjectModal();

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-medium rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-6 py-3.5 text-base font-semibold rounded-xl gap-2.5',
  };

  return (
    <button
      type="button"
      onClick={() => openModal(defaultService)}
      className={cn(
        'group inline-flex items-center justify-center font-display transition-all duration-200 select-none cursor-pointer',
        'bg-brand-primary hover:bg-brand-hover text-white shadow-glow-sm hover:shadow-glow-lg',
        'border border-brand-light/30 active:scale-[0.98]',
        'focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        sizeClasses[size],
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}
