import Link from 'next/link';

function ServiceIcon({ type }: { type: 'production' | 'documents' | 'maintenance' | 'secondhand' }) {
  const iconProps = { width: 22, height: 22, viewBox: '0 0 24 24' } as const;
  const stroke = '#0b2a6f';
  const strokeProps = { stroke, strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  const icons = {
    production: (
      <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" {...strokeProps} />
        <path d="M2 12l10 5 10-5M2 17l10 5 10-5" {...strokeProps} />
      </svg>
    ),
    documents: (
      <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" {...strokeProps} />
        <path d="M14 2v6h6" {...strokeProps} />
        <path d="M8 13h8M8 17h8M8 9h2" {...strokeProps} />
      </svg>
    ),
    maintenance: (
      <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-8 8l-6.9 6.9a2.1 2.1 0 1 1-3-3l6.9-6.9a6 6 0 0 1 8-8l-3.8 3.8Z" {...strokeProps} />
      </svg>
    ),
    secondhand: (
      <svg {...iconProps} xmlns="http://www.w3.org/2000/svg">
        <path d="M5.4 5h15.6l-4 8H7L5.4 5Z" {...strokeProps} />
        <path d="M7 13 4.5 18M7 13l2.5 5" {...strokeProps} />
        <path d="M13 13v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6" {...strokeProps} />
      </svg>
    )
  };

  return (
    <span aria-hidden style={{ display: 'inline-flex', alignItems: 'center' }}>{icons[type]}</span>
  );
}

export const revalidate = 86400;

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Batang Shipyard</p>
          <h1 className="hero-title">Shipbuilding, Documents, and Maintenance.</h1>
          <p className="hero-sub">Complete solutions for wooden shipbuilding, ship documentation, maintenance, and second-hand vessel transactions.</p>
          <div className="hero-cta">
            <Link href="/en/services" className="btn">View Services</Link>
            <Link href="/en/contact" className="btn outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="container" style={{padding:'28px 0'}}>
        <div className="card" style={{borderColor:'rgba(0,0,0,.08)'}}>
          <h2 style={{fontSize:20,margin:0,marginBottom:12}}>Quick Navigation</h2>
          <div className="nav-grid" style={{marginTop:8}}>
            <Link className="card" href="/en/shipyard-indonesia">Shipyard Indonesia</Link>
            <Link className="card" href="/en/services">Services</Link>
            <Link className="card" href="/en/projects">Projects</Link>
            <Link className="card" href="/en/facilities">Facilities</Link>
            <Link className="card" href="/en/about">About Us</Link>
            <Link className="card" href="/en/contact">Contact</Link>
          </div>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <h2 style={{fontSize:20,margin:0,marginBottom:12}}>Our Services</h2>
          <div className="nav-grid" style={{marginTop:8}}>
            <Link className="card media" href="/en/services/wooden-vessel">
              <div className="media-img" />
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="production" />
                  <strong>Wooden Vessel Production</strong>
                </div>
                <p style={{marginTop:6}}>Consultation, design, budget presentation, negotiation, and notarized SPK in 3 terms.</p>
              </div>
            </Link>
            <Link className="card media" href="/en/services/ship-documents">
              <div className="media-img" />
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="documents" />
                  <strong>Ship Documents</strong>
                </div>
                <p style={{marginTop:6}}>Handle technical legality, ownership documents, and sailing permit (SPB).</p>
              </div>
            </Link>
            <Link className="card media" href="/en/services/vessel-maintenance">
              <div className="media-img" />
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="maintenance" />
                  <strong>Vessel Maintenance</strong>
                </div>
                <p style={{marginTop:6}}>Inspections, cleaning, hull/engine repairs, painting, and spare part replacements.</p>
              </div>
            </Link>
            <Link className="card media" href="/en/services/second-hand-vessel">
              <div className="media-img" />
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="secondhand" />
                  <strong>Second-Hand Vessel</strong>
                </div>
                <p style={{marginTop:6}}>Connect sellers and buyers, negotiate terms, and prepare contract sale forms.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


