import type { FC } from 'hono/jsx'

const capabilities = [
  { category: 'Exchanges & Market Makers', scope: 'Primary trading venues with live order books', fee: 'Zero to low commission', feeClass: 'badge-green', method: 'API', status: 'Live' },
  { category: 'Retail Exchanges', scope: 'Consumer-facing platforms with peer-to-peer settlement', fee: '2–3% buyer/seller', feeClass: 'badge-amber', method: 'Real-time scrape', status: 'Live' },
  { category: 'Pricing Aggregators', scope: 'Cross-market price feeds covering thousands of merchants', fee: 'N/A', feeClass: 'badge-gray', method: 'API', status: 'Live' },
  { category: 'Professional Exchanges', scope: 'Institutional-grade platforms with deep liquidity', fee: '2–3%', feeClass: 'badge-amber', method: 'Full API', status: 'Phase 2' },
]

export const Platforms: FC = () => {
  return (
    <section class="section" id="platforms" style="background: var(--color-white);">
      <div class="page-wrap">
        <p class="eyebrow" data-reveal>Data Coverage</p>
        <h2 class="section-h2" data-reveal>
          Every major venue type.<br />One intelligence layer.
        </h2>
        <p class="section-body" data-reveal>
          J10N aggregates and normalises pricing across the principal
          fine wine trading venue categories in the UK and European market.
          The structural fragmentation between these venue types is the
          foundation of the opportunity.
        </p>

        <div class="table-scroll-wrapper" data-reveal>
          <table class="platforms-table">
            <thead>
              <tr>
                <th>Venue Category</th>
                <th>Scope</th>
                <th>Typical Fees</th>
                <th>Data Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {capabilities.map((c) => (
                <tr>
                  <td style="font-weight: 600;">{c.category}</td>
                  <td>{c.scope}</td>
                  <td><span class={`badge ${c.feeClass}`}>{c.fee}</span></td>
                  <td>{c.method}</td>
                  <td>{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
