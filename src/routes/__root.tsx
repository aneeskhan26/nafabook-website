import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'Nafabook | Get Funded, Manage Smarter' },
      { name: 'description', content: 'Digital Hisab Kitab and trusted business finance access for growing Indian MSMEs.' },
      { name: 'theme-color', content: '#0a2540' },
      { property: 'og:title', content: 'Nafabook | Get Funded, Manage Smarter' },
      { property: 'og:description', content: 'Smart business accounting and quick access to business finance for growing MSMEs.' },
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
        {children}
        <Scripts />
      </body>
    </html>
  )
}
