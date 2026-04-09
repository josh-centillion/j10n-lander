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
  line.style.visibility = 'visible'

  // Empty lines (spacers) appear instantly
  if (!text.trim() || text === '\u00A0') {
    line.textContent = text
    setTimeout(() => typeLines(lines, i + 1), 30)
    return
  }

  // Lines starting with > or ▸ get a brief pause before typing (feels like a new block)
  const isHeader = text.startsWith('>') || text.startsWith('▸')
  const preDelay = isHeader ? 120 : 0

  setTimeout(() => {
    line.textContent = ''
    let j = 0
    const speed = 8 // ms per character — fast but readable
    const t = setInterval(() => {
      line.textContent += text[j++]
      if (j >= text.length) {
        clearInterval(t)
        // Short pause between lines, slightly longer after result lines
        const isResult = text.includes('✓') || text.includes('→') || text.includes('done')
        setTimeout(() => typeLines(lines, i + 1), isResult ? 80 : 25)
      }
    }, speed)
  }, preDelay)
}
