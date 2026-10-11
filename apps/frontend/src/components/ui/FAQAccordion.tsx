'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from './Container';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function FAQAccordion({ items, allowMultiple = false, className }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('space-y-3 max-w-3xl mx-auto', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-xl bg-surface-card border border-surface-border overflow-hidden transition-colors hover:border-slate-700"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="w-full py-5 px-6 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light select-none cursor-pointer"
            >
              <span className="text-base sm:text-lg font-semibold text-white font-display pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0',
                  isOpen && 'transform rotate-180 text-brand-light'
                )}
              />
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-6 pb-6 text-sm sm:text-base text-slate-400 leading-relaxed border-t border-surface-border/50 pt-4"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
