import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/layanan/kapal-bekas';
  const title = 'Jual-Beli Kapal Bekas | Batang Shipyard Indonesia - Broker & Konsultan';
  const description = 'Layanan jual-beli kapal bekas profesional: listing kapal, inspeksi teknis, negosiasi harga, penyusunan kontrak, dan due diligence untuk transaksi kapal yang aman.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'id-ID': canonical, 'en-US': 'https://batangshipyard.com/en/services/second-hand-vessel' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'id_ID', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <section className="list">
      <h1>Layanan Jual-Beli Kapal Bekas Profesional</h1>
      
      <div className="card">
        <h2>Broker Kapal Bekas Terpercaya</h2>
        <p>Batang Shipyard Indonesia menyediakan layanan jual-beli kapal bekas yang profesional dan terpercaya. Sebagai broker kapal berpengalaman, kami membantu mempertemukan penjual dan pembeli dengan proses transaksi yang aman dan transparan.</p>
        <p>Tim kami memiliki keahlian dalam menilai kondisi kapal, melakukan inspeksi teknis, dan memfasilitasi negosiasi yang menguntungkan kedua belah pihak. Kami memastikan setiap transaksi berjalan lancar dengan dokumen yang lengkap dan legal.</p>
      </div>

      <div className="card">
        <h2>Layanan yang Kami Sediakan</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Listing & Pencarian Kapal</h3>
            <ul>
              <li><strong>Database Kapal Bekas:</strong> Akses ke database kapal bekas yang tersedia</li>
              <li><strong>Pencarian Sesuai Kebutuhan:</strong> Pencarian kapal berdasarkan spesifikasi yang diinginkan</li>
              <li><strong>Listing Gratis:</strong> Layanan listing kapal untuk penjual tanpa biaya</li>
              <li><strong>Update Berkala:</strong> Update informasi kapal secara berkala</li>
              <li><strong>Foto & Dokumentasi:</strong> Dokumentasi lengkap kondisi kapal</li>
            </ul>
          </div>
          
          <div>
            <h3>Inspeksi & Penilaian Teknis</h3>
            <ul>
              <li><strong>Inspeksi Kondisi Kapal:</strong> Pemeriksaan menyeluruh kondisi kapal</li>
              <li><strong>Penilaian Nilai Kapal:</strong> Penilaian fair value berdasarkan kondisi teknis</li>
              <li><strong>Laporan Inspeksi:</strong> Laporan detail kondisi kapal dan rekomendasi</li>
              <li><strong>Due Diligence:</strong> Pemeriksaan mendalam untuk pembeli serius</li>
              <li><strong>Verifikasi Dokumen:</strong> Verifikasi kelengkapan dokumen kapal</li>
            </ul>
          </div>
          
          <div>
            <h3>Negosiasi & Mediasi</h3>
            <ul>
              <li><strong>Negosiasi Harga:</strong> Fasilitasi negosiasi harga yang adil</li>
              <li><strong>Mediasi Persyaratan:</strong> Mediasi persyaratan transaksi</li>
              <li><strong>Konsultasi Hukum:</strong> Konsultasi aspek hukum transaksi</li>
              <li><strong>Koordinasi Meeting:</strong> Koordinasi pertemuan antara penjual dan pembeli</li>
              <li><strong>Follow-up Negosiasi:</strong> Follow-up proses negosiasi</li>
            </ul>
          </div>
          
          <div>
            <h3>Dokumentasi & Kontrak</h3>
            <ul>
              <li><strong>Penyusunan Kontrak:</strong> Penyusunan kontrak jual beli yang legal</li>
              <li><strong>Sale Form:</strong> Dokumen sale form sesuai standar maritim</li>
              <li><strong>Dokumen Transfer:</strong> Pengurusan dokumen transfer kepemilikan</li>
              <li><strong>Legalitas Dokumen:</strong> Memastikan legalitas semua dokumen</li>
              <li><strong>Arsip Transaksi:</strong> Arsip lengkap dokumen transaksi</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Jenis Kapal yang Kami Tangani</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Kapal Penangkap Ikan</h3>
            <ul>
              <li>Kapal pukat cincin</li>
              <li>Kapal longline</li>
              <li>Kapal purse seine</li>
              <li>Kapal gillnet</li>
              <li>Kapal trawl</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Kapal Transportasi</h3>
            <ul>
              <li>Kapal kargo</li>
              <li>Kapal penumpang</li>
              <li>Kapal ferry</li>
              <li>Kapal tongkang</li>
              <li>Kapal container</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Kapal Wisata</h3>
            <ul>
              <li>Kapal pesiar</li>
              <li>Kapal diving</li>
              <li>Kapal charter</li>
              <li>Kapal yacht</li>
              <li>Kapal speedboat</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Kapal Khusus</h3>
            <ul>
              <li>Kapal patroli</li>
              <li>Kapal penelitian</li>
              <li>Kapal bantuan</li>
              <li>Kapal tunda</li>
              <li>Kapal dengan fungsi khusus</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Proses Transaksi</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>1. Listing & Pencarian</h3>
            <ul>
              <li>Listing kapal yang akan dijual</li>
              <li>Pencarian kapal sesuai kebutuhan pembeli</li>
              <li>Penyaringan kapal yang sesuai kriteria</li>
              <li>Penyediaan informasi awal kapal</li>
              <li>Koordinasi dengan penjual/pembeli</li>
            </ul>
          </div>
          
          <div>
            <h3>2. Inspeksi & Penilaian</h3>
            <ul>
              <li>Inspeksi kondisi fisik kapal</li>
              <li>Pemeriksaan dokumen kapal</li>
              <li>Penilaian nilai kapal</li>
              <li>Penyusunan laporan inspeksi</li>
              <li>Rekomendasi untuk pembeli</li>
            </ul>
          </div>
          
          <div>
            <h3>3. Negosiasi & Kesepakatan</h3>
            <ul>
              <li>Fasilitasi negosiasi harga</li>
              <li>Mediasi persyaratan transaksi</li>
              <li>Penyusunan kesepakatan awal</li>
              <li>Koordinasi meeting penjual-pembeli</li>
              <li>Finalisasi kesepakatan</li>
            </ul>
          </div>
          
          <div>
            <h3>4. Dokumentasi & Transfer</h3>
            <ul>
              <li>Penyusunan kontrak jual beli</li>
              <li>Pengurusan dokumen transfer</li>
              <li>Verifikasi legalitas dokumen</li>
              <li>Penandatanganan kontrak</li>
              <li>Transfer kepemilikan resmi</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Keunggulan Layanan Kami</h2>
        <ul>
          <li><strong>Tim Berpengalaman:</strong> Tim yang berpengalaman dalam transaksi kapal bekas</li>
          <li><strong>Inspeksi Teknis:</strong> Inspeksi teknis yang menyeluruh dan akurat</li>
          <li><strong>Penilaian Fair:</strong> Penilaian nilai kapal yang fair dan objektif</li>
          <li><strong>Dokumen Lengkap:</strong> Memastikan kelengkapan dokumen transaksi</li>
          <li><strong>Legalitas Terjamin:</strong> Semua transaksi sesuai dengan hukum yang berlaku</li>
          <li><strong>Follow-up Service:</strong> Layanan follow-up setelah transaksi</li>
          <li><strong>Konsultasi Gratis:</strong> Konsultasi awal tanpa biaya</li>
        </ul>
      </div>

      <div className="card">
        <h2>Biaya Layanan</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Komisi Broker</h3>
            <p><strong>Penjual:</strong> 3-5% dari nilai jual kapal</p>
            <p><strong>Pembeli:</strong> 2-3% dari nilai beli kapal</p>
            <p>Komisi dibayar setelah transaksi selesai</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Inspeksi Teknis</h3>
            <p><strong>Inspeksi Dasar:</strong> Rp 2.000.000 - Rp 5.000.000</p>
            <p><strong>Due Diligence:</strong> Rp 5.000.000 - Rp 10.000.000</p>
            <p>Biaya tergantung ukuran dan kompleksitas kapal</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Dokumentasi</h3>
            <p><strong>Kontrak Jual Beli:</strong> Rp 1.000.000 - Rp 3.000.000</p>
            <p><strong>Transfer Dokumen:</strong> Rp 2.000.000 - Rp 5.000.000</p>
            <p>Termasuk pengurusan dokumen transfer kepemilikan</p>
          </div>
        </div>
        <p><em>*Biaya dapat bervariasi tergantung kompleksitas transaksi. Konsultasi gratis untuk estimasi yang akurat.</em></p>
      </div>

      <div className="card">
        <h2>Tips untuk Penjual</h2>
        <ul>
          <li><strong>Persiapkan Dokumen:</strong> Pastikan semua dokumen kapal lengkap dan valid</li>
          <li><strong>Kondisi Kapal:</strong> Bersihkan dan perbaiki kapal sebelum listing</li>
          <li><strong>Harga Realistis:</strong> Tentukan harga yang realistis berdasarkan kondisi kapal</li>
          <li><strong>Informasi Lengkap:</strong> Sediakan informasi lengkap tentang kapal</li>
          <li><strong>Fleksibilitas:</strong> Bersikap fleksibel dalam negosiasi</li>
        </ul>
      </div>

      <div className="card">
        <h2>Tips untuk Pembeli</h2>
        <ul>
          <li><strong>Inspeksi Mendalam:</strong> Lakukan inspeksi mendalam sebelum membeli</li>
          <li><strong>Verifikasi Dokumen:</strong> Verifikasi kelengkapan dan validitas dokumen</li>
          <li><strong>Budget Planning:</strong> Siapkan budget untuk perawatan pasca pembelian</li>
          <li><strong>Konsultasi Ahli:</strong> Konsultasikan dengan ahli sebelum memutuskan</li>
          <li><strong>Negosiasi Bijak:</strong> Negosiasikan harga berdasarkan kondisi aktual kapal</li>
        </ul>
      </div>

      <div className="card">
        <h2>Mulai Transaksi Kapal Bekas Anda</h2>
        <p>Apakah Anda ingin menjual atau membeli kapal bekas? Tim kami siap membantu mewujudkan transaksi yang aman dan menguntungkan. Konsultasi awal kami gratis dan tanpa komitmen.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Halo,%20saya%20ingin%20listing%20kapal%20atau%20mencari%20kapal%20bekas" style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.3s ease'
          }}>Listing Kapal / Cari Kapal via WhatsApp</a>
          <a className="btn" href="/proyek" style={{backgroundColor: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)'}}>Lihat Portofolio</a>
        </div>
      </div>
    </section>
  );
}


