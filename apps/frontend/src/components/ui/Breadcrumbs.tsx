import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from './Container';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://leavecode.com',
      },
      ...items.map((item, index) => {
        const listItem: Record<string, unknown> = {
          '@type': 'ListItem',
          position: index + 2,
          name: item.label,
        };
        if (item.href && item.href.startsWith('/')) {
          listItem.item = `https://leavecode.com${item.href}`;
        }
        return listItem;
      }),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={cn('flex items-center text-xs font-mono text-slate-400 py-3', className)}
      >
        <ol className="flex items-center flex-wrap gap-y-1 space-x-2">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-brand-light rounded p-0.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-3 h-3 text-slate-600 flex-shrink-0" />
                {isLast || !item.href ? (
                  <span className="text-slate-200 font-semibold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-brand-light rounded p-0.5"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
