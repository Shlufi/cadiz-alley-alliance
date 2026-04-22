import Link from "next/link";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Slideshow />
        <div className="container">
          <h1>Revitalize Cadiz Alley</h1>
          <p>
            Join the crew in restoring one of Venice's most iconic alleys. 
            Where surf culture meets historic charm.
          </p>
          <Link href="/action" className="btn">
            Join the Movement
          </Link>
        </div>
      </section>

      <div className="wave-divider" />

      <section className="section">
        <div className="container">
          <h2>Why It Matters</h2>
          <div className="about-grid">
            <div className="card">
              <h3>🏛 Historic Vibes</h3>
              <p>
                Cadiz Alley runs alongside the Venice of America House — a legendary Late Victorian 
                landmark built in 1906, now on the National Register of Historic Places.
              </p>
            </div>
            <div className="card">
              <h3>🌊 Local Love</h3>
              <p>
                We're all about that Venice beach life. Revitalizing this alley means 
                keeping our neighborhood tight-knit and full of aloha spirit.
              </p>
            </div>
            <div className="card">
              <h3>🌴 Good for Business</h3>
              <p>
                Supporting spots like Roosterfish & Aviator Nation = good times all around. 
                Let's keep Venice groovy and thriving!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h3>Find the Spot</h3>
          <p>Near 1223 Cabrillo Ave, Venice, CA</p>
          <br />
          <a 
            href="https://maps.app.goo.gl/2W8gVzFUFXzUeC868" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            Open in Maps
          </a>
        </div>
      </section>

      <div className="wave-divider" style={{ transform: 'rotate(180deg)' }} />

      <section className="section">
        <div className="container">
          <h2>Get Stoked</h2>
          <div className="about-grid">
            <div className="card">
              <h3>✍️ Sign On</h3>
              <p>Drop your name and be part of the change. Every voice counts in our beach community.</p>
            </div>
            <div className="card">
              <h3>🤙 Volunteer</h3>
              <p>Grab your crew and join our cleanup days. Good vibes only!</p>
            </div>
            <div className="card">
              <h3>📣 Spread the Word</h3>
              <p>Share the aloha with neighbors and friends who love Venice as much as you do.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/action" className="btn">
              Let's Do This
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
