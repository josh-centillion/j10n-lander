import type { FC } from 'hono/jsx'

const stats = [
  { value: '382', suffix: '%', label: 'Burgundy \u2014 15-year total return', note: 'Fastest-appreciating major region' },
  { value: '51.3', suffix: '%', label: 'Champagne \u2014 5-year growth', note: 'Fastest-growing segment' },
  { value: '10.6', suffix: '%', label: 'Fine wine annualised \u2014 15 years', note: 'Outperforming broad equity indices' },
  { value: '180', prefix: '+', suffix: '%', label: 'Exchange velocity, 2025\u21922026', note: 'CultX GMV \u2014 market liquidity accelerating' },
]

export const Returns: FC = () => {
  return (
    <section class="section" id="returns">
      <div class="page-wrap">
        <p class="eyebrow" data-reveal>The Asset Class</p>
        <h2 class="section-h2" data-reveal>
          Fine wine has compounded<br />for three decades.
        </h2>
        <p class="section-body" data-reveal>
          Before any intelligence layer, the underlying asset
          has delivered consistent long-term appreciation.
          J10N operates on top of a market with a track record —
          and adds a dimension that has never existed before.
        </p>

        <div class="grid-2" data-stagger>
          {stats.map((stat) => (
            <div class="stat-card" data-stagger-child>
              <div class="stat-card-number"
                   data-count={stat.value}
                   data-prefix={stat.prefix || ''}
                   data-suffix={stat.suffix}>
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div class="stat-card-label">{stat.label}</div>
              <div class="stat-card-note">{stat.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
