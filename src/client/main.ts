// Client entry — GSAP init, all animation setup
// GSAP + ScrollTrigger loaded via CDN script tags (not bundled)

// CSS imports — Vite bundles these into static/client.css
import '../styles/tokens.css'
import '../styles/base.css'
import '../styles/sections.css'
import '../styles/buttons.css'
import '../styles/cards.css'
import '../styles/nav.css'
import '../styles/hero.css'
import '../styles/terminal.css'
import '../styles/timeline.css'
import '../styles/table.css'
import '../styles/faq.css'
import '../styles/responsive.css'
import '../styles/modal.css'

import { initNav } from './nav'
import { initSignup } from './signup'
import { initHero } from './animations/hero'
import { initScrollReveals } from './animations/scroll'
import { initCounters } from './animations/counter'
import { initTypewriter } from './animations/typewriter'
import { initTimeline } from './animations/timeline'
import { initFAQ } from './animations/faq'

// Wait for GSAP to be available (loaded via CDN)
function waitForGSAP(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      resolve()
      return
    }
    const check = setInterval(() => {
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        clearInterval(check)
        resolve()
      }
    }, 50)
  })
}

async function init() {
  // Nav and signup don't need GSAP
  initNav()
  initSignup()

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    // Make all hidden elements visible
    document.querySelectorAll('[data-reveal], [data-stagger-child], [data-text]').forEach(el => {
      ;(el as HTMLElement).style.opacity = '1'
      ;(el as HTMLElement).style.visibility = 'visible'
    })
    // Still init FAQ (no animation, just interaction)
    initFAQ()
    return
  }

  await waitForGSAP()
  gsap.registerPlugin(ScrollTrigger)

  initHero()
  initScrollReveals()
  initCounters()
  initTypewriter()
  initTimeline()
  initFAQ()
}

document.addEventListener('DOMContentLoaded', init)
