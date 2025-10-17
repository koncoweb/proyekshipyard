import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/vessels/skipjack';
  const title = 'Skipjack Vessel | Batang Shipyard Indonesia - Fast & Efficient Tuna Targeting';
  const description: 'Professional skipjack vessel construction. Fast and efficient for skipjack/tuna targets with fuel efficiency, quick deck handling, and optimal performance for tuna fishing operations.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/produk-kapal/cakalang' } },
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
          <h1 className="hero-title">Skipjack Vessel</h1>
          <p className="hero-sub">Fast and efficient for skipjack/tuna targets with fuel efficiency, quick deck handling, and optimal performance for tuna fishing operations.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Free Consultation</a>
            <a href="/en/vessels" className="btn outline">View All Vessels</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Skipjack Vessel - Fast & Efficient Tuna Targeting</h1>
      
      <div className="card">
        <h2>About Skipjack Vessels</h2>
        <p>Skipjack vessels are specifically designed for targeting skipjack tuna and other tuna species. These vessels prioritize speed, fuel efficiency, and quick deck handling to maximize fishing efficiency and catch quality.</p>
        <p>Our skipjack vessels feature sleek bow designs for higher cruising speeds, efficient deck layouts for quick catch handling, and optional RSW systems for maximum freshness preservation.</p>
      </div>

      <div className="card">
        <h2>Key Features & Design</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Speed & Performance</h3>
            <ul className="gold-list">
              <li>Sleek bow design for higher cruising speed</li>
              <li>Optimized hull shape for efficiency</li>
              <li>High-speed capability for tuna chasing</li>
              <li>Fuel-efficient cruising characteristics</li>
            </ul>
          </div>
          
          <div>
            <h3>Deck Layout</h3>
            <ul className="gold-list">
              <li>Hold/ice box placement near work area</li>
              <li>Quick handling systems for fast processing</li>
              <li>Efficient work flow design</li>
              <li>Organized equipment placement</li>
            </ul>
          </div>
          
          <div>
            <h3>Quality Preservation</h3>
            <ul className="gold-list">
              <li>Optional RSW (Refrigerated Sea Water) systems</li>
              <li>Flake ice systems for maximum freshness</li>
              <li>Quick cooling capabilities</li>
              <li>Quality maintenance systems</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Engine Options</h2>
        <p>We offer engine options specifically suited for skipjack vessels requiring good torque and fuel efficiency:</p>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Isuzu Series</h3>
            <p><strong>6BD1/6HE1 Series</strong></p>
            <p>Lightweight and efficient engines with easy maintenance, perfect for skipjack vessels.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Hino Series</h3>
            <p><strong>H07C Series</strong></p>
            <p>Good torque characteristics with readily available spare parts for reliable operations.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Yanmar Series</h3>
            <p><strong>6LY/6CX Series</strong></p>
            <p>Smooth performance engines ideal for comfortable cruising speeds in skipjack operations.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Operational Advantages</h2>
        <ul className="gold-list">
          <li><strong>High Speed:</strong> Fast vessel for chasing tuna schools</li>
          <li><strong>Fuel Efficiency:</strong> Optimized design for economical operations</li>
          <li><strong>Quick Handling:</strong> Efficient deck layout for rapid catch processing</li>
          <li><strong>Quality Focus:</strong> Advanced preservation systems for premium fish</li>
          <li><strong>Reliability:</strong> Robust construction for demanding tuna operations</li>
        </ul>
      </div>

      <div className="card">
        <h2>Typical Specifications</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>General Dimensions</h3>
            <ul className="gold-list">
              <li>Length: 15-30 meters</li>
              <li>Beam: 4-7 meters</li>
              <li>Depth: 2-4 meters</li>
              <li>Gross Tonnage: 20-100 GT</li>
            </ul>
          </div>
          
          <div>
            <h3>Performance Characteristics</h3>
            <ul className="gold-list">
              <li>Maximum speed: 12-18 knots</li>
              <li>Cruising speed: 8-12 knots</li>
              <li>Fuel consumption: Optimized for efficiency</li>
              <li>Range: 200-500 nautical miles</li>
            </ul>
          </div>
          
          <div>
            <h3>Hold Capacity</h3>
            <ul className="gold-list">
              <li>Ice hold capacity: 20-80 cubic meters</li>
              <li>RSW system capacity: 10-50 cubic meters</li>
              <li>Temperature range: -2°C to +8°C</li>
              <li>Quick loading access points</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Target Species</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Skipjack Tuna</h3>
            <p>Primary target species - fast-swimming tuna that requires speed and efficiency to catch.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Yellowfin Tuna</h3>
            <p>Secondary target - larger tuna species that also benefit from fast vessel operations.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Other Tuna Species</h3>
            <p>Various tuna species that can be targeted with similar fishing methods.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Fishing Methods</h2>
        <ul className="gold-list">
          <li><strong>Pole and Line:</strong> Traditional method using poles and live bait</li>
          <li><strong>Trolling:</strong> Dragging lures behind the vessel at speed</li>
          <li><strong>Live Bait:</strong> Using live bait to attract tuna schools</li>
          <li><strong>Fish Aggregating Devices (FADs):</strong> Fishing around floating objects</li>
          <li><strong>Free School:</strong> Finding and fishing free-swimming tuna schools</li>
        </ul>
      </div>

      <div className="card">
        <h2>Equipment & Systems</h2>
        <ul className="gold-list">
          <li><strong>Fishing Equipment:</strong> Poles, lines, hooks, and bait systems</li>
          <li><strong>Live Bait Systems:</strong> Tanks and systems for maintaining live bait</li>
          <li><strong>Cooling Systems:</strong> RSW and ice systems for catch preservation</li>
          <li><strong>Navigation:</strong> GPS, fish finders, and communication equipment</li>
          <li><strong>Safety Equipment:</strong> Comprehensive safety equipment and protocols</li>
        </ul>
      </div>

      <div className="card">
        <h2>Market Applications</h2>
        <ul className="gold-list">
          <li><strong>Fresh Market:</strong> High-quality fresh tuna for premium markets</li>
          <li><strong>Processing:</strong> Tuna for canning and processing industries</li>
          <li><strong>Export:</strong> International markets requiring high-quality tuna</li>
          <li><strong>Local Markets:</strong> Domestic markets with fresh tuna demand</li>
        </ul>
      </div>

      <div className="card">
        <h2>Start Your Skipjack Vessel Project</h2>
        <p>Ready to build a fast and efficient skipjack vessel for tuna operations? Our team has extensive experience in designing and constructing vessels optimized for skipjack fishing. Contact us for a free consultation.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20want%20to%20build%20a%20skipjack%20vessel" style={{
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
