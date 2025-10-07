import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 86400;

const products = [
  {
    id: 'collecting',
    image: '/images/collecting/galangan-kapal-collecting-jawatengah.jpeg',
    title: 'Kapal Collecting',
    desc: 'Dirancang untuk mengumpulkan hasil tangkapan dari kapal-kapal lebih kecil di laut, efisien dan aman menuju pelabuhan.'
  },
  {
    id: 'cumi',
    image: '/images/cumi/galangan-kapal-cumi-jawatengah.jpeg',
    title: 'Kapal Cumi',
    desc: 'Spesifik untuk penangkapan cumi dengan tata letak dek yang optimal bagi peralatan light fishing dan handling hasil.'
  },
  {
    id: 'longliner',
    image: '/images/longliner/galangan-kapal-longliner-jawatengah.jpeg',
    title: 'Kapal Long Liner',
    desc: 'Kapal dengan sistem rawai (long line) untuk target ikan bernilai tinggi, struktur haluan kokoh, dek kerja ergonomis.'
  },
  {
    id: 'purse-seine',
    image: '/images/purseseine/galangan-kapal-purse-seine-jawatengah.jpeg',
    title: 'Kapal Purse Seine',
    desc: 'Pengoperasian jaring lingkar (pukat cincin) dengan stabilitas tinggi dan ruang palka besar untuk menjaga kualitas hasil.'
  },
  {
    id: 'cakalang',
    image: '/images/cakalang/galangan-kapal-cakalang-jawatengah.jpeg',
    title: 'Kapal Cakalang',
    desc: 'Optimal untuk target tongkol/cakalang dengan efisiensi bahan bakar dan handling cepat di dek.'
  }
];

export default function Page() {
  return (
    <>
      <section
        className="hero light-text"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,92,215,.80) 0%, rgba(11,92,215,.60) 36%, rgba(11,92,215,.40) 60%, rgba(11,92,215,.20) 82%, rgba(11,92,215,.10) 100%), url('/images/bg/bglayanan.webp') center / cover no-repeat"
        }}
      >
        <div className="container hero-inner" style={{padding:'98px 0 77px'}}>
          <div className="hero-copy">
            <p style={{color:'#ffffff',fontWeight:800,margin:'0 0 8px'}}>Produk Kapal</p>
            <h1 className="hero-title" style={{color:'#fff'}}>Jenis Produk Kapal</h1>
            <p className="hero-sub" style={{color:'rgba(255,255,255,.9)'}}>Kami menyediakan perancangan dan pembangunan kapal sesuai kebutuhan operasi Anda. Berikut lima tipe produk kapal unggulan kami.</p>
            <div className="hero-cta">
              <Link href="/kontak" className="btn">Konsultasi Gratis</Link>
              <Link href="/layanan" className="btn outline">Lihat Layanan</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{padding:'28px 0'}}>
        <div className="card" style={{borderColor:'rgba(0,0,0,.08)'}}>
          <div className="section-head">
            <h2 className="section-title">Daftar Produk</h2>
            <span className="muted">5 tipe kapal</span>
          </div>

          <div className="service-list" style={{marginTop:8}}>
            {products.map(p => (
              <a key={p.id} href={`/produk-kapal/${p.id}`} className="card media" style={{gridTemplateColumns:'160px 1fr'}}>
                <div className="media-img" style={{position:'relative',width:160,height:120}}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="160px"
                    style={{objectFit:'cover'}}
                  />
                </div>
                <div>
                  <h3 style={{margin:'0 0 4px'}}>{p.title}</h3>
                  <p style={{margin:0}}>{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="cta-band">
          <h3>Butuh rancangan khusus sesuai target ikan, tonase, dan anggaran?</h3>
          <div className="cta-actions">
            <Link href="/kontak" className="btn">Diskusikan Proyek</Link>
            <Link href="/proyek" className="btn outline">Lihat Proyek</Link>
          </div>
        </div>
      </section>

      <section className="container" style={{padding:'0 0 28px'}}>
        <div className="card" style={{borderColor:'rgba(0,0,0,.08)'}}>
          <div className="section-head">
            <h2 className="section-title">Detail Produk Kapal</h2>
            <span className="muted">Spesifikasi dan keunggulan</span>
          </div>

          <div className="list">
            <div id="collecting" className="card" style={{scrollMarginTop:96}}>
              <h3 style={{marginTop:0}}>Kapal Collecting</h3>
              <p>Kapal pengumpul hasil (collector) berfungsi menerima hasil tangkap dari unit penangkap di laut lepas untuk kemudian membawa ke pelabuhan atau cold storage terdekat. Desain fokus pada dek kerja lega, akses sisi yang aman, dan palka berinsulasi.</p>
              <ul style={{margin:'6px 0 0 18px'}}>
                <li>Palka pendingin/insulated hold kapasitas menyesuaikan target tonase.</li>
                <li>Freeboard sedang untuk memudahkan alih muatan antar kapal (ship-to-ship).</li>
                <li>Mesin utama irit, kecepatan jelajah stabil, jarak tempuh panjang.</li>
              </ul>
              <p style={{margin:'8px 0 4px'}}><strong>Opsi mesin umum</strong> (banyak dipakai kapal nelayan Indonesia):</p>
              <ul style={{margin:'0 0 0 18px'}}>
                <li>Yanmar 6HAL/6CH series (marine)</li>
                <li>Mitsubishi S6/S4 series (marine)</li>
                <li>Cummins 6BT 5.9 / 6CT 8.3 (marine)</li>
                <li>Hino H07C / H06 series (di-marinisasi)</li>
              </ul>
            </div>

            <div id="cumi" className="card" style={{scrollMarginTop:96}}>
              <h3 style={{marginTop:0}}>Kapal Cumi</h3>
              <p>Dikembangkan untuk operasi penangkapan cumi dengan lampu atraktor. Tata letak dek mendukung penempatan genset/lampu, area kerja, dan penyimpanan umpan.</p>
              <ul style={{margin:'6px 0 0 18px'}}>
                <li>Penempatan lampu simetris, tiang/lengan kuat, dan jalur kabel aman.</li>
                <li>Deck drainase baik agar tetap aman saat operasi malam hari.</li>
                <li>Palka es/RSW untuk menjaga mutu cumi hingga pendaratan.</li>
              </ul>
              <p style={{margin:'8px 0 4px'}}><strong>Opsi mesin umum</strong>:</p>
              <ul style={{margin:'0 0 0 18px'}}>
                <li>Yanmar 4CH/6CH (hemat dan responsif untuk operasi stop–go)</li>
                <li>Isuzu 6BD1 / 6HE1 (di-marinisasi, suku cadang mudah)</li>
                <li>Hino W04/W06 series (ekonomis untuk kapal 10–20 GT)</li>
              </ul>
            </div>

            <div id="longliner" className="card" style={{scrollMarginTop:96}}>
              <h3 style={{marginTop:0}}>Kapal Long Liner</h3>
              <p>Dirancang untuk sistem rawai (long line) dengan target ikan bernilai tinggi. Stabilitas, ergonomi jalur rawai, dan keselamatan kru menjadi prioritas.</p>
              <ul style={{margin:'6px 0 0 18px'}}>
                <li>Area setting/hauling rawai tertata, roller dan baiting table ergonomis.</li>
                <li>Autopilot dan navigasi memadai untuk lintasan panjang.</li>
                <li>Palka beku bertingkat menjaga kualitas sashimi grade.</li>
              </ul>
              <p style={{margin:'8px 0 4px'}}><strong>Opsi mesin umum</strong>:</p>
              <ul style={{margin:'0 0 0 18px'}}>
                <li>Cummins 6CTA / QSB (daya menengah, torsi kuat)</li>
                <li>Mitsubishi S6R/S6A (endurance tinggi)</li>
                <li>Yanmar 6CX/6LY (getaran rendah, efisiensi baik)</li>
              </ul>
            </div>

            <div id="purse-seine" className="card" style={{scrollMarginTop:96}}>
              <h3 style={{marginTop:0}}>Kapal Purse Seine</h3>
              <p>Optimal untuk pengoperasian pukat cincin. Struktur geladak kuat untuk menahan beban jaring, dengan winch/roller ditempatkan strategis.</p>
              <ul style={{margin:'6px 0 0 18px'}}>
                <li>Stabilitas melintang baik saat setting/hauling jaring.</li>
                <li>Ruang palka besar dan akses mudah untuk percepatan loading.</li>
                <li>Optimasi berat dan trim untuk konsumsi BBM efisien.</li>
              </ul>
              <p style={{margin:'8px 0 4px'}}><strong>Opsi mesin umum</strong>:</p>
              <ul style={{margin:'0 0 0 18px'}}>
                <li>Mitsubishi S6R/S6A (tenaga besar untuk manuver dan hauling)</li>
                <li>Cummins KTA19/QSK (kelas berat, untuk kapal GT besar)</li>
                <li>Yanmar 6AY/6CX (efisien dan andal)</li>
              </ul>
            </div>

            <div id="cakalang" className="card" style={{scrollMarginTop:96}}>
              <h3 style={{marginTop:0}}>Kapal Cakalang</h3>
              <p>Ditujukan untuk target tongkol/cakalang (skipjack). Desain mengutamakan kecepatan, efisiensi bahan bakar, serta kemudahan handling hasil di dek.</p>
              <ul style={{margin:'6px 0 0 18px'}}>
                <li>Haluan ramping untuk kecepatan jelajah lebih tinggi.</li>
                <li>Penempatan palka/ice box dekat area kerja untuk mempercepat penanganan.</li>
                <li>Opsional: RSW/flake ice untuk menjaga kesegaran maksimal.</li>
              </ul>
              <p style={{margin:'8px 0 4px'}}><strong>Opsi mesin umum</strong>:</p>
              <ul style={{margin:'0 0 0 18px'}}>
                <li>Isuzu 6BD1/6HE1 (ringan dan hemat, mudah perawatan)</li>
                <li>Hino H07C (torsi baik, suku cadang tersedia)</li>
                <li>Yanmar 6LY/6CX (performa halus untuk kecepatan jelajah)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


