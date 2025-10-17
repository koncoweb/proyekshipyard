import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata = {
  title: 'Kapal Purse Seine | Batang Shipyard Indonesia',
  description: 'Desain kapal purse seine dengan struktur geladak kuat, stabilitas melintang, dan palka besar. Konsultasi spesifikasi sesuai target operasi.',
  alternates: { canonical: 'https://batangshipyard.com/produk-kapal/purse-seine' }
};

export default function Page() {
  return (
    <>
      <section className="hero light-text" style={{
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.85) 36%, rgba(255,255,255,.65) 60%, rgba(255,255,255,.45) 82%, rgba(255,255,255,.30) 100%), url('/images/purseseine/galangan-kapal-purse-seine-jawatengah.jpeg') center / cover no-repeat"
      }}>
        <div className="container hero-inner" style={{padding:'98px 0 77px'}}>
          <div className="hero-copy">
            <p style={{fontWeight:800,margin:'0 0 8px'}}>Produk Kapal</p>
            <h1 className="hero-title">Kapal Purse Seine</h1>
            <p className="hero-sub">Optimal untuk operasi jaring lingkar dengan winch dan roller ditempatkan strategis.</p>
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
            <span className="muted">Operasi jaring lingkar</span>
          </div>
          <p>Desain mengutamakan <strong>stabilitas melintang</strong> saat setting/hauling, <strong>struktur geladak</strong> kuat, serta <strong>palka besar</strong> untuk percepatan loading. Tata letak peralatan jaring direncanakan untuk alur kerja yang aman dan cepat agar waktu operasi di laut lebih efisien.</p>
          <p>Material kayu pilihan dengan pengawetan yang tepat memberi kombinasi kekuatan, fleksibilitas, dan biaya perawatan yang ekonomis. Sistem propulsi dipilih untuk torsi kuat saat manuver dan hemat BBM saat jelajah.</p>
          <ul className="gold-list" style={{marginTop:10}}>
            <li><strong>Ukuran umum:</strong> 20–35 meter; 50–180 GT</li>
            <li><strong>Deck equipment:</strong> Power block, net roller, crane opsional</li>
            <li><strong>Palka:</strong> Besar, akses mudah, isolasi optimal</li>
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
                <Image src="/images/purseseine/galangan-kapal-purse-seine-jawatengah.jpeg" alt="Desain Kapal Purse Seine" fill sizes="(max-width: 800px) 100vw, 600px" style={{objectFit:'cover',borderRadius:12}} />
              </div>
              <div style={{position:'relative',width:'100%',height:220}}>
                <Image src="/images/purseseine/galangan-kapal-purse-seine-jawatengah2.jpeg" alt="Konstruksi Kapal Purse Seine" fill sizes="(max-width: 800px) 100vw, 600px" style={{objectFit:'cover',borderRadius:12}} />
              </div>
            </div>
            <a className="btn outline" href="/images/purseseine/Kapal PURSE SEINE 25 METER.pdf" target="_blank" rel="noopener">Unduh Contoh Spek Teknis (PDF)</a>
          </div>
        </div>

        <div className="cta-band">
          <h3>Ingin optimasi hasil tangkap dengan kapal purse seine?</h3>
          <div className="cta-actions">
            <Link href="/kontak" className="btn">Diskusikan Proyek</Link>
            <Link href="/produk-kapal" className="btn outline">Kembali ke Produk</Link>
          </div>
        </div>
      </section>
    </>
  );
}


