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

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
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
    </>,
    { title: 'J10N — Fine Wine Intelligence' }
  )
})

export default app
