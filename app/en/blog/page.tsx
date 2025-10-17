import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/blog';
  const title = 'Blog | Batang Shipyard Indonesia - Maritime Education & Case Studies';
  const description: 'Educational content and case studies about vessel construction, maintenance, maritime regulations, and industry insights from Batang Shipyard Indonesia experts.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/blog' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
    <section className="hero blog-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Batang Shipyard Indonesia</p>
          <h1 className="hero-title">Blog</h1>
          <p className="hero-sub">Educational content and case studies about vessel construction, maintenance, maritime regulations, and industry insights from our maritime experts.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Contact Us</a>
            <a href="/en/services" className="btn outline">Our Services</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>Maritime Education & Case Studies</h1>
      
      <div className="card">
        <h2>About Our Blog</h2>
        <p>Welcome to the Batang Shipyard Indonesia blog, where we share educational content, case studies, and industry insights about vessel construction, maintenance, maritime regulations, and best practices in the maritime industry.</p>
        <p>Our blog content is created by our experienced maritime experts and technical team, providing valuable knowledge for vessel owners, maritime professionals, and anyone interested in the maritime industry.</p>
      </div>

      <div className="card">
        <h2>Content Categories</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Vessel Construction</h3>
            <ul className="gold-list">
              <li>Design principles and considerations</li>
              <li>Material selection and quality standards</li>
              <li>Construction techniques and best practices</li>
              <li>Project management and timeline planning</li>
            </ul>
          </div>
          
          <div>
            <h3>Maintenance & Repair</h3>
            <ul className="gold-list">
              <li>Preventive maintenance schedules</li>
              <li>Common maintenance issues and solutions</li>
              <li>Repair techniques and procedures</li>
              <li>Equipment and tool recommendations</li>
            </ul>
          </div>
          
          <div>
            <h3>Maritime Regulations</h3>
            <ul className="gold-list">
              <li>Indonesian maritime regulations</li>
              <li>International maritime standards</li>
              <li>Documentation requirements</li>
              <li>Compliance procedures and updates</li>
            </ul>
          </div>
          
          <div>
            <h3>Industry Insights</h3>
            <ul className="gold-list">
              <li>Market trends and developments</li>
              <li>Technology advancements</li>
              <li>Environmental considerations</li>
              <li>Safety best practices</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Featured Articles</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Wooden Vessel Construction: Choosing the Right Materials</h3>
            <p>Learn about different types of wood used in vessel construction, their properties, and how to select the best materials for your project.</p>
            <p><em>Coming Soon</em></p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Understanding Maritime Documentation Requirements</h3>
            <p>A comprehensive guide to vessel documentation, sailing permits, and regulatory compliance in Indonesian waters.</p>
            <p><em>Coming Soon</em></p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Vessel Maintenance: Best Practices for Longevity</h3>
            <p>Essential maintenance practices to extend your vessel's operational life and ensure optimal performance.</p>
            <p><em>Coming Soon</em></p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Case Study: Successful Second-hand Vessel Transaction</h3>
            <p>Real-world example of a successful second-hand vessel transaction, including inspection, negotiation, and documentation processes.</p>
            <p><em>Coming Soon</em></p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Expert Contributors</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>M. Hilmy Syahfata S.Tr.T.</h3>
            <p>Maritime expert with extensive experience in wooden vessel construction design, machinery, and production supervision. Specializes in vessel construction and maintenance topics.</p>
          </div>
          
          <div>
            <h3>Technical Team</h3>
            <p>Our experienced technical team contributes articles on vessel maintenance, repair techniques, and industry best practices based on real project experiences.</p>
          </div>
          
          <div>
            <h3>Documentation Specialists</h3>
            <p>Our documentation team shares insights on maritime regulations, compliance procedures, and documentation requirements for various vessel operations.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter to receive the latest blog posts, industry updates, and valuable maritime insights directly to your inbox.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <input 
            type="email" 
            placeholder="Enter your email address"
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          />
          <button 
            className="btn"
            style={{
              padding: '12px 24px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="card">
        <h2>Contact Our Experts</h2>
        <p>Have specific questions about vessel construction, maintenance, or maritime regulations? Our experts are available to provide personalized consultation and guidance.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20have%20questions%20about%20maritime%20topics" style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.3s ease'
          }}>Ask Expert via WhatsApp</a>
          <a className="btn" href="/en/contact" style={{backgroundColor: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)'}}>Contact Us</a>
        </div>
      </div>
    </section>
    </>
  );
}
