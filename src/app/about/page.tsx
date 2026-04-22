import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Cadiz Alley Alliance",
  description: "Learn about the history of Cadiz Alley and the Venice of America House.",
};

export default function About() {
  return (
    <>
      <section className="hero" style={{ padding: '60px 0' }}>
        <div className="container">
          <h1>About Cadiz Alley</h1>
          <p>A hidden piece of Venice history waiting to be restored.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>The Venice of America House</h2>
          <div className="about-grid">
            <div className="card">
              <h3>Historic Landmark</h3>
              <p>
                The Venice of America House stands at 1223 Cabrillo Ave as a Late Victorian 
                gem built in 1906. It's one of the earliest structures in Venice and was listed 
                on the National Register of Historic Places in 2001.
              </p>
            </div>
            <div className="card">
              <h3>Architectural Style</h3>
              <p>
                Designed in the Late Victorian style, this historic house represents Venice's 
                early days as "The Venice of America" — an ambitious recreation of the 
                Italian canals founded in 1905.
              </p>
            </div>
            <div className="card">
              <h3>LAHCM #724</h3>
              <p>
                The house is also designated as Los Angeles Historic-Cultural Monument #724, 
                recognized by the City of LA for its cultural significance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h3>Location</h3>
          <p>1223 Cabrillo Ave, Venice, Los Angeles, California</p>
          <p style={{ marginTop: '16px', opacity: 0.8 }}>
            Coordinates: 33°59′26″N 118°28′4″W
          </p>
          <br />
          <a 
            href="https://maps.app.goo.gl/2W8gVzFUFXzUeC868" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            View on Google Maps
          </a>
          <br /><br />
          <a 
            href="https://en.wikipedia.org/wiki/Venice_of_America_House" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'var(--secondary)', textDecoration: 'underline' }}
          >
            Learn more on Wikipedia
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Nearby Venice Businesses</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 20px', color: 'var(--text-light)' }}>
            Cadiz Alley is nestled among Venice's most beloved local businesses. 
            Supporting alley rehabilitation helps our entire community thrive.
          </p>
          <div className="businesses">
            <div className="business-card">
              <h4>Roosterfish</h4>
              <p>Iconic Venice beach bar & grill</p>
              <a 
                href="https://www.yelp.com/biz/roosterfish-venice" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--secondary)', fontSize: '0.85rem' }}
              >
                View on Yelp
              </a>
            </div>
            <div className="business-card">
              <h4>Aviator Nation</h4>
              <p>Local surf apparel & lifestyle</p>
              <a 
                href="https://www.yelp.com/biz/aviator-nation-venice" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--secondary)', fontSize: '0.85rem' }}
              >
                View on Yelp
              </a>
            </div>
            <div className="business-card">
              <h4>Venice Canals</h4>
              <p>Historic canal district</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                Walkable from Cadiz Alley
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f5f3ef' }}>
        <div className="container">
          <h2>Our Vision</h2>
          <div className="about-grid">
            <div className="card">
              <h3>Preservation</h3>
              <p>
                Maintain the historic character while making improvements that benefit the entire community.
              </p>
            </div>
            <div className="card">
              <h3>Community Space</h3>
              <p>
                Create welcoming public areas that neighbors and visitors can enjoy year-round.
              </p>
            </div>
            <div className="card">
              <h3>Sustainable Design</h3>
              <p>
                Implement eco-friendly solutions that honor Venice's beach community values.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
