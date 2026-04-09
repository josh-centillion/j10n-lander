// S1 — Hero entrance sequence

export function initHero() {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

  tl.from('.hero-eyebrow', { y: 16, opacity: 0, duration: 0.5 })
    .from('.hero-h1 .word', { y: 20, opacity: 0, duration: 0.5, stagger: 0.07 }, '-=0.2')
    .from('.hero-h2', { y: 16, opacity: 0, duration: 0.5 }, '-=0.1')
    .from('.hero-actions', { y: 16, opacity: 0, duration: 0.5 }, '-=0.1')
}
