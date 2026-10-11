import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Free Website SEO Audit & Project Quote Calculator',
  description:
    'Calculate your custom web application, e-commerce store, or SEO campaign estimate and request a free technical architecture proposal from LeaveCode Technologies.',
  alternates: {
    canonical: 'https://leavecode.com/quote',
  },
  openGraph: {
    title: 'Free Website SEO Audit & Project Quote Calculator | LeaveCode Technologies',
    description:
      'Interactive project scoping calculator and free SEO audit request for web development, e-commerce, and digital marketing.',
    url: 'https://leavecode.com/quote',
    siteName: 'LeaveCode Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website SEO Audit & Project Quote Calculator | LeaveCode Technologies',
    description:
      'Interactive project scoping calculator and free SEO audit request for web development, e-commerce, and digital marketing.',
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
