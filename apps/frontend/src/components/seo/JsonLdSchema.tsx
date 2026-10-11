import React from 'react';
import { verifiedOfficeInfo } from '@/data/homepageData';

export function JsonLdSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${verifiedOfficeInfo.url}/#organization`,
    name: verifiedOfficeInfo.legalName,
    alternateName: verifiedOfficeInfo.brandName,
    url: verifiedOfficeInfo.url,
    logo: `${verifiedOfficeInfo.url}/logo.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: verifiedOfficeInfo.phones.indiaPrimary,
        contactType: 'customer service',
        areaServed: ['IN', 'US', 'GB'],
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: verifiedOfficeInfo.phones.usaPrimary,
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: 'en',
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'House Number-24, Village and Post-Kharak, Distt, Bijnor',
        addressLocality: 'Bijnor',
        addressRegion: 'Uttar Pradesh',
        postalCode: '246701',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '6770 Lantana Road Suite #6',
        addressLocality: 'Lake Worth',
        addressRegion: 'FL',
        postalCode: '33467',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'D-324, Street No-11, Near Laxmi Nagar Metro',
        addressLocality: 'New Delhi',
        postalCode: '110092',
        addressCountry: 'IN',
      },
    ],
    sameAs: [
      verifiedOfficeInfo.socials.facebook,
      verifiedOfficeInfo.socials.linkedin,
      verifiedOfficeInfo.socials.twitter,
      verifiedOfficeInfo.socials.instagram,
      verifiedOfficeInfo.socials.youtube,
    ],
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${verifiedOfficeInfo.url}/#website`,
    url: verifiedOfficeInfo.url,
    name: verifiedOfficeInfo.legalName,
    description:
      'Enterprise technology, custom full-stack web and mobile application engineering, and data-driven SEO & performance growth.',
    publisher: {
      '@id': `${verifiedOfficeInfo.url}/#organization`,
    },
    inLanguage: 'en-US',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
