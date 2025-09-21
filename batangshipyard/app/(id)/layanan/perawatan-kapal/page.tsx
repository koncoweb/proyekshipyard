import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/layanan/perawatan-kapal';
  const title = 'Perawatan Kapal | Batang Shipyard Indonesia - Maintenance & Repair';
  const description = 'Layanan perawatan kapal lengkap: inspeksi rutin, perbaikan lambung, perawatan mesin, pengecatan, penggantian sparepart, dan maintenance berkala untuk kapal kayu.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'id-ID': canonical, 'en-US': 'https://batangshipyard.com/en/services/vessel-maintenance' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'id_ID', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <section className="list">
      <h1>Layanan Perawatan Kapal Lengkap</h1>
      
      <div className="card">
        <h2>Layanan Maintenance & Repair</h2>
        <p>Batang Shipyard Indonesia menyediakan layanan perawatan kapal yang komprehensif untuk memastikan kapal Anda selalu dalam kondisi optimal. Tim teknis berpengalaman kami siap memberikan layanan maintenance berkala maupun perbaikan darurat.</p>
        <p>Dengan fasilitas dry dock yang memadai dan peralatan modern, kami dapat menangani berbagai jenis perawatan kapal mulai dari kapal kecil hingga kapal berukuran sedang dengan standar kualitas tinggi.</p>
      </div>

      <div className="card">
        <h2>Jenis Layanan Perawatan</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Inspeksi & Pemeriksaan</h3>
            <ul>
              <li><strong>Inspeksi Rutin:</strong> Pemeriksaan berkala untuk mendeteksi masalah sejak dini</li>
              <li><strong>Inspeksi Lambung:</strong> Pemeriksaan kondisi lambung dan struktur kapal</li>
              <li><strong>Inspeksi Mesin:</strong> Pemeriksaan kondisi mesin dan sistem propulsi</li>
              <li><strong>Inspeksi Sistem Kelistrikan:</strong> Pemeriksaan sistem kelistrikan dan elektronik</li>
              <li><strong>Inspeksi Keselamatan:</strong> Pemeriksaan peralatan keselamatan dan navigasi</li>
            </ul>
          </div>
          
          <div>
            <h3>Perbaikan Lambung & Struktur</h3>
            <ul>
              <li><strong>Perbaikan Lambung:</strong> Perbaikan kerusakan pada lambung kapal</li>
              <li><strong>Penggantian Kayu:</strong> Penggantian bagian kayu yang rusak</li>
              <li><strong>Perbaikan Struktur:</strong> Perbaikan kerangka dan struktur kapal</li>
              <li><strong>Waterproofing:</strong> Perbaikan sistem kedap air</li>
              <li><strong>Reinforcement:</strong> Penguatan struktur yang diperlukan</li>
            </ul>
          </div>
          
          <div>
            <h3>Perawatan Mesin & Sistem</h3>
            <ul>
              <li><strong>Service Mesin:</strong> Perawatan berkala mesin utama dan bantu</li>
              <li><strong>Penggantian Oli:</strong> Penggantian oli mesin dan sistem hidrolik</li>
              <li><strong>Perbaikan Sistem Pendingin:</strong> Perbaikan sistem pendingin mesin</li>
              <li><strong>Perawatan Sistem Bahan Bakar:</strong> Pembersihan dan perawatan sistem bahan bakar</li>
              <li><strong>Perbaikan Sistem Propulsi:</strong> Perbaikan propeller dan sistem kemudi</li>
            </ul>
          </div>
          
          <div>
            <h3>Pengecatan & Finishing</h3>
            <ul>
              <li><strong>Pengecatan Lambung:</strong> Pengecatan ulang lambung kapal</li>
              <li><strong>Pengecatan Dek:</strong> Pengecatan dan finishing dek kapal</li>
              <li><strong>Anti Fouling:</strong> Aplikasi cat anti fouling untuk mencegah tumbuhan laut</li>
              <li><strong>Primer & Undercoat:</strong> Aplikasi primer dan undercoat yang tepat</li>
              <li><strong>Finishing Touch:</strong> Finishing detail untuk hasil yang sempurna</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Program Maintenance Berkala</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Maintenance Bulanan</h3>
            <ul>
              <li>Inspeksi visual lambung dan struktur</li>
              <li>Pemeriksaan sistem kelistrikan</li>
              <li>Pembersihan filter dan sistem pendingin</li>
              <li>Pemeriksaan peralatan keselamatan</li>
              <li>Laporan kondisi kapal</li>
            </ul>
            <p><strong>Biaya:</strong> Mulai dari Rp 2.000.000</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Maintenance 3 Bulanan</h3>
            <ul>
              <li>Inspeksi detail lambung dan struktur</li>
              <li>Service mesin dan sistem propulsi</li>
              <li>Pemeriksaan sistem hidrolik</li>
              <li>Pembersihan dan perawatan sistem bahan bakar</li>
              <li>Penggantian filter dan oli</li>
            </ul>
            <p><strong>Biaya:</strong> Mulai dari Rp 5.000.000</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Maintenance Tahunan</h3>
            <ul>
              <li>Inspeksi komprehensif seluruh kapal</li>
              <li>Pengecatan ulang lambung</li>
              <li>Overhaul mesin dan sistem utama</li>
              <li>Penggantian sparepart yang diperlukan</li>
              <li>Update sertifikat kelayakan</li>
            </ul>
            <p><strong>Biaya:</strong> Mulai dari Rp 15.000.000</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Layanan Perbaikan Darurat</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Emergency Repair</h3>
            <ul>
              <li><strong>Perbaikan Kebocoran:</strong> Penanganan kebocoran darurat</li>
              <li><strong>Perbaikan Mesin:</strong> Perbaikan mesin yang mogok</li>
              <li><strong>Perbaikan Sistem Kelistrikan:</strong> Penanganan masalah kelistrikan</li>
              <li><strong>Perbaikan Sistem Kemudi:</strong> Perbaikan sistem kemudi darurat</li>
              <li><strong>Perbaikan Struktur:</strong> Perbaikan kerusakan struktur</li>
            </ul>
          </div>
          
          <div>
            <h3>Layanan 24/7</h3>
            <ul>
              <li>Hotline darurat 24 jam</li>
              <li>Tim teknis siap siaga</li>
              <li>Perbaikan di lokasi (jika memungkinkan)</li>
              <li>Evakuasi ke galangan untuk perbaikan besar</li>
              <li>Koordinasi dengan pihak terkait</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Sparepart & Material</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Sparepart Mesin</h3>
            <ul>
              <li>Sparepart mesin diesel (Yanmar, Mitsubishi, dll)</li>
              <li>Filter oli, bahan bakar, dan udara</li>
              <li>Belt, bearing, dan komponen mekanis</li>
              <li>Sensor dan komponen elektronik</li>
              <li>Sparepart sistem hidrolik</li>
            </ul>
          </div>
          
          <div>
            <h3>Material Konstruksi</h3>
            <ul>
              <li>Kayu jati, merbau, dan kayu maritim lainnya</li>
              <li>Cat marine dan anti fouling</li>
              <li>Primer dan undercoat</li>
              <li>Material waterproofing</li>
              <li>Hardware dan fitting kapal</li>
            </ul>
          </div>
          
          <div>
            <h3>Peralatan Keselamatan</h3>
            <ul>
              <li>Life jacket dan peralatan keselamatan</li>
              <li>Fire extinguisher dan sistem pemadam</li>
              <li>Peralatan navigasi dan komunikasi</li>
              <li>Emergency equipment</li>
              <li>Medical kit dan P3K</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Keunggulan Layanan Kami</h2>
        <ul>
          <li><strong>Tim Teknis Berpengalaman:</strong> Tim yang berpengalaman dalam perawatan kapal kayu</li>
          <li><strong>Fasilitas Lengkap:</strong> Dry dock dan peralatan modern untuk perawatan optimal</li>
          <li><strong>Sparepart Original:</strong> Ketersediaan sparepart original dengan harga kompetitif</li>
          <li><strong>Layanan 24/7:</strong> Layanan darurat tersedia 24 jam</li>
          <li><strong>Garansi Pekerjaan:</strong> Garansi untuk semua pekerjaan perawatan</li>
          <li><strong>Laporan Detail:</strong> Laporan detail kondisi dan perawatan kapal</li>
          <li><strong>Harga Transparan:</strong> Harga yang transparan tanpa biaya tersembunyi</li>
        </ul>
      </div>

      <div className="card">
        <h2>Proses Layanan Perawatan</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>1. Konsultasi & Assessment</h3>
            <ul>
              <li>Konsultasi kebutuhan perawatan</li>
              <li>Inspeksi awal kondisi kapal</li>
              <li>Identifikasi masalah dan kebutuhan</li>
              <li>Estimasi biaya dan waktu</li>
              <li>Penyusunan rencana perawatan</li>
            </ul>
          </div>
          
          <div>
            <h3>2. Penjadwalan & Persiapan</h3>
            <ul>
              <li>Penjadwalan perawatan</li>
              <li>Persiapan material dan sparepart</li>
              <li>Persiapan peralatan dan tim</li>
              <li>Koordinasi dengan pemilik kapal</li>
              <li>Persiapan area kerja</li>
            </ul>
          </div>
          
          <div>
            <h3>3. Pelaksanaan Perawatan</h3>
            <ul>
              <li>Pelaksanaan perawatan sesuai rencana</li>
              <li>Monitoring progress pekerjaan</li>
              <li>Quality control di setiap tahap</li>
              <li>Koordinasi dengan pemilik kapal</li>
              <li>Dokumentasi pekerjaan</li>
            </ul>
          </div>
          
          <div>
            <h3>4. Testing & Penyerahan</h3>
            <ul>
              <li>Testing sistem dan peralatan</li>
              <li>Inspeksi final hasil pekerjaan</li>
              <li>Penyerahan kapal kepada pemilik</li>
              <li>Laporan detail perawatan</li>
              <li>Rekomendasi perawatan selanjutnya</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Mulai Perawatan Kapal Anda</h2>
        <p>Jangan tunggu sampai kapal mengalami kerusakan serius. Lakukan perawatan berkala untuk menjaga performa dan keamanan kapal Anda. Tim kami siap memberikan layanan perawatan terbaik dengan standar kualitas tinggi.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6285640012454?text=Halo,%20saya%20ingin%20menjadwalkan%20inspeksi%20dan%20perawatan%20kapal" style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.3s ease'
          }}>Jadwalkan Inspeksi via WhatsApp</a>
          <a className="btn" href="/fasilitas" style={{backgroundColor: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)'}}>Lihat Fasilitas</a>
        </div>
      </div>
    </section>
  );
}


