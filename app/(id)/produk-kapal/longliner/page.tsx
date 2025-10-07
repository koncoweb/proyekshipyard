import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata = {
  title: 'Kapal Long Liner | Batang Shipyard Indonesia',
  description: 'Perancangan kapal long liner untuk target ikan bernilai tinggi. Stabilitas, ergonomi jalur rawai, dan palka beku bertingkat. Konsultasi gratis.',
  alternates: { canonical: 'https://batangshipyard.com/produk-kapal/longliner' }
};

export default function Page() {
  return (
    <>
      <section className="hero light-text" style={{
        background:
          "linear-gradient(90deg, rgba(11,92,215,.80) 0%, rgba(11,92,215,.60) 36%, rgba(11,92,215,.40) 60%, rgba(11,92,215,.20) 82%, rgba(11,92,215,.10) 100%), url('/images/longliner/galangan-kapal-longliner-jawatengah.jpeg') center / cover no-repeat"
      }}>
        <div className="container hero-inner" style={{padding:'98px 0 77px'}}>
          <div className="hero-copy">
            <p style={{color:'#ffffff',fontWeight:800,margin:'0 0 8px'}}>Produk Kapal</p>
            <h1 className="hero-title" style={{color:'#fff'}}>Kapal Long Liner</h1>
            <p className="hero-sub" style={{color:'rgba(255,255,255,.9)'}}>Desain untuk sistem rawai dengan stabilitas tinggi, jalur kerja ergonomis, dan keselamatan kru.</p>
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
            <span className="muted">Operasi rawai</span>
          </div>
          <p>Fokus pada <strong>setting/hauling</strong> yang efisien, <strong>penataan roller</strong>, dan <strong>baiting table</strong> ergonomis. Sistem navigasi dan autopilot direkomendasikan untuk lintasan panjang.</p>
          <p>Konstruksi memperhatikan pusat berat dan stabilitas agar performa jelajah dan kenyamanan kru terjaga. Palka beku bertingkat membantu mempertahankan kualitas sashimi grade untuk nilai jual maksimal.</p>
          <ul className="gold-list" style={{marginTop:10}}>
            <li><strong>Ukuran umum:</strong> 20–40 meter; 50–200 GT</li>
            <li><strong>Deck equipment:</strong> Roller, line hauler, fish hold bertingkat</li>
            <li><strong>Palka:</strong> Freezer/beku, sashimi grade handling</li>
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
                <Image src="/images/longliner/galangan-kapal-longliner-jawatengah.jpeg" alt="Desain Kapal Long Liner" fill sizes="(max-width: 800px) 100vw, 600px" style={{objectFit:'cover',borderRadius:12}} />
              </div>
              <div style={{position:'relative',width:'100%',height:220}}>
                <Image src="/images/longliner/galangan-kapal-longliner-jawatengah2.jpeg" alt="Konstruksi Kapal Long Liner" fill sizes="(max-width: 800px) 100vw, 600px" style={{objectFit:'cover',borderRadius:12}} />
              </div>
            </div>
            <a className="btn outline" href="/images/longliner/Kapal long liner 34 meter_last.pdf" target="_blank" rel="noopener">Unduh Contoh Spek Teknis (PDF)</a>
          </div>
        </div>

        <div className="cta-band">
          <h3>Siap meningkatkan efisiensi operasi rawai Anda?</h3>
          <div className="cta-actions">
            <Link href="/kontak" className="btn">Diskusikan Proyek</Link>
            <Link href="/produk-kapal" className="btn outline">Kembali ke Produk</Link>
          </div>
        </div>
      </section>
    </>
  );
}


