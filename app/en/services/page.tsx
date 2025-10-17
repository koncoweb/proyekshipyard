import Link from 'next/link';
import { Icon } from '@/components/Icon';
import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/services';
  const title = 'Services | Batang Shipyard Indonesia - Complete Vessel Solutions';
  const description = 'Complete solutions for your vessel needs: wooden vessel construction, ship documentation & sailing permits, vessel maintenance, and second-hand vessel trading. All services designed to accelerate your maritime operations.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/layanan' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return (
    <>
      <section className="hero services-hero">
        <div className="container hero-inner">
          <p style={{color:'#0b2a6f',fontWeight:700,margin:'0 0 8px'}}>Batang Shipyard Indonesia Services</p>
          <h1 className="hero-title">Complete Solutions for Your Vessel Needs</h1>
          <p className="hero-sub">From wooden vessel construction, ship documentation & sailing permits, routine maintenance, to second-hand vessel trading facilitation. All our services are designed to accelerate your maritime operations with high quality standards and transparent processes.</p>
          <div className="hero-cta">
            <Link href="/en/contact" className="btn">Service Consultation</Link>
            <Link href="/en/projects" className="btn outline">View Portfolio</Link>
          </div>
        </div>
      </section>

      <section className="list">
        <div className="card" style={{borderColor:'rgba(0,0,0,.08)'}}>
          <h2 style={{fontSize:20,margin:0,marginBottom:12}}>Our Services</h2>
          <p style={{marginTop:6}}>Choose services according to your needs. Our team is ready to help from initial consultation to project execution with full guidance.</p>
          <div className="nav-grid" style={{marginTop:8}}>
            <Link className="card" href="/en/services/wooden-vessel" style={{display:'grid',gridTemplateColumns:'24px 1fr',gap:10,alignItems:'center'}}>
              <Icon name="ship" />
              Wooden Vessel Construction
            </Link>
            <Link className="card" href="/en/services/ship-documents" style={{display:'grid',gridTemplateColumns:'24px 1fr',gap:10,alignItems:'center'}}>
              <Icon name="document" />
              Ship Documents & Sailing Permits
            </Link>
            <Link className="card" href="/en/services/vessel-maintenance" style={{display:'grid',gridTemplateColumns:'24px 1fr',gap:10,alignItems:'center'}}>
              <Icon name="wrench" />
              Vessel Maintenance
            </Link>
            <Link className="card" href="/en/services/second-hand-vessel" style={{display:'grid',gridTemplateColumns:'24px 1fr',gap:10,alignItems:'center'}}>
              <Icon name="folder" />
              Second-hand Vessels
            </Link>
          </div>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <h2 style={{fontSize:20,margin:0,marginBottom:12}}>Why Choose Batang Shipyard?</h2>
          <ul className="gold-list">
            <li><span className="gold-bullet" aria-hidden></span><div><strong>Technical Experience:</strong> Expert team with successful project track record across various vessel classes. We understand details of tropical wood construction, machinery, to catch cooling systems to maintain fish quality.</div></li>
            <li><span className="gold-bullet" aria-hidden></span><div><strong>Transparent Process:</strong> Clear cost estimates, timelines, and progress at every stage. You will receive regular updates and implementation documentation from design, material cutting, assembly, to sea trial.</div></li>
            <li><span className="gold-bullet" aria-hidden></span><div><strong>Maritime Standards:</strong> Work follows applicable regulations and classification standards, including stability, safety, and electrical system aspects.</div></li>
            <li><span className="gold-bullet" aria-hidden></span><div><strong>End-to-End Support:</strong> Guidance from consultation, technical design, material procurement, work supervision, to sailing documentation processing.</div></li>
          </ul>

          <p style={{marginTop:12}}>With organized processes and experienced resources, we help vessel owners achieve operational targets with measurable costs and accountable work quality.</p>
        </div>

        <div className="card" style={{marginTop:16,borderColor:'rgba(0,0,0,.08)'}}>
          <h2 style={{fontSize:20,margin:0,marginBottom:12}}>Service FAQ</h2>
          <div style={{display:'grid',gap:'10px',marginTop:8}}>
            <div>
              <h3>How long does each service take?</h3>
              <p>Vessel construction: 6–12 months depending on size and complexity. Documentation: 2–8 weeks. Maintenance: 1–8 weeks according to scope. Second-hand vessel transactions: 2–12 weeks.</p>
            </div>
            <div>
              <h3>Is initial consultation free?</h3>
              <p>Initial consultation is free to help map your needs and determine the best course of action.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
