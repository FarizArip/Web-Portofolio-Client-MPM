/**
 * MEDIA DATABASE
 * ─────────────────────────────────────────────────────────────────────────────
 * This file is the local "database" for all portfolio media.
 * Replace the src values with your own video/image URLs or local file paths.
 * For local files, place them in the same folder and reference by filename.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const MEDIA_DB = {

    /**
     * OWNER INFO
     * Used across the site (navbar brand, hero, contact, footer).
     */
    owner: {
        name: "MUHAMMAD ANDHIKA ZAAFARANI",
        tagline: "Visual Storyteller",
        subTagline: "Filmmaker · Photographer · Editor",
        bio: "I capture the world between frames — raw moments, cinematic landscapes, and the human details most people walk past. With a camera in hand and a story in mind, every project becomes an obsession.",
        email: "hello@andhikazaafarani.com",
        socials: [
            { label: "Instagram", url: "https://instagram.com/", icon: "instagram" },
            { label: "YouTube", url: "https://youtube.com/", icon: "youtube" },
            { label: "Vimeo", url: "https://vimeo.com/", icon: "vimeo" },
            { label: "Behance", url: "https://behance.net/", icon: "behance" },
        ],
        availableForWork: true,
    },

    /**
     * VIDEOS
     * Each entry:
     *   src       — direct URL to .mp4 / .webm, or a hosted embed-friendly source
     *   poster    — thumbnail image shown before play
     *   title     — displayed on card
     *   category  — short label (Film, Commercial, Travel, etc.)
     *   year      — production year
     *   duration  — display string e.g. "3:42"
     */
    videos: [{
            id: "v1",
            src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
            title: "Mountain Reverie",
            category: "Landscape Film",
            year: 2024,
            duration: "4:12",
        },
        {
            id: "v2",
            src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            poster: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=800&q=80",
            title: "Urban Pulse",
            category: "City Documentary",
            year: 2024,
            duration: "5:30",
        },
        {
            id: "v3",
            src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
            title: "Storm Sequence",
            category: "Nature · Short Film",
            year: 2023,
            duration: "2:47",
        },
        {
            id: "v4",
            src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
            poster: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
            title: "On the Road",
            category: "Commercial",
            year: 2023,
            duration: "1:58",
        },
        {
            id: "v5",
            src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
            poster: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
            title: "Wild Passages",
            category: "Travel Film",
            year: 2023,
            duration: "6:05",
        },
    ],

    /**
     * PHOTOS
     * Each entry:
     *   src       — full-resolution image URL
     *   thumb     — smaller/compressed version for the carousel
     *   title     — alt text & overlay label
     *   category  — short label
     *   year      — year taken
     */
    photos: [{
            id: "p1",
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=90",
            thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
            title: "Alpine Silence",
            category: "Landscape",
            year: 2024,
        },
        {
            id: "p2",
            src: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=1200&q=90",
            thumb: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=600&q=80",
            title: "Night Portrait",
            category: "Portrait",
            year: 2024,
        },
        {
            id: "p3",
            src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=90",
            thumb: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
            title: "Storm Light",
            category: "Weather",
            year: 2023,
        },
        {
            id: "p4",
            src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=90",
            thumb: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
            title: "Golden Hour",
            category: "Landscape",
            year: 2023,
        },
        {
            id: "p5",
            src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=90",
            thumb: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
            title: "Wild Grass",
            category: "Nature",
            year: 2022,
        },
        {
            id: "p6",
            src: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=1200&q=90",
            thumb: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=600&q=80",
            title: "Desert Dusk",
            category: "Landscape",
            year: 2022,
        },
        {
            id: "p7",
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=90",
            thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
            title: "The Look",
            category: "Portrait",
            year: 2024,
        },
        {
            id: "p8",
            src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=90",
            thumb: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&q=80",
            title: "Waterfall",
            category: "Nature",
            year: 2023,
        },
    ],
};