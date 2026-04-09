import type { FC } from 'hono/jsx'

const capabilities = [
  {
    label: 'MARKET AGENTS',
    name: 'Price Discovery & Monitoring',
    body: 'A swarm of specialised agents monitors every major venue type continuously. Each agent normalises pricing, calculates cost-adjusted differentials, and surfaces candidates that cross scoring thresholds — across currencies, fee structures, and settlement models.',
    tools: ['price_feed', 'fx_normalise', 'spread_calc', 'velocity_est'],
  },
  {
    label: 'ML ENGINE',
    name: 'Prediction & Backtesting',
    body: 'Machine learning models trained on historical outcomes score every opportunity against a multi-factor model. Confidence, timing, and risk are continuously backtested against real market data. Models retrain autonomously — improving with every cycle.',
    tools: ['backtest', 'score_model', 'retrain', 'confidence_est'],
  },
  {
    label: 'EXECUTION LAYER',
    name: 'Decision & Execution',
    body: 'When confidence exceeds threshold, the system executes automatically. When conditions require judgement, a structured recommendation is delivered with the full reasoning chain — probability, timing, risk factors, and the knowledge graph context behind the decision.',
    tools: ['auto_execute', 'risk_gate', 'report_gen', 'knowledge_graph'],
  },
]

export const Agents: FC = () => {
  return (
    <section class="section section-dark" id="intelligence" style="position: relative; overflow: hidden;">
      {/* Ambient glow */}
      <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 60vw; height: 60vw; background: rgba(107,30,46,0.35); border-radius: 50%; filter: blur(80px); pointer-events: none;"></div>

      <div class="page-wrap" style="position: relative; z-index: 2;">
        <div style="text-align: center; margin-bottom: var(--space-12);">
          <p class="eyebrow" data-reveal>Intelligence</p>
          <h2 class="section-h2" data-reveal>
            Agent swarm.<br />ML backbone.<br />One knowledge graph.
          </h2>
          <p class="section-body" style="margin: 0 auto; color: rgba(255,255,255,0.55);" data-reveal>
            J10N deploys a multi-agent system built on a forked simulation
            framework purpose-adapted for the wine market. Agents operate
            in parallel — monitoring, scoring, and executing — while sharing
            a single GraphRAG knowledge graph that encodes producer lineage,
            vintage history, critic scores, and pricing intelligence going
            back decades. Machine learning models run continuously, backtesting
            every decision against historical outcomes and retraining autonomously.
          </p>
        </div>

        <div class="agents-grid" data-stagger>
          {capabilities.map((cap) => (
            <div class="glass-card" data-stagger-child>
              <p class="agent-label">{cap.label}</p>
              <h3 class="card-h3" style="color: var(--color-text-inverse);">{cap.name}</h3>
              <p class="card-body">{cap.body}</p>
              <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; margin-top: var(--space-4);">
                {cap.tools.map((tool) => (
                  <span class="tool-tag">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
