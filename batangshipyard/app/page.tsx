import Link from 'next/link';
import Image from 'next/image';

function ServiceIcon({ type }: { type: 'production' | 'documents' | 'maintenance' | 'secondhand' }) {
  const iconProps = { width: 22, height: 22, viewBox: '0 0 24 24' } as const;
  const stroke = '#0b2a6f';
  const strokeProps = { stroke, strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  const icons = {
    production: (
      <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" {...strokeProps} />
        <path d="M2 12l10 5 10-5M2 17l10 5 10-5" {...strokeProps} />
      </svg>
    ),
    documents: (
      <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" {...strokeProps} />
        <path d="M14 2v6h6" {...strokeProps} />
        <path d="M8 13h8M8 17h8M8 9h2" {...strokeProps} />
      </svg>
    ),
    maintenance: (
      <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-8 8l-6.9 6.9a2.1 2.1 0 1 1-3-3l6.9-6.9a6 6 0 0 1 8-8l-3.8 3.8Z" {...strokeProps} />
      </svg>
    ),
    secondhand: (
      <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
        <path d="M5.4 5h15.6l-4 8H7L5.4 5Z" {...strokeProps} />
        <path d="M7 13 4.5 18M7 13l2.5 5" {...strokeProps} />
        <path d="M13 13v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6" {...strokeProps} />
      </svg>
    )
  };

  return (
    <span aria-hidden style={{ display: 'inline-flex', alignItems: 'center' }}>{icons[type]}</span>
  );
}

export const revalidate = 86400;

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Batang Shipyard</p>
          <h1 className="hero-title">Produksi, Dokumen, dan Perawatan Kapal.</h1>
          <p className="hero-sub">Solusi lengkap pembuatan kapal kayu, pengurusan dokumen kapal, perawatan, hingga jual-beli kapal bekas.</p>
          <div className="hero-cta">
            <Link href="/layanan" className="btn">Lihat Layanan</Link>
            <Link href="/kontak" className="btn outline">Hubungi Kami</Link>
          </div>
        </div>
      </section>

      <section className="container" style={{padding:'28px 0'}}>
        <div className="card" style={{borderColor:'rgba(0,0,0,.08)'}}>
          <h2 style={{fontSize:20,margin:0,marginBottom:12}}>Navigasi Cepat</h2>
          <div className="nav-grid" style={{marginTop:8}}>
            <Link className="card" href="/shipyard-indonesia">Shipyard Indonesia</Link>
            <Link className="card" href="/layanan">Layanan</Link>
            <Link className="card" href="/proses-pemesanan" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              Proses Pemesanan
              <span style={{width:24,height:24,overflow:'hidden',display:'inline-flex',position:'relative'}}>
                <Image 
                  src="/images/icon/cargo-ship_1059530.png" 
                  alt="Ship icon" 
                  fill
                  style={{objectFit:'cover',opacity:0.7,marginRight:0}}
                />
              </span>
            </Link>
            <Link className="card" href="/proyek">Proyek</Link>
            <Link className="card" href="/tentang-kami">Tentang Kami</Link>
            <Link className="card" href="/kontak">Kontak</Link>
          </div>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <h2 style={{fontSize:20,margin:0,marginBottom:12}}>Layanan Kami</h2>
          <div className="nav-grid" style={{marginTop:8}}>
            <Link className="card media" href="/layanan/produksi-kapal-kayu">
              <div className="media-img" style={{position:'relative',overflow:'hidden'}}>
                <Image 
                  src="/images/icon/icons8-ship-48 (1).png" 
                  alt="Produksi Kapal Kayu" 
                  fill 
                  style={{objectFit:'cover'}}
                />
              </div>
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="production" />
                  <strong>Produksi Kapal Kayu</strong>
                </div>
                <p style={{marginTop:6}}>Konsultasi, desain, presentasi RAB, negosiasi, hingga SPK notaril 3 termin.</p>
              </div>
            </Link>
            <Link className="card media" href="/layanan/dokumen-kapal">
              <div className="media-img" style={{position:'relative',overflow:'hidden'}}>
                <Image 
                  src="/images/icon/icons8-documents-50.png" 
                  alt="Dokumen Kapal" 
                  fill 
                  style={{objectFit:'cover'}}
                />
              </div>
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="documents" />
                  <strong>Dokumen Kapal</strong>
                </div>
                <p style={{marginTop:6}}>Urus legalitas & kelayakan teknis, hak milik, dan SPB.</p>
              </div>
            </Link>
            <Link className="card media" href="/layanan/perawatan-kapal">
              <div className="media-img" style={{position:'relative',overflow:'hidden'}}>
                <Image 
                  src="/images/icon/icons8-maintenance-94.png" 
                  alt="Perawatan Kapal" 
                  fill 
                  style={{objectFit:'cover'}}
                />
              </div>
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="maintenance" />
                  <strong>Perawatan Kapal</strong>
                </div>
                <p style={{marginTop:6}}>Inspeksi, pembersihan, perbaikan lambung/mesin, pengecatan, dan penggantian sparepart.</p>
              </div>
            </Link>
            <Link className="card media" href="/layanan/kapal-bekas">
              <div className="media-img" style={{position:'relative',overflow:'hidden'}}>
                <Image 
                  src="/images/icon/icons8-sell-48.png" 
                  alt="Jual-beli Kapal Bekas" 
                  fill 
                  style={{objectFit:'cover'}}
                />
              </div>
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="secondhand" />
                  <strong>Jual-beli Kapal Bekas</strong>
                </div>
                <p style={{marginTop:6}}>Mempertemukan penjual-pembeli, negosiasi, dan penyusunan sale form.</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <h2>Artikel Terbaru</h2>
          <p>Lihat edukasi dan studi kasus di <Link href="/blog">Blog</Link>.</p>
        </div>
      </section>
    </>
  );
}


