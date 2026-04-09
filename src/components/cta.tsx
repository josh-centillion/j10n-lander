import type { FC } from 'hono/jsx'

export const CTA: FC = () => {
  return (
    <section class="section section-burgundy" style="position: relative; overflow: hidden;">
      {/* Subtle radial glow */}
      <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 80%; height: 80%; background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%); pointer-events: none;"></div>

      <div class="page-wrap" style="position: relative; z-index: 2; text-align: center;">
        <p class="eyebrow" style="color: rgba(255,255,255,0.50);" data-reveal>Early Access</p>

        <h2 class="section-h2" style="margin: 0 auto var(--space-4);" data-reveal>
          The system is running.<br />We're watching.
        </h2>

        <p class="section-body" style="margin: 0 auto var(--space-8); color: rgba(255,255,255,0.65);" data-reveal>
          J10N is in active validation. The intelligence layer
          is live. We are selectively onboarding early access
          partners who understand what this market has been missing.
        </p>

        <a href="mailto:josh.martin@centillion.ai?subject=J10N%20Early%20Access%20Request"
           class="btn btn-white" data-reveal>
          Request Early Access &rarr;
        </a>
      </div>
    </section>
  )
}
