import type { FC } from 'hono/jsx'

export const SignupModal: FC<{ turnstileSiteKey: string }> = ({ turnstileSiteKey }) => {
  return (
    <div class="modal-overlay" id="signup-modal" style="display: none;">
      <div class="modal-card">
        <button class="modal-close" aria-label="Close">&times;</button>

        <h3 class="card-h3" style="margin-bottom: var(--space-2);">Request Early Access</h3>
        <p class="card-body" style="margin-bottom: var(--space-6);">
          We review requests individually. Leave your details and we'll be in touch.
        </p>

        <form id="signup-form" class="signup-form">
          <div class="form-field">
            <label for="signup-name">Name</label>
            <input type="text" id="signup-name" name="name" required autocomplete="name" placeholder="Your name" />
          </div>

          <div class="form-field">
            <label for="signup-email">Email</label>
            <input type="email" id="signup-email" name="email" required autocomplete="email" placeholder="you@example.com" />
          </div>

          <div class="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="light"></div>

          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: var(--space-4);">
            Submit Request &rarr;
          </button>

          <p class="form-message" id="form-message" style="display: none;"></p>
        </form>
      </div>
    </div>
  )
}
