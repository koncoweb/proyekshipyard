'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith('/en');
  const homeHref = isEnglish ? '/en' : '/';

  const navItems = isEnglish
    ? [
        { href: '/en/shipyard-indonesia', label: 'Shipyard Indonesia' },
        { href: '/en/services', label: 'Services' },
        { href: '/en/contact', label: 'Contact' },
      ]
    : [
        { href: '/produk-kapal', label: 'Produk Kapal' },
        { href: '/layanan', label: 'Layanan' },
        { href: '/proses-pemesanan', label: 'Proses Pemesanan' },
        { href: '/proyek', label: 'Proyek' },
        { href: '/tentang-kami', label: 'Tentang Kami' },
        { href: '/kontak', label: 'Kontak' },
      ];

  return (
    <header className="pp-header" style={{position:'sticky',top:0,zIndex:10}}>
      <div className="container pp-header-inner">
        <Link href={homeHref as any} aria-label={isEnglish ? 'Home' : 'Beranda'} className="pp-brand">
          <Image 
            src="/images/logo/logo-batangshipyard-transparent.png" 
            alt="Batang Shipyard Logo" 
            width={32} 
            height={32} 
            style={{ objectFit: 'contain' }}
            priority
          />
          Batang Shipyard
        </Link>

        <nav aria-label="Primary" className="pp-nav">
          {navItems.map(item => (
            <Link key={item.href} href={item.href as any}>{item.label}</Link>
          ))}
        </nav>

        <div className="pp-actions">
          {/* Language toggle */}
          {(() => {
            const toId = !isEnglish;
            let target = '/';
            if (isEnglish) {
              // EN -> ID
              if (pathname === '/en' || pathname === '/en/') target = '/';
              else if (pathname?.startsWith('/en/services')) target = '/layanan';
              else if (pathname?.startsWith('/en/shipyard-indonesia')) target = '/shipyard-indonesia';
              else if (pathname?.startsWith('/en/contact')) target = '/kontak';
              else if (pathname?.startsWith('/en/projects')) target = '/proyek';
              else if (pathname?.startsWith('/en/facilities')) target = '/fasilitas';
              else if (pathname?.startsWith('/en/about')) target = '/tentang-kami';
              else target = '/';
            } else {
              // ID -> EN
              if (pathname === '/' || pathname === '') target = '/en';
              else if (pathname?.startsWith('/layanan')) target = '/en/services';
              else if (pathname?.startsWith('/shipyard-indonesia')) target = '/en/shipyard-indonesia';
              else if (pathname?.startsWith('/kontak')) target = '/en/contact';
              else if (pathname?.startsWith('/proyek')) target = '/en/projects';
              else if (pathname?.startsWith('/fasilitas')) target = '/en/facilities';
              else if (pathname?.startsWith('/tentang-kami')) target = '/en/about';
              else target = '/en';
            }
            return (
              <Link href={target as any} className="pp-btn outline" aria-label={isEnglish ? 'Switch to Indonesian' : 'Beralih ke Bahasa Inggris'}>
                {isEnglish ? 'ID' : 'EN'}
              </Link>
            );
          })()}
          {!isEnglish && (
            <Link href={"/blog" as any} className="pp-btn outline">Blog</Link>
          )}
          <Link href={(isEnglish ? '/en/contact' : '/kontak') as any} className="pp-btn primary">
            {isEnglish ? 'Contact Us' : 'Hubungi Kami'}
          </Link>
        </div>
      </div>
    </header>
  );
}


