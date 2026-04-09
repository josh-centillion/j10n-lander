import type { FC } from 'hono/jsx'

export const Nav: FC = () => {
  return (
    <nav class="nav at-top" id="nav">
      <div class="nav-inner">
        <a href="/" class="nav-logo">
          <img src="/static/images/J10N-dark.png" alt="J10N" class="logo-dark" />
          <img src="/static/images/J10N-white.png" alt="J10N" class="logo-white" />
        </a>

        <ul class="nav-links">
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#intelligence">Intelligence</a></li>
          <li><a href="#platforms">Platforms</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <a href="mailto:josh.martin@centillion.ai?subject=J10N%20Early%20Access%20Request"
           class="btn btn-primary nav-cta">
          Request Access
        </a>

        <button class="nav-hamburger" aria-label="Menu" aria-expanded="false">
          <span></span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div class="nav-drawer">
        <a href="#how-it-works">How It Works</a>
        <a href="#intelligence">Intelligence</a>
        <a href="#platforms">Platforms</a>
        <a href="#faq">FAQ</a>
        <a href="mailto:josh.martin@centillion.ai?subject=J10N%20Early%20Access%20Request"
           class="btn btn-primary">
          Request Access &rarr;
        </a>
      </div>
    </nav>
  )
}
