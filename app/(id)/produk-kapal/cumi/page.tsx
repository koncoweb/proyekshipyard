import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata = {
  title: 'Kapal Cumi | Batang Shipyard Indonesia',
  description: 'Desain kapal cumi (squid jigging/light fishing) dengan tata letak lampu, area kerja aman, dan palka berinsulasi. Konsultasi gratis spesifikasi sesuai kebutuhan.',
  alternates: { canonical: 'https://batangshipyard.com/produk-kapal/cumi' }
};

export default function Page() {
  return (
    <>
      <section className="hero light-text" style={{
        background:
          "linear-gradient(90deg, rgba(11,92,215,.80) 0%, rgba(11,92,215,.60) 36%, rgba(11,92,215,.40) 60%, rgba(11,92,215,.20) 82%, rgba(11,92,215,.10) 100%), url('/images/cumi/galangan-kapal-cumi-jawatengah.jpeg') center / cover no-repeat"
      }}>
        <div className="container hero-inner" style={{padding:'98px 0 77px'}}>
          <div className="hero-copy">
            <p style={{color:'#ffffff',fontWeight:800,margin:'0 0 8px'}}>Produk Kapal</p>
            <h1 className="hero-title" style={{color:'#fff'}}>Kapal Cumi</h1>
            <p className="hero-sub" style={{color:'rgba(255,255,255,.9)'}}>Khusus operasi cumi dengan penempatan lampu atraktor simetris, jalur kabel aman, dan dek anti-slip.</p>
            <div className="hero-cta">
              <Link href="/kontak" className="btn">Konsultasi Desain</Link>
              <Link href="/proyek" className="btn outline">Lihat Proyek</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{padding:'28px 0'}}>
        <div className="card" style={{borderColor:'rgba(0,0,0,.08)'}}>
          <div className="section-head">
            <h2 className="section-title">Gambaran Umum</h2>
            <span className="muted">Operasi squid jigging</span>
          </div>
          <p>Desain kapal cumi menekankan <strong>penempatan lampu</strong>, kebutuhan <strong>genset</strong>, serta <strong>drainase dek</strong> untuk operasi malam. Struktur lengan/lampu dirancang kuat dan aman.</p>
          <p>Penataan electrical dan jalur kabel dibuat rapi serta terlindung dari korosi sehingga aman saat cuaca basah. Sistem palka memastikan mutu cumi tetap terjaga dari penangkapan hingga pendaratan.</p>
          <ul className="gold-list" style={{marginTop:10}}>
            <li><strong>Ukuran umum:</strong> 12–28 meter; 10–80 GT</li>
            <li><strong>Kelistrikan:</strong> Panel dan kabel terproteksi, anti air/korosi</li>
            <li><strong>Palka:</strong> Es/RSW, pengelolaan hasil cepat</li>
          </ul>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <div className="section-head">
            <h2 className="section-title">Desain & Dokumentasi</h2>
            <span className="muted">Contoh visual</span>
          </div>
          <div className="service-list" style={{marginTop:8}}>
            <div className="card" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              <div style={{position:'relative',width:'100%',height:220}}>
                <Image src="/images/cumi/galangan-kapal-cumi-jawatengah.jpeg" alt="Desain Kapal Cumi" fill sizes="(max-width: 800px) 100vw, 600px" style={{objectFit:'cover',borderRadius:12}} />
              </div>
              <div style={{position:'relative',width:'100%',height:220}}>
                <Image src="/images/cumi/galangan-kapal-cumi-jawatengah2.jpeg" alt="Konstruksi Kapal Cumi" fill sizes="(max-width: 800px) 100vw, 600px" style={{objectFit:'cover',borderRadius:12}} />
              </div>
            </div>
            <a className="btn outline" href="/images/cumi/kapal cumi 28meter.pdf" target="_blank" rel="noopener">Unduh Contoh Spek Teknis (PDF)</a>
          </div>
        </div>

        <div className="cta-band">
          <h3>Butuh rancangan cumi sesuai area tangkap dan kebutuhan lampu?</h3>
          <div className="cta-actions">
            <Link href="/kontak" className="btn">Diskusikan Proyek</Link>
            <Link href="/produk-kapal" className="btn outline">Kembali ke Produk</Link>
          </div>
        </div>
      </section>
    </>
  );
}


