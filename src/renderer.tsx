import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3D2518" />

        <title>{title ?? 'J10N — Fine Wine Intelligence'}</title>
        <meta name="description" content="J10N applies multi-agent AI to the fine wine market. Systematic intelligence for a $74 billion asset class." />

        {/* OG / Social */}
        <meta property="og:title" content="J10N — Fine Wine Intelligence" />
        <meta property="og:description" content="Multi-agent AI for the fine wine market." />
        <meta property="og:image" content="/static/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/static/images/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/static/images/apple-touch-icon.png" sizes="180x180" />

        {/* CSS — bundled by Vite from client entry */}
        <link rel="stylesheet" href="/static/style.css" />

        {/* GSAP via CDN — defer, not bundled */}
        <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

        {/* Cloudflare Turnstile */}
        <script defer src="https://challenges.cloudflare.com/turnstile/v0/api.js" async></script>

        {/* Client JS */}
        <script defer src="/static/client.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
})
