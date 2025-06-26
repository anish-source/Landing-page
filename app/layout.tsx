import type { Metadata } from 'next'
import './globals.css'
import FloatingContactButton from "@/components/floating-contact-button"

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
      <body>
        {children}
        <FloatingContactButton />
      </body>
    </html>
  )
}
