import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/vessels/longliner';
  const title = 'Long Liner Vessel | Batang Shipyard Indonesia - High-Value Fish Targeting';
  const description: 'Professional long liner vessel construction. Long line system for high-value fish targets with strong bow structure, ergonomic work deck, and sashimi-grade quality preservation.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/produk-kapal/longliner' } },
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
          <h1 className="hero-title">Long Liner Vessel</h1>
          <p className="hero-sub">Designed for long line systems targeting high-value fish with strong bow structure, ergonomic work deck, and sashimi-grade quality preservation.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Free Consultation</a>
            <a href="/en/vessels" className="btn outline">View All Vessels</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Long Liner Vessel - Professional High-Value Fish Targeting</h1>
      
      <div className="card">
        <h2>About Long Liner Vessels</h2>
        <p>Long liner vessels are specifically designed for long line fishing systems targeting high-value fish species. These vessels prioritize stability, ergonomic longline operations, and crew safety while maintaining the highest quality standards for sashimi-grade fish.</p>
        <p>Our long liner vessels feature organized setting and hauling areas, ergonomic rollers and baiting tables, and advanced preservation systems to maintain premium fish quality.</p>
      </div>

      <div className="card">
        <h2>Key Features & Design</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Longline Operations</h3>
            <ul className="gold-list">
              <li>Organized longline setting and hauling areas</li>
              <li>Ergonomic rollers and baiting tables</li>
              <li>Efficient line management systems</li>
              <li>Automated hauling equipment</li>
            </ul>
          </div>
          
          <div>
            <h3>Navigation & Control</h3>
            <ul className="gold-list">
              <li>Advanced autopilot systems</li>
              <li>Adequate navigation for long track distances</li>
              <li>Precision positioning systems</li>
              <li>Weather monitoring equipment</li>
            </ul>
          </div>
          
          <div>
            <h3>Quality Preservation</h3>
            <ul className="gold-list">
              <li>Multi-tier freezing holds</li>
              <li>Sashimi-grade quality maintenance</li>
              <li>Temperature-controlled storage</li>
              <li>Advanced fish handling systems</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Engine Options</h2>
        <p>We offer powerful engine options suitable for long line operations requiring endurance and strong torque:</p>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Cummins Series</h3>
            <p><strong>6CTA / QSB Series</strong></p>
            <p>Medium power engines with strong torque characteristics, ideal for long line hauling operations.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Mitsubishi Series</h3>
            <p><strong>S6R/S6A Series</strong></p>
            <p>High endurance engines perfect for long-distance long line operations.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Yanmar Series</h3>
            <p><strong>6CX/6LY Series</strong></p>
            <p>Low vibration engines with good efficiency for comfortable long line operations.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Operational Advantages</h2>
        <ul className="gold-list">
          <li><strong>High-Value Target Focus:</strong> Designed specifically for premium fish species</li>
          <li><strong>Quality Preservation:</strong> Advanced systems to maintain sashimi-grade quality</li>
          <li><strong>Ergonomic Operations:</strong> Efficient longline setting and hauling systems</li>
          <li><strong>Long Range Capability:</strong> Endurance for extended fishing operations</li>
          <li><strong>Crew Safety:</strong> Safe working environment for long line operations</li>
        </ul>
      </div>

      <div className="card">
        <h2>Typical Specifications</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>General Dimensions</h3>
            <ul className="gold-list">
              <li>Length: 20-40 meters</li>
              <li>Beam: 5-8 meters</li>
              <li>Depth: 3-5 meters</li>
              <li>Gross Tonnage: 50-300 GT</li>
            </ul>
          </div>
          
          <div>
            <h3>Longline Capacity</h3>
            <ul className="gold-list">
              <li>Line length: 10-50 kilometers</li>
              <li>Hook capacity: 2,000-10,000 hooks</li>
              <li>Bait storage: 500-2,000 kg</li>
              <li>Automated hauling systems</li>
            </ul>
          </div>
          
          <div>
            <h3>Hold Capacity</h3>
            <ul className="gold-list">
              <li>Freezing hold capacity: 50-200 cubic meters</li>
              <li>Temperature range: -18°C to -25°C</li>
              <li>Multi-tier storage systems</li>
              <li>Quality preservation systems</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Longline Equipment Integration</h2>
        <ul className="gold-list">
          <li><strong>Hauling Machinery:</strong> Professional longline hauling equipment</li>
          <li><strong>Line Storage:</strong> Organized line storage and management systems</li>
          <li><strong>Baiting Systems:</strong> Efficient baiting tables and equipment</li>
          <li><strong>Hook Management:</strong> Organized hook storage and handling</li>
          <li><strong>Quality Control:</strong> Systems for maintaining fish quality</li>
        </ul>
      </div>

      <div className="card">
        <h2>Target Species</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Tuna Species</h3>
            <p>Yellowfin tuna, bigeye tuna, albacore tuna, and other high-value tuna species.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Premium Fish</h3>
            <p>Swordfish, marlin, mahi-mahi, and other premium fish species suitable for sashimi.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Deep Sea Species</h3>
            <p>Various deep-sea fish species that require specialized longline techniques.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Safety & Navigation</h2>
        <ul className="gold-list">
          <li><strong>Advanced Navigation:</strong> GPS, radar, and precision positioning systems</li>
          <li><strong>Weather Monitoring:</strong> Real-time weather and sea condition monitoring</li>
          <li><strong>Safety Equipment:</strong> Comprehensive safety equipment and protocols</li>
          <li><strong>Communication:</strong> Satellite communication systems for long-range operations</li>
        </ul>
      </div>

      <div className="card">
        <h2>Start Your Long Liner Vessel Project</h2>
        <p>Ready to build a professional long liner vessel for high-value fish targeting? Our team has extensive experience in designing and constructing vessels optimized for longline operations. Contact us for a free consultation.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20want%20to%20build%20a%20long%20liner%20vessel" style={{
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
