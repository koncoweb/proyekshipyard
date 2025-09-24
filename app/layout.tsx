import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { BottomTab } from '@/components/BottomTab';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://batangshipyard.com'),
  title: { default: 'Batang Shipyard Indonesia', template: '%s | Batang Shipyard Indonesia' },
  description: 'Produksi kapal kayu, dokumen kapal, perawatan kapal, dan jual-beli kapal second.',
  alternates: { canonical: '/' },
  openGraph: { siteName: 'Batang Shipyard Indonesia', type: 'website', locale: 'id_ID' },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
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


