import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/tentang-kami';
  const title = 'Tentang Kami | Batang Shipyard Indonesia - Galangan Kapal Terpercaya';
  const description = 'Batang Shipyard Indonesia adalah galangan kapal terpercaya yang mengkhususkan diri dalam produksi kapal kayu, pengurusan dokumen kapal, perawatan kapal, dan jual-beli kapal second.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'id-ID': canonical, 'en-US': 'https://batangshipyard.com/en/about' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'id_ID', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
      <section className="hero about-hero">
        <div className="container hero-inner">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Batang Shipyard Indonesia</p>
          <h1 className="hero-title">Tentang Batang Shipyard Indonesia</h1>
          <p className="hero-sub">Galangan kapal terpercaya yang menyediakan solusi lengkap: produksi kapal kayu, dokumen & SPB, perawatan kapal, hingga jual-beli kapal second.</p>
        </div>
      </section>

      <section className="list">
        <h1>Tentang Batang Shipyard Indonesia</h1>
        
        <div className="card">
          <h2>Visi & Misi</h2>
          <p><strong>Visi:</strong> Menjadi galangan kapal terdepan di Indonesia yang menyediakan solusi lengkap untuk industri maritim dengan standar internasional.</p>
          <p><strong>Misi:</strong> Memberikan layanan terbaik dalam produksi kapal kayu, pengurusan dokumen kapal, perawatan kapal, dan fasilitasi jual-beli kapal second dengan kualitas tinggi dan pelayanan yang profesional.</p>
        </div>

        <div className="card">
          <h2>Profil Perusahaan</h2>
          <p>Batang Shipyard Indonesia adalah galangan kapal yang telah berpengalaman dalam industri maritim Indonesia. Kami mengkhususkan diri dalam berbagai layanan kapal yang komprehensif, mulai dari produksi kapal kayu berkualitas tinggi hingga pengurusan dokumen kapal yang kompleks.</p>
          <p>Dengan tim teknis yang berpengalaman dan fasilitas yang memadai, kami berkomitmen untuk memberikan solusi terbaik bagi kebutuhan kapal Anda. Kami memahami bahwa setiap kapal memiliki karakteristik dan kebutuhan yang unik, oleh karena itu kami menyediakan layanan yang disesuaikan dengan spesifikasi dan budget Anda.</p>
        </div>

        <div className="card">
          <h2>Keunggulan Kami</h2>
          <ul>
            <li><strong>Tim Teknis Berpengalaman:</strong> Tim kami terdiri dari ahli-ahli berpengalaman dalam bidang konstruksi kapal dan dokumen maritim</li>
            <li><strong>Kualitas Terjamin:</strong> Setiap proyek dikerjakan dengan standar kualitas tinggi dan mengikuti regulasi yang berlaku</li>
            <li><strong>Layanan Komprehensif:</strong> Dari konsultasi awal hingga pengurusan dokumen, kami menyediakan layanan end-to-end</li>
            <li><strong>Harga Kompetitif:</strong> Kami menawarkan harga yang transparan dan kompetitif tanpa mengorbankan kualitas</li>
            <li><strong>Pelayanan Profesional:</strong> Komitmen kami untuk memberikan pelayanan terbaik kepada setiap klien</li>
          </ul>
        </div>

        <div className="card">
          <h2>Layanan Utama</h2>
          <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
            <div>
              <h3>Produksi Kapal Kayu</h3>
              <p>Konsultasi spesifikasi, desain teknis, presentasi RAB, hingga penandatanganan SPK via notaris dengan termin 3 tahap.</p>
            </div>
            <div>
              <h3>Dokumen Kapal & SPB</h3>
              <p>Pengurusan dokumen teknis kapal, dokumen hak milik, dan bantuan Surat Persetujuan Berlayar (SPB).</p>
            </div>
            <div>
              <h3>Perawatan Kapal</h3>
              <p>Inspeksi rutin, pembersihan, perbaikan lambung, perawatan mesin, cat, dan penggantian sparepart.</p>
            </div>
            <div>
            <h3>Kapal Second</h3>
            <p>Fasilitasi jual-beli kapal second dengan negosiasi harga, penyusunan kontrak, dan due diligence.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Komitmen Kualitas</h2>
          <p>Kami berkomitmen untuk memberikan layanan dengan standar kualitas tertinggi. Setiap proyek yang kami kerjakan mengikuti prosedur yang ketat dan regulasi yang berlaku di industri maritim Indonesia. Tim kami terus mengupdate pengetahuan dan keterampilan untuk mengikuti perkembangan teknologi dan regulasi terbaru.</p>
          <p>Kepuasan klien adalah prioritas utama kami. Kami selalu berusaha untuk memahami kebutuhan spesifik setiap klien dan memberikan solusi yang tepat sesuai dengan budget dan timeline yang disepakati.</p>
        </div>

        <div className="card">
          <h2>Hubungi Kami</h2>
          <p>Siap untuk memulai proyek kapal Anda? Tim kami siap membantu Anda dari konsultasi awal hingga proyek selesai. <a href="https://wa.me/6282221665371?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20untuk%20proyek%20kapal" className="btn" style={{
            display: 'inline-block', 
            marginTop: '0.5rem',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.3s ease'
          }}>Konsultasi Gratis via WhatsApp</a></p>
        </div>
      </section>
    </>
  );
}


