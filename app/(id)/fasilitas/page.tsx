import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/fasilitas';
  const title = 'Fasilitas Galangan | Batang Shipyard Indonesia - Dry Dock, Crane, Workshop';
  const description = 'Fasilitas lengkap galangan kapal Batang Shipyard Indonesia: dry dock, crane, workshop, peralatan konstruksi kapal, dan area docking yang memadai untuk berbagai ukuran kapal.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'id-ID': canonical, 'en-US': 'https://batangshipyard.com/en/facilities' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'id_ID', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <section className="list">
      <h1>Fasilitas Galangan Batang Shipyard Indonesia</h1>
      
      <div className="card">
        <h2>Dry Dock & Docking Area</h2>
        <p>Kami memiliki fasilitas dry dock yang memadai untuk berbagai ukuran kapal, mulai dari kapal kecil hingga kapal berukuran sedang. Dry dock kami dilengkapi dengan sistem drainase yang efisien dan area kerja yang luas untuk memudahkan proses konstruksi dan perawatan kapal.</p>
        <ul>
          <li><strong>Dry Dock Utama:</strong> Kapasitas hingga 500 GT dengan kedalaman yang memadai</li>
          <li><strong>Docking Area:</strong> Area docking yang luas dengan akses air yang mudah</li>
          <li><strong>Sistem Drainase:</strong> Sistem pompa dan drainase yang modern dan efisien</li>
          <li><strong>Keamanan:</strong> Sistem keamanan 24 jam untuk melindungi kapal yang sedang dikerjakan</li>
        </ul>
      </div>

      <div className="card">
        <h2>Peralatan Konstruksi & Crane</h2>
        <p>Galangan kami dilengkapi dengan peralatan konstruksi modern dan crane yang memadai untuk mendukung proses pembuatan dan perawatan kapal dengan efisien dan aman.</p>
        <ul>
          <li><strong>Crane Gantry:</strong> Crane dengan kapasitas angkat hingga 50 ton untuk material konstruksi</li>
          <li><strong>Crane Mobile:</strong> Crane mobile untuk operasi yang fleksibel di berbagai area galangan</li>
          <li><strong>Peralatan Las:</strong> Peralatan las modern untuk konstruksi dan perbaikan kapal</li>
          <li><strong>Peralatan Ukur:</strong> Alat ukur presisi untuk memastikan akurasi konstruksi</li>
          <li><strong>Peralatan Finishing:</strong> Peralatan untuk proses finishing dan pengecatan kapal</li>
        </ul>
      </div>

      <div className="card">
        <h2>Workshop & Area Produksi</h2>
        <p>Workshop kami dilengkapi dengan berbagai peralatan untuk mendukung proses produksi kapal kayu dan perawatan kapal dengan standar kualitas tinggi.</p>
        <ul>
          <li><strong>Workshop Kayu:</strong> Area khusus untuk pengerjaan kayu dengan peralatan modern</li>
          <li><strong>Workshop Mesin:</strong> Area untuk perawatan dan perbaikan mesin kapal</li>
          <li><strong>Area Finishing:</strong> Area khusus untuk proses finishing dan pengecatan</li>
          <li><strong>Gudang Material:</strong> Gudang yang aman untuk menyimpan material konstruksi</li>
          <li><strong>Area Quality Control:</strong> Area untuk inspeksi dan quality control</li>
        </ul>
      </div>

      <div className="card">
        <h2>Fasilitas Pendukung</h2>
        <p>Selain fasilitas utama, kami juga menyediakan berbagai fasilitas pendukung untuk memastikan kenyamanan dan efisiensi kerja.</p>
        <ul>
          <li><strong>Kantor Administrasi:</strong> Kantor yang nyaman untuk konsultasi dan administrasi</li>
          <li><strong>Area Parkir:</strong> Area parkir yang luas untuk kendaraan klien dan karyawan</li>
          <li><strong>Fasilitas Keamanan:</strong> Sistem keamanan 24 jam dan CCTV monitoring</li>
          <li><strong>Fasilitas Kesehatan:</strong> P3K dan fasilitas kesehatan dasar</li>
          <li><strong>Akses Transportasi:</strong> Akses yang mudah dari jalan utama dan pelabuhan</li>
        </ul>
      </div>

      <div className="card">
        <h2>Kapasitas & Spesifikasi</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Kapasitas Dry Dock</h3>
            <ul>
              <li>Panjang maksimal: 50 meter</li>
              <li>Lebar maksimal: 12 meter</li>
              <li>Kedalaman: 4 meter</li>
              <li>Kapasitas maksimal: 500 GT</li>
            </ul>
          </div>
          <div>
            <h3>Peralatan Utama</h3>
            <ul>
              <li>Crane Gantry: 50 ton</li>
              <li>Crane Mobile: 25 ton</li>
              <li>Peralatan Las: Multi-process</li>
              <li>Peralatan Ukur: Digital & Manual</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Standar Operasional</h2>
        <p>Semua fasilitas kami dioperasikan dengan standar keamanan dan kualitas yang tinggi. Tim kami terlatih untuk menggunakan semua peralatan dengan aman dan efisien, memastikan hasil kerja yang optimal untuk setiap proyek kapal.</p>
        <p>Kami juga melakukan pemeliharaan rutin terhadap semua fasilitas dan peralatan untuk memastikan ketersediaan dan performa yang optimal saat dibutuhkan.</p>
      </div>

      <div className="card">
        <h2>Kunjungi Fasilitas Kami</h2>
        <p>Ingin melihat langsung fasilitas galangan kami? Kami menyediakan tur fasilitas untuk klien potensial. <a href="https://wa.me/6285640012454?text=Halo,%20saya%20ingin%20menjadwalkan%20kunjungan%20ke%20galangan" className="btn" style={{
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
        }}>Jadwalkan Kunjungan via WhatsApp</a></p>
      </div>
    </section>
  );
}


