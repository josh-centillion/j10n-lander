// GSAP loaded via CDN — global type declarations
declare const gsap: typeof import('gsap').gsap
declare const ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger

// Cloudflare Turnstile
declare const turnstile: { reset: (container?: string | HTMLElement) => void }
