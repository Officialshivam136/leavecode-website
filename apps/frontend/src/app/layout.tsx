import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { ProjectModalProvider } from '@/context/ProjectModalContext';
import { StartProjectModal } from '@/components/navigation/StartProjectModal';

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gscVerificationToken = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://leavecode.com'),
  title: {
    default: 'LeaveCode Technologies | Engineering Premium Digital Products & High-Impact Growth',
    template: '%s | LeaveCode Technologies',
  },
  description:
    'Enterprise full-stack development, mobile applications, cloud engineering, and data-driven SEO & digital marketing solutions.',
  openGraph: {
    title: 'LeaveCode Technologies',
    description: 'Engineering Premium Digital Products & High-Impact Growth',
    url: 'https://leavecode.com',
    siteName: 'LeaveCode',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(gscVerificationToken
    ? {
        verification: {
          google: gscVerificationToken,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-slate-100 antialiased selection:bg-primary selection:text-white">
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true
                });
              `}
            </Script>
          </>
        )}
        <ProjectModalProvider>
          {children}
          <StartProjectModal />
        </ProjectModalProvider>
      </body>
    </html>
  );
}

