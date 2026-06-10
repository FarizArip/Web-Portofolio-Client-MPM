import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fungsi pengecek apakah perangkat berukuran mobile/tablet
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Jalankan pengecekan saat pertama kali dimuat dan saat layar di-resize
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Periksa apakah kursor sedang berada di atas elemen interaktif (tombol/link)
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('video-card') ||
        target.classList.contains('photo-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // Daftarkan event penjejak mouse hanya jika bukan perangkat mobile
    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  // JIKA DI MOBILE/TABLET, JANGAN TAMPILKAN CUSTOM CURSOR
  if (isMobile) return null;

  return (
    <div
      id="cursor"
      className={isHovered ? 'expanded' : ''}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: 'fixed',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
}