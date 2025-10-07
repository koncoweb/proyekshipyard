import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata = {
  title: 'Kapal Collecting | Batang Shipyard Indonesia',
  description: 'Desain dan pembangunan kapal collecting untuk alih muatan di laut, stabil, hemat BBM, dan palka berinsulasi. Konsultasi gratis untuk spesifikasi sesuai target tonase.',
  alternates: { canonical: 'https://batangshipyard.com/produk-kapal/collecting' }
};

export default function Page() {
  return (
    <>
      <section className="hero light-text" style={{
        background:
          "linear-gradient(90deg, rgba(11,92,215,.80) 0%, rgba(11,92,215,.60) 36%, rgba(11,92,215,.40) 60%, rgba(11,92,215,.20) 82%, rgba(11,92,215,.10) 100%), url('/images/collecting/galangan-kapal-collecting-jawatengah.jpeg') center / cover no-repeat"
      }}>
        <div className="container hero-inner" style={{padding:'98px 0 77px'}}>
          <div className="hero-copy">
            <p style={{color:'#ffffff',fontWeight:800,margin:'0 0 8px'}}>Produk Kapal</p>
            <h1 className="hero-title" style={{color:'#fff'}}>Kapal Collecting</h1>
            <p className="hero-sub" style={{color:'rgba(255,255,255,.9)'}}>Kapal pengumpul hasil di laut (ship-to-ship transfer) dengan dek lega, stabilitas baik, dan palka berinsulasi.</p>
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
            <span className="muted">Operasi collecting</span>
          </div>
          <p>Kapal collecting berfungsi menerima hasil tangkap dari kapal-kapal nelayan di fishing ground untuk kemudian mengirimkannya ke pelabuhan atau cold storage. Fokus desain pada <strong>akses sisi aman</strong>, <strong>freeboard</strong> yang sesuai untuk alih muatan, serta <strong>palka berinsulasi</strong> agar mutu ikan terjaga.</p>
          <p>Ruang dek dioptimalkan untuk manuver ship-to-ship dan proses pemindahan hasil secara cepat. Kapal dirancang memiliki endurance memadai dengan konsumsi BBM efisien serta kenyamanan kru untuk operasi jarak jauh.</p>
          <ul className="gold-list" style={{marginTop:10}}>
            <li><strong>Ukuran umum:</strong> 18–35 meter; 30–150 GT</li>
            <li><strong>Material:</strong> Kayu pilihan oven/kering dengan konstruksi kuat</li>
            <li><strong>Kecepatan jelajah:</strong> 7–11 knot, efisiensi BBM optimal</li>
            <li><strong>Palka:</strong> Insulated hold/RSW opsional, tata udara baik</li>
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
                <Image src="/images/collecting/galangan-kapal-collecting-jawatengah.jpeg" alt="Desain Kapal Collecting" fill sizes="(max-width: 800px) 100vw, 600px" style={{objectFit:'cover',borderRadius:12}} />
              </div>
              <div style={{position:'relative',width:'100%',height:220}}>
                <Image src="/images/collecting/galangan-kapal-collecting-jawatengah2.jpeg" alt="Konstruksi Kapal Collecting" fill sizes="(max-width: 800px) 100vw, 600px" style={{objectFit:'cover',borderRadius:12}} />
              </div>
            </div>
            <a className="btn outline" href="/images/collecting/Kapal Collecting1.pdf" target="_blank" rel="noopener">Unduh Contoh Spek Teknis (PDF)</a>
          </div>
        </div>

        <div className="cta-band">
          <h3>Butuh rancangan collecting sesuai target tonase dan area operasi?</h3>
          <div className="cta-actions">
            <Link href="/kontak" className="btn">Diskusikan Proyek</Link>
            <Link href="/produk-kapal" className="btn outline">Kembali ke Produk</Link>
          </div>
        </div>
      </section>
    </>
  );
}


