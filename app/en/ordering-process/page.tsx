import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/ordering-process';
  const title = 'Ordering Process | Batang Shipyard Indonesia - Step-by-Step Vessel Construction';
  const description: 'Learn about our comprehensive ordering process for vessel construction: from initial consultation to final delivery. Transparent 5-step process with professional guidance throughout your project.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/proses-pemesanan' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
    <section className="hero ordering-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Batang Shipyard Indonesia</p>
          <h1 className="hero-title">Ordering Process</h1>
          <p className="hero-sub">Comprehensive step-by-step process for vessel construction: from initial consultation to final delivery. Transparent process with professional guidance throughout your project.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Start Your Order</a>
            <a href="/en/services" className="btn outline">Our Services</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Vessel Construction Ordering Process</h1>
      
      <div className="card">
        <h2>About Our Ordering Process</h2>
        <p>At Batang Shipyard Indonesia, we follow a comprehensive and transparent ordering process to ensure your vessel construction project is completed successfully. Our 5-step process is designed to provide clear communication, quality assurance, and professional guidance from initial consultation to final delivery.</p>
        <p>Each step is carefully planned and executed with your involvement and approval, ensuring that the final vessel meets your exact specifications and requirements.</p>
      </div>

      <div className="card">
        <h2>Step 1: Initial Consultation</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Free Consultation</h3>
            <ul className="gold-list">
              <li>Complimentary initial consultation to discuss your needs</li>
              <li>Understanding your vessel requirements and specifications</li>
              <li>Budget estimation and timeline discussion</li>
              <li>Feasibility assessment of your project</li>
            </ul>
          </div>
          
          <div>
            <h3>Information Gathering</h3>
            <ul className="gold-list">
              <li>Vessel type and intended use</li>
              <li>Size specifications (length, beam, depth)</li>
              <li>Capacity requirements (GT, passenger, cargo)</li>
              <li>Engine and equipment preferences</li>
              <li>Budget range and timeline expectations</li>
            </ul>
          </div>
          
          <div>
            <h3>Preliminary Assessment</h3>
            <ul className="gold-list">
              <li>Technical feasibility review</li>
              <li>Initial cost estimation</li>
              <li>Timeline assessment</li>
              <li>Recommendation for next steps</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Step 2: Detailed Design & Planning</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Technical Design</h3>
            <ul className="gold-list">
              <li>Detailed vessel design and engineering</li>
              <li>Hull construction drawings and specifications</li>
              <li>Interior layout and system design</li>
              <li>Structural calculations and stability analysis</li>
            </ul>
          </div>
          
          <div>
            <h3>Material Planning</h3>
            <ul className="gold-list">
              <li>Wood selection and sourcing plan</li>
              <li>Equipment and machinery specifications</li>
              <li>Paint and coating requirements</li>
              <li>Electrical and navigation equipment</li>
            </ul>
          </div>
          
          <div>
            <h3>Project Planning</h3>
            <ul className="gold-list">
              <li>Detailed project timeline</li>
              <li>Work schedule and milestones</li>
              <li>Resource allocation and planning</li>
              <li>Quality control checkpoints</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Step 3: Budget & Contract Preparation</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Detailed Budget (RAB)</h3>
            <ul className="gold-list">
              <li>Comprehensive cost breakdown</li>
              <li>Material costs and specifications</li>
              <li>Labor costs and timeline</li>
              <li>Equipment and machinery costs</li>
              <li>Contingency and miscellaneous expenses</li>
            </ul>
          </div>
          
          <div>
            <h3>Contract Preparation</h3>
            <ul className="gold-list">
              <li>Work Agreement Contract (SPK) preparation</li>
              <li>Terms and conditions definition</li>
              <li>Payment schedule and milestones</li>
              <li>Warranty and after-sales service terms</li>
            </ul>
          </div>
          
          <div>
            <h3>Documentation</h3>
            <ul className="gold-list">
              <li>Technical drawings and specifications</li>
              <li>Material lists and specifications</li>
              <li>Quality standards and requirements</li>
              <li>Delivery and acceptance criteria</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Step 4: Contract Signing & Project Start</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Contract Review & Signing</h3>
            <ul className="gold-list">
              <li>Detailed contract review with client</li>
              <li>Notarized contract signing</li>
              <li>Initial payment (40% down payment)</li>
              <li>Project kickoff meeting</li>
            </ul>
          </div>
          
          <div>
            <h3>Material Procurement</h3>
            <ul className="gold-list">
              <li>Wood sourcing and quality inspection</li>
              <li>Equipment and machinery procurement</li>
              <li>Paint and coating material ordering</li>
              <li>Quality verification of all materials</li>
            </ul>
          </div>
          
          <div>
            <h3>Construction Preparation</h3>
            <ul className="gold-list">
              <li>Workshop preparation and setup</li>
              <li>Tool and equipment preparation</li>
              <li>Team assignment and briefing</li>
              <li>Safety protocols and training</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Step 5: Construction & Delivery</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Construction Phase</h3>
            <ul className="gold-list">
              <li>Hull construction and assembly</li>
              <li>Engine and equipment installation</li>
              <li>Electrical and navigation system installation</li>
              <li>Painting and finishing work</li>
            </ul>
          </div>
          
          <div>
            <h3>Progress Monitoring</h3>
            <ul className="gold-list">
              <li>Regular progress reports to client</li>
              <li>Quality control inspections</li>
              <li>Client visits and progress reviews</li>
              <li>Timeline monitoring and adjustments</li>
            </ul>
          </div>
          
          <div>
            <h3>Testing & Delivery</h3>
            <ul className="gold-list">
              <li>Sea trials and performance testing</li>
              <li>Final inspection and quality assurance</li>
              <li>Documentation preparation</li>
              <li>Vessel delivery and handover</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Payment Schedule</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Stage 1: Down Payment (40%)</h3>
            <p>Paid at contract signing to start project and purchase main materials.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Stage 2: Progress Payment (40%)</h3>
            <p>Paid when construction reaches 70% completion to continue work and equipment installation.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Stage 3: Final Payment (20%)</h3>
            <p>Paid when vessel is completed and ready for delivery with complete documentation.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Quality Assurance</h2>
        <ul className="gold-list">
          <li><strong>Material Quality:</strong> All materials are inspected and certified before use</li>
          <li><strong>Construction Standards:</strong> Work follows Indonesian and international maritime standards</li>
          <li><strong>Progress Monitoring:</strong> Regular inspections and quality control checkpoints</li>
          <li><strong>Client Involvement:</strong> Client participation in key decision points and inspections</li>
          <li><strong>Final Testing:</strong> Comprehensive sea trials and performance testing</li>
        </ul>
      </div>

      <div className="card">
        <h2>Timeline Expectations</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Typical Project Durations</h3>
            <ul className="gold-list">
              <li><strong>Small Vessels (10-50 GT):</strong> 4-8 months</li>
              <li><strong>Medium Vessels (50-200 GT):</strong> 6-12 months</li>
              <li><strong>Large Vessels (200-500 GT):</strong> 8-18 months</li>
              <li><strong>Custom Projects:</strong> Timeline varies based on complexity</li>
            </ul>
          </div>
          
          <div>
            <h3>Factors Affecting Timeline</h3>
            <ul className="gold-list">
              <li>Vessel size and complexity</li>
              <li>Material availability and sourcing</li>
              <li>Weather conditions</li>
              <li>Client approval and decision timing</li>
              <li>Equipment delivery schedules</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Start Your Vessel Order</h2>
        <p>Ready to begin your vessel construction project? Contact us today to start with a free consultation. Our team is ready to guide you through our comprehensive ordering process.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20want%20to%20start%20a%20vessel%20construction%20project" style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.3s ease'
          }}>Start Project via WhatsApp</a>
          <a className="btn" href="/en/contact" style={{backgroundColor: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)'}}>Contact Us</a>
        </div>
      </div>
    </section>
    </>
  );
}
