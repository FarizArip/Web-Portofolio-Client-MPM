import React from 'react';

export default function Footer({ ownerName, socials }) {
  const currentYear = new Date().getFullYear();
  
  // Helper untuk menentukan ikon SVG berdasarkan nama platform sosial media
  const renderSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        );
    }
  };

  return (
    <footer>
      <div className="footer-brand">
        {ownerName ? ownerName.toUpperCase() : "MUHAMMAD ANDHIKA ZAAFARANI"}.
      </div>

      {/* MODIFIKASI: Menampilkan list media sosial secara dinamis */}
      {socials && socials.length > 0 && (
        <div className="social-links">
          {socials.map((soc, index) => (
            <a 
              key={index} 
              href={soc.url} 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={soc.label}
            >
              {renderSocialIcon(soc.label)}
            </a>
          ))}
        </div>
      )}

      <div className="footer-copy">
        © {currentYear} ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}