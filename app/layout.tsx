import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ecoyaan Checkout',
  description: 'E-commerce checkout flow for Ecoyaan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
