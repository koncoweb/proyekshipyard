import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/vessels/purse-seine';
  const title = 'Purse Seine Vessel | Batang Shipyard Indonesia - Circular Net Operations';
  const description: 'Professional purse seine vessel construction. Optimal for circular net operations with high stability, large hold capacity, and strategic winch/roller placement for efficient fishing.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/produk-kapal/purse-seine' } },
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
          <h1 className="hero-title">Purse Seine Vessel</h1>
          <p className="hero-sub">Optimal for circular net operations with high stability, large hold capacity, and strategic winch/roller placement for efficient fishing operations.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Free Consultation</a>
            <a href="/en/vessels" className="btn outline">View All Vessels</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Purse Seine Vessel - Professional Circular Net Operations</h1>
      
      <div className="card">
        <h2>About Purse Seine Vessels</h2>
        <p>Purse seine vessels are specifically designed for circular net (purse seine) fishing operations. These vessels feature strong deck structures to handle heavy net loads, with winches and rollers strategically placed for optimal fishing efficiency.</p>
        <p>Our purse seine vessels are optimized for high stability during net setting and hauling operations, with large hold capacity and efficient fuel consumption for extended fishing trips.</p>
      </div>

      <div className="card">
        <h2>Key Features & Design</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Stability & Structure</h3>
            <ul className="gold-list">
              <li>Excellent transverse stability during net operations</li>
              <li>Strong deck structure for heavy net loads</li>
              <li>Reinforced areas for winch mounting</li>
              <li>Optimized weight distribution</li>
            </ul>
          </div>
          
          <div>
            <h3>Net Operations</h3>
            <ul className="gold-list">
              <li>Strategic winch and roller placement</li>
              <li>Efficient net handling systems</li>
              <li>Large net storage capacity</li>
              <li>Automated hauling systems</li>
            </ul>
          </div>
          
          <div>
            <h3>Hold Design</h3>
            <ul className="gold-list">
              <li>Large hold capacity for maximum catch</li>
              <li>Easy access for fast loading</li>
              <li>Quality preservation systems</li>
              <li>Efficient cargo management</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Engine Options</h2>
        <p>We offer powerful engine options suitable for purse seine operations requiring high power for maneuvering and net hauling:</p>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Mitsubishi Series</h3>
            <p><strong>S6R/S6A Series</strong></p>
            <p>High power engines perfect for maneuvering and net hauling operations.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Cummins Series</h3>
            <p><strong>KTA19/QSK Series</strong></p>
            <p>Heavy-duty engines suitable for large GT vessels with high power requirements.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Yanmar Series</h3>
            <p><strong>6AY/6CX Series</strong></p>
            <p>Efficient and reliable engines with good fuel economy for purse seine operations.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Operational Advantages</h2>
        <ul className="gold-list">
          <li><strong>High Stability:</strong> Excellent stability during net setting and hauling</li>
          <li><strong>Large Capacity:</strong> Spacious holds for maximum catch storage</li>
          <li><strong>Efficient Operations:</strong> Strategic equipment placement for optimal efficiency</li>
          <li><strong>Fuel Efficiency:</strong> Optimized design for economical fuel consumption</li>
          <li><strong>Professional Equipment:</strong> High-quality winches and net handling systems</li>
        </ul>
      </div>

      <div className="card">
        <h2>Typical Specifications</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>General Dimensions</h3>
            <ul className="gold-list">
              <li>Length: 25-45 meters</li>
              <li>Beam: 6-10 meters</li>
              <li>Depth: 4-6 meters</li>
              <li>Gross Tonnage: 100-500 GT</li>
            </ul>
          </div>
          
          <div>
            <h3>Net Capacity</h3>
            <ul className="gold-list">
              <li>Net length: 500-2000 meters</li>
              <li>Net depth: 50-200 meters</li>
              <li>Winch capacity: 10-50 tons</li>
              <li>Roller systems for smooth operation</li>
            </ul>
          </div>
          
          <div>
            <h3>Hold Capacity</h3>
            <ul className="gold-list">
              <li>Hold volume: 100-400 cubic meters</li>
              <li>Loading capacity: 50-200 tons</li>
              <li>Quick loading systems</li>
              <li>Quality preservation features</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Purse Seine Equipment</h2>
        <ul className="gold-list">
          <li><strong>Power Blocks:</strong> Professional power blocks for net hauling</li>
          <li><strong>Winches:</strong> High-capacity winches for net operations</li>
          <li><strong>Rollers:</strong> Smooth rollers for efficient net handling</li>
          <li><strong>Net Storage:</strong> Organized net storage and management</li>
          <li><strong>Hydraulic Systems:</strong> Reliable hydraulic systems for equipment operation</li>
        </ul>
      </div>

      <div className="card">
        <h2>Target Species</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Pelagic Fish</h3>
            <p>Skipjack, yellowfin tuna, and other pelagic fish species that school near the surface.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Small Pelagics</h3>
            <p>Sardines, anchovies, mackerel, and other small pelagic species.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Mixed Species</h3>
            <p>Various fish species that can be caught using purse seine methods.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Fishing Operations</h2>
        <ul className="gold-list">
          <li><strong>Net Setting:</strong> Efficient net setting around fish schools</li>
          <li><strong>Pursing:</strong> Closing the bottom of the net to trap fish</li>
          <li><strong>Hauling:</strong> Mechanical hauling of nets and catch</li>
          <li><strong>Loading:</strong> Quick loading of catch into holds</li>
          <li><strong>Quality Control:</strong> Maintaining fish quality during operations</li>
        </ul>
      </div>

      <div className="card">
        <h2>Safety & Navigation</h2>
        <ul className="gold-list">
          <li><strong>Navigation Systems:</strong> Advanced GPS, radar, and fish finding equipment</li>
          <li><strong>Safety Equipment:</strong> Comprehensive safety equipment for crew and operations</li>
          <li><strong>Communication:</strong> Reliable communication systems for fleet coordination</li>
          <li><strong>Emergency Systems:</strong> Backup systems and emergency procedures</li>
        </ul>
      </div>

      <div className="card">
        <h2>Start Your Purse Seine Vessel Project</h2>
        <p>Ready to build a professional purse seine vessel for circular net operations? Our team has extensive experience in designing and constructing vessels optimized for purse seine fishing. Contact us for a free consultation.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20want%20to%20build%20a%20purse%20seine%20vessel" style={{
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
