import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/vessels/squid';
  const title = 'Squid Fishing Vessel | Batang Shipyard Indonesia - Light Fishing & Quick Handling';
  const description: 'Professional squid fishing vessel construction. Optimal for operations with light attractors and quick handling. Specialized deck layout for squid fishing operations.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/produk-kapal/cumi' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
    <section className="hero vessel-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Vessel Products</p>
          <h1 className="hero-title">Squid Fishing Vessel</h1>
          <p className="hero-sub">Specifically designed for squid fishing with optimal deck layout for light fishing equipment and quick handling of catch results.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Free Consultation</a>
            <a href="/en/vessels" className="btn outline">View All Vessels</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Squid Fishing Vessel - Specialized Light Fishing Operations</h1>
      
      <div className="card">
        <h2>About Squid Fishing Vessels</h2>
        <p>Squid fishing vessels are specifically designed and developed for squid fishing operations using light attractors. These vessels feature specialized deck layouts that support genset and light placement, dedicated work areas, and proper bait storage systems.</p>
        <p>Our squid fishing vessels are optimized for night operations with proper lighting systems, safety features, and efficient catch handling capabilities.</p>
      </div>

      <div className="card">
        <h2>Key Features & Design</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Lighting System</h3>
            <ul className="gold-list">
              <li>Symmetrical light placement for optimal coverage</li>
              <li>Strong mast and arm structures</li>
              <li>Safe cable routing and management</li>
              <li>High-intensity LED lighting systems</li>
            </ul>
          </div>
          
          <div>
            <h3>Deck Configuration</h3>
            <ul className="gold-list">
              <li>Good deck drainage for night operation safety</li>
              <li>Organized work areas for squid handling</li>
              <li>Non-slip deck surfaces</li>
              <li>Proper storage for fishing equipment</li>
            </ul>
          </div>
          
          <div>
            <h3>Hold Systems</h3>
            <ul className="gold-list">
              <li>Ice/RSW holds to maintain squid quality</li>
              <li>Temperature-controlled storage</li>
              <li>Easy access for quick loading</li>
              <li>Quality preservation systems</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Engine Options</h2>
        <p>We offer engine options specifically suitable for squid fishing operations with stop-go characteristics:</p>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Yanmar Series</h3>
            <p><strong>4CH/6CH Series</strong></p>
            <p>Efficient and responsive engines perfect for stop-go operations typical in squid fishing.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Isuzu Series</h3>
            <p><strong>6BD1 / 6HE1 (Marine-converted)</strong></p>
            <p>Lightweight engines with easy spare parts availability, ideal for smaller squid fishing vessels.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Hino Series</h3>
            <p><strong>W04/W06 Series</strong></p>
            <p>Economical option perfect for 10-20 GT squid fishing vessels with good fuel efficiency.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Operational Advantages</h2>
        <ul className="gold-list">
          <li><strong>Specialized Design:</strong> Purpose-built for squid fishing operations</li>
          <li><strong>Night Operation Ready:</strong> Optimized for night fishing with proper lighting</li>
          <li><strong>Quick Handling:</strong> Efficient deck layout for rapid catch processing</li>
          <li><strong>Safety Features:</strong> Non-slip surfaces and proper drainage for night operations</li>
          <li><strong>Quality Preservation:</strong> Specialized holds to maintain squid freshness</li>
        </ul>
      </div>

      <div className="card">
        <h2>Typical Specifications</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>General Dimensions</h3>
            <ul className="gold-list">
              <li>Length: 12-25 meters</li>
              <li>Beam: 3-6 meters</li>
              <li>Depth: 2-3 meters</li>
              <li>Gross Tonnage: 5-50 GT</li>
            </ul>
          </div>
          
          <div>
            <h3>Lighting System</h3>
            <ul className="gold-list">
              <li>Light intensity: 1000-5000 watts per light</li>
              <li>Number of lights: 20-60 units (depending on size)</li>
              <li>Light height: 8-15 meters above deck</li>
              <li>Power source: Dedicated genset system</li>
            </ul>
          </div>
          
          <div>
            <h3>Hold Capacity</h3>
            <ul className="gold-list">
              <li>Ice hold capacity: 10-50 cubic meters</li>
              <li>RSW system capacity: 5-30 cubic meters</li>
              <li>Temperature range: 0°C to +5°C</li>
              <li>Quick loading access points</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Fishing Equipment Integration</h2>
        <ul className="gold-list">
          <li><strong>Light Systems:</strong> Professional squid fishing lights with proper mounting</li>
          <li><strong>Power Generation:</strong> Dedicated genset systems for lighting</li>
          <li><strong>Fishing Gear Storage:</strong> Organized storage for nets and equipment</li>
          <li><strong>Bait Storage:</strong> Specialized areas for squid bait</li>
          <li><strong>Processing Areas:</strong> Designated spaces for catch processing</li>
        </ul>
      </div>

      <div className="card">
        <h2>Safety & Navigation</h2>
        <ul className="gold-list">
          <li><strong>Navigation Equipment:</strong> GPS, radar, and communication systems</li>
          <li><strong>Safety Equipment:</strong> Life jackets, emergency equipment, and safety protocols</li>
          <li><strong>Night Operation:</strong> Proper lighting for safe night fishing</li>
          <li><strong>Emergency Systems:</strong> Backup power and emergency procedures</li>
        </ul>
      </div>

      <div className="card">
        <h2>Start Your Squid Fishing Vessel Project</h2>
        <p>Ready to build a specialized squid fishing vessel? Our team has extensive experience in designing and constructing vessels optimized for squid fishing operations. Contact us for a free consultation.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20want%20to%20build%20a%20squid%20fishing%20vessel" style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.3s ease'
          }}>Free Consultation via WhatsApp</a>
          <a className="btn" href="/en/contact" style={{backgroundColor: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)'}}>Contact Us</a>
        </div>
      </div>
    </section>
    </>
  );
}
