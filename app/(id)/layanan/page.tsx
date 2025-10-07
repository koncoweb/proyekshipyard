import Link from 'next/link';
import { Icon } from '@/components/Icon';
export const revalidate = 86400;

export default function Page() {
  return (
    <>
      <section className="hero services-hero">
        <div className="container hero-inner">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Layanan Batang Shipyard Indonesia</p>
          <h1 className="hero-title">Solusi Lengkap untuk Kebutuhan Kapal Anda</h1>
          <p className="hero-sub">Dari produksi kapal kayu, pengurusan dokumen kapal & SPB, perawatan berkala, hingga fasilitasi jual-beli kapal second. Semua layanan kami dirancang untuk mempercepat operasional maritim Anda dengan standar kualitas tinggi dan proses yang transparan.</p>
          <div className="hero-cta">
            <Link href="/kontak" className="btn">Konsultasi Layanan</Link>
            <Link href="/proyek" className="btn outline">Lihat Portofolio</Link>
          </div>
        </div>
      </section>

      <section className="list">
        <div className="card" style={{borderColor:'rgba(0,0,0,.08)'}}>
          <h2 style={{fontSize:20,margin:0,marginBottom:12}}>Layanan Kami</h2>
          <p style={{marginTop:6}}>Pilih layanan sesuai kebutuhan Anda. Tim kami siap membantu dari konsultasi awal hingga eksekusi proyek dengan pendampingan penuh.</p>
          <div className="nav-grid" style={{marginTop:8}}>
            <Link className="card" href="/layanan/produksi-kapal-kayu" style={{display:'grid',gridTemplateColumns:'24px 1fr',gap:10,alignItems:'center'}}>
              <Icon name="ship" />
              Produksi Kapal Kayu
            </Link>
            <Link className="card" href="/layanan/dokumen-kapal" style={{display:'grid',gridTemplateColumns:'24px 1fr',gap:10,alignItems:'center'}}>
              <Icon name="document" />
              Dokumen Kapal & SPB
            </Link>
            <Link className="card" href="/layanan/perawatan-kapal" style={{display:'grid',gridTemplateColumns:'24px 1fr',gap:10,alignItems:'center'}}>
              <Icon name="wrench" />
              Perawatan Kapal
            </Link>
            <Link className="card" href="/layanan/kapal-bekas" style={{display:'grid',gridTemplateColumns:'24px 1fr',gap:10,alignItems:'center'}}>
              <Icon name="folder" />
              Kapal Second
            </Link>
          </div>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <h2 style={{fontSize:20,margin:0,marginBottom:12}}>Mengapa Memilih Batang Shipyard?</h2>
          <ul className="gold-list">
            <li><span className="gold-bullet" aria-hidden></span><div><strong>Pengalaman Teknis:</strong> Tim ahli dengan rekam jejak proyek sukses di berbagai kelas kapal. Kami memahami detail konstruksi kayu tropis, permesinan, hingga sistem pendingin hasil tangkap untuk menjaga kualitas ikan.</div></li>
            <li><span className="gold-bullet" aria-hidden></span><div><strong>Proses Transparan:</strong> Estimasi biaya, timeline, serta progress yang jelas di setiap tahap. Anda akan menerima update rutin dan dokumentasi pelaksanaan mulai desain, pemotongan material, perakitan, hingga sea trial.</div></li>
            <li><span className="gold-bullet" aria-hidden></span><div><strong>Standar Maritim:</strong> Pengerjaan mengikuti regulasi dan standar klasifikasi yang berlaku, termasuk aspek stabilitas, keselamatan, dan kelistrikan kapal.</div></li>
            <li><span className="gold-bullet" aria-hidden></span><div><strong>Dukungan End-to-End:</strong> Pendampingan dari konsultasi, rancangan teknis, pengadaan material, supervisi pengerjaan, sampai pengurusan dokumen berlayar.</div></li>
          </ul>

          <p style={{marginTop:12}}>Dengan proses yang rapi dan sumber daya berpengalaman, kami membantu pemilik kapal mencapai target operasi dengan biaya terukur dan mutu pengerjaan yang dapat dipertanggungjawabkan.</p>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <h2 style={{fontSize:20,margin:0,marginBottom:12}}>FAQ Layanan</h2>
          <div style={{display:'grid',gap:'10px',marginTop:8}}>
            <div>
              <h3>Berapa lama waktu pengerjaan tiap layanan?</h3>
              <p>Produksi kapal: 6–12 bulan tergantung ukuran dan kompleksitas. Dokumen: 2–8 minggu. Perawatan: 1–8 minggu sesuai cakupan. Transaksi kapal second: 2–12 minggu.</p>
            </div>
            <div>
              <h3>Apakah konsultasi awal berbayar?</h3>
              <p>Konsultasi awal gratis untuk membantu memetakan kebutuhan dan menentukan langkah terbaik.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


