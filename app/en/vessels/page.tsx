import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/vessels';
  const title = 'Vessel Products | Batang Shipyard Indonesia - Premium Vessel Types';
  const description: 'Professional vessel construction services offering 5 premium vessel types: collecting vessels, squid fishing vessels, longliner vessels, purse seine vessels, and skipjack vessels. Custom designs for your maritime needs.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/produk-kapal' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

const vessels = [
  {
    id: 'collecting',
    image: '/images/collecting/galangan-kapal-collecting-jawatengah.jpeg',
    title: 'Collecting Vessel',
    desc: 'Designed to collect catch results from smaller fishing units at sea, efficient and safe transportation to port.'
  },
  {
    id: 'squid',
    image: '/images/cumi/galangan-kapal-cumi-jawatengah.jpeg',
    title: 'Squid Fishing Vessel',
    desc: 'Specifically for squid fishing with optimal deck layout for light fishing equipment and quick handling.'
  },
  {
    id: 'longliner',
    image: '/images/longliner/galangan-kapal-longliner-jawatengah.jpeg',
    title: 'Long Liner Vessel',
    desc: 'Long line system vessel for high-value fish targets, with strong bow structure and ergonomic work deck.'
  },
  {
    id: 'purse-seine',
    image: '/images/purseseine/galangan-kapal-purse-seine-jawatengah.jpeg',
    title: 'Purse Seine Vessel',
    desc: 'Circular net operations with high stability and large hold capacity for maintaining catch quality.'
  },
  {
    id: 'skipjack',
    image: '/images/cakalang/galangan-kapal-cakalang-jawatengah.jpeg',
    title: 'Skipjack Vessel',
    desc: 'Optimal for skipjack/tuna targets with fuel efficiency and quick deck handling.'
  }
];

export default function Page() {
  return (
    <>
      <section
        className="hero light-text"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.85) 36%, rgba(255,255,255,.65) 60%, rgba(255,255,255,.45) 82%, rgba(255,255,255,.30) 100%), url('/images/bg/bglayanan.webp') center / cover no-repeat"
        }}
      >
        <div className="container hero-inner" style={{padding:'98px 0 77px'}}>
          <div className="hero-copy">
            <p style={{fontWeight:800,margin:'0 0 8px'}}>Vessel Products</p>
            <h1 className="hero-title">Vessel Product Types</h1>
            <p className="hero-sub">We provide design and construction services for vessels according to your operational needs. Here are five premium vessel product types we offer.</p>
            <div className="hero-cta">
              <Link href="/en/contact" className="btn">Free Consultation</Link>
              <Link href="/en/services" className="btn outline">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{padding:'28px 0'}}>
        <div className="card" style={{borderColor:'rgba(0,0,0,.08)'}}>
          <div className="section-head">
            <h2 className="section-title">Product List</h2>
            <span className="muted">5 vessel types</span>
          </div>

          <div className="service-list" style={{marginTop:8}}>
            {vessels.map(vessel => (
              <a key={vessel.id} href={`/en/vessels/${vessel.id}`} className="card media" style={{gridTemplateColumns:'160px 1fr'}}>
                <div className="media-img" style={{position:'relative',width:160,height:120}}>
                  <Image
                    src={vessel.image}
                    alt={vessel.title}
                    fill
                    sizes="160px"
                    style={{objectFit:'cover'}}
                  />
                </div>
                <div>
                  <h3 style={{margin:'0 0 4px'}}>{vessel.title}</h3>
                  <p style={{margin:0}}>{vessel.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="cta-band">
          <h3>Need a custom design according to target fish, tonnage, and budget?</h3>
          <div className="cta-actions">
            <Link href="/en/contact" className="btn">Discuss Project</Link>
            <Link href="/en/projects" className="btn outline">View Projects</Link>
          </div>
        </div>

        <section className="container" style={{padding:'0 0 28px'}}>
          <div className="card" style={{borderColor:'rgba(0,0,0,.08)'}}>
            <div className="section-head">
              <h2 className="section-title">Vessel Product Details</h2>
              <span className="muted">Specifications and advantages</span>
            </div>

            <div className="list">
              <div id="collecting" className="card" style={{scrollMarginTop:96}}>
                <h3 style={{marginTop:0}}>Collecting Vessel</h3>
                <p>Collecting vessels function to receive catch results from fishing units in open sea and then transport them to port or nearest cold storage. Design focuses on spacious work deck, safe side access, and insulated holds.</p>
                <ul style={{margin:'6px 0 0 18px'}}>
                  <li>Insulated/cooled holds with capacity adjusted to target tonnage.</li>
                  <li>Moderate freeboard for easy cargo transfer between vessels (ship-to-ship).</li>
                  <li>Fuel-efficient main engine, stable cruising speed, long range capability.</li>
                </ul>
                <p style={{margin:'8px 0 4px'}}><strong>Common engine options</strong> (widely used by Indonesian fishermen):</p>
                <ul style={{margin:'0 0 0 18px'}}>
                  <li>Yanmar 6HAL/6CH series (marine)</li>
                  <li>Mitsubishi S6/S4 series (marine)</li>
                  <li>Cummins 6BT 5.9 / 6CT 8.3 (marine)</li>
                  <li>Hino H07C / H06 series (marine-converted)</li>
                </ul>
              </div>

              <div id="squid" className="card" style={{scrollMarginTop:96}}>
                <h3 style={{marginTop:0}}>Squid Fishing Vessel</h3>
                <p>Developed for squid fishing operations with light attractors. Deck layout supports genset/light placement, work area, and bait storage.</p>
                <ul style={{margin:'6px 0 0 18px'}}>
                  <li>Symmetrical light placement, strong mast/arms, and safe cable routing.</li>
                  <li>Good deck drainage to maintain safety during night operations.</li>
                  <li>Ice/RSW holds to maintain squid quality until landing.</li>
                </ul>
                <p style={{margin:'8px 0 4px'}}><strong>Common engine options</strong>:</p>
                <ul style={{margin:'0 0 0 18px'}}>
                  <li>Yanmar 4CH/6CH (efficient and responsive for stop-go operations)</li>
                  <li>Isuzu 6BD1 / 6HE1 (marine-converted, easy spare parts)</li>
                  <li>Hino W04/W06 series (economical for 10-20 GT vessels)</li>
                </ul>
              </div>

              <div id="longliner" className="card" style={{scrollMarginTop:96}}>
                <h3 style={{marginTop:0}}>Long Liner Vessel</h3>
                <p>Designed for long line systems targeting high-value fish. Stability, longline ergonomics, and crew safety are priorities.</p>
                <ul style={{margin:'6px 0 0 18px'}}>
                  <li>Organized longline setting/hauling areas, ergonomic rollers and baiting tables.</li>
                  <li>Adequate autopilot and navigation for long track distances.</li>
                  <li>Multi-tier freezing holds to maintain sashimi-grade quality.</li>
                </ul>
                <p style={{margin:'8px 0 4px'}}><strong>Common engine options</strong>:</p>
                <ul style={{margin:'0 0 0 18px'}}>
                  <li>Cummins 6CTA / QSB (medium power, strong torque)</li>
                  <li>Mitsubishi S6R/S6A (high endurance)</li>
                  <li>Yanmar 6CX/6LY (low vibration, good efficiency)</li>
                </ul>
              </div>

              <div id="purse-seine" className="card" style={{scrollMarginTop:96}}>
                <h3 style={{marginTop:0}}>Purse Seine Vessel</h3>
                <p>Optimal for circular net operations. Strong deck structure to handle net loads, with winch/rollers strategically placed.</p>
                <ul style={{margin:'6px 0 0 18px'}}>
                  <li>Good transverse stability during net setting/hauling.</li>
                  <li>Large holds and easy access for fast loading.</li>
                  <li>Weight and trim optimization for efficient fuel consumption.</li>
                </ul>
                <p style={{margin:'8px 0 4px'}}><strong>Common engine options</strong>:</p>
                <ul style={{margin:'0 0 0 18px'}}>
                  <li>Mitsubishi S6R/S6A (high power for maneuvering and hauling)</li>
                  <li>Cummins KTA19/QSK (heavy class, for large GT vessels)</li>
                  <li>Yanmar 6AY/6CX (efficient and reliable)</li>
                </ul>
              </div>

              <div id="skipjack" className="card" style={{scrollMarginTop:96}}>
                <h3 style={{marginTop:0}}>Skipjack Vessel</h3>
                <p>Designed for skipjack/tuna targets. Design prioritizes speed, fuel efficiency, and easy deck handling.</p>
                <ul style={{margin:'6px 0 0 18px'}}>
                  <li>Sleek bow for higher cruising speed.</li>
                  <li>Hold/ice box placement near work area for faster handling.</li>
                  <li>Optional: RSW/flake ice for maximum freshness.</li>
                </ul>
                <p style={{margin:'8px 0 4px'}}><strong>Common engine options</strong>:</p>
                <ul style={{margin:'0 0 0 18px'}}>
                  <li>Isuzu 6BD1/6HE1 (light and efficient, easy maintenance)</li>
                  <li>Hino H07C (good torque, available spare parts)</li>
                  <li>Yanmar 6LY/6CX (smooth performance for cruising speed)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
