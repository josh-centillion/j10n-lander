// S5 — How-it-works timeline draw

export function initTimeline() {
  const steps = document.querySelectorAll<HTMLElement>('.step')
  if (!steps.length) return

  // Mobile: simple fade-in per step instead of scrub
  if (window.innerWidth < 768) {
    steps.forEach(step => {
      gsap.from(step, {
        x: -12,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })
    return
  }

  // Desktop: timeline rail scrub
  gsap.from('.timeline-rail', {
    scaleY: 0,
    transformOrigin: 'top center',
    ease: 'none',
    scrollTrigger: {
      trigger: '.how-it-works',
      start: 'top 70%',
      end: 'bottom 30%',
      scrub: 0.5,
    },
  })

  steps.forEach(step => {
    gsap.from(step, {
      x: -16,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: step,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })
  })
}
