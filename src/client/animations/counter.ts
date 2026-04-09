// Number count-up animation

export function initCounters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count!)
    const prefix = el.dataset.prefix || ''
    const suffix = el.dataset.suffix || ''
    const hasDecimal = el.dataset.count!.includes('.')
    const obj = { val: 0 }

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            const formatted = hasDecimal
              ? obj.val.toFixed(1)
              : Math.round(obj.val).toLocaleString()
            el.textContent = prefix + formatted + suffix
          },
        })
      },
    })
  })
}
