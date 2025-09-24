import Link from 'next/link';
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
            <Link className="card" href="/layanan/produksi-kapal-kayu">Produksi Kapal Kayu</Link>
            <Link className="card" href="/layanan/dokumen-kapal">Dokumen Kapal & SPB</Link>
            <Link className="card" href="/layanan/perawatan-kapal">Perawatan Kapal</Link>
            <Link className="card" href="/layanan/kapal-bekas">Kapal Second</Link>
          </div>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <h2 style={{fontSize:20,margin:0,marginBottom:12}}>Mengapa Memilih Batang Shipyard?</h2>
          <ul>
            <li><strong>Pengalaman Teknis:</strong> Tim ahli dengan rekam jejak proyek sukses di berbagai kelas kapal.</li>
            <li><strong>Proses Transparan:</strong> Estimasi biaya, timeline, serta progress yang jelas di setiap tahap.</li>
            <li><strong>Standar Maritim:</strong> Pengerjaan mengikuti regulasi dan standar klasifikasi yang berlaku.</li>
            <li><strong>Dukungan End-to-End:</strong> Pendampingan dari konsultasi hingga dokumen berlayar.</li>
          </ul>
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


