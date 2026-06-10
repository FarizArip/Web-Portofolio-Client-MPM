/**
 * ALEX RAVEN PORTFOLIO — main.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Depends on: media-db.js (MEDIA_DB global)
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ═══════════════════════════════════════════════════════════
   BOOT — wait for DOM
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    initOwner();
    initCursor();
    initNavbar();
    initVideoCarousel();
    initPhotoCarousel();
    initLightbox();
    initContactForm();
    initScrollReveal();
});

const mediaQuery1 = window.matchMedia('(max-width: 1024px)');
const mediaQuery2 = window.matchMedia('(max-width: 768px)');

/* ═══════════════════════════════════════════════════════════
   OWNER — populate name/info from DB
   ═══════════════════════════════════════════════════════════ */
function initOwner() {
    const o = MEDIA_DB.owner;

    // Navbar brand — first words white, last word gold
    const brand = document.querySelector('.nav-brand');
    if (brand) {
        const parts = o.name.split(' ');
        const last = parts.pop();
        brand.innerHTML = parts.join(' ') + ' <span>' + last + '</span>';
    }

    // Hero — first two words plain, last word italic gold
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const parts = o.name.split(' ');
        const last = parts.pop();
        heroName.innerHTML = parts.join(' ') + '<br><em>' + last + '</em>';
    }
    setTextContent('.hero-bio', o.bio);

    // Contact left
    const emailLink = document.querySelector('.contact-email-big');
    if (emailLink) {
        emailLink.href = 'mailto:' + o.email;
        emailLink.querySelector('.email-text').textContent = o.email;
    }

    // Availability badge
    const avail = document.querySelector('.contact-availability');
    if (avail && !o.availableForWork) avail.style.display = 'none';

    // Socials
    renderSocials();

    // Footer
    const fb = document.querySelector('.footer-brand');
    if (fb) fb.textContent = o.name;
    const fc = document.querySelector('.footer-copy');
    if (fc) fc.textContent = '© ' + new Date().getFullYear() + ' ' + o.name + '. All rights reserved.';
}

function setTextContent(sel, text) {
    const el = document.querySelector(sel);
    if (el) el.textContent = text;
}

function renderSocials() {
    const container = document.querySelector('.social-links');
    if (!container) return;
    container.innerHTML = '';

    const icons = {
        instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
        youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 8S21.5 5 19.5 4.5C17.5 4 12 4 12 4S6.5 4 4.5 4.5C2.5 5 2 8 2 8S1.5 11 2 14C2.5 17 4.5 17.5 6.5 18C8.5 18.5 12 18.5 12 18.5S15.5 18.5 17.5 18C19.5 17.5 21.5 17 22 14C22.5 11 22 8 22 8Z"/><polygon points="10,9 15,12 10,15" fill="currentColor" stroke="none"/></svg>`,
        vimeo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 7c-.1 2.5-1.8 5.9-5.2 10.2C13.5 21.8 10.5 24 8 24c-1.5 0-2.8-1.4-3.8-4.2L2.5 14c-.7-2.8-.1-4.2 1.8-4.2.9 0 2.2.6 3.9 1.8l1.2-1.5C7.2 8.6 5.4 7.2 4.1 7.2 2 7.2 1 9 1 12.6L2.7 19C3.9 22.3 5.5 24 7.4 24c2 0 4.6-1.9 7.7-5.8 3.2-3.9 4.9-7 4.9-9.4 0-1.5-.7-2.8-2-2.8z"/></svg>`,
        behance: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 10.5H5V8h3.5c.8 0 1.5.7 1.5 1.5S9.3 10.5 8.5 10.5zM5 14.5h4c.8 0 1.5-.7 1.5-1.5S9.8 11.5 9 11.5H5V14.5zM21.5 9.5H16V8h5.5V9.5zM16 11.5h5c-.3-1.4-1.5-2.5-3-2.5C16.7 9 15.6 10.1 16 11.5zM16 13h5c-.3 1.4-1.5 2.5-3 2.5-1.5 0-2.8-1.1-2-2.5zM2 6v12h8.5c1.9 0 3.5-1.6 3.5-3.5 0-1.1-.5-2-1.3-2.7.5-.6.8-1.4.8-2.3C13.5 7.6 11.9 6 10 6H2z"/></svg>`,
    };

    MEDIA_DB.owner.socials.forEach(s => {
        const a = document.createElement('a');
        a.href = s.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'social-link';
        a.innerHTML = (icons[s.icon] || '') + '<span>' + s.label + '</span>';
        container.appendChild(a);
    });
}

/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR
   ═══════════════════════════════════════════════════════════ */
function initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    let cx = window.innerWidth / 2,
        cy = window.innerHeight / 2;

    document.addEventListener('mousemove', e => {
        cx = e.clientX;
        cy = e.clientY;
        cursor.style.left = cx + 'px';
        cursor.style.top = cy + 'px';
    });

    document.querySelectorAll('a, button, .video-card, .photo-card, .carousel-btn').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('expanded'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('expanded'));
    });
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navbrand = document.querySelector('.nav-brand');
    const burger = document.querySelector('.nav-hamburger');
    const mobile = document.querySelector('.nav-mobile');
    const links = document.querySelectorAll('.nav-links a, .nav-mobile a');
    const sections = ['home', 'videos', 'photos', 'contact'];

    // Scroll → scrolled class + active link
    const onScroll = () => {
        if (mediaQuery1.matches) {
            if (window.scrollY > 800) {
                navbar.classList.add('scrolled');
                navbrand.innerHTML = "MUHAMMAD ANDHIKA <span>ZAAFARANI</span>";
            } else {
                navbar.classList.remove('scrolled');
                navbrand.innerHTML = "";
            }

            let current = sections[0];
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) current = id;
            });
            links.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === '#' + current);
            });
        } else {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
                navbrand.innerHTML = "MUHAMMAD ANDHIKA <span>ZAAFARANI</span>";
            } else {
                navbar.classList.remove('scrolled');
                navbrand.innerHTML = "";
            }


            // Active section detection
            let current = sections[0];
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) current = id;
            });
            links.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === '#' + current);
            });
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Hamburger toggle
    if (burger && mobile) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            mobile.classList.toggle('open');
        });
        mobile.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                burger.classList.remove('open');
                mobile.classList.remove('open');
            });
        });
    }
}

/* ═══════════════════════════════════════════════════════════
   VIDEO CAROUSEL (3D)
   ═══════════════════════════════════════════════════════════ */
function initVideoCarousel() {
    const videos = MEDIA_DB.videos;
    const track = document.getElementById('videoTrack');
    const dotsEl = document.getElementById('videoDots');
    if (!track || !videos.length) return;

    let current = 0;
    let activeVideo = null;

    // Build cards
    videos.forEach((v, i) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.dataset.index = i;
        card.innerHTML = `
      <div class="card-inner">
        <img class="card-poster" src="${v.poster}" alt="${v.title}" loading="lazy">
        <video preload="none" loop playsinline src="${v.src}" poster="${v.poster}"></video>
        <div class="card-overlay">
          <div class="card-category">${v.category}</div>
          <div class="card-title">${v.title}</div>
          <div class="card-meta">${v.year} &nbsp;·&nbsp; ${v.duration}</div>
        </div>
        <button class="card-play-btn" aria-label="Play ${v.title}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
        </button>
      </div>`;

        const playBtn = card.querySelector('.card-play-btn');
        const vid = card.querySelector('video');

        card.addEventListener('click', () => {
            const idx = parseInt(card.dataset.index);
            if (idx !== current) {
                // Navigate to clicked card first
                goTo(idx);
                return;
            }
            // Toggle play/pause on active card
            if (card.classList.contains('playing')) {
                vid.pause();
                card.classList.remove('playing');
                activeVideo = null;
            } else {
                stopAllVideos();
                vid.muted = true;
                vid.play();
                card.classList.add('playing');
                activeVideo = vid;
            }
        });

        track.appendChild(card);
    });

    // Dots
    videos.forEach((_, i) => {
        const d = document.createElement('div');
        d.className = 'video-dot' + (i === 0 ? ' active' : '');
        d.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(d);
    });

    // Render positions
    const posClasses = ['prev2', 'prev1', 'active', 'next1', 'next2', 'hidden'];

    function render() {
        const cards = track.querySelectorAll('.video-card');
        const dots = dotsEl.querySelectorAll('.video-dot');
        const n = videos.length;

        cards.forEach((card, i) => {
            card.className = 'video-card';
            const rel = ((i - current) % n + n) % n;
            // Map relative position to class
            if (rel === 0) card.classList.add('active');
            else if (rel === 1) card.classList.add('next1');
            else if (rel === 2) card.classList.add('next2');
            else if (rel === n - 1) card.classList.add('prev1');
            else if (rel === n - 2) card.classList.add('prev2');
            else card.classList.add('hidden');
        });

        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function stopAllVideos() {
        track.querySelectorAll('video').forEach(v => {
            v.pause();
            v.currentTime = 0;
        });
        track.querySelectorAll('.video-card').forEach(c => c.classList.remove('playing'));
        activeVideo = null;
    }

    function goTo(index) {
        stopAllVideos();
        current = ((index % videos.length) + videos.length) % videos.length;
        render();

        // Autoplay first card (index 0) on initial load
        if (current === 0 && !activeVideo) {
            const firstCard = track.querySelector('.video-card.active');
            if (firstCard) {
                const vid = firstCard.querySelector('video');
                if (vid) {
                    vid.muted = true; // required for autoplay
                    vid.play().then(() => {
                        firstCard.classList.add('playing');
                        activeVideo = vid;
                    }).catch(() => {}); // silently ignore autoplay block
                }
            }
        }
    }

    // Nav buttons
    const vPrev = document.getElementById('videoPrev');
    const vNext = document.getElementById('videoNext');
    if (vPrev) vPrev.addEventListener('click', () => goTo(current - 1));
    if (vNext) vNext.addEventListener('click', () => goTo(current + 1));

    // Keyboard
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') goTo(current - 1);
        if (e.key === 'ArrowRight') goTo(current + 1);
    });

    // Drag / swipe
    let startX = null;
    track.addEventListener('mousedown', e => { startX = e.clientX; });
    track.addEventListener('mouseup', e => {
        if (startX === null) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 60) goTo(current + (dx < 0 ? 1 : -1));
        startX = null;
    });
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        if (startX === null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
        startX = null;
    });

    render();

    // Attempt autoplay after a short delay (muted)
    setTimeout(() => goTo(0), 600);
}

/* ═══════════════════════════════════════════════════════════
   PHOTO COVERFLOW (3D)
   ═══════════════════════════════════════════════════════════ */
function initPhotoCarousel() {
    const photos = MEDIA_DB.photos;
    const cover = document.getElementById('photoCover');
    const dotsEl = document.getElementById('photoDots');
    if (!cover || !photos.length) return;

    let current = 0;

    photos.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = i;
        card.innerHTML = `
      <img src="${p.thumb}" alt="${p.title}" loading="lazy">
      <div class="photo-card-info">
        <div class="card-category">${p.category}</div>
        <div class="card-title">${p.title}</div>
      </div>`;

        card.addEventListener('click', () => {
            const idx = parseInt(card.dataset.index);
            if (idx !== current) { goTo(idx); return; }
            openLightbox(p);
        });

        cover.appendChild(card);
    });

    // Dots
    photos.forEach((_, i) => {
        const d = document.createElement('div');
        d.className = 'photo-dot' + (i === 0 ? ' active' : '');
        d.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(d);
    });

    const posMap = ['p-prev3', 'p-prev2', 'p-prev1', 'active', 'p-next1', 'p-next2', 'p-next3'];

    function render() {
        const cards = cover.querySelectorAll('.photo-card');
        const dots = dotsEl.querySelectorAll('.photo-dot');
        const n = photos.length;

        cards.forEach((card, i) => {
            card.className = 'photo-card';
            const rel = ((i - current) % n + n) % n;
            const mirroredRel = rel > n / 2 ? rel - n : rel; // signed -3..3
            const idx = mirroredRel + 3;
            if (idx >= 0 && idx < posMap.length) {
                card.classList.add(posMap[idx]);
            } else {
                card.classList.add('p-hidden');
            }
        });

        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function goTo(index) {
        current = ((index % photos.length) + photos.length) % photos.length;
        render();
    }

    const pPrev = document.getElementById('photoPrev');
    const pNext = document.getElementById('photoNext');
    if (pPrev) pPrev.addEventListener('click', () => goTo(current - 1));
    if (pNext) pNext.addEventListener('click', () => goTo(current + 1));

    // Swipe
    let startX = null;
    cover.addEventListener('mousedown', e => { startX = e.clientX; });
    cover.addEventListener('mouseup', e => {
        if (startX === null) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 60) goTo(current + (dx < 0 ? 1 : -1));
        startX = null;
    });
    cover.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    cover.addEventListener('touchend', e => {
        if (startX === null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
        startX = null;
    });

    render();
}

/* ═══════════════════════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════════════════════ */
function initLightbox() {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const cat = document.getElementById('lightboxCat');
    const close = document.getElementById('lightboxClose');
    if (!lb) return;

    if (close) close.addEventListener('click', closeLightbox);
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

function openLightbox(photo) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const cat = document.getElementById('lightboxCat');
    if (!lb) return;
    img.src = photo.src;
    if (title) title.textContent = photo.title;
    if (cat) cat.textContent = photo.category;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════════════════════ */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const btn = form.querySelector('.form-submit');
        const notice = form.querySelector('.form-notice');
        const btnSpan = btn.querySelector('span');

        // Gather data
        const data = {
            name: form.querySelector('#fname').value,
            email: form.querySelector('#femail').value,
            project: form.querySelector('#fproject').value,
            message: form.querySelector('#fmessage').value,
        };

        btn.classList.add('sending');
        btnSpan.textContent = 'Sending';
        notice.className = 'form-notice';

        // Simulate send (replace with real endpoint or EmailJS/Formspree)
        await fakeEmailSend(data);

        btn.classList.remove('sending');
        btnSpan.textContent = 'Send Message';
        notice.className = 'form-notice success';
        notice.textContent = '✓ Message sent — I\'ll be in touch soon.';
        form.reset();

        setTimeout(() => { notice.className = 'form-notice'; }, 6000);
    });
}

function fakeEmailSend(data) {
    /**
     * REPLACE THIS FUNCTION with a real integration:
     *
     * Option A — EmailJS (free, no backend):
     *   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY')
     *
     * Option B — Formspree:
     *   fetch('https://formspree.io/f/YOUR_FORM_ID', {
     *     method: 'POST', headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(data)
     *   })
     *
     * Option C — Your own API endpoint:
     *   fetch('/api/contact', { method:'POST', body: JSON.stringify(data), ... })
     */
    console.log('[Contact Form] Submitted:', data);
    return new Promise(res => setTimeout(res, 1400)); // simulate delay
}

/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════════════════════ */
function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
}