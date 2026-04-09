// Signup modal + form submission

export function initSignup() {
  const modal = document.getElementById('signup-modal') as HTMLElement | null
  const form = document.getElementById('signup-form') as HTMLFormElement | null
  const message = document.getElementById('form-message') as HTMLElement | null
  const closeBtn = modal?.querySelector('.modal-close') as HTMLElement | null

  if (!modal || !form) return

  // Open modal from any CTA with data-open-signup
  document.querySelectorAll('[data-open-signup]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      modal.style.display = 'flex'
      document.body.style.overflow = 'hidden'
    })
  })

  // Close modal
  function closeModal() {
    modal!.style.display = 'none'
    document.body.style.overflow = ''
  }

  closeBtn?.addEventListener('click', closeModal)

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal()
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') closeModal()
  })

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    submitBtn.disabled = true
    submitBtn.textContent = 'Submitting...'

    if (message) {
      message.style.display = 'none'
      message.className = 'form-message'
    }

    const formData = new FormData(form)

    try {
      const res = await fetch('/api/signup', { method: 'POST', body: formData })
      const data = await res.json() as { ok: boolean; error?: string }

      if (data.ok) {
        if (message) {
          message.textContent = 'You\u2019re on the list. We\u2019ll be in touch.'
          message.className = 'form-message success'
          message.style.display = 'block'
        }
        form.reset()
        // Reset Turnstile widget
        if (typeof turnstile !== 'undefined') {
          turnstile.reset()
        }
      } else {
        if (message) {
          message.textContent = data.error || 'Something went wrong.'
          message.className = 'form-message error'
          message.style.display = 'block'
        }
      }
    } catch {
      if (message) {
        message.textContent = 'Network error. Please try again.'
        message.className = 'form-message error'
        message.style.display = 'block'
      }
    }

    submitBtn.disabled = false
    submitBtn.textContent = 'Submit Request \u2192'
  })
}
