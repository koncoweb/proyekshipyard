import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/layanan/dokumen-kapal';
  const title = 'Dokumen Kapal & SPB | Batang Shipyard Indonesia - Pengurusan Lengkap';
  const description = 'Layanan pengurusan dokumen kapal lengkap: dokumen teknis, hak milik kapal, SPB (Surat Persetujuan Berlayar), sertifikat kelayakan, dan dokumen maritim lainnya.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'id-ID': canonical, 'en-US': 'https://batangshipyard.com/en/services/ship-documents' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'id_ID', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <section className="list">
      <h1>Pengurusan Dokumen Kapal & SPB Lengkap</h1>
      
      <div className="card">
        <h2>Layanan Dokumen Kapal</h2>
        <p>Batang Shipyard Indonesia menyediakan layanan pengurusan dokumen kapal yang komprehensif. Tim kami berpengalaman dalam mengurus berbagai jenis dokumen kapal sesuai dengan regulasi maritim Indonesia yang berlaku.</p>
        <p>Kami membantu mempermudah proses pengurusan dokumen yang kompleks, sehingga Anda dapat fokus pada operasional kapal tanpa khawatir dengan urusan administrasi.</p>
      </div>

      <div className="card">
        <h2>Jenis Dokumen yang Kami Urus</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Dokumen Teknis Kapal</h3>
            <ul>
              <li><strong>Sertifikat Kelayakan Kapal:</strong> Dokumen yang menyatakan kapal layak berlayar</li>
              <li><strong>Sertifikat Konstruksi:</strong> Dokumen teknis konstruksi kapal</li>
              <li><strong>Sertifikat Peralatan:</strong> Sertifikat untuk peralatan keselamatan dan navigasi</li>
              <li><strong>Sertifikat Mesin:</strong> Dokumen teknis mesin dan sistem propulsi</li>
              <li><strong>Survei Kelayakan:</strong> Inspeksi dan survei untuk kelayakan kapal</li>
            </ul>
          </div>
          
          <div>
            <h3>Dokumen Hak Milik Kapal</h3>
            <ul>
              <li><strong>Sertifikat Hak Milik Kapal:</strong> Dokumen kepemilikan resmi kapal</li>
              <li><strong>Akta Jual Beli Kapal:</strong> Dokumen transaksi jual beli kapal</li>
              <li><strong>Surat Peralihan Hak:</strong> Dokumen peralihan kepemilikan</li>
              <li><strong>Dokumen Waris:</strong> Pengurusan dokumen waris kapal</li>
              <li><strong>Hipotek Kapal:</strong> Dokumen jaminan kapal</li>
            </ul>
          </div>
          
          <div>
            <h3>Surat Persetujuan Berlayar (SPB)</h3>
            <ul>
              <li><strong>SPB Kapal Baru:</strong> Pengurusan SPB untuk kapal yang baru dibuat</li>
              <li><strong>SPB Kapal Bekas:</strong> Pengurusan SPB untuk kapal bekas</li>
              <li><strong>Renewal SPB:</strong> Perpanjangan SPB yang sudah ada</li>
              <li><strong>SPB Perubahan:</strong> SPB untuk kapal yang mengalami perubahan</li>
              <li><strong>SPB Darurat:</strong> Pengurusan SPB dengan prioritas tinggi</li>
            </ul>
          </div>
          
          <div>
            <h3>Dokumen Operasional</h3>
            <ul>
              <li><strong>Surat Izin Berlayar:</strong> Izin operasional kapal</li>
              <li><strong>Dokumen Awak Kapal:</strong> Sertifikat dan dokumen awak kapal</li>
              <li><strong>Dokumen Kargo:</strong> Dokumen untuk pengangkutan barang</li>
              <li><strong>Dokumen Penumpang:</strong> Dokumen untuk kapal penumpang</li>
              <li><strong>Dokumen Khusus:</strong> Dokumen untuk kapal dengan fungsi khusus</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Proses Pengurusan Dokumen</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>1. Konsultasi & Assessment</h3>
            <ul>
              <li>Konsultasi kebutuhan dokumen kapal</li>
              <li>Assessment kelengkapan dokumen existing</li>
              <li>Identifikasi dokumen yang diperlukan</li>
              <li>Estimasi waktu dan biaya pengurusan</li>
              <li>Penyusunan rencana pengurusan</li>
            </ul>
          </div>
          
          <div>
            <h3>2. Persiapan Dokumen</h3>
            <ul>
              <li>Pengumpulan dokumen pendukung</li>
              <li>Penyiapan dokumen teknis</li>
              <li>Verifikasi kelengkapan dokumen</li>
              <li>Pembuatan dokumen yang diperlukan</li>
              <li>Legalitas dokumen</li>
            </ul>
          </div>
          
          <div>
            <h3>3. Pengurusan ke Instansi</h3>
            <ul>
              <li>Pengajuan ke instansi terkait</li>
              <li>Koordinasi dengan pihak berwenang</li>
              <li>Follow-up proses pengurusan</li>
              <li>Penanganan kendala administrasi</li>
              <li>Penyelesaian persyaratan tambahan</li>
            </ul>
          </div>
          
          <div>
            <h3>4. Penyerahan Dokumen</h3>
            <ul>
              <li>Verifikasi dokumen final</li>
              <li>Penyerahan dokumen kepada klien</li>
              <li>Penjelasan isi dokumen</li>
              <li>Panduan perawatan dokumen</li>
              <li>Layanan follow-up</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Instansi yang Kami Layani</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Kementerian Perhubungan</h3>
            <ul>
              <li>Direktorat Jenderal Perhubungan Laut</li>
              <li>Kantor Syahbandar</li>
              <li>Kantor Kesyahbandaran Utama</li>
              <li>Unit Penyelenggara Pelabuhan</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Badan Klasifikasi</h3>
            <ul>
              <li>Biro Klasifikasi Indonesia (BKI)</li>
              <li>Lloyd's Register</li>
              <li>Det Norske Veritas (DNV)</li>
              <li>Badan Klasifikasi lainnya</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Instansi Lainnya</h3>
            <ul>
              <li>Kementerian Kelautan dan Perikanan</li>
              <li>Badan Pusat Statistik</li>
              <li>Kantor Pajak</li>
              <li>Notaris</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Keunggulan Layanan Kami</h2>
        <ul>
          <li><strong>Tim Berpengalaman:</strong> Tim yang berpengalaman dalam pengurusan dokumen maritim</li>
          <li><strong>Proses Cepat:</strong> Proses pengurusan yang efisien dan tepat waktu</li>
          <li><strong>Transparan:</strong> Informasi biaya dan progress yang transparan</li>
          <li><strong>One Stop Service:</strong> Semua dokumen dapat diurus dalam satu tempat</li>
          <li><strong>Follow-up:</strong> Layanan follow-up untuk perpanjangan dokumen</li>
          <li><strong>Konsultasi Gratis:</strong> Konsultasi awal tanpa biaya</li>
        </ul>
      </div>

      <div className="card">
        <h2>Biaya & Timeline</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>SPB Kapal Baru</h3>
            <p><strong>Timeline:</strong> 2-4 bulan</p>
            <p><strong>Biaya:</strong> Mulai dari Rp 15.000.000</p>
            <p>Termasuk pengurusan semua dokumen teknis dan administrasi</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>SPB Kapal Bekas</h3>
            <p><strong>Timeline:</strong> 1-3 bulan</p>
            <p><strong>Biaya:</strong> Mulai dari Rp 10.000.000</p>
            <p>Termasuk transfer dokumen dan penyesuaian administrasi</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Renewal Dokumen</h3>
            <p><strong>Timeline:</strong> 2-6 minggu</p>
            <p><strong>Biaya:</strong> Mulai dari Rp 5.000.000</p>
            <p>Perpanjangan dokumen yang sudah ada</p>
          </div>
        </div>
        <p><em>*Biaya dapat bervariasi tergantung kompleksitas dan ukuran kapal. Konsultasi gratis untuk estimasi yang akurat.</em></p>
      </div>

      <div className="card">
        <h2>Dokumen yang Perlu Disiapkan</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Dokumen Kapal</h3>
            <ul>
              <li>Gambar konstruksi kapal</li>
              <li>Spesifikasi teknis kapal</li>
              <li>Sertifikat material</li>
              <li>Dokumen mesin dan peralatan</li>
              <li>Foto kapal (jika kapal bekas)</li>
            </ul>
          </div>
          
          <div>
            <h3>Dokumen Pemilik</h3>
            <ul>
              <li>KTP pemilik kapal</li>
              <li>NPWP perusahaan (jika badan hukum)</li>
              <li>Akta pendirian perusahaan</li>
              <li>Surat kuasa (jika diwakilkan)</li>
              <li>Dokumen kepemilikan sebelumnya</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Mulai Pengurusan Dokumen Kapal Anda</h2>
        <p>Jangan biarkan urusan dokumen menghambat operasional kapal Anda. Tim kami siap membantu mengurus semua dokumen kapal dengan profesional dan efisien. Konsultasi awal kami gratis dan tanpa komitmen.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Halo,%20saya%20ingin%20konsultasi%20pengurusan%20dokumen%20kapal" style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.3s ease'
          }}>Konsultasi Dokumen via WhatsApp</a>
          <a className="btn" href="/blog" style={{backgroundColor: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)'}}>Baca Tips Dokumen</a>
        </div>
      </div>
    </section>
  );
}


