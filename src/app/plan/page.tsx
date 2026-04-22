import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Plan | Cadiz Alley Alliance",
  description: "The revitalization plan for Cadiz Alley - transforming Venice's historic alley with native landscaping and community art.",
};

export default function Plan() {
  return (
    <>
      <section className="hero" style={{ padding: '60px 0' }}>
        <div className="container">
          <h1>Master Plan</h1>
          <p>A vision for transforming Cadiz Alley into a vibrant community space.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Vision</h2>
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '40px' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
              Cadiz Alley Alliance is dedicated to revitalizing one of Venice's most historic 
              alleys into a beautiful, sustainable community space that honors our neighborhood's 
              rich heritage while embracing a bright, beachy future.
            </p>
            <p style={{ fontSize: '1.15rem', marginTop: '20px', lineHeight: '1.8' }}>
              Through careful landscaping with native California plants, professional lighting design, 
              and community art, we're creating a space where neighbors gather and history lives on.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Before & After</h2>
          <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-light)' }}>
            From a neglected alley to a vibrant community space
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                background: '#ddd', 
                height: '200px', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '16px',
                color: 'var(--text-light)'
              }}>
                Before Photo
              </div>
              <h3>Current State</h3>
              <p>Aging fences, exposed utilities, cracked surfaces</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, var(--ocean) 0%, var(--coral) 100%)', 
                height: '200px', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '16px',
                color: 'white',
                fontWeight: '600'
              }}>
                After Rendering
              </div>
              <h3>Our Vision</h3>
              <p>Lush native plants, ambient lighting, community art</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Implementation Roadmap</h2>
          <div className="about-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="card">
              <h3>Phase 1: Design</h3>
              <p>
                <strong>Timeline:</strong> Weeks 1-4<br/>
                <strong>Budget:</strong> $2,000-5,000
              </p>
              <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--text-light)' }}>
                <li>Hire licensed landscape architect</li>
                <li>Site survey & soil analysis</li>
                <li>Design drawings & planting plan</li>
                <li>Permit research with LADBS</li>
              </ul>
            </div>
            <div className="card">
              <h3>Phase 2: Hardscape</h3>
              <p>
                <strong>Timeline:</strong> Weeks 5-8<br/>
                <strong>Budget:</strong> $5,000-15,000
              </p>
              <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--text-light)' }}>
                <li>Demo chain link, repair stucco</li>
                <li>Decomposed granite or pavers</li>
                <li>French drains if needed</li>
                <li>Underground utilities</li>
              </ul>
            </div>
            <div className="card">
              <h3>Phase 3: Softscape</h3>
              <p>
                <strong>Timeline:</strong> Weeks 9-12<br/>
                <strong>Budget:</strong> $3,000-8,000
              </p>
              <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--text-light)' }}>
                <li>Drip irrigation system</li>
                <li>Built-in masonry planters</li>
                <li>Native California plants</li>
                <li>Succulents & ground cover</li>
              </ul>
            </div>
            <div className="card">
              <h3>Phase 4: Art & Finish</h3>
              <p>
                <strong>Timeline:</strong> Week 13+<br/>
                <strong>Budget:</strong> $2,000-10,000
              </p>
              <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--text-light)' }}>
                <li>Commission Venice mural</li>
                <li>Low-voltage lighting</li>
                <li>Custom bench seating</li>
                <li>Heritage signage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h3>Estimated Total Budget</h3>
          <p style={{ fontSize: '2rem', fontWeight: '700', marginTop: '16px' }}>
            $15,000 - $40,000
          </p>
          <p style={{ marginTop: '16px', opacity: 0.9 }}>
            Professional installation, licensed contractors, premium materials
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="about-grid">
            <div className="card">
              <h3>🌿 Native Landscaping</h3>
              <p>
                California-native plants including California poppies, lavender, 
                coyote brush, and desert marigold. Drought-tolerant and eco-friendly.
              </p>
            </div>
            <div className="card">
              <h3>💡 Ambient Lighting</h3>
              <p>
                Professional low-voltage landscape lighting with vintage-style 
                string lights. Security + ambiance.
              </p>
            </div>
            <div className="card">
              <h3>🎨 Community Art</h3>
              <p>
                Commission local Venice artists for murals celebrating our 
                neighborhood's surf culture and history.
              </p>
            </div>
            <div className="card">
              <h3>🪑 Seating Areas</h3>
              <p>
                Custom-built benches for neighbors to gather, relax, 
                and enjoy the revitalized space.
              </p>
            </div>
            <div className="card">
              <h3>🏡 Historic Charm</h3>
              <p>
                Preserving the connection to the Venice of America House 
                (built 1906) while adding modern improvements.
              </p>
            </div>
            <div className="card">
              <h3>♻️ Sustainable Design</h3>
              <p>
                Permeable pavers, drip irrigation, native plants. 
                Good for the planet, good for Venice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Get Involved</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 32px', color: 'var(--text-light)' }}>
            Interested in professional partnership, volunteering, or donating to the project? 
            We'd love to hear from you.
          </p>
          <a href="/action" className="btn">
            Contact Us
          </a>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ocean)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
            Status: <strong>Planning Phase</strong> | Last Updated: April 2026
          </p>
        </div>
      </section>
    </>
  );
}
