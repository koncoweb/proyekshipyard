'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from './Icon';
 

type Item = { href: string, label: string, iconName: 'home' | 'tools' | 'compass' | 'phone' | 'folder' | 'note' };

function getItems(pathname: string | null): Item[] {
  const isEnglish = pathname?.startsWith('/en');
  if (isEnglish) {
    return [
      { href: '/en', label: 'Home', iconName: 'home' },
      { href: '/en/services', label: 'Services', iconName: 'services' },
      { href: '/en/shipyard-indonesia', label: 'Shipyard', iconName: 'compass' },
      { href: '/en/contact', label: 'Contact', iconName: 'phone' },
    ];
  }
  return [
    { href: '/', label: 'Beranda', iconName: 'home' },
    { href: '/layanan', label: 'Layanan', iconName: 'services' },
    { href: '/proses-pemesanan', label: 'Pemesanan', iconName: 'note' },
    { href: '/proyek', label: 'Proyek', iconName: 'folder' },
    { href: '/shipyard-indonesia', label: 'Shipyard', iconName: 'compass' },
    { href: '/kontak', label: 'Kontak', iconName: 'phone' },
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
              <Link href={i.href as any} className="tab-link" style={{display:'inline-flex',flexDirection:'column',gap:4,alignItems:'center',padding:'8px 6px',borderRadius:12,background: active ? 'var(--gold-100)' : 'transparent', color: active ? 'var(--red-700)' : 'inherit', boxShadow: active ? 'inset 0 0 0 1px rgba(146,108,29,.35)' : 'none'}}>
                <span aria-hidden style={{lineHeight:1}}><Icon name={i.iconName} /></span>
                <span style={{fontSize:12}}>{i.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


