'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function getItems(pathname: string | null) {
  const isEnglish = pathname?.startsWith('/en');
  if (isEnglish) {
    return [
      { href: '/en', label: 'Home', icon: '🏠' },
      { href: '/en/services', label: 'Services', icon: '🛠️' },
      { href: '/en/shipyard-indonesia', label: 'Shipyard', icon: '🧭' },
      { href: '/en/contact', label: 'Contact', icon: '📞' },
    ];
  }
  return [
    { href: '/', label: 'Beranda', icon: '🏠' },
    { href: '/layanan', label: 'Layanan', icon: '🛠️' },
    { href: '/proses-pemesanan', label: 'Pemesanan', icon: '📝' },
    { href: '/proyek', label: 'Proyek', icon: '📁' },
    { href: '/shipyard-indonesia', label: 'Shipyard', icon: '🧭' },
    { href: '/kontak', label: 'Kontak', icon: '📞' },
  ];
}

export function BottomTab() {
  const path = usePathname();
  const items = getItems(path);
  return (
    <nav aria-label="Bottom navigation" style={{position:'sticky',bottom:0,background:'#fff',borderTop:'1px solid var(--color-border)'}}>
      <ul style={{display:'grid',gridTemplateColumns:`repeat(${items.length},1fr)`,margin:0,padding:'10px 8px',listStyle:'none'}}>
        {items.map(i => {
          const active = path === i.href || (i.href !== '/' && path.startsWith(i.href));
          return (
            <li key={i.href} style={{textAlign:'center'}}>
              <Link href={i.href as any} className="tab-link" style={{display:'inline-flex',flexDirection:'column',gap:4,alignItems:'center',padding:'8px 6px',borderRadius:12,background: active ? 'var(--color-bg)' : 'transparent', color: active ? 'var(--color-contrast)' : 'inherit'}}>
                <span aria-hidden style={{fontSize:18,lineHeight:1}}>{i.icon}</span>
                <span style={{fontSize:12}}>{i.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


