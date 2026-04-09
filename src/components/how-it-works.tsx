import type { FC } from 'hono/jsx'

const steps = [
  {
    num: '01',
    title: 'Data Ingestion',
    body: 'Real-time price data pulled from multiple platforms on a continuous polling cadence. FX normalisation applied across currencies on every cycle.',
  },
  {
    num: '02',
    title: 'Identity Resolution',
    body: 'A proprietary cross-platform wine identity layer resolves prices to canonical wine records. Matching across platforms with different naming conventions, vintage formats, and identifiers. This is the foundation everything else runs on.',
  },
  {
    num: '03',
    title: 'Opportunity Scoring',
    body: 'An automated scoring layer evaluates every candidate opportunity against a multi-factor model. Candidates that don\u2019t meet threshold are discarded. Those that do move forward.',
  },
  {
    num: '04',
    title: 'Agent Evaluation',
    body: 'A multi-agent AI system evaluates each scored opportunity. Agents query a GraphRAG knowledge graph and return a structured assessment \u2014 probability, timing, risk factors, and a recommendation with full reasoning. Models are continuously backtested against historical outcomes and retrained to improve accuracy autonomously.',
  },
  {
    num: '05',
    title: 'Execution or Alert',
    body: 'When confidence is high, the system executes automatically. When conditions require judgement, a structured alert is delivered with the full reasoning chain. Either way — the output is auditable, and the decision logic is transparent.',
  },
]

export const HowItWorks: FC = () => {
  return (
    <section class="section section-gray how-it-works" id="how-it-works">
      <div class="page-wrap">
        <div style="text-align: center; margin-bottom: var(--space-12);">
          <p class="eyebrow" data-reveal>The Pipeline</p>
          <h2 class="section-h2" data-reveal>
            Five steps.<br />Continuous loop.
          </h2>
          <p class="section-body" style="margin: 0 auto;" data-reveal>
            Every cycle: data in. Intelligence out.
            The pipeline runs automatically.
          </p>
        </div>

        <div class="timeline">
          <div class="timeline-rail"></div>
          {steps.map((step) => (
            <div class="timeline-item step">
              <div class="step-indicator">{step.num}</div>
              <div class="step-content">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
