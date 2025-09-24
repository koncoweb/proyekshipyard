import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/kontak';
  const title = 'Kontak | Batang Shipyard Indonesia - Konsultasi Kapal & Galangan';
  const description = 'Hubungi Batang Shipyard Indonesia untuk konsultasi produksi kapal kayu, pengurusan dokumen kapal, perawatan kapal, dan jual-beli kapal bekas. Tim kami siap membantu proyek Anda.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'id-ID': canonical, 'en-US': 'https://batangshipyard.com/en/contact' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'id_ID', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <section className="list">
      <h1>Hubungi Batang Shipyard Indonesia</h1>
      
      <div className="card">
        <h2>Konsultasi Gratis</h2>
        <p>Tim kami siap membantu mewujudkan proyek kapal Anda. Silakan isi form di bawah ini untuk konsultasi gratis atau hubungi kami langsung.</p>
        <form action="#" method="post">
          <label>
            Nama Lengkap
            <input 
              name="name" 
              required 
              placeholder="Masukkan nama lengkap Anda"
              style={{width:'100%',padding:12,border:'1px solid var(--color-border)',borderRadius:12,marginTop:6}} 
            />
          </label>
          <label style={{marginTop:10}}>
            Email
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="contoh@email.com"
              style={{width:'100%',padding:12,border:'1px solid var(--color-border)',borderRadius:12,marginTop:6}} 
            />
          </label>
          <label style={{marginTop:10}}>
            Nomor Telepon
            <input 
              type="tel" 
              name="phone" 
              placeholder="+62 812-3456-7890"
              style={{width:'100%',padding:12,border:'1px solid var(--color-border)',borderRadius:12,marginTop:6}} 
            />
          </label>
          <label style={{marginTop:10}}>
            Jenis Layanan
            <select 
              name="service" 
              style={{width:'100%',padding:12,border:'1px solid var(--color-border)',borderRadius:12,marginTop:6}}
            >
              <option value="">Pilih jenis layanan</option>
              <option value="produksi-kapal">Produksi Kapal Kayu</option>
              <option value="dokumen-kapal">Dokumen Kapal & SPB</option>
              <option value="perawatan-kapal">Perawatan Kapal</option>
              <option value="kapal-bekas">Jual-Beli Kapal Bekas</option>
              <option value="konsultasi">Konsultasi Umum</option>
            </select>
          </label>
          <label style={{marginTop:10}}>
            Pesan
            <textarea 
              name="message" 
              rows={4} 
              placeholder="Jelaskan kebutuhan proyek kapal Anda secara detail..."
              style={{width:'100%',padding:12,border:'1px solid var(--color-border)',borderRadius:12,marginTop:6}} 
            />
          </label>
          <button className="btn" type="submit" style={{marginTop:12}}>Kirim Pesan</button>
        </form>
      </div>

      <div className="card">
        <h2>Informasi Kontak</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Alamat Galangan</h3>
            <p>
              <strong>Batang Shipyard Indonesia</strong><br/>
              Jl. Pantai Utara No. 123<br/>
              Batang, Jawa Tengah 51211<br/>
              Indonesia
            </p>
          </div>
          
          <div>
            <h3>Kontak Langsung</h3>
            <p>
              <strong>Telepon:</strong> <a href="tel:+6282221665371">+6282221665371</a><br/>
              <strong>WhatsApp:</strong> <a href="https://wa.me/6282221665371">+6282221665371</a><br/>
              <strong>Email:</strong> <a href="mailto:info@batangshipyard.com">info@batangshipyard.com</a>
            </p>
          </div>
          
          <div>
            <h3>Jam Operasional</h3>
            <p>
              <strong>Senin - Jumat:</strong> 08:00 - 17:00 WIB<br/>
              <strong>Sabtu:</strong> 08:00 - 15:00 WIB<br/>
              <strong>Minggu:</strong> Tutup<br/>
              <em>*Konsultasi darurat tersedia 24/7 via WhatsApp</em>
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Layanan Konsultasi</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Konsultasi Produksi Kapal</h3>
            <p>Konsultasi gratis untuk spesifikasi kapal, desain, dan estimasi biaya produksi kapal kayu sesuai kebutuhan Anda.</p>
            <p><strong>Kontak:</strong> <a href="tel:+6282221665371">+6282221665371</a></p>
          </div>
          
          <div>
            <h3>Konsultasi Dokumen Kapal</h3>
            <p>Bantuan pengurusan dokumen teknis kapal, hak milik kapal, dan Surat Persetujuan Berlayar (SPB).</p>
            <p><strong>Kontak:</strong> <a href="https://wa.me/6282221665371">+6282221665371</a></p>
          </div>
          
          <div>
            <h3>Konsultasi Perawatan Kapal</h3>
            <p>Inspeksi gratis dan konsultasi perawatan kapal untuk memastikan kapal Anda dalam kondisi optimal.</p>
            <p><strong>Kontak:</strong> <a href="mailto:maintenance@batangshipyard.com">maintenance@batangshipyard.com</a></p>
          </div>
          
          <div>
            <h3>Konsultasi Kapal Bekas</h3>
            <p>Fasilitasi jual-beli kapal bekas dengan inspeksi teknis dan negosiasi harga yang transparan.</p>
            <p><strong>Kontak:</strong> <a href="https://wa.me/6282221665371">+6282221665371</a></p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Lokasi & Akses</h2>
        <p>Galangan kami terletak di Batang, Jawa Tengah dengan akses yang mudah dari berbagai kota di Jawa. Lokasi strategis dekat dengan pelabuhan dan jalan utama memudahkan transportasi material dan kapal.</p>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Dari Semarang</h3>
            <p>Jarak: 45 km | Waktu tempuh: 1 jam via Jalan Pantura</p>
          </div>
          <div>
            <h3>Dari Pekalongan</h3>
            <p>Jarak: 25 km | Waktu tempuh: 30 menit via Jalan Pantura</p>
          </div>
          <div>
            <h3>Dari Jakarta</h3>
            <p>Jarak: 350 km | Waktu tempuh: 5-6 jam via Tol Cipali</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Kunjungan & Tur Fasilitas</h2>
        <p>Kami menyediakan tur fasilitas galangan untuk klien potensial. Kunjungan dapat dijadwalkan dengan menghubungi kami terlebih dahulu. Tim kami akan memandu Anda melihat fasilitas dry dock, workshop, dan peralatan yang tersedia.</p>
        <p><strong>Catatan:</strong> Kunjungan harus dijadwalkan minimal 1 hari sebelumnya untuk memastikan ketersediaan tim dan fasilitas.</p>
        <a href="https://wa.me/6282221665371?text=Halo,%20saya%20ingin%20menjadwalkan%20kunjungan%20ke%20galangan" className="btn" style={{
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
        }}>Jadwalkan Kunjungan via WhatsApp</a>
      </div>
    </section>
  );
}


