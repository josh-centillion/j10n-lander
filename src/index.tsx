import { Hono } from 'hono'
import { renderer } from './renderer'
import { Nav } from './components/nav'
import { Hero } from './components/hero'
import { StatStrip } from './components/stat-strip'
import { Problem } from './components/problem'
import { Product } from './components/product'
import { HowItWorks } from './components/how-it-works'
import { Agents } from './components/agents'
import { Platforms } from './components/platforms'
import { Returns } from './components/returns'
import { Infrastructure } from './components/infrastructure'
import { FAQ } from './components/faq'
import { CTA } from './components/cta'
import { Footer } from './components/footer'
import { SignupModal } from './components/signup-modal'

type Bindings = {
  DB: D1Database
  TURNSTILE_SITE_KEY: string
  TURNSTILE_SECRET_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use(renderer)

app.get('/', (c) => {
  const siteKey = c.env.TURNSTILE_SITE_KEY || '1x00000000000000000000AA'
  return c.render(
    <>
      <Nav />
      <Hero />
      <StatStrip />
      <Problem />
      <Product />
      <HowItWorks />
      <Agents />
      <Platforms />
      <Returns />
      <Infrastructure />
      <FAQ />
      <CTA />
      <Footer />
      <SignupModal turnstileSiteKey={siteKey} />
    </>,
    { title: 'J10N — Fine Wine Intelligence' }
  )
})

app.post('/api/signup', async (c) => {
  // Origin check — reject cross-origin requests
  const origin = c.req.header('origin') || ''
  const host = c.req.header('host') || ''
  if (origin && !origin.includes(host) && !origin.includes('j10n')) {
    return c.json({ ok: false, error: 'Invalid request.' }, 403)
  }

  const body = await c.req.parseBody()
  const name = (body.name as string || '').trim().slice(0, 200)
  const email = (body.email as string || '').trim().slice(0, 320)
  const token = body['cf-turnstile-response'] as string || ''

  // Validate inputs
  if (!name || !email) {
    return c.json({ ok: false, error: 'Name and email are required.' }, 400)
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return c.json({ ok: false, error: 'Please enter a valid email address.' }, 400)
  }

  // Turnstile verification — mandatory in production
  const secretKey = c.env.TURNSTILE_SECRET_KEY
  if (!secretKey) {
    return c.json({ ok: false, error: 'Service temporarily unavailable.' }, 503)
  }

  const formData = new FormData()
  formData.append('secret', secretKey)
  formData.append('response', token)
  formData.append('remoteip', c.req.header('cf-connecting-ip') || '')

  const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  })
  const outcome = await result.json() as { success: boolean }

  if (!outcome.success) {
    return c.json({ ok: false, error: 'Verification failed. Please try again.' }, 403)
  }

  // Rate limit — 1 signup per email (D1 UNIQUE constraint handles this)
  try {
    await c.env.DB.prepare(
      'INSERT INTO signups (name, email) VALUES (?, ?)'
    ).bind(name, email).run()
  } catch (e: any) {
    if (e.message?.includes('UNIQUE')) {
      return c.json({ ok: false, error: 'This email is already on our list.' }, 409)
    }
    return c.json({ ok: false, error: 'Something went wrong. Please try again.' }, 500)
  }

  return c.json({ ok: true })
})

export default app
