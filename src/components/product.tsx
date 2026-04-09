import type { FC } from 'hono/jsx'

const terminalLines = [
  '┌─ intelligence layer — active ─────────────────────────────┐',
  '│                                                            │',
  '│  agents:    3 active                                       │',
  '│  pipeline:  running                                        │',
  '│  coverage:  3 platforms                                    │',
  '│                                                            │',
  '│  ──────────────────────────────────────────────────────   │',
  '│                                                            │',
  '│  [pricing_agent]     monitoring ............. ✓           │',
  '│  [arbitrage_agent]   evaluating ............. ✓           │',
  '│  [report_agent]      standing by                          │',
  '│                                                            │',
  '│  ──────────────────────────────────────────────────────   │',
  '│                                                            │',
  '│  alert: opportunity detected                               │',
  '│  confidence: 0.91                                          │',
  '│  recommendation: generated                                 │',
  '│  → delivered                                               │',
  '│                                                            │',
  '└────────────────────────────────────────────────────────── ┘',
]

export const Product: FC = () => {
  return (
    <section class="section" id="product">
      <div class="page-wrap">
        <div class="product-split">
          <div>
            <p class="eyebrow" data-reveal>What J10N Does</p>
            <h2 class="section-h2" data-reveal>
              Intelligence that runs<br />while you don't.
            </h2>
            <p class="section-body" data-reveal>
              J10N monitors, processes, and evaluates continuously.
              Data from multiple platforms flows through an AI layer
              that was purpose-built for this market. Alerts arrive
              when something is worth acting on. Not before.
            </p>
            <a href="#intelligence" class="btn btn-text" data-reveal>
              See the architecture &rarr;
            </a>
          </div>

          <div class="terminal-panel">
            <div class="terminal-output">
              {terminalLines.map((line) => (
                <div data-text={line}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
