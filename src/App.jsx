import React, { useState } from 'react';
import { MEDIA_DB } from './data/mediaDb';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import VideoCarousel from './components/VideoCarousel';
import PhotoCarousel from './components/PhotoCarousel'; 
import Contact from './components/Contact';           
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import { Analytics } from '@vercel/analytics/next';

export default function App() {
  const o = MEDIA_DB.owner;

  // ─── STATE UNTUK LIGHTBOX ───
  const [lightboxData, setLightboxData] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (photo) => {
    setLightboxData(photo);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Kunci scroll layar
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = ''; // Aktifkan kembali scroll
    setTimeout(() => setLightboxData(null), 300); 
  };

  // Aktifkan efek scroll reveal animasi .reveal
  useScrollReveal();

  // Helper pemisah nama untuk estetika Hero teks (Kata terakhir Italic)
  const renderHeroName = () => {
    const parts = o.name.split(' ');
    const last = parts.pop();
    return (
      <>
        {parts.join(' ')}<br /><em>{last}</em>
      </>
    );
  };

return (
  <div id="root">
    <div id="grain" aria-hidden="true"></div>
    
    <CustomCursor />
    <Navbar ownerName={o.name} />

    <main>
      {/* HERO SECTION — DISESUAIKAN DENGAN STYLES.CSS */}
      <section id="home">
        <div className="hero-bg"></div>
        
        <div className="hero-reel">
          {/* <video src="/videos/hero-reel.mp4" autoPlay loop muted playsInline></video> */}
          <img src="/images/Bg.PNG" alt="" loading="eager"></img>
        </div>

        {/* Pembungkus ini WAJIB ada agar teks tidak terlalu mengiri */}
        <div className="hero-content">
          <div className="hero-eyebrow">Videographer & Editor</div>
          <h1 className="hero-name">{renderHeroName()}</h1>
          <div className="hero-divider"></div>
          <p className="hero-bio">{o.bio}</p>
          
          <div className="hero-cta">
            <a href="#contact" className="btn-primary"><span>Get In Touch</span></a>
            <a href="#videos" className="btn-ghost">
              <span>View Reels</span>
              <div className="arrow"></div>
            </a>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Video Carousel */}
      <VideoCarousel />

      {/* Photo Carousel */}
      <PhotoCarousel onOpenLightbox={openLightbox} />

      {/* Contact Form */}
      <Contact ownerEmail={o.email} isAvailable={o.availableForWork} />

      {/* Lightbox Component */}
      <div 
        id="lightbox" 
        className={isLightboxOpen ? 'open' : ''} 
        style={{ display: isLightboxOpen ? 'flex' : 'none' }}
        onClick={(e) => { if(e.target.id === 'lightbox') closeLightbox(); }}
      >
        <button className="lightbox-close" onClick={closeLightbox}>
          <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
          Close
        </button>
        <img id="lightboxImg" src={lightboxData?.src || ""} alt={lightboxData?.title || ""} />
        <div className="lightbox-info">
          <div className="card-category">{lightboxData?.category || ""}</div>
          <div className="card-title">{lightboxData?.title || ""}</div>
        </div>
      </div>
    </main>

    {/* Footer */}
    <Footer ownerName={o.name} socials={o.socials} />
    <Analytics />
  </div>
);
}