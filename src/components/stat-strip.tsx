import type { FC } from 'hono/jsx'

const stats = [
  { value: '74', prefix: '$', suffix: 'B', label: 'Global fine wine market, 2026' },
  { value: '3', suffix: ' agents', label: 'Running concurrently. Always on.' },
  { text: 'Real-time', label: 'Cross-platform price monitoring' },
  { text: 'GPU-native', label: 'LLM inference on dedicated hardware' },
]

export const StatStrip: FC = () => {
  return (
    <section class="stat-strip section-dark" style="background: var(--color-mahogany-mid); border-top: 1px solid rgba(255,255,255,0.07); border-bottom: 1px solid rgba(255,255,255,0.07);">
      {stats.map((stat) => (
        <div class="stat-item">
          {'value' in stat ? (
            <div class="stat-number"
                 data-count={stat.value}
                 data-prefix={stat.prefix || ''}
                 data-suffix={stat.suffix || ''}>
              {stat.prefix}{stat.value}{stat.suffix}
            </div>
          ) : (
            <div class="stat-number" data-reveal>{stat.text}</div>
          )}
          <div class="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  )
}
