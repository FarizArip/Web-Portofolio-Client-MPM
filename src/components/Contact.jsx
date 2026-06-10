import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact({ ownerEmail, isAvailable }) {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  return (
    <section id="contact" aria-label="Contact">
      <div className="contact-bg" aria-hidden="true"></div>
      <div className="contact-grid">
        
        {/* Kiri: Info Kontak */}
        <div className="contact-left">
          <div className="section-label reveal">Get in Touch</div>
          <h2 className="section-title reveal reveal-delay-1">LET'S<br />WORK</h2>
          
          {/* ─── FITUR AKTIF KEMBALI: Hanya muncul jika isAvailable = true ─── */}
          {isAvailable && (
            <div className="contact-availability reveal reveal-delay-2">
              <div className="dot"></div>
              Available for Projects
            </div>
          )}

          <p className="contact-intro reveal reveal-delay-2">
            Have a project in mind? Whether it's a short film, a photo series, a brand campaign, or something we haven't named yet — let's talk.
          </p>
          <a className="contact-email-big reveal reveal-delay-3" href={`mailto:${ownerEmail}`}>
            <span className="email-text">{ownerEmail}</span>
            <span className="arrow">→</span>
          </a>
        </div>

        {/* Kanan: Form */}
        <div className="reveal reveal-delay-2">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send a Message</h3>
            <p className="form-sub">I usually respond within 24 hours.</p>
            
            {state.succeeded ? (
              <div className="form-notice success" style={{ color: '#00ffcc', marginTop: '10px' }}>
                ✓ Message sent — I'll be in touch soon.
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fname">Your Name</label>
                    <input className="form-input" type="text" id="fname" name="name" placeholder="Jane Smith" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="femail">Email Address</label>
                    <input className="form-input" type="email" id="femail" name="email" placeholder="jane@example.com" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="fproject">Project Type</label>
                  <input className="form-input" type="text" id="fproject" name="project" placeholder="Short Film / Brand Campaign" />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="fmessage">Your Message</label>
                  <textarea className="form-textarea" id="fmessage" name="message" placeholder="Tell me about your project..." required></textarea>
                </div>
                
                <button type="submit" className="form-submit" disabled={state.submitting}>
                  <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}