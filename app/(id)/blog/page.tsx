import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/blog';
  const title = 'Blog | Batang Shipyard Indonesia - Tips & Edukasi Kapal Kayu';
  const description = 'Blog Batang Shipyard Indonesia berisi artikel edukasi tentang produksi kapal kayu, perawatan kapal, pengurusan dokumen kapal, dan tips industri maritim Indonesia.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'id-ID': canonical, 'en-US': 'https://batangshipyard.com/en/blog' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'id_ID', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <section className="list">
      <h1>Blog & Edukasi Batang Shipyard Indonesia</h1>
      
      <div className="card">
        <h2>Artikel Terbaru</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <article style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Panduan Lengkap Memilih Kayu untuk Konstruksi Kapal</h3>
            <p><em>Dipublikasikan: 15 Desember 2023</em></p>
            <p>Memilih jenis kayu yang tepat sangat penting untuk konstruksi kapal yang tahan lama. Artikel ini membahas karakteristik berbagai jenis kayu yang cocok untuk pembuatan kapal, mulai dari kayu jati, merbau, hingga kayu lokal lainnya.</p>
            <p><strong>Topik:</strong> Konstruksi Kapal, Material Kayu, Tips Pemilihan</p>
            <a href="#" className="btn" style={{display: 'inline-block', marginTop: '0.5rem'}}>Baca Selengkapnya</a>
          </article>
          
          <article style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Proses Pengurusan SPB (Surat Persetujuan Berlayar) untuk Kapal Baru</h3>
            <p><em>Dipublikasikan: 10 Desember 2023</em></p>
            <p>SPB adalah dokumen penting yang harus dimiliki setiap kapal sebelum berlayar. Artikel ini menjelaskan langkah-langkah lengkap pengurusan SPB, dokumen yang diperlukan, dan tips untuk mempercepat proses pengurusan.</p>
            <p><strong>Topik:</strong> Dokumen Kapal, SPB, Prosedur Administrasi</p>
            <a href="#" className="btn" style={{display: 'inline-block', marginTop: '0.5rem'}}>Baca Selengkapnya</a>
          </article>
          
          <article style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Tips Perawatan Rutin Kapal Kayu untuk Meningkatkan Daya Tahan</h3>
            <p><em>Dipublikasikan: 5 Desember 2023</em></p>
            <p>Perawatan rutin yang tepat dapat memperpanjang umur kapal kayu hingga puluhan tahun. Pelajari jadwal perawatan, jenis perawatan yang diperlukan, dan tanda-tanda kerusakan yang perlu diperhatikan.</p>
            <p><strong>Topik:</strong> Perawatan Kapal, Maintenance, Tips Praktis</p>
            <a href="#" className="btn" style={{display: 'inline-block', marginTop: '0.5rem'}}>Baca Selengkapnya</a>
          </article>
        </div>
      </div>

      <div className="card">
        <h2>Kategori Artikel</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Konstruksi Kapal</h3>
            <p>Artikel tentang teknik konstruksi, pemilihan material, dan proses pembuatan kapal kayu.</p>
            <ul>
              <li>Pemilihan Kayu untuk Kapal</li>
              <li>Teknik Konstruksi Lambung</li>
              <li>Pemasangan Mesin Kapal</li>
              <li>Sistem Kelistrikan Kapal</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Dokumen Kapal</h3>
            <p>Panduan lengkap pengurusan dokumen kapal dan prosedur administrasi maritim.</p>
            <ul>
              <li>Pengurusan SPB</li>
              <li>Dokumen Teknis Kapal</li>
              <li>Sertifikat Kelayakan</li>
              <li>Dokumen Hak Milik</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Perawatan Kapal</h3>
            <p>Tips dan panduan perawatan kapal untuk menjaga performa dan daya tahan.</p>
            <ul>
              <li>Maintenance Rutin</li>
              <li>Perbaikan Lambung</li>
              <li>Perawatan Mesin</li>
              <li>Pengecatan Kapal</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Industri Maritim</h3>
            <p>Informasi terkini tentang industri maritim Indonesia dan perkembangan teknologi.</p>
            <ul>
              <li>Regulasi Maritim</li>
              <li>Teknologi Terbaru</li>
              <li>Pasar Kapal Second</li>
              <li>Peluang Bisnis</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Studi Kasus</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Studi Kasus: Produksi Kapal Penangkap Ikan 200 GT</h3>
            <p><em>Dipublikasikan: 1 Desember 2023</em></p>
            <p>Kisah lengkap produksi kapal penangkap ikan dengan kapasitas 200 GT, mulai dari konsultasi awal, desain, konstruksi, hingga pengurusan dokumen. Pelajari tantangan yang dihadapi dan solusi yang diterapkan.</p>
            <p><strong>Durasi Proyek:</strong> 10 bulan | <strong>Klien:</strong> CV. Samudra Jaya</p>
            <a href="#" className="btn" style={{display: 'inline-block', marginTop: '0.5rem'}}>Baca Studi Kasus</a>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Studi Kasus: Renovasi Total Kapal Kayu Tradisional</h3>
            <p><em>Dipublikasikan: 25 November 2023</em></p>
            <p>Proses renovasi total kapal kayu tradisional yang telah beroperasi selama 15 tahun. Artikel ini membahas tahapan renovasi, material yang digunakan, dan hasil yang dicapai.</p>
            <p><strong>Durasi Proyek:</strong> 4 bulan | <strong>Klien:</strong> CV. Laut Biru</p>
            <a href="#" className="btn" style={{display: 'inline-block', marginTop: '0.5rem'}}>Baca Studi Kasus</a>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>FAQ - Pertanyaan yang Sering Diajukan</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Berapa lama waktu yang dibutuhkan untuk memproduksi kapal kayu?</h3>
            <p>Waktu produksi kapal kayu bervariasi tergantung ukuran dan kompleksitas. Kapal kecil (50-100 GT) membutuhkan 4-6 bulan, kapal sedang (100-200 GT) membutuhkan 6-10 bulan, dan kapal besar (200+ GT) membutuhkan 10-15 bulan.</p>
          </div>
          
          <div>
            <h3>Dokumen apa saja yang diperlukan untuk kapal baru?</h3>
            <p>Dokumen utama yang diperlukan meliputi: Sertifikat Kelayakan Kapal, Sertifikat Hak Milik Kapal, SPB (Surat Persetujuan Berlayar), dan dokumen teknis lainnya sesuai dengan jenis dan ukuran kapal.</p>
          </div>
          
          <div>
            <h3>Bagaimana cara merawat kapal kayu agar tahan lama?</h3>
            <p>Perawatan rutin meliputi: inspeksi berkala setiap 3 bulan, pembersihan lambung, pengecatan ulang setiap 2-3 tahun, perawatan mesin sesuai jadwal, dan perbaikan segera jika ditemukan kerusakan.</p>
          </div>
          
          <div>
            <h3>Apakah galangan menyediakan layanan konsultasi gratis?</h3>
            <p>Ya, kami menyediakan konsultasi gratis untuk semua jenis layanan. Anda dapat menghubungi kami melalui telepon, WhatsApp, atau mengisi form kontak di website untuk konsultasi awal.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Tips & Trik</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>5 Tips Memilih Galangan Kapal yang Tepat</h3>
            <ol>
              <li>Periksa pengalaman dan portofolio galangan</li>
              <li>Pastikan fasilitas dan peralatan memadai</li>
              <li>Verifikasi legalitas dan sertifikasi</li>
              <li>Minta referensi dari klien sebelumnya</li>
              <li>Negosiasikan harga dan termin pembayaran</li>
            </ol>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Cara Menghitung Biaya Produksi Kapal</h3>
            <p>Biaya produksi kapal dipengaruhi oleh beberapa faktor: ukuran kapal (GT), jenis kayu yang digunakan, kompleksitas desain, peralatan yang dipasang, dan lokasi galangan. Konsultasikan dengan tim teknis untuk estimasi yang akurat.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Berlangganan Newsletter</h2>
        <p>Dapatkan artikel terbaru dan tips seputar industri maritim langsung di email Anda. Berlangganan newsletter kami untuk mendapatkan informasi terkini tentang produksi kapal, perawatan, dan regulasi maritim.</p>
        <form style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <input 
            type="email" 
            placeholder="Masukkan email Anda" 
            style={{flex: 1, padding: '12px', border: '1px solid var(--color-border)', borderRadius: '8px'}}
          />
          <button className="btn" type="submit">Berlangganan</button>
        </form>
      </div>
    </section>
  );
}


