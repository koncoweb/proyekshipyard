import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/shipyard-indonesia';
  const title = 'Shipyard Indonesia | Batang Shipyard - Leading Indonesian Maritime Services';
  const description: 'Discover Batang Shipyard Indonesia, a leading shipyard in Indonesia providing comprehensive maritime services including vessel construction, maintenance, documentation, and trading services.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/shipyard-indonesia' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
    <section className="hero shipyard-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Batang Shipyard Indonesia</p>
          <h1 className="hero-title">Shipyard Indonesia</h1>
          <p className="hero-sub">Leading Indonesian shipyard providing comprehensive maritime services including vessel construction, maintenance, documentation, and trading services with international standards.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Contact Us</a>
            <a href="/en/services" className="btn outline">Our Services</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Batang Shipyard Indonesia - Leading Indonesian Maritime Services</h1>
      
      <div className="card">
        <h2>About Batang Shipyard Indonesia</h2>
        <p>Batang Shipyard Indonesia is a leading shipyard in Indonesia, established with a commitment to providing world-class maritime services. Located in Batang, Central Java, we have been serving the Indonesian maritime industry with comprehensive vessel construction, maintenance, documentation, and trading services.</p>
        <p>Our shipyard combines traditional Indonesian boat-building expertise with modern technology and international standards to deliver high-quality maritime solutions to clients both locally and internationally.</p>
      </div>

      <div className="card">
        <h2>Our Heritage & Expertise</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Traditional Indonesian Boat Building</h3>
            <ul className="gold-list">
              <li>Decades of experience in traditional Indonesian vessel construction</li>
              <li>Expert knowledge of tropical wood construction techniques</li>
              <li>Master craftsmen with traditional boat-building skills</li>
              <li>Cultural heritage preservation in modern vessel design</li>
            </ul>
          </div>
          
          <div>
            <h3>Modern Technology Integration</h3>
            <ul className="gold-list">
              <li>Advanced construction equipment and machinery</li>
              <li>Modern design and engineering capabilities</li>
              <li>Computer-aided design and manufacturing</li>
              <li>Quality control systems and procedures</li>
            </ul>
          </div>
          
          <div>
            <h3>International Standards</h3>
            <ul className="gold-list">
              <li>Compliance with international maritime regulations</li>
              <li>Quality management systems</li>
              <li>Safety and environmental standards</li>
              <li>Professional certification and training</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Strategic Location</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Geographic Advantages</h3>
            <ul className="gold-list">
              <li>Strategic location in Central Java, Indonesia</li>
              <li>Easy access to major ports and shipping routes</li>
              <li>Close proximity to material suppliers</li>
              <li>Convenient transportation infrastructure</li>
            </ul>
          </div>
          
          <div>
            <h3>Accessibility</h3>
            <ul className="gold-list">
              <li>45 km from Semarang (1 hour drive)</li>
              <li>25 km from Pekalongan (30 minutes drive)</li>
              <li>350 km from Jakarta (5-6 hours drive)</li>
              <li>Well-connected road and port access</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Comprehensive Services</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Vessel Construction</h3>
            <ul className="gold-list">
              <li>Custom wooden vessel construction</li>
              <li>Fishing vessels and commercial vessels</li>
              <li>Vessels up to 500 GT capacity</li>
              <li>Complete project management</li>
            </ul>
          </div>
          
          <div>
            <h3>Maintenance & Repair</h3>
            <ul className="gold-list">
              <li>Comprehensive vessel maintenance services</li>
              <li>Hull repair and renovation</li>
              <li>Engine maintenance and overhaul</li>
              <li>Electrical system repair</li>
            </ul>
          </div>
          
          <div>
            <h3>Documentation Services</h3>
            <ul className="gold-list">
              <li>Ship documentation processing</li>
              <li>Sailing permit applications</li>
              <li>Ownership transfer assistance</li>
              <li>Regulatory compliance support</li>
            </ul>
          </div>
          
          <div>
            <h3>Trading Services</h3>
            <ul className="gold-list">
              <li>Second-hand vessel trading</li>
              <li>Buyer-seller facilitation</li>
              <li>Vessel inspection and valuation</li>
              <li>Transaction support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Quality & Standards</h2>
        <ul className="gold-list">
          <li><strong>Material Quality:</strong> High-quality tropical wood and marine-grade materials</li>
          <li><strong>Construction Standards:</strong> Adherence to Indonesian and international maritime standards</li>
          <li><strong>Safety Compliance:</strong> Comprehensive safety protocols and equipment</li>
          <li><strong>Environmental Responsibility:</strong> Sustainable practices and environmental protection</li>
          <li><strong>Quality Control:</strong> Rigorous quality control processes at every stage</li>
        </ul>
      </div>

      <div className="card">
        <h2>Expert Team</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Technical Experts</h3>
            <ul className="gold-list">
              <li>Certified marine engineers and naval architects</li>
              <li>Experienced vessel construction specialists</li>
              <li>Skilled craftsmen and technicians</li>
              <li>Quality control and inspection professionals</li>
            </ul>
          </div>
          
          <div>
            <h3>Management Team</h3>
            <ul className="gold-list">
              <li>Project managers with maritime experience</li>
              <li>Business development specialists</li>
              <li>Customer service representatives</li>
              <li>Administrative and support staff</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Client Base & Experience</h2>
        <ul className="gold-list">
          <li><strong>Local Clients:</strong> Indonesian fishing companies, shipping companies, and vessel owners</li>
          <li><strong>International Clients:</strong> Foreign companies seeking quality vessel construction and services</li>
          <li><strong>Government Projects:</strong> Collaboration with Indonesian government maritime projects</li>
          <li><strong>Private Sector:</strong> Individual vessel owners and small to medium enterprises</li>
          <li><strong>Commercial Sector:</strong> Commercial fishing, transport, and service companies</li>
        </ul>
      </div>

      <div className="card">
        <h2>Certifications & Recognition</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Hempel Paint School Certification</h3>
            <p>Professional certification in marine coating and corrosion protection techniques.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Jotun Paint School Certification</h3>
            <p>Advanced training in marine paint application and protection systems.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Industry Recognition</h3>
            <p>Recognition from Indonesian maritime industry for quality and service excellence.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Future Vision</h2>
        <p>Batang Shipyard Indonesia is committed to continuous improvement and expansion of our services. Our vision is to become the leading shipyard in Indonesia and Southeast Asia, known for:</p>
        <ul className="gold-list">
          <li>Excellence in vessel construction and maritime services</li>
          <li>Innovation in traditional and modern vessel building techniques</li>
          <li>Commitment to quality, safety, and environmental responsibility</li>
          <li>Service to both local and international maritime communities</li>
          <li>Contribution to the development of Indonesia's maritime industry</li>
        </ul>
      </div>

      <div className="card">
        <h2>Contact Our Shipyard</h2>
        <p>Ready to experience the quality and expertise of Batang Shipyard Indonesia? Contact us today to discuss your vessel construction, maintenance, or trading needs. We welcome both local and international clients.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20want%20to%20learn%20more%20about%20Batang%20Shipyard%20Indonesia" style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.3s ease'
          }}>Contact via WhatsApp</a>
          <a className="btn" href="/en/contact" style={{backgroundColor: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)'}}>Contact Us</a>
        </div>
      </div>
    </section>
    </>
  );
}