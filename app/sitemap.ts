import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://batangshipyard.com';
  const id = [
    '/', '/shipyard-indonesia', '/layanan', '/proses-pemesanan',
    '/layanan/produksi-kapal-kayu','/layanan/dokumen-kapal','/layanan/perawatan-kapal','/layanan/kapal-bekas',
    '/proyek','/fasilitas','/tentang-kami','/kontak','/blog',
  ];
  const en = [
    '/en','/en/shipyard-indonesia','/en/services','/en/projects','/en/facilities','/en/about',
    '/en/services/wooden-vessel','/en/services/ship-documents','/en/services/vessel-maintenance','/en/services/second-hand-vessel',
    '/en/contact'
  ];
  return [...id, ...en].map((p) => ({
    url: `${base}${p === '/' ? '' : p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '/' ? 1.0 : 0.8,
  }));
}


