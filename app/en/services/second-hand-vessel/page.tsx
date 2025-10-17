import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/services/second-hand-vessel';
  const title = 'Second-hand Vessel Trading | Batang Shipyard Indonesia - Buy & Sell Services';
  const description: 'Professional second-hand vessel trading services including buyer-seller facilitation, price negotiation, technical inspection, and transaction support. Trusted vessel brokerage services.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/layanan/kapal-bekas' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
    <section className="hero secondhand-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Services</p>
          <h1 className="hero-title">Second-hand Vessel Trading</h1>
          <p className="hero-sub">Professional second-hand vessel trading services, facilitating buyer-seller meetings, price negotiation, and transaction support with complete documentation.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Free Consultation</a>
            <a href="/en/projects" className="btn outline">View Projects</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Professional Second-hand Vessel Trading Services</h1>
      
      <div className="card">
        <h2>Second-hand Vessel Trading Services</h2>
        <p>Batang Shipyard Indonesia provides comprehensive second-hand vessel trading services, connecting buyers and sellers in the maritime industry. We facilitate transparent transactions with proper documentation and technical support.</p>
        <p>Our experienced team ensures that both buyers and sellers have a smooth and secure transaction process with complete legal protection and technical verification.</p>
      </div>

      <div className="card">
        <h2>Services for Buyers</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Vessel Search & Selection</h3>
            <ul className="gold-list">
              <li>Comprehensive vessel database access</li>
              <li>Market research and analysis</li>
              <li>Vessel matching according to requirements</li>
              <li>Price comparison and evaluation</li>
              <li>Location and availability information</li>
            </ul>
          </div>
          
          <div>
            <h3>Technical Inspection</h3>
            <ul className="gold-list">
              <li>Comprehensive vessel condition assessment</li>
              <li>Engine and machinery inspection</li>
              <li>Hull and structure evaluation</li>
              <li>Documentation verification</li>
              <li>Detailed inspection reports</li>
            </ul>
          </div>
          
          <div>
            <h3>Negotiation & Transaction</h3>
            <ul className="gold-list">
              <li>Price negotiation assistance</li>
              <li>Contract preparation and review</li>
              <li>Payment arrangement facilitation</li>
              <li>Documentation processing</li>
              <li>Transaction completion support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Services for Sellers</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Vessel Valuation</h3>
            <ul className="gold-list">
              <li>Professional vessel appraisal</li>
              <li>Market value assessment</li>
              <li>Condition-based pricing</li>
              <li>Competitive market analysis</li>
              <li>Realistic pricing recommendations</li>
            </ul>
          </div>
          
          <div>
            <h3>Marketing & Promotion</h3>
            <ul className="gold-list">
              <li>Professional vessel photography</li>
              <li>Detailed vessel specifications</li>
              <li>Online listing and promotion</li>
              <li>Targeted buyer outreach</li>
              <li>Marketing material preparation</li>
            </ul>
          </div>
          
          <div>
            <h3>Sale Facilitation</h3>
            <ul className="gold-list">
              <li>Buyer screening and verification</li>
              <li>Showings and demonstrations</li>
              <li>Negotiation support</li>
              <li>Contract preparation</li>
              <li>Documentation assistance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Our Trading Process</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>1. Initial Consultation</h3>
            <p>Understanding your needs and requirements:</p>
            <ul className="gold-list">
              <li>Buyer/seller consultation</li>
              <li>Requirements assessment</li>
              <li>Budget and timeline discussion</li>
              <li>Service scope definition</li>
            </ul>
          </div>
          
          <div>
            <h3>2. Vessel Assessment</h3>
            <p>Comprehensive vessel evaluation:</p>
            <ul className="gold-list">
              <li>Technical condition inspection</li>
              <li>Documentation review</li>
              <li>Market value determination</li>
              <li>Condition report preparation</li>
            </ul>
          </div>
          
          <div>
            <h3>3. Matching & Negotiation</h3>
            <p>Connecting buyers and sellers:</p>
            <ul className="gold-list">
              <li>Buyer-seller introduction</li>
              <li>Price negotiation facilitation</li>
              <li>Terms and conditions discussion</li>
              <li>Agreement preparation</li>
            </ul>
          </div>
          
          <div>
            <h3>4. Transaction Completion</h3>
            <p>Finalizing the transaction:</p>
            <ul className="gold-list">
              <li>Contract execution</li>
              <li>Payment processing</li>
              <li>Documentation transfer</li>
              <li>Vessel handover</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Types of Vessels We Handle</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Fishing Vessels</h3>
            <p>Various types of fishing vessels including trawlers, longliners, purse seiners, and traditional fishing boats.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Commercial Vessels</h3>
            <p>Cargo vessels, passenger ferries, tugboats, and other commercial maritime vessels.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Work Vessels</h3>
            <p>Service vessels, patrol boats, research vessels, and specialized work boats.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Recreational Vessels</h3>
            <p>Yachts, pleasure boats, and recreational fishing vessels.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Documentation & Legal Support</h2>
        <ul className="gold-list">
          <li><strong>Ownership Verification:</strong> Complete ownership document verification</li>
          <li><strong>Legal Compliance:</strong> Ensuring all transactions comply with maritime laws</li>
          <li><strong>Transfer Documentation:</strong> Complete documentation for ownership transfer</li>
          <li><strong>Registration Assistance:</strong> Help with vessel registration and licensing</li>
          <li><strong>Insurance Support:</strong> Assistance with vessel insurance arrangements</li>
        </ul>
      </div>

      <div className="card">
        <h2>Quality Assurance</h2>
        <ul className="gold-list">
          <li><strong>Professional Inspection:</strong> Thorough technical inspection by certified surveyors</li>
          <li><strong>Transparent Process:</strong> Open and honest communication throughout the process</li>
          <li><strong>Legal Protection:</strong> Proper contracts and legal documentation</li>
          <li><strong>After-Sales Support:</strong> Continued support after transaction completion</li>
          <li><strong>Customer Satisfaction:</strong> Commitment to customer satisfaction and service quality</li>
        </ul>
      </div>

      <div className="card">
        <h2>Start Your Vessel Trading</h2>
        <p>Ready to buy or sell a vessel? Our professional team is ready to help you with all aspects of second-hand vessel trading. Contact us for a free consultation to discuss your requirements.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20want%20to%20buy/sell%20a%20second-hand%20vessel" style={{
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