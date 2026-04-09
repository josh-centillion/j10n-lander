// Universal scroll reveal + stagger groups

export function initScrollReveals() {
  // Single elements
  gsap.utils.toArray<Element>('[data-reveal]').forEach(el => {
    gsap.from(el, {
      y: 20,
      opacity: 0,
      duration: 0.65,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  })

  // Staggered groups
  gsap.utils.toArray<Element>('[data-stagger]').forEach(parent => {
    const children = parent.querySelectorAll('[data-stagger-child]')
    gsap.from(children, {
      y: 28,
      opacity: 0,
      duration: 0.6,
      stagger: 0.09,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: parent,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  })
}
