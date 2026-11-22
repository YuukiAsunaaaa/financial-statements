import { TanStackDevtools } from '@tanstack/react-devtools'
import { createRootRoute, HeadContent, Link, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Kissena Baked Goods',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        
<div className="min-h-screen flex flex-col">
  <header className="border-b border-edge bg-surface">
    <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
      <span className="font-display text-xl font-semibold">
        Kissena Baked Goods
      </span>

      <nav className="flex flex-wrap gap-6">
        <Link
          to="/"
          className="text-ink-soft hover:text-ink"
          activeProps={{
            className: "font-semibold underline decoration-brand underline-offset-8",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>

<Link
  to="/income-statement"
  className="text-ink-soft hover:text-ink"
  activeProps={{
    className: "font-semibold underline decoration-brand underline-offset-8",
  }}
  activeOptions={{ exact: true }}
>
  Income Statement
</Link>

<Link
  to="/balance-sheet"
  className="text-ink-soft hover:text-ink"
  activeProps={{
    className: "font-semibold underline decoration-brand underline-offset-8",
  }}
  activeOptions={{ exact: true }}
>
  Balance Sheet
</Link>

        <Link
          to="/disclosures"
          className="text-ink-soft hover:text-ink"
          activeProps={{
            className: "font-semibold underline decoration-brand underline-offset-8",
          }}
          activeOptions={{ exact: true }}
        >
          Disclosures
        </Link>
      </nav>
    </div>
  </header>

  <main className="w-full max-w-5xl mx-auto px-6 py-10 flex-1">
    {children}
  </main>

  <footer className="border-t border-edge bg-surface">
    <div className="max-w-5xl mx-auto px-6 py-6 text-ink-soft">
      <p>Kissena Baked Goods Inc., Astoria, Queens, New York</p>
      <p>© 20X5 Kissena Baked Goods Inc.</p>
      <p>A fictional company used for accounting examples.</p>
    </div>
  </footer>
</div>

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
