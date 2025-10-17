import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/services/wooden-vessel';
  const title = 'Wooden Vessel Construction | Batang Shipyard Indonesia - Consultation & Construction';
  const description = 'High-quality wooden vessel construction services: specification consultation, technical design, construction, to documentation processing. 3-stage payment terms with notarized contract.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/layanan/produksi-kapal-kayu' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
    <section className="hero produksi-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Services</p>
          <h1 className="hero-title">Wooden Vessel Construction</h1>
          <p className="hero-sub">High-quality wooden vessel construction, from specification consultation to sea trial and sailing documentation.</p>
          <div className="hero-cta">
            <a href="/en/contact" className="btn">Free Consultation</a>
            <a href="/en/projects" className="btn outline">View Projects</a>
          </div>
        </div>
      </div>
    </section>

    <section className="list">
      <h1>High-Quality Wooden Vessel Construction</h1>
      
      <div className="card">
        <h2>Wooden Vessel Construction Services</h2>
        <p>Batang Shipyard Indonesia specializes in wooden vessel construction with high quality standards. We serve various types of vessels from fishing vessels, transport vessels, to tourist vessels with capacity up to 500 GT.</p>
        <p>Our experienced technical team will help you from the initial consultation stage until the vessel is ready to sail with complete documentation.</p>
      </div>

      <div className="card">
        <h2>Complete Construction Process</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>1. Specification Consultation</h3>
            <p>In-depth consultation to determine vessel specifications according to your needs, including:</p>
            <ul className="gold-list">
              <li>Vessel dimensions (length, width, height)</li>
              <li>Desired Gross Tonnage (GT)</li>
              <li>Type and function of vessel</li>
              <li>Engine and equipment specifications</li>
              <li>Project budget and timeline</li>
            </ul>
          </div>
          
          <div>
            <h3>2. Technical Design</h3>
            <p>Our technical team will create detailed design including:</p>
            <ul className="gold-list">
              <li>Hull construction drawings</li>
              <li>Interior and system layout</li>
              <li>Material and equipment specifications</li>
              <li>Structural and stability calculations</li>
              <li>Complete technical documentation</li>
            </ul>
          </div>
          
          <div>
            <h3>3. Design & Budget Presentation</h3>
            <p>Comprehensive presentation covering:</p>
            <ul className="gold-list">
              <li>3D design presentation and technical drawings</li>
              <li>Detailed Budget Cost (RAB)</li>
              <li>Project work schedule</li>
              <li>Materials to be used specifications</li>
              <li>Warranty and after-sales service</li>
            </ul>
          </div>
          
          <div>
            <h3>4. Negotiation & Agreement</h3>
            <p>Transparent negotiation process including:</p>
            <ul className="gold-list">
              <li>Price and payment terms negotiation</li>
              <li>Specification adjustments according to budget</li>
              <li>Work schedule agreement</li>
              <li>Contract clauses and warranty</li>
              <li>Order change procedures (if needed)</li>
            </ul>
          </div>
          
          <div>
            <h3>5. Contract Signing</h3>
            <p>Official contract through notary with complete documentation:</p>
            <ul className="gold-list">
              <li>Work Agreement Contract (SPK) notarized</li>
              <li>Final technical drawings</li>
              <li>Final agreed RAB</li>
              <li>3-stage payment terms</li>
              <li>Warranty and maintenance clauses</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Types of Vessels We Construct</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Fishing Vessels</h3>
            <p>Vessels specifically for fishing with features:</p>
            <ul className="gold-list">
              <li>Fish cooling room</li>
              <li>Modern fishing systems</li>
              <li>High-powered diesel engines</li>
              <li>Complete navigation and communication</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Transport Vessels</h3>
            <p>Vessels for cargo and passenger transport:</p>
            <ul className="gold-list">
              <li>Spacious cargo room</li>
              <li>Efficient loading systems</li>
              <li>Comfortable passenger facilities</li>
              <li>Optimal safety and security</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Tourist Vessels</h3>
            <p>Vessels for tourism and recreation purposes:</p>
            <ul className="gold-list">
              <li>Attractive and comfortable design</li>
              <li>Complete tourism facilities</li>
              <li>High security systems</li>
              <li>Optimal fuel efficiency</li>
            </ul>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Special Vessels</h3>
            <p>Vessels with special functions according to needs:</p>
            <ul className="gold-list">
              <li>Patrol vessels</li>
              <li>Research vessels</li>
              <li>Support vessels</li>
              <li>Vessels with special specifications</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Materials & Quality</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
            <div>
            <h3>Types of Wood Used</h3>
            <ul className="gold-list">
              <li><strong>Teak Wood:</strong> For main construction, durable and strong</li>
              <li><strong>Merbau Wood:</strong> For hull, water and weather resistant</li>
              <li><strong>Bangkirai Wood:</strong> For deck and structure, resistant to extreme weather</li>
              <li><strong>Ulin Wood:</strong> For parts requiring high strength</li>
              <li><strong>Local Wood:</strong> According to availability and needs</li>
              </ul>
            </div>
            
            <div>
            <h3>Quality Standards</h3>
            <ul className="gold-list">
              <li>High-quality wood with certificates</li>
              <li>Wood preservation according to maritime standards</li>
              <li>Construction follows applicable vessel classification standards</li>
              <li>Trusted brand equipment and engines</li>
              <li>Quality inspection at every production stage</li>
              </ul>
            </div>
        </div>
      </div>

      <div className="card">
        <h2>Payment Terms</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Stage 1: Down Payment (40%)</h3>
            <p>Paid at contract signing to start project and purchase main materials.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Stage 2: Progress Payment (40%)</h3>
            <p>Paid when construction reaches 70% to continue work and equipment installation.</p>
          </div>
          
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3>Stage 3: Final Payment (20%)</h3>
            <p>Paid when vessel is completed and ready for delivery with complete documentation.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Warranty & After-Sales</h2>
        <ul className="gold-list">
          <li><strong>Construction Warranty:</strong> 2 years for hull and structural construction</li>
          <li><strong>Engine Warranty:</strong> According to engine manufacturer warranty</li>
          <li><strong>Routine Service:</strong> Routine maintenance service with special prices</li>
          <li><strong>Spare Parts:</strong> Spare parts availability with competitive prices</li>
          <li><strong>Consultation:</strong> Free consultation for maintenance and upgrades</li>
        </ul>
      </div>

      <div className="card">
        <h2>Start Your Vessel Project</h2>
        <p>Ready to start your wooden vessel construction project? Our team is ready to help realize your dream vessel with the best quality and according to budget. Our initial consultation is free and without commitment.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <a className="btn" href="https://wa.me/6282221665371?text=Hello,%20I%20want%20a%20consultation%20for%20wooden%20vessel%20construction" style={{
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
          <a className="btn" href="/en/projects" style={{backgroundColor: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)'}}>View Portfolio</a>
      </div>
    </div>
    </section>
    </>
  );
}