"use client";

import { useState } from "react";

export default function Action() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="hero" style={{ padding: '60px 0' }}>
        <div className="container">
          <h1>Take Action</h1>
          <p>Join the movement to revitalize Cadiz Alley.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2>Sign the Petition</h2>
            <p style={{ marginBottom: '32px', color: 'var(--text-light)' }}>
              Add your voice to support the rehabilitation of Cadiz Alley. 
              Together, we can preserve Venice's historic character for future generations.
            </p>

            {submitted ? (
              <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
                <h3 style={{ color: 'var(--secondary)', marginBottom: '16px' }}>
                  Thank You!
                </h3>
                <p>
                  Your signature has been recorded. We'll stay in touch about 
                  upcoming community events and progress updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="you@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">ZIP Code</label>
                  <input 
                    type="text" 
                    id="zip" 
                    name="zip" 
                    placeholder="90291"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="notes">Comments (Optional)</label>
                  <textarea 
                    id="notes" 
                    name="notes" 
                    rows={4}
                    placeholder="Why do you support this cause?"
                  />
                </div>
                <button type="submit" className="btn" style={{ width: '100%' }}>
                  Sign the Petition
                </button>
                <p style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-light)', textAlign: 'center' }}>
                  We respect your privacy. Your information will only be used to communicate 
                  about Cadiz Alley Alliance activities.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f5f3ef' }}>
        <div className="container">
          <h2>Other Ways to Help</h2>
          <div className="about-grid">
            <div className="card">
              <h3>Volunteer</h3>
              <p>
                Join our community cleanup days. Watch your email for upcoming dates 
                and meet your neighbors while making a difference.
              </p>
            </div>
            <div className="card">
              <h3>Spread the Word</h3>
              <p>
                Share this site with friends, family, and neighbors. The more people 
                who know about Cadiz Alley, the stronger our voice.
              </p>
            </div>
            <div className="card">
              <h3>Contact Local Leaders</h3>
              <p>
                Reach out to your LA City Council representative to show support 
                for historic preservation funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Stay Connected</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto 24px', color: 'var(--text-light)' }}>
            Follow us on social media to see progress updates and community events.
          </p>
          <p style={{ color: 'var(--text-light)' }}>
            Email: hello@cadizalley.com
          </p>
        </div>
      </section>
    </>
  );
}
