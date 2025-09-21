import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/layanan/produksi-kapal-kayu';
  const title = 'Produksi Kapal Kayu | Batang Shipyard Indonesia - Konsultasi & Konstruksi';
  const description = 'Layanan produksi kapal kayu berkualitas tinggi: konsultasi spesifikasi, desain teknis, konstruksi, hingga pengurusan dokumen. Termin pembayaran 3 tahap dengan SPK notaris.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'id-ID': canonical, 'en-US': 'https://batangshipyard.com/en/services/wooden-vessel' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'id_ID', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <section className="list">
      <h1>Produksi Kapal Kayu Berkualitas Tinggi</h1>
      
      <div className="card">
        <h2>Layanan Produksi Kapal Kayu</h2>
        <p>Batang Shipyard Indonesia mengkhususkan diri dalam produksi kapal kayu dengan standar kualitas tinggi. Kami melayani berbagai jenis kapal mulai dari kapal penangkap ikan, kapal transportasi, hingga kapal wisata dengan kapasitas hingga 500 GT.</p>
        <p>Tim teknis berpengalaman kami akan membantu Anda dari tahap konsultasi awal hingga kapal siap berlayar dengan dokumen lengkap.</p>
      </div>

      <div className="card">
        <h2>Proses Produksi Lengkap</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>1. Konsultasi Spesifikasi</h3>
            <p>Konsultasi mendalam untuk menentukan spesifikasi kapal sesuai kebutuhan Anda, termasuk:</p>
            <ul>
              <li>Ukuran kapal (panjang, lebar, tinggi)</li>
              <li>Gross Tonnage (GT) yang diinginkan</li>
              <li>Jenis dan fungsi kapal</li>
              <li>Spesifikasi mesin dan peralatan</li>
              <li>Budget dan timeline proyek</li>
            </ul>
          </div>
          
          <div>
            <h3>2. Desain Teknis</h3>
            <p>Tim teknis kami akan membuat desain detail meliputi:</p>
            <ul>
              <li>Gambar konstruksi lambung</li>
              <li>Layout interior dan sistem</li>
              <li>Spesifikasi material dan peralatan</li>
              <li>Perhitungan struktur dan stabilitas</li>
              <li>Dokumentasi teknis lengkap</li>
            </ul>
          </div>
          
          <div>
            <h3>3. Presentasi Desain & RAB</h3>
            <p>Presentasi komprehensif yang mencakup:</p>
            <ul>
              <li>Presentasi desain 3D dan gambar teknis</li>
              <li>Rincian Anggaran Biaya (RAB) detail</li>
              <li>Jadwal pengerjaan proyek</li>
              <li>Spesifikasi material yang akan digunakan</li>
              <li>Garansi dan after-sales service</li>
            </ul>
          </div>
          
          <div>
            <h3>4. Negosiasi & Kesepakatan</h3>
            <p>Proses negosiasi yang transparan meliputi:</p>
            <ul>
              <li>Negosiasi harga dan termin pembayaran</li>
              <li>Penyesuaian spesifikasi sesuai budget</li>
              <li>Kesepakatan jadwal pengerjaan</li>
              <li>Klausul kontrak dan garansi</li>
              <li>Prosedur perubahan order (jika diperlukan)</li>
            </ul>
          </div>
          
          <div>
            <h3>5. Penandatanganan SPK</h3>
            <p>Kontrak resmi melalui notaris dengan dokumen lengkap:</p>
            <ul>
              <li>Surat Perjanjian Kerja (SPK) notaris</li>
              <li>Gambar teknis final</li>
              <li>RAB final yang disepakati</li>
              <li>Termin pembayaran 3 tahap</li>
              <li>Klausul garansi dan maintenance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Jenis Kapal yang Kami Produksi</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Kapal Penangkap Ikan</h3>
            <p>Kapal khusus untuk penangkapan ikan dengan fitur:</p>
            <ul>
              <li>Ruang pendingin ikan</li>
              <li>Sistem penangkapan modern</li>
              <li>Mesin diesel berkekuatan tinggi</li>
              <li>Navigasi dan komunikasi lengkap</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Kapal Transportasi</h3>
            <p>Kapal untuk transportasi barang dan penumpang:</p>
            <ul>
              <li>Ruang kargo yang luas</li>
              <li>Sistem loading yang efisien</li>
              <li>Fasilitas penumpang yang nyaman</li>
              <li>Keamanan dan keselamatan optimal</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Kapal Wisata</h3>
            <p>Kapal untuk keperluan wisata dan rekreasi:</p>
            <ul>
              <li>Desain yang menarik dan nyaman</li>
              <li>Fasilitas wisata lengkap</li>
              <li>Sistem keamanan tinggi</li>
              <li>Efisiensi bahan bakar optimal</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Kapal Khusus</h3>
            <p>Kapal dengan fungsi khusus sesuai kebutuhan:</p>
            <ul>
              <li>Kapal patroli</li>
              <li>Kapal penelitian</li>
              <li>Kapal bantuan</li>
              <li>Kapal dengan spesifikasi khusus</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Material & Kualitas</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Jenis Kayu yang Digunakan</h3>
            <ul>
              <li><strong>Kayu Jati:</strong> Untuk konstruksi utama, tahan lama dan kuat</li>
              <li><strong>Kayu Merbau:</strong> Untuk lambung, tahan air dan cuaca</li>
              <li><strong>Kayu Bangkirai:</strong> Untuk dek dan struktur, tahan terhadap cuaca ekstrem</li>
              <li><strong>Kayu Ulin:</strong> Untuk bagian yang membutuhkan kekuatan tinggi</li>
              <li><strong>Kayu Lokal:</strong> Sesuai dengan ketersediaan dan kebutuhan</li>
            </ul>
          </div>
          
          <div>
            <h3>Standar Kualitas</h3>
            <ul>
              <li>Kayu berkualitas tinggi dengan sertifikat</li>
              <li>Pengawetan kayu sesuai standar maritim</li>
              <li>Konstruksi mengikuti standar klasifikasi kapal</li>
              <li>Peralatan dan mesin bermerek terpercaya</li>
              <li>Inspeksi kualitas di setiap tahap produksi</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Termin Pembayaran</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Tahap 1: Down Payment (40%)</h3>
            <p>Dibayar saat penandatanganan SPK untuk memulai proyek dan pembelian material utama.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Tahap 2: Progress Payment (40%)</h3>
            <p>Dibayar saat konstruksi mencapai 70% untuk melanjutkan pengerjaan dan pemasangan peralatan.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Tahap 3: Final Payment (20%)</h3>
            <p>Dibayar saat kapal selesai dan siap diserahkan dengan dokumen lengkap.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Garansi & After-Sales</h2>
        <ul>
          <li><strong>Garansi Konstruksi:</strong> 2 tahun untuk konstruksi lambung dan struktur</li>
          <li><strong>Garansi Mesin:</strong> Sesuai dengan garansi pabrik mesin</li>
          <li><strong>Service Rutin:</strong> Layanan perawatan rutin dengan harga khusus</li>
          <li><strong>Sparepart:</strong> Ketersediaan sparepart dengan harga kompetitif</li>
          <li><strong>Konsultasi:</strong> Konsultasi gratis untuk perawatan dan upgrade</li>
        </ul>
      </div>

      <div className="card">
        <h2>Mulai Proyek Kapal Anda</h2>
        <p>Siap untuk memulai proyek produksi kapal kayu? Tim kami siap membantu mewujudkan kapal impian Anda dengan kualitas terbaik dan sesuai budget. Konsultasi awal kami gratis dan tanpa komitmen.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6285640012454?text=Halo,%20saya%20ingin%20konsultasi%20produksi%20kapal%20kayu" style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.3s ease'
          }}>Konsultasi Gratis via WhatsApp</a>
          <a className="btn" href="/proyek" style={{backgroundColor: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)'}}>Lihat Portofolio</a>
        </div>
      </div>
    </section>
  );
}


