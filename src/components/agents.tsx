import type { FC } from 'hono/jsx'

const agents = [
  {
    num: '01',
    name: 'Pricing Agent',
    body: 'Monitors data across platforms continuously. Calculates normalised, cost-adjusted differentials for every platform pair on every cycle. Surfaces candidates above threshold.',
    tools: ['price_lookup', 'normalise', 'fx_rates'],
  },
  {
    num: '02',
    name: 'Arbitrage Agent',
    body: 'Receives candidates from the Pricing Agent. Evaluates each against platform exit velocity, timing risk, and cost models. Returns a confidence-scored recommendation.',
    tools: ['velocity_est', 'cost_model', 'risk_score'],
  },
  {
    num: '03',
    name: 'Report Agent',
    body: 'Queries the knowledge graph. Contextualises the recommendation against historical data, producer intelligence, and market conditions. Generates a structured output with full reasoning chain.',
    tools: ['knowledge_graph', 'vintage_data', 'report_gen'],
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
            Three agents.<br />One knowledge graph.
          </h2>
          <p class="section-body" style="margin: 0 auto; color: rgba(255,255,255,0.55);" data-reveal>
            J10N's intelligence is built on a forked multi-agent framework
            purpose-adapted for the wine market. Each agent has a defined role.
            All three share a single GraphRAG knowledge graph — encoding
            producer lineage, vintage history, critic scores, and pricing
            intelligence going back decades.
          </p>
        </div>

        <div class="agents-grid" data-stagger>
          {agents.map((agent) => (
            <div class="glass-card" data-stagger-child>
              <p class="tool-tag" style="margin-bottom: var(--space-3);">AGENT {agent.num}</p>
              <h3 class="card-h3" style="color: var(--color-text-inverse);">{agent.name}</h3>
              <p class="card-body">{agent.body}</p>
              <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; margin-top: var(--space-4);">
                {agent.tools.map((tool) => (
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
