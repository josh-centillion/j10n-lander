import type { FC } from 'hono/jsx'

const platforms = [
  { name: 'LiveTrade (Bordeaux Index)', type: 'Exchange / Market Maker', fee: 'Zero commission', feeClass: 'badge-green', method: 'API', coverage: 'MVP' },
  { name: 'CultX', type: 'Retail Exchange — Blockchain settlement', fee: '2.5% buyer / seller', feeClass: 'badge-amber', method: 'Real-time scrape', coverage: 'MVP' },
  { name: 'Wine-Searcher', type: 'Pricing Aggregator', fee: 'N/A', feeClass: 'badge-gray', method: 'API', coverage: 'MVP' },
  { name: 'Liv-ex', type: 'Professional Exchange', fee: '2–3%', feeClass: 'badge-amber', method: 'Full API', coverage: 'Phase 2' },
]

export const Platforms: FC = () => {
  return (
    <section class="section" id="platforms" style="background: var(--color-white);">
      <div class="page-wrap">
        <p class="eyebrow" data-reveal>Data Coverage</p>
        <h2 class="section-h2" data-reveal>
          Every major platform.<br />One intelligence layer.
        </h2>
        <p class="section-body" data-reveal>
          J10N aggregates and normalises pricing from the principal
          fine wine trading venues in the UK and European market.
          The fragmentation between these platforms is the foundation
          of the opportunity.
        </p>

        <div class="table-scroll-wrapper" data-reveal>
          <table class="platforms-table">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Type</th>
                <th>Fee Structure</th>
                <th>Data Method</th>
                <th>Coverage</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((p) => (
                <tr>
                  <td style="font-weight: 600;">{p.name}</td>
                  <td>{p.type}</td>
                  <td><span class={`badge ${p.feeClass}`}>{p.fee}</span></td>
                  <td>{p.method}</td>
                  <td>{p.coverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
