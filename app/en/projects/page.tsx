import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/projects';
  const title = 'Projects Portfolio | Batang Shipyard Indonesia - Vessel Construction & Services';
  const description: 'View our portfolio of completed projects: wooden vessel construction, vessel maintenance, ship documentation, and second-hand vessel trading. Professional maritime services with proven results.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/proyek' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <section className="list">
      <h1>Batang Shipyard Indonesia Project Portfolio</h1>
      
      <div className="card">
        <h2>Wooden Vessel Construction Projects</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Traditional Wooden Vessel - 150 GT</h3>
            <p><strong>Client:</strong> PT. Maritim Nusantara</p>
            <p><strong>Specifications:</strong> Traditional wooden vessel with length 25 meters, beam 6 meters, capacity 150 GT</p>
            <p><strong>Features:</strong> Teak wood construction, modern navigation systems, diesel engine 300 HP</p>
            <p><strong>Duration:</strong> 8 months (2023)</p>
            <p><strong>Status:</strong> Completed and operational</p>
          </div>
          
          <div>
            <h3>Fishing Vessel - 200 GT</h3>
            <p><strong>Client:</strong> CV. Samudra Jaya</p>
            <p><strong>Specifications:</strong> Fishing vessel with length 30 meters, beam 7 meters, capacity 200 GT</p>
            <p><strong>Features:</strong> Fish cooling room, modern fishing systems, diesel engine 400 HP</p>
            <p><strong>Duration:</strong> 10 months (2023)</p>
            <p><strong>Status:</strong> Completed and operational</p>
          </div>
          
          <div>
            <h3>Transport Vessel - 300 GT</h3>
            <p><strong>Client:</strong> PT. Bahari Transport</p>
            <p><strong>Specifications:</strong> Cargo transport vessel with length 35 meters, beam 8 meters, capacity 300 GT</p>
            <p><strong>Features:</strong> Spacious cargo room, modern loading systems, diesel engine 500 HP</p>
            <p><strong>Duration:</strong> 12 months (2022-2023)</p>
            <p><strong>Status:</strong> Completed and operational</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Vessel Maintenance & Renovation Projects</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Wooden Vessel Renovation - 100 GT</h3>
            <p><strong>Client:</strong> CV. Laut Biru</p>
            <p><strong>Services:</strong> Complete hull renovation, engine replacement, electrical system repair</p>
            <p><strong>Duration:</strong> 4 months (2023)</p>
            <p><strong>Result:</strong> Vessel returned to optimal operational condition</p>
          </div>
          
          <div>
            <h3>Routine Maintenance - 250 GT</h3>
            <p><strong>Client:</strong> PT. Nusantara Shipping</p>
            <p><strong>Services:</strong> Routine inspection, hull repair, engine maintenance, repainting</p>
            <p><strong>Duration:</strong> 2 months (2023)</p>
            <p><strong>Result:</strong> Vessel ready to sail with seaworthiness certificate</p>
          </div>
          
          <div>
            <h3>Navigation System Upgrade</h3>
            <p><strong>Client:</strong> CV. Maritim Sejahtera</p>
            <p><strong>Services:</strong> GPS installation, radar, and modern communication systems</p>
            <p><strong>Duration:</strong> 1 month (2023)</p>
            <p><strong>Result:</strong> Modern navigation system installed and functioning optimally</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Ship Documentation Projects</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>New Vessel Sailing Permit Processing</h3>
            <p><strong>Client:</strong> PT. Samudra Mandiri</p>
            <p><strong>Services:</strong> Technical document processing, vessel ownership documents, sailing permit for new vessel 180 GT</p>
            <p><strong>Duration:</strong> 3 months (2023)</p>
            <p><strong>Result:</strong> All documents complete and sailing permit issued</p>
          </div>
          
          <div>
            <h3>Vessel Certificate Renewal</h3>
            <p><strong>Client:</strong> CV. Bahari Lestari</p>
            <p><strong>Services:</strong> Vessel seaworthiness certificate renewal and technical document extension</p>
            <p><strong>Duration:</strong> 1 month (2023)</p>
            <p><strong>Result:</strong> Certificate successfully renewed without issues</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Second-hand Vessel Trading Projects</h2>
        <div style={{display: 'grid', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h3>Wooden Vessel Sale - 120 GT</h3>
            <p><strong>Seller:</strong> CV. Maritim Jaya</p>
            <p><strong>Buyer:</strong> PT. Samudra Nusantara</p>
            <p><strong>Services:</strong> Facilitation of negotiations, contract preparation, due diligence</p>
            <p><strong>Duration:</strong> 2 months (2023)</p>
            <p><strong>Result:</strong> Successful transaction with complete documentation</p>
          </div>
          
          <div>
            <h3>Second-hand Vessel Purchase - 200 GT</h3>
            <p><strong>Buyer:</strong> CV. Laut Sejahtera</p>
            <p><strong>Seller:</strong> PT. Bahari Mandiri</p>
            <p><strong>Services:</strong> Technical inspection, price negotiation, documentation transfer assistance</p>
            <p><strong>Duration:</strong> 3 months (2023)</p>
            <p><strong>Result:</strong> Vessel successfully purchased according to specifications</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Project Statistics</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
          <div style={{textAlign: 'center', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3 style={{fontSize: '2rem', margin: '0', color: 'var(--color-primary)'}}>25+</h3>
            <p>Vessels Constructed</p>
          </div>
          <div style={{textAlign: 'center', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3 style={{fontSize: '2rem', margin: '0', color: 'var(--color-primary)'}}>50+</h3>
            <p>Maintenance Projects</p>
          </div>
          <div style={{textAlign: 'center', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3 style={{fontSize: '2rem', margin: '0', color: 'var(--color-primary)'}}>30+</h3>
            <p>Documents Processed</p>
          </div>
          <div style={{textAlign: 'center', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <h3 style={{fontSize: '2rem', margin: '0', color: 'var(--color-primary)'}}>15+</h3>
            <p>Second-hand Vessel Transactions</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Client Testimonials</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <p><em>"Batang Shipyard Indonesia provides very professional service. Our vessel was completed on time with satisfactory quality."</em></p>
            <p><strong>- PT. Maritim Nusantara</strong></p>
          </div>
          <div style={{padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '8px'}}>
            <p><em>"Their team is very helpful in processing vessel documentation. All processes went smoothly and according to procedures."</em></p>
            <p><strong>- CV. Samudra Jaya</strong></p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Start Your Project</h2>
        <p>Want to be part of our project portfolio? Our team is ready to help realize your vessel project with the best quality. <a href="https://wa.me/6282221665371?text=Hello,%20I%20want%20to%20consult%20about%20a%20vessel%20project" className="btn" style={{
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
        }}>Vessel Project Consultation via WhatsApp</a></p>
      </div>
    </section>
  );
}