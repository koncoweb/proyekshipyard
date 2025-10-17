import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/services/vessel-maintenance';
  const title = 'Vessel Maintenance | Batang Shipyard Indonesia - Professional Repair & Inspection';
  const description: 'Professional vessel maintenance services including inspection, hull repairs, engine maintenance, painting, and spare parts replacement. Keep your vessel in optimal condition.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/layanan/perawatan-kapal' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
    <section className="hero maintenance-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Services</p>
          <h1 className="hero-title">Vessel Maintenance</h1>
          <p className="hero-sub">Professional vessel maintenance services to keep your vessel in optimal condition with regular inspections, repairs, and preventive maintenance.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Free Consultation</a>
            <a href="/en/projects" className="btn outline">View Projects</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Professional Vessel Maintenance Services</h1>
      
      <div className="card">
        <h2>Vessel Maintenance Services</h2>
        <p>Batang Shipyard Indonesia provides comprehensive vessel maintenance services to ensure your vessel operates safely and efficiently. Our experienced technicians use modern equipment and high-quality materials for all maintenance work.</p>
        <p>We offer both scheduled maintenance programs and emergency repair services to meet your vessel's specific needs and operational requirements.</p>
      </div>

      <div className="card">
        <h2>Maintenance Services We Provide</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Hull Maintenance</h3>
            <ul className="gold-list">
              <li>Hull cleaning and inspection</li>
              <li>Anti-fouling treatment</li>
              <li>Hull repair and patching</li>
              <li>Anode replacement</li>
              <li>Propeller maintenance</li>
              <li>Rudder system inspection</li>
            </ul>
          </div>
          
          <div>
            <h3>Engine Maintenance</h3>
            <ul className="gold-list">
              <li>Engine overhaul and servicing</li>
              <li>Fuel system maintenance</li>
              <li>Cooling system service</li>
              <li>Transmission inspection</li>
              <li>Engine alignment</li>
              <li>Performance optimization</li>
            </ul>
          </div>
          
          <div>
            <h3>Electrical Systems</h3>
            <ul className="gold-list">
              <li>Electrical system inspection</li>
              <li>Wiring repair and replacement</li>
              <li>Battery maintenance</li>
              <li>Navigation equipment service</li>
              <li>Communication system repair</li>
              <li>Lighting system maintenance</li>
            </ul>
          </div>
          
          <div>
            <h3>Painting & Coating</h3>
            <ul className="gold-list">
              <li>Surface preparation</li>
              <li>Primer application</li>
              <li>Anti-corrosive coating</li>
              <li>Top coat painting</li>
              <li>Specialty marine coatings</li>
              <li>Color matching services</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Maintenance Programs</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Preventive Maintenance</h3>
            <p>Regular scheduled maintenance to prevent breakdowns and extend vessel life:</p>
            <ul className="gold-list">
              <li>Monthly inspection schedules</li>
              <li>Quarterly service programs</li>
              <li>Annual comprehensive checks</li>
              <li>Maintenance record keeping</li>
              <li>Predictive maintenance planning</li>
            </ul>
          </div>
          
          <div>
            <h3>Corrective Maintenance</h3>
            <p>Repair services for identified issues and breakdowns:</p>
            <ul className="gold-list">
              <li>Emergency repair services</li>
              <li>Component replacement</li>
              <li>System troubleshooting</li>
              <li>Fault diagnosis</li>
              <li>Root cause analysis</li>
            </ul>
          </div>
          
          <div>
            <h3>Condition-Based Maintenance</h3>
            <p>Maintenance based on actual vessel condition and performance:</p>
            <ul className="gold-list">
              <li>Vibration analysis</li>
              <li>Oil analysis</li>
              <li>Thermal imaging</li>
              <li>Performance monitoring</li>
              <li>Condition assessment reports</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Spare Parts & Materials</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Genuine Parts</h3>
            <ul className="gold-list">
              <li>Original manufacturer parts</li>
              <li>Quality certified components</li>
              <li>Comprehensive parts inventory</li>
              <li>Express parts ordering</li>
              <li>Parts warranty coverage</li>
            </ul>
          </div>
          
          <div>
            <h3>Materials Used</h3>
            <ul className="gold-list">
              <li>Marine-grade paints and coatings</li>
              <li>Anti-corrosive materials</li>
              <li>High-quality sealants</li>
              <li>Professional tools and equipment</li>
              <li>Safety equipment and supplies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Service Process</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>1. Initial Inspection</h3>
            <p>Comprehensive vessel assessment to identify maintenance needs:</p>
            <ul className="gold-list">
              <li>Visual inspection of all systems</li>
              <li>Performance testing</li>
              <li>Documentation of current condition</li>
              <li>Maintenance priority assessment</li>
            </ul>
          </div>
          
          <div>
            <h3>2. Work Planning</h3>
            <p>Development of detailed maintenance plan:</p>
            <ul className="gold-list">
              <li>Scope of work definition</li>
              <li>Timeline and schedule planning</li>
              <li>Resource allocation</li>
              <li>Cost estimation</li>
            </ul>
          </div>
          
          <div>
            <h3>3. Maintenance Execution</h3>
            <p>Professional execution of maintenance work:</p>
            <ul className="gold-list">
              <li>Skilled technician deployment</li>
              <li>Quality control monitoring</li>
              <li>Progress reporting</li>
              <li>Issue resolution</li>
            </ul>
          </div>
          
          <div>
            <h3>4. Testing & Handover</h3>
            <p>Final testing and client handover:</p>
            <ul className="gold-list">
              <li>System functionality testing</li>
              <li>Performance verification</li>
              <li>Documentation completion</li>
              <li>Client briefing and recommendations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Maintenance Packages</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Basic Maintenance Package</h3>
            <p>Essential maintenance services for routine vessel care including basic inspections, cleaning, and minor repairs.</p>
            <p><strong>Duration:</strong> 1-2 weeks</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Standard Maintenance Package</h3>
            <p>Comprehensive maintenance including major inspections, repairs, and system servicing.</p>
            <p><strong>Duration:</strong> 2-4 weeks</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Premium Maintenance Package</h3>
            <p>Complete vessel overhaul including major repairs, upgrades, and full system maintenance.</p>
            <p><strong>Duration:</strong> 4-8 weeks</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Quality Assurance</h2>
        <ul className="gold-list">
          <li><strong>Certified Technicians:</strong> Skilled and certified maintenance professionals</li>
          <li><strong>Quality Materials:</strong> Use of high-quality marine-grade materials</li>
          <li><strong>Modern Equipment:</strong> Latest tools and equipment for efficient service</li>
          <li><strong>Quality Control:</strong> Rigorous quality control processes</li>
          <li><strong>Warranty Coverage:</strong> Warranty on all maintenance work performed</li>
        </ul>
      </div>

      <div className="card">
        <h2>Start Your Maintenance Service</h2>
        <p>Keep your vessel in optimal condition with our professional maintenance services. Contact us for a free inspection and consultation to determine the best maintenance plan for your vessel.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20need%20vessel%20maintenance%20services" style={{
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