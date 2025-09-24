import type { Metadata } from 'next';
import Link from 'next/link';
import { StructuredData } from './structured-data';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/shipyard-indonesia';
  const title = 'Batang Shipyard Indonesia | Produksi Kapal Kayu, Dokumen, Perawatan, Kapal Second';
  const description = 'Galangan kapal di Indonesia: produksi kapal kayu, pengurusan dokumen (termasuk SPB), perawatan, dan fasilitasi jual-beli kapal second.';
  return {
    title, description,
    alternates: { canonical, languages: { 'id-ID': canonical, 'en-US': 'https://batangshipyard.com/en/shipyard-indonesia' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'id_ID', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
      <section className="hero shipyard-hero">
        <StructuredData />
        <div className="container hero-inner">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Batang Shipyard Indonesia</p>
          <h1 className="hero-title">Galangan Kapal Terpercaya di Indonesia</h1>
          <p className="hero-sub">Solusi lengkap untuk industri maritim: produksi kapal kayu berkualitas tinggi, pengurusan dokumen kapal, perawatan profesional, dan fasilitasi jual-beli kapal second.</p>
          <div className="hero-cta">
            <Link href="/layanan" className="btn">Lihat Layanan</Link>
            <Link href="/kontak" className="btn outline">Hubungi Kami</Link>
          </div>
        </div>
      </section>

      <section className="list">
        <div className="card">
          <h2>Layanan Utama</h2>
          <ul>
            <li><a href="/layanan/produksi-kapal-kayu">Produksi Kapal Kayu</a></li>
            <li><a href="/layanan/dokumen-kapal">Ship Document / Dokumen Kapal & SPB</a></li>
            <li><a href="/layanan/perawatan-kapal">Maintenance / Perawatan Kapal</a></li>
            <li><a href="/layanan/kapal-bekas">Second-Hand Vessel / Kapal Second</a></li>
          </ul>
        </div>
        <div className="card">
          <h2>FAQ</h2>
          <p>Lihat jawaban umum terkait proses dan dokumen.</p>
        </div>
      </section>
    </>
  );
}


