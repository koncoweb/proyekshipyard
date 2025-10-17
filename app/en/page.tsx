import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en';
  const title = 'Batang Shipyard Indonesia | Professional Ship Construction & Maritime Services';
  const description = 'Leading Indonesian shipyard specializing in wooden vessel construction, ship documentation, vessel maintenance, and second-hand vessel trading. Professional maritime services with international standards.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

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

export default function EnHomePage() {
  return (
    <>
      <section className="hero light-text">
        <div className="container hero-inner">
          <div className="hero-copy">
          <p style={{color:'#ffffff',fontWeight:800,margin:'0 0 8px'}}>Batang Shipyard</p>
          <h1 className="hero-title">Production, Documentation, and Vessel Maintenance.</h1>
          <p className="hero-sub">Complete solutions for ship construction, ship documentation, vessel maintenance, and second-hand vessel trading.</p>
          <div className="hero-cta">
            <Link href="/en/services" className="btn">View Services</Link>
            <Link href="/en/contact" className="btn outline">Contact Us</Link>
          </div>
          </div>
        </div>
      </section>

      <section className="container" style={{padding:'28px 0'}}>
        <div className="card" style={{borderColor:'rgba(0,0,0,.08)'}}>
          <div className="section-head">
            <h2 className="section-title">Vessel Products</h2>
            <span className="muted">Premium vessel types</span>
          </div>
          <div className="service-list two-col" style={{marginTop:8}}>
            <Link href="/en/vessels/collecting" className="card media horizontal">
              <div className="media-img">
                <Image src={'/images/collecting/galangan-kapal-collecting-jawatengah.jpeg'} alt="Collecting Vessel" fill sizes="160px" style={{objectFit:'cover'}} />
              </div>
              <div>
                <strong>Collecting Vessel</strong>
                <p>Vessel designed to collect catch results from fishing units at sea.</p>
              </div>
            </Link>

            <Link href="/en/vessels/squid" className="card media horizontal">
              <div className="media-img">
                <Image src={'/images/cumi/galangan-kapal-cumi-jawatengah.jpeg'} alt="Squid Fishing Vessel" fill sizes="160px" style={{objectFit:'cover'}} />
              </div>
              <div>
                <strong>Squid Fishing Vessel</strong>
                <p>Optimal for operations with light attractors and quick handling.</p>
              </div>
            </Link>

            <Link href="/en/vessels/longliner" className="card media horizontal">
              <div className="media-img">
                <Image src={'/images/longliner/galangan-kapal-longliner-jawatengah.jpeg'} alt="Long Liner Vessel" fill sizes="160px" style={{objectFit:'cover'}} />
              </div>
              <div>
                <strong>Long Liner Vessel</strong>
                <p>Long line system with stability and ergonomic work areas.</p>
              </div>
            </Link>

            <Link href="/en/vessels/purse-seine" className="card media horizontal">
              <div className="media-img">
                <Image src={'/images/purseseine/galangan-kapal-purse-seine-jawatengah.jpeg'} alt="Purse Seine Vessel" fill sizes="160px" style={{objectFit:'cover'}} />
              </div>
              <div>
                <strong>Purse Seine Vessel</strong>
                <p>Circular net operations with large hold capacity.</p>
              </div>
            </Link>

            <Link href="/en/vessels/skipjack" className="card media horizontal">
              <div className="media-img">
                <Image src={'/images/cakalang/galangan-kapal-cakalang-jawatengah.jpeg'} alt="Skipjack Vessel" fill sizes="160px" style={{objectFit:'cover'}} />
              </div>
              <div>
                <strong>Skipjack Vessel</strong>
                <p>Fast and efficient for skipjack/tuna targets.</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{borderColor:'rgba(0,0,0,.08)'}}>
          <div className="section-head">
            <h2 className="section-title">Quick Navigation</h2>
            <span className="muted">Main site access</span>
          </div>
          <div className="tiles" style={{marginTop:8}}>
            <Link className="tile gold" href="/en/shipyard-indonesia">Shipyard Indonesia</Link>
            <Link className="tile gold" href="/en/services">Services</Link>
            <Link className="tile gold" href="/en/ordering-process" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              Ordering Process
              <span style={{width:24,height:24,overflow:'hidden',display:'inline-flex',position:'relative'}}>
                <Image 
                  src="/images/icon/cargo-ship_1059530.png" 
                  alt="Ship icon" 
                  fill
                  style={{objectFit:'cover',opacity:0.7,marginRight:0}}
                />
              </span>
            </Link>
            <Link className="tile gold" href="/en/projects">Projects</Link>
            <Link className="tile gold" href="/en/about">About Us</Link>
            <Link className="tile gold" href="/en/contact">Contact</Link>
          </div>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <div className="section-head">
            <h2 className="section-title">Our Services</h2>
            <span className="muted">Production, documentation, maintenance, trading</span>
          </div>
          <div className="service-list" style={{marginTop:8}}>
            <Link className="card media" href="/en/services/wooden-vessel">
              <div className="media-img" style={{position:'relative',overflow:'hidden'}}>
                <Image 
                  src="/images/bg/batangshipyard-com-galangan-pembuatan-kapal-batang-jateng-sml-crp.png" 
                  alt="Wooden Vessel Production" 
                  fill 
                  style={{objectFit:'cover'}}
                />
              </div>
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="production" />
                  <strong>Wooden Vessel Production</strong>
                </div>
                <p style={{marginTop:6}}>Consultation, design, budget presentation, negotiation, to notarized SPK with 3-term payment.</p>
              </div>
            </Link>
            <Link className="card media" href="/en/services/ship-documents">
              <div className="media-img" style={{position:'relative',overflow:'hidden'}}>
                <Image 
                  src="/images/bg/batangshipyard-com-galangan-kapal-batang-jateng2-sml.png" 
                  alt="Ship Documents" 
                  fill 
                  style={{objectFit:'cover'}}
                />
              </div>
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="documents" />
                  <strong>Ship Documents</strong>
                </div>
                <p style={{marginTop:6}}>Manage vessel legality & technical feasibility, ownership rights, and sailing permits.</p>
              </div>
            </Link>
            <Link className="card media" href="/en/services/vessel-maintenance">
              <div className="media-img" style={{position:'relative',overflow:'hidden'}}>
                <Image 
                  src="/images/bg/batangshipyard-com-galangan-perawatan-kapal-batang-jateng-crp-sml.png" 
                  alt="Vessel Maintenance" 
                  fill 
                  style={{objectFit:'cover'}}
                />
              </div>
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="maintenance" />
                  <strong>Vessel Maintenance</strong>
                </div>
                <p style={{marginTop:6}}>Inspection, cleaning, hull/engine repairs, painting, and spare parts replacement.</p>
              </div>
            </Link>
            <Link className="card media" href="/en/services/second-hand-vessel">
              <div className="media-img" style={{position:'relative',overflow:'hidden'}}>
                <Image 
                  src="/images/bg/batangshipyard-com-galangan-jual-beli-kapal-second-kapal-batang-jateng-sml-crp.png" 
                  alt="Second-hand Vessel Trading" 
                  fill 
                  style={{objectFit:'cover'}}
                />
              </div>
              <div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <ServiceIcon type="secondhand" />
                  <strong>Second-hand Vessel Trading</strong>
                </div>
                <p style={{marginTop:6}}>Facilitating buyer-seller meetings, negotiation, and sale agreement preparation.</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <div className="section-head">
            <h2 className="section-title">Expert Team & Certifications</h2>
            <span className="muted">Competence and trust</span>
          </div>

          <div className="service-list" style={{marginTop:8}}>
            {/* Expert Team */}
            <div className="card media">
              <div className="media-img" style={{position:'relative',width:'100%'}}>
                <Image 
                  src="/images/tenaga-ahli-batang-shipyard-M-Hilmi-syahfata.jpeg" 
                  alt="Batang Shipyard Expert - M. Hilmy Syahfata S.Tr.T." 
                  fill 
                  sizes="(max-width: 820px) 100vw, 540px" 
                  style={{objectFit:'cover',objectPosition:'center 20%'}}
                />
              </div>
              <div>
                <h3 style={{margin:'0 0 6px'}}>M. Hilmy Syahfata S.Tr.T.</h3>
                <p style={{margin:0}}>Maritime expert with experience in wooden construction design, machinery, and production supervision.</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="card media">
              <div className="media-img" style={{position:'relative',width:'100%'}}>
                <Image 
                  src="/images/Hempel Paint School.jpg" 
                  alt="Hempel Paint School Certification" 
                  fill 
                  sizes="(max-width: 820px) 100vw, 540px" 
                  style={{objectFit:'cover'}}
                />
              </div>
              <div>
                <h3 style={{margin:'0 0 6px'}}>Coating & Painting Certification</h3>
                <p style={{margin:'0 0 10px'}}>Ship coating techniques and corrosion protection training from Hempel and Jotun.</p>
                <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                  <a className="btn outline" href="/images/Hempel Paint School.pdf" target="_blank" rel="noopener">Hempel (PDF)</a>
                  <a className="btn outline" href="/images/Sertifikat Jotun Paint School.pdf" target="_blank" rel="noopener">Jotun (PDF)</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-band">
          <h3>We design and build reliable, efficient vessels ready to meet your operational needs.</h3>
          <div className="cta-actions">
            <Link href="/en/contact" className="btn" aria-label="Contact us">Contact Us</Link>
            <Link href="/en/blog" className="btn outline" aria-label="Read blog">Read Blog</Link>
          </div>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <div className="section-head">
            <h2 className="section-title">Latest Articles</h2>
            <span className="muted">Education & case studies</span>
          </div>
          <p style={{marginTop:8}}>View education and case studies in <Link href="/en/blog">Blog</Link>.</p>
        </div>
      </section>
    </>
  );
}