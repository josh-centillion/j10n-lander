# J10N Lander

Premium landing page for J10N — fine wine intelligence platform.

## Stack

- **Runtime:** Cloudflare Workers (via Pages)
- **Framework:** Hono + JSX (SSR)
- **Build:** Vite 5
- **Animations:** GSAP 3 + ScrollTrigger (CDN)
- **Styling:** Plain CSS custom properties
- **Deploy:** Cloudflare Pages

## Development

```bash
npm install
npm run dev        # Vite dev server with Hono
npm run build      # Full build (client + server)
npm run preview    # Preview via wrangler
npm run deploy     # Build + deploy to CF Pages
```

## Deployment

DNS for j10n.co is managed in Cloudflare. After first deploy, point the custom domain to the Pages deployment from the Cloudflare dashboard.

## Performance Targets

- JS budget: <65KB gzip (GSAP via CDN, not bundled)
- LCP: <1.5s on 4G
- CLS: <0.05
- GSAP loaded via CDN `defer` script tags
