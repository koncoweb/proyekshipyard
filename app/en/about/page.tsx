import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/about';
  const title = 'About Us | Batang Shipyard Indonesia - Trusted Shipyard Services';
  const description = 'Batang Shipyard Indonesia is a trusted shipyard specializing in wooden vessel construction, ship documentation, vessel maintenance, and second-hand vessel trading.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/tentang-kami' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function AboutPage() {
  return (
    <>
      <section className="hero about-hero">
        <div className="container hero-inner">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Batang Shipyard Indonesia</p>
          <h1 className="hero-title">About Batang Shipyard Indonesia</h1>
          <p className="hero-sub">Trusted shipyard providing complete solutions: wooden vessel construction, documents & sailing permits, vessel maintenance, to second-hand vessel trading.</p>
        </div>
      </section>

      <section className="list">
        <h1>About Batang Shipyard Indonesia</h1>
        
        <div className="card">
          <h2>Vision & Mission</h2>
          <p><strong>Vision:</strong> To become Indonesia's leading shipyard providing complete solutions for the maritime industry with international standards.</p>
          <p><strong>Mission:</strong> To provide the best services in wooden vessel construction, ship documentation, vessel maintenance, and second-hand vessel trading facilitation with high quality and professional service.</p>
        </div>

        <div className="card">
          <h2>Company Profile</h2>
          <p>Batang Shipyard Indonesia is a shipyard with extensive experience in Indonesia's maritime industry. We specialize in comprehensive vessel services, from high-quality wooden vessel construction to complex ship documentation.</p>
          <p>With an experienced technical team and adequate facilities, we are committed to providing the best solutions for your vessel needs. We understand that each vessel has unique characteristics and requirements, therefore we provide services tailored to your specifications and budget.</p>
        </div>

        <div className="card">
          <h2>Our Advantages</h2>
          <ul className="gold-list">
            <li><strong>Experienced Technical Team:</strong> Our team consists of experienced experts in vessel construction and maritime documentation</li>
            <li><strong>Guaranteed Quality:</strong> Every project is completed with high quality standards and follows applicable regulations</li>
            <li><strong>Comprehensive Service:</strong> From initial consultation to documentation, we provide end-to-end services</li>
            <li><strong>Competitive Pricing:</strong> We offer transparent and competitive pricing without compromising quality</li>
            <li><strong>Professional Service:</strong> Our commitment to providing the best service to every client</li>
          </ul>
        </div>

        <div className="card">
          <h2>Main Services</h2>
          <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
            <div>
              <h3>Wooden Vessel Construction</h3>
              <p>Specification consultation, technical design, budget presentation, to notarized SPK with 3-stage payment terms.</p>
            </div>
            <div>
              <h3>Ship Documents & Sailing Permits</h3>
              <p>Processing of technical vessel documents, vessel ownership documents, and sailing permit assistance.</p>
            </div>
            <div>
              <h3>Vessel Maintenance</h3>
              <p>Routine inspection, cleaning, hull repairs, engine maintenance, painting, and spare parts replacement.</p>
            </div>
            <div>
            <h3>Second-hand Vessels</h3>
            <p>Facilitating second-hand vessel trading with price negotiation, contract preparation, and due diligence.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Quality Commitment</h2>
          <p>We are committed to providing services with the highest quality standards. Every project we undertake follows strict procedures and applicable regulations in Indonesia's maritime industry. Our team continuously updates knowledge and skills to follow the latest technology and regulatory developments.</p>
          <p>Client satisfaction is our top priority. We always strive to understand the specific needs of each client and provide appropriate solutions according to agreed budgets and timelines.</p>
        </div>

        <div className="card">
          <h2>Contact Us</h2>
          <p>Ready to start your vessel project? Our team is ready to help you from initial consultation to project completion. <a href="https://wa.me/6282221665371?text=Hello,%20I%20want%20a%20free%20consultation%20for%20a%20vessel%20project" className="btn" style={{
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
          }}>Free Consultation via WhatsApp</a></p>
        </div>
      </section>
    </>
  );
}