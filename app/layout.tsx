import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lakshmi Membership Platform',
  description: 'Traditional Indian membership, EMI, rewards and retail platform.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-navy">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
