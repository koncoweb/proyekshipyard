import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/vessels/collecting';
  const title = 'Collecting Vessel | Batang Shipyard Indonesia - Catch Collection & Transport';
  const description: 'Professional collecting vessel construction services. Designed to collect catch results from fishing units at sea, efficient and safe transportation to port with insulated holds.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/produk-kapal/collecting' } },
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
          <h1 className="hero-title">Collecting Vessel</h1>
          <p className="hero-sub">Designed to collect catch results from smaller fishing units at sea, efficient and safe transportation to port with insulated holds.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Free Consultation</a>
            <a href="/en/vessels" className="btn outline">View All Vessels</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Collecting Vessel - Professional Catch Collection & Transport</h1>
      
      <div className="card">
        <h2>About Collecting Vessels</h2>
        <p>Collecting vessels are specifically designed to receive catch results from fishing units operating in open sea and transport them efficiently and safely to port or nearest cold storage facilities. These vessels play a crucial role in the fishing supply chain by ensuring fresh catch reaches markets in optimal condition.</p>
        <p>Our collecting vessels are built with focus on spacious work decks, safe side access for cargo transfer, and insulated holds to maintain catch quality during transport.</p>
      </div>

      <div className="card">
        <h2>Key Features & Specifications</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Hold Design</h3>
            <ul className="gold-list">
              <li>Insulated/cooled holds with capacity adjusted to target tonnage</li>
              <li>Temperature-controlled storage systems</li>
              <li>Easy loading and unloading access</li>
              <li>Quality preservation systems</li>
            </ul>
          </div>
          
          <div>
            <h3>Deck Configuration</h3>
            <ul className="gold-list">
              <li>Moderate freeboard for easy cargo transfer between vessels</li>
              <li>Spacious work deck for catch handling</li>
              <li>Safe side access for ship-to-ship operations</li>
              <li>Organized work areas</li>
            </ul>
          </div>
          
          <div>
            <h3>Performance Characteristics</h3>
            <ul className="gold-list">
              <li>Fuel-efficient main engines</li>
              <li>Stable cruising speed for long distances</li>
              <li>Long range capability</li>
              <li>Optimal fuel consumption</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Engine Options</h2>
        <p>We offer various engine options commonly used by Indonesian fishermen, ensuring reliability and serviceability:</p>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Yanmar Series</h3>
            <p><strong>6HAL/6CH Series (Marine)</strong></p>
            <p>Reliable and fuel-efficient engines with excellent performance for collecting operations.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Mitsubishi Series</h3>
            <p><strong>S6/S4 Series (Marine)</strong></p>
            <p>Powerful engines with good torque characteristics for heavy cargo operations.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Cummins Series</h3>
            <p><strong>6BT 5.9 / 6CT 8.3 (Marine)</strong></p>
            <p>High-performance engines with excellent reliability and easy maintenance.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Hino Series</h3>
            <p><strong>H07C / H06 Series (Marine-converted)</strong></p>
            <p>Economical option with good fuel efficiency and available spare parts.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Operational Advantages</h2>
        <ul className="gold-list">
          <li><strong>Efficient Cargo Handling:</strong> Optimized deck layout for quick catch loading and unloading</li>
          <li><strong>Quality Preservation:</strong> Insulated holds maintain catch freshness during transport</li>
          <li><strong>Fuel Efficiency:</strong> Designed for optimal fuel consumption on long routes</li>
          <li><strong>Safety Features:</strong> Safe side access and stable design for cargo operations</li>
          <li><strong>Versatility:</strong> Suitable for various types of catch and cargo</li>
        </ul>
      </div>

      <div className="card">
        <h2>Typical Specifications</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>General Dimensions</h3>
            <ul className="gold-list">
              <li>Length: 15-35 meters (customizable)</li>
              <li>Beam: 4-8 meters</li>
              <li>Depth: 2-4 meters</li>
              <li>Gross Tonnage: 10-200 GT</li>
            </ul>
          </div>
          
          <div>
            <h3>Hold Capacity</h3>
            <ul className="gold-list">
              <li>Insulated hold capacity: 20-150 cubic meters</li>
              <li>Temperature range: -5°C to +15°C</li>
              <li>Loading capacity: 10-100 tons</li>
              <li>Access hatches: Multiple for efficient loading</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Construction Process</h2>
        <p>Our collecting vessel construction follows the same comprehensive process as our other vessels:</p>
        <ul className="gold-list">
          <li>Initial consultation and specification development</li>
          <li>Custom design according to your operational needs</li>
          <li>Technical drawings and budget presentation</li>
          <li>Construction with quality materials and workmanship</li>
          <li>Sea trials and performance testing</li>
          <li>Documentation and delivery</li>
        </ul>
      </div>

      <div className="card">
        <h2>Start Your Collecting Vessel Project</h2>
        <p>Ready to build a collecting vessel for your fishing operations? Our team is ready to help you design and construct the perfect vessel for your specific needs. Contact us for a free consultation.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20want%20to%20build%20a%20collecting%20vessel" style={{
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
