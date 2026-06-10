import React, { useState, useEffect, useRef } from 'react';
import { MEDIA_DB } from '../data/mediaDb';

export default function VideoCarousel() {
  const videos = MEDIA_DB.videos;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);
  const startX = useRef(null);

  // Inisialisasi panjang array ref video
  if (videoRefs.current.length !== videos.length) {
    videoRefs.current = Array(videos.length).fill(null).map((_, i) => videoRefs.current[i] || React.createRef());
  }

  const stopAllVideos = () => {
    videoRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });
    setPlayingIndex(null);
  };

  const goTo = (index) => {
    stopAllVideos();
    const n = videos.length;
    const targetIndex = ((index % n) + n) % n;
    setCurrentIndex(targetIndex);
  };

  // Efek Autoplay untuk Video Utama (Index 0)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 0 && playingIndex === null) {
        const firstVid = videoRefs.current[0]?.current;
        if (firstVid) {
          firstVid.muted = true;
          firstVid.play()
            .then(() => setPlayingIndex(0))
            .catch(() => {});
        }
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Handler Keyboard Navigasi
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
      if (e.key === 'ArrowRight') goTo(currentIndex + 1);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handleCardClick = (idx) => {
    if (idx !== currentIndex) {
      goTo(idx);
      return;
    }

    const currentVid = videoRefs.current[idx]?.current;
    if (!currentVid) return;

    if (playingIndex === idx) {
      currentVid.pause();
      setPlayingIndex(null);
    } else {
      stopAllVideos();
      currentVid.muted = false;
      currentVid.play()
        .then(() => setPlayingIndex(idx))
        .catch((err) => console.log("Gagal memutar video ber-suara: ", err));
    }
  };

  // Handler Geser (Touch & Mouse Drag)
  const handleDragStart = (xPos) => { startX.current = xPos; };
  const handleDragEnd = (xPos, limit) => {
    if (startX.current === null) return;
    const dx = xPos - startX.current;
    if (Math.abs(dx) > limit) {
      goTo(currentIndex + (dx < 0 ? 1 : -1));
    }
    startX.current = null;
  };

  return (
    <section id="videos" aria-label="Featured Videos">
      
      {/* ─── KELAS BARU: HEADER DAN TOMBOL NAVIGASI SESUAI STYLES.CSS ─── */}
      <div className="videos-header reveal">
        <div>
          <div className="section-label">Selected Works</div>
          <h2 className="section-title">CINEMATIC<br />REELS</h2>
        </div>
        <div className="videos-nav">
          <button className="carousel-btn" onClick={() => goTo(currentIndex - 1)}>←</button>
          <button className="carousel-btn" onClick={() => goTo(currentIndex + 1)}>→</button>
        </div>
      </div>

      {/* ─── PEMBUNGKUS UTAMA 3D CAROUSEL (Disesuaikan dengan CSS) ─── */}
      <div className="video-carousel-scene">
        <div 
          className="video-carousel-track" 
          id="videoTrack"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseUp={(e) => handleDragEnd(e.clientX, 60)}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX, 50)}
        >
          {videos.map((v, i) => {
            const n = videos.length;
            const rel = ((i - currentIndex) % n + n) % n;
            
            // Map posisi keadaan 3D carousel
            let posClass = 'hidden';
            if (rel === 0) posClass = 'active';
            else if (rel === 1) posClass = 'next1';
            else if (rel === 2) posClass = 'next2';
            else if (rel === n - 1) posClass = 'prev1';
            else if (rel === n - 2) posClass = 'prev2';

            return (
              <div 
                key={i} 
                className={`video-card ${posClass} ${playingIndex === i ? 'playing' : ''}`}
                onClick={() => handleCardClick(i)}
              >
                <div className="card-inner">
                  <img className="card-poster" src={v.poster} alt={v.title} loading="lazy" />
                  <video 
                    ref={videoRefs.current[i]}
                    preload="none" 
                    loop 
                    playsInline 
                    src={v.src} 
                    poster={v.poster}
                  />
                  <div className="card-overlay">
                    <div className="card-category">{v.category}</div>
                    <div className="card-title">{v.title}</div>
                    <div className="card-meta">{v.year} &nbsp;·&nbsp; {v.duration}</div>
                  </div>
                  <button className="card-play-btn" aria-label={`Play ${v.title}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5,3 19,12 5,21"/>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indikator Dots bawaan CSS */}
      <div className="video-dots" id="videoDots">
        {videos.map((_, i) => (
          <div 
            key={i} 
            className={`video-dot ${i === currentIndex ? 'active' : ''}`} 
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}