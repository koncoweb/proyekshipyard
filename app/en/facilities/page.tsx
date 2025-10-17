import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/facilities';
  const title = 'Facilities | Batang Shipyard Indonesia - Modern Shipyard Infrastructure';
  const description: 'Explore our modern shipyard facilities in Batang, Central Java. Complete infrastructure for vessel construction, maintenance, and repair with professional equipment and skilled workforce.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/fasilitas' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
    <section className="hero facilities-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Batang Shipyard Indonesia</p>
          <h1 className="hero-title">Shipyard Facilities</h1>
          <p className="hero-sub">Modern shipyard facilities with complete infrastructure for vessel construction, maintenance, and repair. Professional equipment and skilled workforce ready to serve your maritime needs.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Schedule Visit</a>
            <a href="/en/projects" className="btn outline">View Projects</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Batang Shipyard Indonesia Facilities</h1>
      
      <div className="card">
        <h2>About Our Facilities</h2>
        <p>Batang Shipyard Indonesia is equipped with modern facilities and infrastructure to support comprehensive vessel construction, maintenance, and repair services. Our shipyard is strategically located in Batang, Central Java, with easy access to major ports and transportation routes.</p>
        <p>Our facilities include dry docks, workshops, material storage areas, and administrative buildings, all designed to provide efficient and professional maritime services.</p>
      </div>

      <div className="card">
        <h2>Main Facilities</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Dry Dock Facilities</h3>
            <ul className="gold-list">
              <li>Multiple dry dock slots for vessels up to 500 GT</li>
              <li>Modern lifting and positioning equipment</li>
              <li>Drainage and pumping systems</li>
              <li>Safety equipment and protocols</li>
            </ul>
          </div>
          
          <div>
            <h3>Construction Workshop</h3>
            <ul className="gold-list">
              <li>Spacious workshop for hull construction</li>
              <li>Professional woodworking equipment</li>
              <li>Precision cutting and shaping tools</li>
              <li>Quality control inspection areas</li>
            </ul>
          </div>
          
          <div>
            <h3>Engine Workshop</h3>
            <ul className="gold-list">
              <li>Engine repair and maintenance facility</li>
              <li>Professional diagnostic equipment</li>
              <li>Engine testing and calibration systems</li>
              <li>Spare parts storage and inventory</li>
            </ul>
          </div>
          
          <div>
            <h3>Electrical Workshop</h3>
            <ul className="gold-list">
              <li>Electrical system installation and repair</li>
              <li>Navigation equipment service</li>
              <li>Communication system maintenance</li>
              <li>Testing and calibration equipment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Equipment & Machinery</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Construction Equipment</h3>
            <ul className="gold-list">
              <li>Cranes and lifting equipment (5-50 tons capacity)</li>
              <li>Professional woodworking machinery</li>
              <li>Precision measurement and cutting tools</li>
              <li>Welding and metalworking equipment</li>
            </ul>
          </div>
          
          <div>
            <h3>Marine Equipment</h3>
            <ul className="gold-list">
              <li>Engine installation and removal systems</li>
              <li>Propeller and shaft alignment equipment</li>
              <li>Hull cleaning and preparation tools</li>
              <li>Painting and coating application systems</li>
            </ul>
          </div>
          
          <div>
            <h3>Testing Equipment</h3>
            <ul className="gold-list">
              <li>Engine performance testing systems</li>
              <li>Electrical system diagnostic tools</li>
              <li>Hull integrity testing equipment</li>
              <li>Quality control measurement instruments</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Material Storage & Supply</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Wood Storage</h3>
            <ul className="gold-list">
              <li>Climate-controlled wood storage facilities</li>
              <li>Various wood types: teak, merbau, bangkirai, ulin</li>
              <li>Proper seasoning and treatment areas</li>
              <li>Quality grading and selection systems</li>
            </ul>
          </div>
          
          <div>
            <h3>Equipment Storage</h3>
            <ul className="gold-list">
              <li>Secure storage for marine equipment</li>
              <li>Engine and machinery storage areas</li>
              <li>Spare parts inventory management</li>
              <li>Tool and equipment maintenance areas</li>
            </ul>
          </div>
          
          <div>
            <h3>Paint & Coating Storage</h3>
            <ul className="gold-list">
              <li>Specialized paint storage facilities</li>
              <li>Marine-grade coating inventory</li>
              <li>Temperature-controlled storage</li>
              <li>Safety equipment for chemical handling</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Safety & Environmental</h2>
        <ul className="gold-list">
          <li><strong>Safety Protocols:</strong> Comprehensive safety procedures and emergency response systems</li>
          <li><strong>Environmental Compliance:</strong> Waste management and environmental protection measures</li>
          <li><strong>Fire Safety:</strong> Fire prevention and suppression systems</li>
          <li><strong>Worker Protection:</strong> Personal protective equipment and safety training programs</li>
          <li><strong>Emergency Response:</strong> Emergency procedures and communication systems</li>
        </ul>
      </div>

      <div className="card">
        <h2>Quality Control</h2>
        <ul className="gold-list">
          <li><strong>Inspection Areas:</strong> Dedicated areas for quality control inspections</li>
          <li><strong>Testing Equipment:</strong> Professional testing and measurement equipment</li>
          <li><strong>Documentation:</strong> Comprehensive quality control documentation systems</li>
          <li><strong>Standards Compliance:</strong> Adherence to international maritime standards</li>
          <li><strong>Continuous Improvement:</strong> Regular quality assessment and improvement processes</li>
        </ul>
      </div>

      <div className="card">
        <h2>Location & Access</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Address</h3>
            <p><strong>Batang Shipyard Indonesia</strong><br/>
            Jalan Gajah Mada 165<br/>
            Batang, Central Java, 51121<br/>
            Indonesia</p>
          </div>
          
          <div>
            <h3>Access Routes</h3>
            <ul className="gold-list">
              <li><strong>From Semarang:</strong> 45 km via Pantura Road (1 hour)</li>
              <li><strong>From Pekalongan:</strong> 25 km via Pantura Road (30 minutes)</li>
              <li><strong>From Jakarta:</strong> 350 km via Cipali Toll Road (5-6 hours)</li>
              <li><strong>Port Access:</strong> Close proximity to major ports</li>
            </ul>
          </div>
          
          <div>
            <h3>Transportation</h3>
            <ul className="gold-list">
              <li>Easy access for material delivery trucks</li>
              <li>Vessel launching and retrieval facilities</li>
              <li>Convenient access for client visits</li>
              <li>Parking facilities for visitors</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Facility Tours & Visits</h2>
        <p>We welcome clients and potential customers to visit our facilities. Facility tours can be scheduled to see our dry docks, workshops, equipment, and ongoing projects. Our team will guide you through the facilities and explain our capabilities and processes.</p>
        <p><strong>Tour Information:</strong></p>
        <ul className="gold-list">
          <li>Tours must be scheduled at least 1 day in advance</li>
          <li>Duration: approximately 1-2 hours</li>
          <li>Safety equipment will be provided</li>
          <li>Professional guide available</li>
          <li>No charge for facility tours</li>
        </ul>
        <a href="https://wa.me/6282221665371?text=Hello,%20I%20want%20to%20schedule%20a%20facility%20tour" className="btn" style={{
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
        }}>Schedule Facility Tour via WhatsApp</a>
      </div>
    </section>
    </>
  );
}