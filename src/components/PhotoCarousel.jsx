// src/components/PhotoCarousel.jsx
import React, { useState, useRef } from 'react';
import { MEDIA_DB } from '../data/mediaDb';

export default function PhotoCarousel({ onOpenLightbox }) {
  const [current, setCurrent] = useState(0);
  const startXRef = useRef(null);
  const photos = MEDIA_DB.photos;
  const total = photos.length;

  const goTo = (index) => {
    setCurrent((index % total + total) % total);
  };

  const posMap = ['p-prev3', 'p-prev2', 'p-prev1', 'active', 'p-next1', 'p-next2', 'p-next3'];

  const handleCardClick = (index, photo) => {
    if (index !== current) {
      goTo(index);
      return;
    }
    onOpenLightbox(photo);
  };

  const handleDragStart = (clientX) => { startXRef.current = clientX; };
  const handleDragEnd = (clientX) => {
    if (startXRef.current === null) return;
    const dx = clientX - startXRef.current;
    if (Math.abs(dx) > 60) goTo(current + (dx < 0 ? 1 : -1));
    startXRef.current = null;
  };

  return (
    <section id="photos" aria-label="Photo Portfolio">
      <div class="photos-header">
        <div>
          <div class="section-label">Photography</div>
          <h2 class="section-title">STILL<br />FRAMES</h2>
        </div>
        <div class="videos-nav">
          <button class="carousel-btn" onClick={() => goTo(current - 1)} aria-label="Previous photo">
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>
          <button class="carousel-btn" onClick={() => goTo(current + 1)} aria-label="Next photo">
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        </div>
      </div>

      {/* 3D Coverflow */}
      <div 
        class="photo-coverflow" 
        id="photoCover" 
        aria-label="Photo gallery carousel"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseUp={(e) => handleDragEnd(e.clientX)}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
      >
        {photos.map((p, i) => {
          const rel = ((i - current) % total + total) % total;
          const mirroredRel = rel > total / 2 ? rel - total : rel; // signed -3..3
          const idx = mirroredRel + 3;
          
          let posClass = 'p-hidden';
          if (idx >= 0 && idx < posMap.length) {
            posClass = posMap[idx];
          }

          return (
            <div 
              key={p.id} 
              className={`photo-card ${posClass}`}
              onClick={() => handleCardClick(i, p)}
            >
              <img src={p.thumb} alt={p.title} loading="lazy" />
              <div class="photo-card-info">
                <div class="card-category">{p.category}</div>
                <div class="card-title">{p.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div class="photo-dots" role="tablist" aria-label="Photo navigation">
        {photos.map((_, i) => (
          <div 
            key={i} 
            className={`photo-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}