// S10 — FAQ accordion open/close

export function initFAQ() {
  const items = document.querySelectorAll<HTMLElement>('.faq-item')

  items.forEach(item => {
    const question = item.querySelector<HTMLElement>('.faq-question')
    const icon = item.querySelector<HTMLElement>('.faq-icon')

    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open')

      // Close all
      items.forEach(i => {
        i.classList.remove('open')
        const ic = i.querySelector<HTMLElement>('.faq-icon')
        if (ic && typeof gsap !== 'undefined') {
          gsap.to(ic, { rotation: 0, duration: 0.25, ease: 'power2.out' })
        }
      })

      // Open this one if it wasn't open
      if (!isOpen) {
        item.classList.add('open')
        if (icon && typeof gsap !== 'undefined') {
          gsap.to(icon, { rotation: 45, duration: 0.25, ease: 'power2.out' })
        }
      }
    })
  })
}
