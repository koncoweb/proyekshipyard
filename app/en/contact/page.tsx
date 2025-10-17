import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const canonical = 'https://batangshipyard.com/en/contact';
  const title = 'Contact | Batang Shipyard Indonesia - Vessel Consultation & Shipyard';
  const description = 'Contact Batang Shipyard Indonesia for wooden vessel construction consultation, ship documentation, vessel maintenance, and second-hand vessel trading. Our team is ready to help your project.';
  return {
    title,
    description,
    alternates: { canonical, languages: { 'en-US': canonical, 'id-ID': 'https://batangshipyard.com/kontak' } },
    openGraph: { title, description, url: canonical, type: 'website', locale: 'en_US', siteName: 'Batang Shipyard Indonesia' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function ContactPage() {
  return (
    <section className="list">
      <h1>Contact Batang Shipyard Indonesia</h1>
      
      <div className="card">
        <h2>Free Consultation</h2>
        <p>Our team is ready to help realize your vessel project. Please fill out the form below for free consultation or contact us directly.</p>
        <form action="#" method="post">
          <label>
            Full Name
            <input 
              name="name" 
              required 
              placeholder="Enter your full name"
              style={{width:'100%',padding:12,border:'1px solid var(--color-border)',borderRadius:12,marginTop:6}} 
            />
          </label>
          <label style={{marginTop:10}}>
            Email
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="example@email.com"
              style={{width:'100%',padding:12,border:'1px solid var(--color-border)',borderRadius:12,marginTop:6}} 
            />
          </label>
          <label style={{marginTop:10}}>
            Phone Number
            <input 
              type="tel" 
              name="phone" 
              placeholder="+62 812-3456-7890"
              style={{width:'100%',padding:12,border:'1px solid var(--color-border)',borderRadius:12,marginTop:6}} 
            />
          </label>
          <label style={{marginTop:10}}>
            Service Type
            <select 
              name="service" 
              style={{width:'100%',padding:12,border:'1px solid var(--color-border)',borderRadius:12,marginTop:6}}
            >
              <option value="">Select service type</option>
              <option value="vessel-construction">Wooden Vessel Construction</option>
              <option value="ship-documents">Ship Documents & Sailing Permits</option>
              <option value="vessel-maintenance">Vessel Maintenance</option>
              <option value="second-hand-vessel">Second-hand Vessel Trading</option>
              <option value="consultation">General Consultation</option>
            </select>
          </label>
          <label style={{marginTop:10}}>
            Message
            <textarea 
              name="message" 
              rows={4} 
              placeholder="Describe your vessel project needs in detail..."
              style={{width:'100%',padding:12,border:'1px solid var(--color-border)',borderRadius:12,marginTop:6}} 
            />
          </label>
          <button className="btn" type="submit" style={{marginTop:12}}>Send Message</button>
        </form>
      </div>

      <div className="card">
        <h2>Contact Information</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Shipyard Address</h3>
            <p>
              <strong>Batang Shipyard Indonesia</strong><br/>
              jalan gajah mada 165 Batang , Jawa tengah, 51121
            </p>
          </div>
          
          <div>
            <h3>Direct Contact</h3>
            <p>
              <strong>Phone:</strong> <a href="tel:+6282221665371">+6282221665371</a><br/>
              <strong>WhatsApp:</strong> <a href="https://wa.me/6282221665371">+6282221665371</a><br/>
              <strong>Email:</strong> <a href="mailto:info@batangshipyard.com">info@batangshipyard.com</a>
            </p>
          </div>
          
          <div>
            <h3>Operating Hours</h3>
            <p>
              <strong>Monday - Friday:</strong> 08:00 - 17:00 WIB<br/>
              <strong>Saturday:</strong> 08:00 - 15:00 WIB<br/>
              <strong>Sunday:</strong> Closed<br/>
              <em>*Emergency consultation available 24/7 via WhatsApp</em>
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Consultation Services</h2>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>Vessel Construction Consultation</h3>
            <p>Free consultation for vessel specifications, design, and construction cost estimates for wooden vessels according to your needs.</p>
            <p><strong>Contact:</strong> <a href="tel:+6282221665371">+6282221665371</a></p>
          </div>
          
          <div>
            <h3>Ship Documentation Consultation</h3>
            <p>Assistance in processing technical vessel documents, vessel ownership documents, and sailing permits.</p>
            <p><strong>Contact:</strong> <a href="https://wa.me/6282221665371">+6282221665371</a></p>
          </div>
          
          <div>
            <h3>Vessel Maintenance Consultation</h3>
            <p>Free inspection and vessel maintenance consultation to ensure your vessel is in optimal condition.</p>
            <p><strong>Contact:</strong> <a href="mailto:maintenance@batangshipyard.com">maintenance@batangshipyard.com</a></p>
          </div>
          
          <div>
            <h3>Second-hand Vessel Consultation</h3>
            <p>Facilitating second-hand vessel trading with technical inspection and transparent price negotiation.</p>
            <p><strong>Contact:</strong> <a href="https://wa.me/6282221665371">+6282221665371</a></p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Location & Access</h2>
        <p>Our shipyard is located in Batang, Central Java with easy access from various cities in Java. Strategic location near ports and main roads makes it easy to transport materials and vessels.</p>
        <div style={{display: 'grid', gap: '1rem', marginTop: '1rem'}}>
          <div>
            <h3>From Semarang</h3>
            <p>Distance: 45 km | Travel time: 1 hour via Pantura Road</p>
          </div>
          <div>
            <h3>From Pekalongan</h3>
            <p>Distance: 25 km | Travel time: 30 minutes via Pantura Road</p>
          </div>
          <div>
            <h3>From Jakarta</h3>
            <p>Distance: 350 km | Travel time: 5-6 hours via Cipali Toll Road</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Visits & Facility Tours</h2>
        <p>We provide shipyard facility tours for potential clients. Visits can be scheduled by contacting us in advance. Our team will guide you to see the dry dock facilities, workshop, and available equipment.</p>
        <p><strong>Note:</strong> Visits must be scheduled at least 1 day in advance to ensure team and facility availability.</p>
        <a href="https://wa.me/6282221665371?text=Hello,%20I%20want%20to%20schedule%20a%20shipyard%20visit" className="btn" style={{
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
        }}>Schedule Visit via WhatsApp</a>
      </div>
    </section>
  );
}