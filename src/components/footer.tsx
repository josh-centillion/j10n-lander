import type { FC } from 'hono/jsx'

export const Footer: FC = () => {
  return (
    <footer style="background: var(--color-onyx); border-top: 1px solid rgba(255,255,255,0.08); padding: 48px 0;">
      <div class="page-wrap">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-8);">
          <a href="/" class="nav-logo">
            <img src="/static/images/J10N-white.png" alt="J10N" style="height: 28px;" />
          </a>
          <div style="display: flex; gap: var(--space-8);">
            <a href="#how-it-works" style="font-size: 14px; color: rgba(255,255,255,0.50);">How It Works</a>
            <a href="#intelligence" style="font-size: 14px; color: rgba(255,255,255,0.50);">Intelligence</a>
            <a href="#platforms" style="font-size: 14px; color: rgba(255,255,255,0.50);">Platforms</a>
            <a href="#faq" style="font-size: 14px; color: rgba(255,255,255,0.50);">FAQ</a>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: var(--space-6);">
          <span style="font-size: 13px; color: rgba(255,255,255,0.30);">
            &copy; 2026 Centillion
          </span>
          <a href="mailto:josh.martin@centillion.ai"
             style="font-size: 13px; color: rgba(255,255,255,0.50);">
            josh.martin@centillion.ai
          </a>
        </div>
      </div>
    </footer>
  )
}
