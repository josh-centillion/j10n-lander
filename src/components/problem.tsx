import type { FC } from 'hono/jsx'

const cards = [
  {
    title: 'Structural Fragmentation',
    body: 'The same bottle of wine trades at different prices on different platforms simultaneously. The market has no central clearing mechanism. This has always been true.',
  },
  {
    title: 'No Tools for Active Intelligence',
    body: 'Every major wine investment platform is built for passive, long-duration portfolios. Nothing exists for systematic, data-driven short-cycle decision-making.',
  },
  {
    title: 'The Window Is Now',
    body: 'Platform APIs are opening. Settlement is accelerating. The structural conditions for AI-driven intelligence in this market are converging for the first time.',
  },
]

export const Problem: FC = () => {
  return (
    <section class="section" id="problem">
      <div class="page-wrap">
        <p class="eyebrow" data-reveal>The Opportunity</p>
        <h2 class="section-h2" data-reveal>
          A $74 billion market<br />running on intuition.
        </h2>
        <p class="section-body" data-reveal>
          Fine wine trades across dozens of platforms, auction houses,
          and exchanges — each with different pricing, different buyers,
          different liquidity. There is no Bloomberg terminal for this.
          No unified feed. No systematic intelligence layer.
          Until now.
        </p>

        <div class="grid-3" data-stagger>
          {cards.map((card) => (
            <div class="surface-card" data-stagger-child>
              <h3 class="card-h3">{card.title}</h3>
              <p class="card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
