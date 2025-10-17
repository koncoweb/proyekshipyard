import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://batangshipyard.com'),
  title: { default: 'Batang Shipyard Indonesia', template: '%s | Batang Shipyard Indonesia' },
  description: 'Professional ship construction, vessel maintenance, ship documentation, and second-hand vessel trading services in Indonesia.',
  alternates: { canonical: '/en' },
  openGraph: { siteName: 'Batang Shipyard Indonesia', type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image' }
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div className="min-h-screen">
        {children}
      </div>
    </html>
  );
}