import React, { useState, useEffect } from 'react';

export default function Navbar({ ownerName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // State untuk mendeteksi link aktif

  useEffect(() => {
    const handleScroll = () => {
      // 1. Logika munculnya background navbar & nama owner
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Logika Deteksi Section Aktif Berdasarkan Posisi Scroll
      const sections = ['home', 'videos', 'photos', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Menghitung batas sepertiga layar atas

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break; // Hentikan perulangan jika sudah menemukan section yang aktif
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Jalankan sekali di awal untuk menetapkan status saat halaman di-refresh
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav id="navbar" className={isScrolled || isMenuOpen ? 'scrolled' : ''}>
        <a 
          href="#home" 
          className="nav-brand" 
          style={{ opacity: isScrolled || isMenuOpen ? 1 : 0, transition: 'opacity 0.3s var(--ease-cinema)' }}
        >
          {ownerName ? ownerName.toUpperCase() : "ALEX RAVEN"}<span>.</span>
        </a>

        {/* Desktop Links — Kelas 'active' dipasang dinamis berdasarkan posisi scroll */}
        <ul className="nav-links">
          <li>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          </li>
          <li>
            <a href="#videos" className={activeSection === 'videos' ? 'active' : ''}>Videos</a>
          </li>
          <li>
            <a href="#photos" className={activeSection === 'photos' ? 'active' : ''}>Photos</a>
          </li>
          <li>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </li>
        </ul>

        {/* Hamburger Button */}
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
        <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={toggleMenu}>Home</a>
        <a href="#videos" className={activeSection === 'videos' ? 'active' : ''} onClick={toggleMenu}>Videos</a>
        <a href="#photos" className={activeSection === 'photos' ? 'active' : ''} onClick={toggleMenu}>Photos</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={toggleMenu}>Contact</a>
      </div>
    </>
  );
}