// S4 — Terminal typewriter animation

export function initTypewriter() {
  const panel = document.querySelector<HTMLElement>('.terminal-output')
  if (!panel) return

  const lines = panel.querySelectorAll<HTMLElement>('[data-text]')

  // Hide all lines initially
  lines.forEach(line => {
    line.textContent = ''
    line.style.visibility = 'hidden'
  })

  ScrollTrigger.create({
    trigger: panel,
    start: 'top 75%',
    once: true,
    onEnter: () => typeLines(lines, 0),
  })
}

function typeLines(lines: NodeListOf<HTMLElement>, i: number) {
  if (i >= lines.length) return
  const line = lines[i]
  const text = line.dataset.text || ''
  line.textContent = ''
  line.style.visibility = 'visible'
  let j = 0
  const t = setInterval(() => {
    line.textContent += text[j++]
    if (j >= text.length) {
      clearInterval(t)
      setTimeout(() => typeLines(lines, i + 1), 70)
    }
  }, 20)
}
