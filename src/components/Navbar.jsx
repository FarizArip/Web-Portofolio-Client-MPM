import React, { useState, useEffect } from 'react';

export default function Navbar({ ownerName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Kelas .scrolled otomatis aktif berdasarkan state isScrolled */}
      <nav id="navbar" className={isScrolled || isMenuOpen ? 'scrolled' : ''}>
        
        {/* Fitur Tersembunyi: Nama owner hanya muncul jika sudah di-scroll (atau saat menu mobile buka) */}
        <a href="#home" className="nav-brand" style={{ opacity: isScrolled || isMenuOpen ? 1 : 0, transition: 'opacity 0.3s var(--ease-cinema)' }}>
          {ownerName ? ownerName.toUpperCase() : "ALEX RAVEN"}<span>.</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#photos">Photos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button 
          className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#videos" onClick={toggleMenu}>Videos</a>
        <a href="#photos" onClick={toggleMenu}>Photos</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>
    </>
  );
}