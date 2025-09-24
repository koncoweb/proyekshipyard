export function StructuredData() {
  const data = [
    { '@context':'https://schema.org','@type':'Organization', name:'Batang Shipyard Indonesia', url:'https://batangshipyard.com' },
    ...[
      { name:'Produksi Kapal Kayu', url:'https://batangshipyard.com/layanan/produksi-kapal-kayu' },
      { name:'Dokumen Kapal & SPB', url:'https://batangshipyard.com/layanan/dokumen-kapal' },
      { name:'Perawatan Kapal', url:'https://batangshipyard.com/layanan/perawatan-kapal' },
      { name:'Jual-Beli Kapal Second', url:'https://batangshipyard.com/layanan/kapal-bekas' },
    ].map(s => ({ '@context':'https://schema.org','@type':'Service', name:s.name, provider:{'@type':'Organization', name:'Batang Shipyard Indonesia'}, areaServed:'ID', url:s.url })),
    {
      '@context':'https://schema.org','@type':'FAQPage',
      mainEntity:[
        { '@type':'Question', name:'Apa layanan utama?', acceptedAnswer:{'@type':'Answer', text:'Produksi kapal kayu, dokumen kapal (termasuk SPB), perawatan kapal, dan jual-beli kapal second.'}},
        { '@type':'Question', name:'Bagaimana alur produksi kapal kayu?', acceptedAnswer:{'@type':'Answer', text:'Konsultasi spesifikasi (termasuk GT), desain oleh tim teknis, presentasi & RAB, negosiasi biaya, dan penandatanganan SPK melalui notaris.'}}
      ]
    }
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}


