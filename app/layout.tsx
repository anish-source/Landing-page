import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Created with Typescript',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
