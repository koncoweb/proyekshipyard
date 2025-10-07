import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata = {
  title: 'Kapal Cakalang | Batang Shipyard Indonesia',
  description: 'Desain kapal cakalang/tongkol dengan fokus kecepatan jelajah, efisiensi BBM, dan penanganan hasil cepat. Konsultasi gratis spesifikasi sesuai target operasi.',
  alternates: { canonical: 'https://batangshipyard.com/produk-kapal/cakalang' }
};

export default function Page() {
  return (
    <>
      <section className="hero light-text" style={{
        background:
          "linear-gradient(90deg, rgba(11,92,215,.80) 0%, rgba(11,92,215,.60) 36%, rgba(11,92,215,.40) 60%, rgba(11,92,215,.20) 82%, rgba(11,92,215,.10) 100%), url('/images/cakalang/galangan-kapal-cakalang-jawatengah.jpeg') center / cover no-repeat"
      }}>
        <div className="container hero-inner" style={{padding:'98px 0 77px'}}>
          <div className="hero-copy">
            <p style={{color:'#ffffff',fontWeight:800,margin:'0 0 8px'}}>Produk Kapal</p>
            <h1 className="hero-title" style={{color:'#fff'}}>Kapal Cakalang</h1>
            <p className="hero-sub" style={{color:'rgba(255,255,255,.9)'}}>Didesain untuk target tongkol/cakalang dengan haluan ramping, efisiensi bahan bakar, dan layout dek efektif.</p>
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
            <span className="muted">Target tongkol/cakalang</span>
          </div>
          <p>Desain difokuskan pada <strong>kecepatan jelajah</strong>, <strong>stabilitas</strong>, dan <strong>penanganan hasil</strong> yang cepat. Opsi RSW/flake ice untuk menjaga mutu tangkapan.</p>
          <p>Hull form ramping membantu menekan konsumsi BBM sekaligus memberikan respons olah gerak yang lincah. Penempatan palka dekat area kerja mempercepat alur penanganan hasil di dek.</p>
          <ul className="gold-list" style={{marginTop:10}}>
            <li><strong>Ukuran umum:</strong> 15–32 meter; 20–120 GT</li>
            <li><strong>Propulsi:</strong> Mesin efisien, baling-baling sesuai beban</li>
            <li><strong>Palka:</strong> Ice box dekat area kerja</li>
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
                <Image src="/images/cakalang/galangan-kapal-cakalang-jawatengah.jpeg" alt="Desain Kapal Cakalang" fill sizes="(max-width: 800px) 100vw, 600px" style={{objectFit:'cover',borderRadius:12}} />
              </div>
              <div style={{position:'relative',width:'100%',height:220}}>
                <Image src="/images/cakalang/galangan-kapal-cakalang-jawatengah2.jpeg" alt="Konstruksi Kapal Cakalang" fill sizes="(max-width: 800px) 100vw, 600px" style={{objectFit:'cover',borderRadius:12}} />
              </div>
            </div>
            <a className="btn outline" href="/images/cakalang/kapal cakalang.pdf" target="_blank" rel="noopener">Unduh Contoh Spek Teknis (PDF)</a>
          </div>
        </div>

        <div className="cta-band">
          <h3>Siap membangun armada cakalang yang efisien?</h3>
          <div className="cta-actions">
            <Link href="/kontak" className="btn">Diskusikan Proyek</Link>
            <Link href="/produk-kapal" className="btn outline">Kembali ke Produk</Link>
          </div>
        </div>
      </section>
    </>
  );
}


