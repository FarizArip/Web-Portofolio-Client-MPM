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
        bio: "I am a filmmaker, photographer, and video editor from Jogjakarta dedicated to bringing creative visions to life. From cinematic films and corporate profiles to large-scale events, I leverage high-level creativity and strategic problem-solving to overcome any production challenge.",
        email: "andhika.zaafarani@gmail.com",
        socials: [
            { label: "Instagram", url: "https://www.instagram.com/andhikazaaf/", icon: "instagram" },
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
            src: "https://lh3.googleusercontent.com/d/1HxYYKizHxJ26WX0ZQvwvPD7Xt7Z9j0sV",
            poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
            title: "Advetorial Maestro",
            category: "College Organization",
            year: 2025,
            duration: "4:59",
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
            src: "https://lh3.googleusercontent.com/d/1CABa44d9WRYpPQ8vnsR2PEF74eVd-cFY",
            thumb: "https://lh3.googleusercontent.com/d/1CABa44d9WRYpPQ8vnsR2PEF74eVd-cFY",
            title: "IMFEST 2023",
            category: "Sport",
            year: 2024,
        },
        {
            id: "p2",
            src: "https://lh3.googleusercontent.com/d/148_YKhdCz6iXbpHfK1osb1XC2ygTVcTt",
            thumb: "https://lh3.googleusercontent.com/d/148_YKhdCz6iXbpHfK1osb1XC2ygTVcTt",
            title: "HIMA UNY",
            category: "Organization",
            year: 2024,
        },
        {
            id: "p3",
            src: "https://lh3.googleusercontent.com/d/1zRVshbzXByxBJUCdJqX5Vqs8IchSNtw3",
            thumb: "https://lh3.googleusercontent.com/d/1zRVshbzXByxBJUCdJqX5Vqs8IchSNtw3",
            title: "IMFEST 2023",
            category: "Sport",
            year: 2023,
        },
        {
            id: "p4",
            src: "https://lh3.googleusercontent.com/d/1sKHUd3TLcY3uOHbfSezL3Dkd_KZboarb",
            thumb: "https://lh3.googleusercontent.com/d/1sKHUd3TLcY3uOHbfSezL3Dkd_KZboarb",
            title: "IMFEST 2023",
            category: "Sport",
            year: 2023,
        },
        {
            id: "p5",
            src: "https://lh3.googleusercontent.com/d/1BNZMYX7PtOz_a5t1Oh4ygWHs7ZFGl5Ws",
            thumb: "https://lh3.googleusercontent.com/d/1BNZMYX7PtOz_a5t1Oh4ygWHs7ZFGl5Ws",
            title: "IMFEST 2023",
            category: "Sport",
            year: 2022,
        },
        {
            id: "p6",
            src: "https://lh3.googleusercontent.com/d/1fqdoDCf3H9dguMQbCtWbetg70_zNhuJe",
            thumb: "https://lh3.googleusercontent.com/d/1fqdoDCf3H9dguMQbCtWbetg70_zNhuJe",
            title: "IMFEST 2023",
            category: "Sport",
            year: 2022,
        },
        {
            id: "p7",
            src: "https://lh3.googleusercontent.com/d/12lVSVQC0llngVMD4F1xvwNS2gxfXQr-3",
            thumb: "https://lh3.googleusercontent.com/d/12lVSVQC0llngVMD4F1xvwNS2gxfXQr-3",
            title: "IMFEST 2023",
            category: "Sport",
            year: 2024,
        },
        {
            id: "p8",
            src: "https://lh3.googleusercontent.com/d/1zk2jAOvE_7xHfOyW76joEJgmoO6jopLs",
            thumb: "https://lh3.googleusercontent.com/d/1zk2jAOvE_7xHfOyW76joEJgmoO6jopLs",
            title: "IMFEST 2023",
            category: "Sport",
            year: 2023,
        },
    ],
};