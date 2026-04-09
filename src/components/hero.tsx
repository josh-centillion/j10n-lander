import type { FC } from 'hono/jsx'

export const Hero: FC = () => {
  return (
    <section class="hero">
      <div class="hero-blob hero-blob-1"></div>
      <div class="hero-blob hero-blob-2"></div>
      <div class="hero-noise"></div>

      <div class="hero-split">
        <div class="hero-content">
          <p class="hero-eyebrow" data-reveal>Fine Wine Intelligence</p>

          <h1 class="hero-h1">
            <span class="word">An edge exists</span>{' '}
            <span class="word">in every market.</span>{' '}
            <span class="word">Ours is invisible.</span>
          </h1>

          <p class="hero-body">
            J10N applies multi-agent AI to a $74 billion market
            that has never had a tool built for it.
          </p>

          <div class="hero-actions">
            <a href="#" data-open-signup class="btn btn-white">
              Request Early Access &rarr;
            </a>
            <a href="#how-it-works" class="btn btn-ghost-light">
              How It Works &darr;
            </a>
          </div>
        </div>

        <div class="hero-image" data-reveal>
          <img src="/static/images/bottle-blueprint.png" alt="J10N wine intelligence blueprint" />
        </div>
      </div>
    </section>
  )
}
