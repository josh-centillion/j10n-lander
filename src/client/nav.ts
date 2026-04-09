// S0 — Nav scroll behavior + mobile drawer

export function initNav() {
  const nav = document.querySelector<HTMLElement>('#nav')
  const hamburger = document.querySelector<HTMLElement>('.nav-hamburger')
  const drawer = document.querySelector<HTMLElement>('.nav-drawer')

  if (!nav) return

  // Scroll class toggle
  function onScroll() {
    const scrolled = window.scrollY > 80
    nav!.classList.toggle('scrolled', scrolled)
    nav!.classList.toggle('at-top', !scrolled)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll() // Initial state

  // Mobile drawer
  hamburger?.addEventListener('click', () => {
    const isOpen = drawer?.classList.toggle('open')
    document.body.style.overflow = isOpen ? 'hidden' : ''
    hamburger.setAttribute('aria-expanded', String(isOpen))
  })

  drawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open')
      document.body.style.overflow = ''
      hamburger?.setAttribute('aria-expanded', 'false')
    })
  })
}
