import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/services/ship-documents';
  const title = 'Ship Documents & Sailing Permits | Batang Shipyard Indonesia';
  const description: 'Complete ship documentation services including technical documents, ownership rights, and sailing permits. Professional assistance for vessel legality and compliance.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/layanan/dokumen-kapal' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
    <section className="hero dokumen-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Services</p>
          <h1 className="hero-title">Ship Documents & Sailing Permits</h1>
          <p className="hero-sub">Complete ship documentation services, from technical documents, ownership rights, to sailing permits and regulatory compliance.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Free Consultation</a>
            <a href="/en/projects" className="btn outline">View Projects</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Complete Ship Documentation Services</h1>
      
      <div className="card">
        <h2>Ship Documentation Services</h2>
        <p>Batang Shipyard Indonesia provides comprehensive ship documentation services to ensure your vessel meets all legal and technical requirements. We handle complex documentation processes efficiently and professionally.</p>
        <p>Our experienced team understands maritime regulations and can help you navigate through the complex documentation requirements for vessel operations in Indonesian waters.</p>
      </div>

      <div className="card">
        <h2>Types of Documents We Handle</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Technical Vessel Documents</h3>
            <ul className="gold-list">
              <li>Vessel measurement certificates</li>
              <li>Technical inspection reports</li>
              <li>Classification certificates</li>
              <li>Safety equipment certificates</li>
              <li>Radio station licenses</li>
              <li>Navigation equipment certificates</li>
            </ul>
          </div>
          
          <div>
            <h3>Ownership & Legal Documents</h3>
            <ul className="gold-list">
              <li>Vessel ownership certificates</li>
              <li>Bill of sale documentation</li>
              <li>Mortgage and lien documents</li>
              <li>Insurance certificates</li>
              <li>Registration documents</li>
              <li>Change of ownership procedures</li>
            </ul>
          </div>
          
          <div>
            <h3>Sailing Permits & Licenses</h3>
            <ul className="gold-list">
              <li>Sailing permits (SPB)</li>
              <li>Port clearance certificates</li>
              <li>Customs documentation</li>
              <li>Fishing licenses (for fishing vessels)</li>
              <li>Transport permits (for commercial vessels)</li>
              <li>International voyage permits</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Our Documentation Process</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>1. Initial Assessment</h3>
            <p>We review your vessel's current documentation status and identify required documents:</p>
            <ul className="gold-list">
              <li>Document gap analysis</li>
              <li>Compliance requirements assessment</li>
              <li>Timeline and cost estimation</li>
              <li>Required supporting documents list</li>
            </ul>
          </div>
          
          <div>
            <h3>2. Document Preparation</h3>
            <p>Our team prepares and organizes all required documentation:</p>
            <ul className="gold-list">
              <li>Application form completion</li>
              <li>Supporting document compilation</li>
              <li>Technical specification verification</li>
              <li>Quality control and review</li>
            </ul>
          </div>
          
          <div>
            <h3>3. Submission & Follow-up</h3>
            <p>We handle submission and monitor progress with relevant authorities:</p>
            <ul className="gold-list">
              <li>Document submission to authorities</li>
              <li>Progress monitoring and updates</li>
              <li>Correspondence with officials</li>
              <li>Issue resolution and amendments</li>
            </ul>
          </div>
          
          <div>
            <h3>4. Document Delivery</h3>
            <p>We ensure all documents are properly issued and delivered:</p>
            <ul className="gold-list">
              <li>Certificate collection and verification</li>
              <li>Document authenticity confirmation</li>
              <li>Client handover and briefing</li>
              <li>Renewal schedule planning</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Specialized Services</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>New Vessel Documentation</h3>
            <p>Complete documentation package for newly constructed vessels including all initial certificates and permits.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Document Renewal</h3>
            <p>Regular renewal services for expired certificates and permits to maintain vessel compliance.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Change of Ownership</h3>
            <p>Complete documentation transfer process when vessel ownership changes hands.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>International Documentation</h3>
            <p>Documentation services for vessels operating in international waters or foreign ports.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Processing Times & Costs</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Typical Processing Times</h3>
            <ul className="gold-list">
              <li><strong>Sailing Permits:</strong> 2-4 weeks</li>
              <li><strong>Technical Certificates:</strong> 1-3 weeks</li>
              <li><strong>Ownership Documents:</strong> 3-6 weeks</li>
              <li><strong>License Renewals:</strong> 1-2 weeks</li>
            </ul>
          </div>
          
          <div>
            <h3>Service Fees</h3>
            <ul className="gold-list">
              <li>Transparent pricing with no hidden costs</li>
              <li>Package deals for multiple documents</li>
              <li>Emergency processing available (additional fees)</li>
              <li>Payment plans for large projects</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Why Choose Our Documentation Services</h2>
        <ul className="gold-list">
          <li><strong>Expert Knowledge:</strong> Deep understanding of Indonesian maritime regulations</li>
          <li><strong>Efficient Process:</strong> Streamlined procedures to minimize delays</li>
          <li><strong>Government Relations:</strong> Established connections with relevant authorities</li>
          <li><strong>Quality Assurance:</strong> Thorough review to prevent rejection</li>
          <li><strong>Ongoing Support:</strong> Assistance with renewals and updates</li>
        </ul>
      </div>

      <div className="card">
        <h2>Start Your Documentation Process</h2>
        <p>Need help with your vessel documentation? Our team is ready to assist you with all documentation requirements. Contact us for a free consultation to discuss your specific needs.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20need%20help%20with%20ship%20documentation" style={{
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