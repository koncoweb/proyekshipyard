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
        {
          href: '/en/vessels',
          label: 'Vessels',
          children: [
            { href: '/en/vessels/collecting', label: 'Collecting Vessel' },
            { href: '/en/vessels/squid', label: 'Squid Fishing Vessel' },
            { href: '/en/vessels/longliner', label: 'Long Liner Vessel' },
            { href: '/en/vessels/purse-seine', label: 'Purse Seine Vessel' },
            { href: '/en/vessels/skipjack', label: 'Skipjack Vessel' },
          ],
        },
        { href: '/en/services', label: 'Services' },
        { href: '/en/projects', label: 'Projects' },
        { href: '/en/about', label: 'About' },
        { href: '/en/contact', label: 'Contact' },
      ]
    : [
        {
          href: '/produk-kapal',
          label: 'Produk Kapal',
          children: [
            { href: '/produk-kapal/collecting', label: 'Kapal Collecting' },
            { href: '/produk-kapal/cumi', label: 'Kapal Cumi' },
            { href: '/produk-kapal/longliner', label: 'Kapal Long Liner' },
            { href: '/produk-kapal/purse-seine', label: 'Kapal Purse Seine' },
            { href: '/produk-kapal/cakalang', label: 'Kapal Cakalang' },
          ],
        },
        { href: '/layanan', label: 'Layanan' },
        { href: '/proses-pemesanan', label: 'Proses Pemesanan' },
        { href: '/proyek', label: 'Proyek' },
        { href: '/tentang-kami', label: 'Tentang Kami' },
        { href: '/kontak', label: 'Kontak' },
      ];

  return (
    <header className="pp-header" style={{position:'sticky',top:0,zIndex:10}}>
      <div className="container pp-header-inner">
        <nav aria-label="Primary" className="pp-nav">
          {navItems.map(item => (
            (item as any).children ? (
              <div key={item.href} className="has-submenu">
                <Link href={item.href as any}>{item.label}</Link>
                <div className="submenu" role="menu">
                  {(item as any).children.map((child: any) => (
                    <Link key={child.href} href={child.href as any} role="menuitem">{child.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href as any}>{item.label}</Link>
            )
          ))}
        </nav>

        <Link href={homeHref as any} aria-label={isEnglish ? 'Home' : 'Beranda'} className="pp-brand brand-box">
          <Image 
            src="/images/logo/logo-batangshipyard-transparent.png" 
            alt="Batang Shipyard Logo" 
            width={40} 
            height={40} 
            style={{ objectFit: 'contain' }}
            priority
          />
          Batang Shipyard
        </Link>

        <div className="pp-actions">
          {/* Language toggle */}
          {(() => {
            const toId = !isEnglish;
            let target = '/';
            if (isEnglish) {
              // EN -> ID
              if (pathname === '/en' || pathname === '/en/') target = '/';
              else if (pathname?.startsWith('/en/services')) target = '/layanan';
              else if (pathname?.startsWith('/en/vessels')) target = '/produk-kapal';
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
              else if (pathname?.startsWith('/produk-kapal')) target = '/en/vessels';
              else if (pathname?.startsWith('/shipyard-indonesia')) target = '/en/shipyard-indonesia';
              else if (pathname?.startsWith('/kontak')) target = '/en/contact';
              else if (pathname?.startsWith('/proyek')) target = '/en/projects';
              else if (pathname?.startsWith('/fasilitas')) target = '/en/facilities';
              else if (pathname?.startsWith('/tentang-kami')) target = '/en/about';
              else target = '/en';
            }
            return (
              <Link href={target as any} className="gold-pill" aria-label={isEnglish ? 'Switch to Indonesian' : 'Beralih ke Bahasa Inggris'}>
                {isEnglish ? 'ID' : 'EN'}
              </Link>
            );
          })()}
          {!isEnglish && (
            <Link href={"/blog" as any} className="gold-pill">Blog</Link>
          )}
          <Link href={(isEnglish ? '/en/contact' : '/kontak') as any} className="pp-btn primary">
            {isEnglish ? 'Contact Us' : 'Hubungi Kami'}
          </Link>
        </div>
      </div>
    </header>
  );
}


