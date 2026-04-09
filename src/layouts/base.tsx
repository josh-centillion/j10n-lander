import type { FC } from 'hono/jsx'

export const BaseLayout: FC = ({ children }) => {
  return (
    <div class="page">
      {children}
    </div>
  )
}
