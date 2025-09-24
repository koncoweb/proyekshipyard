import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/proyek';
  const title = 'Portofolio Proyek | Batang Shipyard Indonesia - Produksi Kapal Kayu & Perawatan';
  const description = 'Lihat portofolio proyek Batang Shipyard Indonesia: produksi kapal kayu, perawatan kapal, pengurusan dokumen, dan jual-beli kapal bekas yang telah berhasil diselesaikan.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'id-ID': canonical, 'en-US': 'https://batangshipyard.com/en/projects' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'id_ID', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <section className="list">
      <h1>Portofolio Proyek Batang Shipyard Indonesia</h1>
      
      <div className="card">
        <h2>Proyek Produksi Kapal Kayu</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Kapal Kayu Tradisional - 150 GT</h3>
            <p><strong>Klien:</strong> PT. Maritim Nusantara</p>
            <p><strong>Spesifikasi:</strong> Kapal kayu tradisional dengan panjang 25 meter, lebar 6 meter, kapasitas 150 GT</p>
            <p><strong>Fitur:</strong> Konstruksi kayu jati, sistem navigasi modern, mesin diesel 300 HP</p>
            <p><strong>Durasi:</strong> 8 bulan (2023)</p>
            <p><strong>Status:</strong> Selesai dan beroperasi</p>
          </div>
          
          <div>
            <h3>Kapal Penangkap Ikan - 200 GT</h3>
            <p><strong>Klien:</strong> CV. Samudra Jaya</p>
            <p><strong>Spesifikasi:</strong> Kapal penangkap ikan dengan panjang 30 meter, lebar 7 meter, kapasitas 200 GT</p>
            <p><strong>Fitur:</strong> Ruang pendingin, sistem penangkapan modern, mesin diesel 400 HP</p>
            <p><strong>Durasi:</strong> 10 bulan (2023)</p>
            <p><strong>Status:</strong> Selesai dan beroperasi</p>
          </div>
          
          <div>
            <h3>Kapal Transportasi - 300 GT</h3>
            <p><strong>Klien:</strong> PT. Bahari Transport</p>
            <p><strong>Spesifikasi:</strong> Kapal transportasi barang dengan panjang 35 meter, lebar 8 meter, kapasitas 300 GT</p>
            <p><strong>Fitur:</strong> Ruang kargo luas, sistem loading modern, mesin diesel 500 HP</p>
            <p><strong>Durasi:</strong> 12 bulan (2022-2023)</p>
            <p><strong>Status:</strong> Selesai dan beroperasi</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Proyek Perawatan & Renovasi Kapal</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Renovasi Kapal Kayu - 100 GT</h3>
            <p><strong>Klien:</strong> CV. Laut Biru</p>
            <p><strong>Layanan:</strong> Renovasi total lambung, penggantian mesin, perbaikan sistem kelistrikan</p>
            <p><strong>Durasi:</strong> 4 bulan (2023)</p>
            <p><strong>Hasil:</strong> Kapal kembali beroperasi dengan performa optimal</p>
          </div>
          
          <div>
            <h3>Maintenance Rutin Kapal - 250 GT</h3>
            <p><strong>Klien:</strong> PT. Nusantara Shipping</p>
            <p><strong>Layanan:</strong> Inspeksi rutin, perbaikan lambung, perawatan mesin, pengecatan ulang</p>
            <p><strong>Durasi:</strong> 2 bulan (2023)</p>
            <p><strong>Hasil:</strong> Kapal siap berlayar dengan sertifikat kelayakan</p>
          </div>
          
          <div>
            <h3>Upgrade Sistem Navigasi</h3>
            <p><strong>Klien:</strong> CV. Maritim Sejahtera</p>
            <p><strong>Layanan:</strong> Pemasangan GPS, radar, dan sistem komunikasi modern</p>
            <p><strong>Durasi:</strong> 1 bulan (2023)</p>
            <p><strong>Hasil:</strong> Sistem navigasi modern terpasang dan berfungsi optimal</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Proyek Pengurusan Dokumen Kapal</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Pengurusan SPB Kapal Baru</h3>
            <p><strong>Klien:</strong> PT. Samudra Mandiri</p>
            <p><strong>Layanan:</strong> Pengurusan dokumen teknis, hak milik kapal, dan SPB untuk kapal baru 180 GT</p>
            <p><strong>Durasi:</strong> 3 bulan (2023)</p>
            <p><strong>Hasil:</strong> Semua dokumen lengkap dan SPB diterbitkan</p>
          </div>
          
          <div>
            <h3>Renewal Sertifikat Kapal</h3>
            <p><strong>Klien:</strong> CV. Bahari Lestari</p>
            <p><strong>Layanan:</strong> Perpanjangan sertifikat kelayakan kapal dan dokumen teknis</p>
            <p><strong>Durasi:</strong> 1 bulan (2023)</p>
            <p><strong>Hasil:</strong> Sertifikat diperpanjang tanpa masalah</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Proyek Jual-Beli Kapal Bekas</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Penjualan Kapal Kayu - 120 GT</h3>
            <p><strong>Penjual:</strong> CV. Maritim Jaya</p>
            <p><strong>Pembeli:</strong> PT. Samudra Nusantara</p>
            <p><strong>Layanan:</strong> Fasilitasi negosiasi, penyusunan kontrak, due diligence</p>
            <p><strong>Durasi:</strong> 2 bulan (2023)</p>
            <p><strong>Hasil:</strong> Transaksi berhasil dengan dokumen lengkap</p>
          </div>
          
          <div>
            <h3>Pembelian Kapal Bekas - 200 GT</h3>
            <p><strong>Pembeli:</strong> CV. Laut Sejahtera</p>
            <p><strong>Penjual:</strong> PT. Bahari Mandiri</p>
            <p><strong>Layanan:</strong> Inspeksi teknis, negosiasi harga, pengurusan transfer dokumen</p>
            <p><strong>Durasi:</strong> 3 bulan (2023)</p>
            <p><strong>Hasil:</strong> Kapal berhasil dibeli dengan kondisi sesuai spesifikasi</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Statistik Proyek</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
          <div style={{textAlign: 'center', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3 style={{fontSize: '2rem', margin: '0', color: 'var(--color-primary)'}}>25+</h3>
            <p>Kapal Diproduksi</p>
          </div>
          <div style={{textAlign: 'center', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3 style={{fontSize: '2rem', margin: '0', color: 'var(--color-primary)'}}>50+</h3>
            <p>Proyek Perawatan</p>
          </div>
          <div style={{textAlign: 'center', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3 style={{fontSize: '2rem', margin: '0', color: 'var(--color-primary)'}}>30+</h3>
            <p>Dokumen Dikelola</p>
          </div>
          <div style={{textAlign: 'center', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3 style={{fontSize: '2rem', margin: '0', color: 'var(--color-primary)'}}>15+</h3>
            <p>Transaksi Kapal Bekas</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Testimoni Klien</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <p><em>"Batang Shipyard Indonesia memberikan layanan yang sangat profesional. Kapal kami selesai tepat waktu dengan kualitas yang memuaskan."</em></p>
            <p><strong>- PT. Maritim Nusantara</strong></p>
          </div>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <p><em>"Tim mereka sangat membantu dalam pengurusan dokumen kapal. Semua proses berjalan lancar dan sesuai prosedur."</em></p>
            <p><strong>- CV. Samudra Jaya</strong></p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Mulai Proyek Anda</h2>
        <p>Ingin menjadi bagian dari portofolio proyek kami? Tim kami siap membantu mewujudkan proyek kapal Anda dengan kualitas terbaik. <a href="https://wa.me/6282221665371?text=Halo,%20saya%20ingin%20konsultasi%20proyek%20kapal" className="btn" style={{
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
        }}>Konsultasi Proyek via WhatsApp</a></p>
      </div>
    </section>
  );
}


