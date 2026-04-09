import type { FC } from 'hono/jsx'

const terminalLines = [
  '> j10n pipeline — cycle 4,281',
  '  status: live | uptime: 14d 7h 22m',
  '',
  '  [data_ingest] pulling 4 venue feeds ...... done',
  '  [fx_engine]   GBP/EUR 1.1742 | GBP/USD 1.2631',
  '  [id_resolve]  1,847 canonical records matched',
  '',
  '  [spread_calc] scanning cross-venue pairs ......',
  '  → 312 pairs evaluated',
  '  → 23 above threshold (>3.2% net-of-fee)',
  '',
  '  [ml_scorer]   running confidence model v4.1',
  '  → Château Margaux 2015 .... 0.91 ✓',
  '  → Opus One 2018 ........... 0.87 ✓',
  '  → Penfolds Grange 2017 .... 0.72 —',
  '  → Dom Pérignon 2012 ....... 0.94 ✓',
  '',
  '  [backtest]    last 90d accuracy: 84.3%',
  '  [risk_gate]   exposure check ........... pass',
  '',
  '  ▸ 3 opportunities above execution threshold',
  '  ▸ auto-executing DOM-PERIGNON-2012-6x75',
  '    spread: 6.1% | venue: exchange → market maker',
  '    confidence: 0.94 | est. settlement: 3d',
  '  → executed ✓',
  '',
  '  ▸ alerting CHATEAU-MARGAUX-2015-12x75',
  '    spread: 4.8% | requires manual review',
  '  → alert delivered to dashboard',
  '',
  '  cycle complete — next in 12m',
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
              Data from multiple venues flows through an ML-powered
              intelligence layer purpose-built for this market.
              When confidence is high, it executes. When it isn't,
              you get a structured alert with the full reasoning chain.
            </p>
            <a href="#intelligence" class="btn btn-text" data-reveal>
              See the architecture &rarr;
            </a>
          </div>

          <div class="terminal-panel">
            <div class="terminal-output">
              {terminalLines.map((line) => (
                <div data-text={line}>{line || '\u00A0'}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
