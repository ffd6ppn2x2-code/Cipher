import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Cipher | Cybersecurity & IT Expertise',
  description:
    'Cipher empowers enterprises with transformative cybersecurity solutions — from InfoSec consulting and offensive security to DFIR and cloud security.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cipher-bg text-cipher-text antialiased">
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}
