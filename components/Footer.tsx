'use client';
import Image from 'next/image';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{marginTop:32,borderTop:'1px solid var(--pp-header-border)',background:'#fff'}}>
      <div className="container" style={{padding:'16px 12px',fontSize:12,color:'var(--color-text-light)',display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <Image 
            src="/images/logo/logo-batangshipyard-transparent.png" 
            alt="Batang Shipyard Logo" 
            width={20} 
            height={20} 
            style={{ objectFit: 'contain' }}
          />
          <span>© {year} Batang Shipyard Indonesia. All rights reserved.</span>
        </div>
        <nav aria-label="Footer">
          <a href="/kontak" style={{marginRight:12}}>Kontak</a>
          <a href="/tentang-kami">Tentang Kami</a>
        </nav>
      </div>
    </footer>
  );
}


