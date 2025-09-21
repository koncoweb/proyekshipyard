import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/proses-pemesanan';
  const title = 'Proses Pemesanan | Batang Shipyard Indonesia';
  const description = 'Prosedur pemesanan kapal: konsultasi spesifikasi (termasuk GT), desain oleh tim teknis, presentasi desain & RAB, negosiasi harga, dan penandatanganan SPK via notaris (RAB, gambar, termin 3 tahap).';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'id-ID': canonical } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'id_ID', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
      <section className="hero order-hero">
        <div className="container hero-inner">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Batang Shipyard Indonesia</p>
          <h1 className="hero-title">Proses Pemesanan Kapal</h1>
          <p className="hero-sub">Prosedur jelas dan terstruktur dari konsultasi spesifikasi hingga penandatanganan SPK dengan Notaris.</p>
        </div>
      </section>

      <section className="list">
        <div className="card">
          <h2>Langkah-Langkah Pemesanan</h2>
          <ol style={{marginTop:8}}>
            <li>
              <strong>Konsultasi Spesifikasi</strong>
              <p>Customer / Pemilik kapal menyampaikan keinginan dan spesifikasi kapal yang akan dibuat. Termasuk penentuan GT (Gross Tonnage) sebagai ukuran volume total internal kapal, meliputi seluruh ruang tertutup di dalam lambung dan superstructure.</p>
            </li>
            <li>
              <strong>Proses Desain</strong>
              <p>Tim Teknis Batang Shipyard membuat gambar desain kapal sesuai kebutuhan operasional, keamanan, dan regulasi maritim yang berlaku.</p>
            </li>
            <li>
              <strong>Presentasi Desain & RAB</strong>
              <p>Kami mempresentasikan desain beserta Rencana Anggaran Biaya (RAB) secara rinci, mencakup material, mesin, peralatan, serta jadwal pengerjaan.</p>
            </li>
            <li>
              <strong>Negosiasi Harga</strong>
              <p>Kesepakatan biaya pembangunan kapal antara Customer / Pemilik kapal dengan Batang Shipyard dilakukan secara transparan hingga tercapai kesepakatan final.</p>
            </li>
            <li>
              <strong>Penandatanganan SPK via Notaris</strong>
              <p>SPK (Surat Perintah Kerja) ditandatangani di hadapan Notaris. Dokumen SPK mencakup Gambar Desain final, RAB yang disetujui, serta Termin Pembayaran 3 tahap.</p>
            </li>
          </ol>
        </div>

        <div className="card">
          <h2>Termin Pembayaran (3 Tahap)</h2>
          <ul>
            <li><strong>Tahap 1:</strong> Down Payment untuk pengadaan material utama dan kick-off proyek.</li>
            <li><strong>Tahap 2:</strong> Progress payment saat konstruksi mencapai sekitar 70%.</li>
            <li><strong>Tahap 3:</strong> Final payment ketika kapal selesai dan siap diserahkan.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Waktu & Komunikasi Proyek</h2>
          <p>Kami menyediakan update berkala terkait progres konstruksi, inspeksi kualitas, dan dokumentasi yang diperlukan hingga serah terima.</p>
        </div>

        <div className="card">
          <h2>Konsultasi & Pemesanan</h2>
          <p>Siap memulai proses pemesanan kapal? Konsultasikan kebutuhan Anda melalui WhatsApp. Tim kami akan membantu menyiapkan spesifikasi, desain, dan estimasi biaya.</p>
          <a
            href="https://wa.me/6285640012454?text=Halo,%20saya%20ingin%20menanyakan%20proses%20pemesanan%20kapal"
            className="btn"
            style={{
              display: 'inline-block',
              marginTop: '0.5rem',
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 24px',
              textDecoration: 'none',
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
