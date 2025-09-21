import '../globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { BottomTab } from '@/components/BottomTab';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://batangshipyard.com'),
  title: { default: 'Batang Shipyard Indonesia', template: '%s | Batang Shipyard Indonesia' },
  description: 'Wooden shipbuilding, ship documentation, vessel maintenance, and second-hand vessel transactions.',
  alternates: { canonical: '/en' },
  openGraph: { siteName: 'Batang Shipyard Indonesia', type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image' }
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Header />
          <main className="screen">{children}</main>
          <Footer />
          <BottomTab />
        </div>
      </body>
    </html>
  );
}
