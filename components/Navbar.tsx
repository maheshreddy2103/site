import Link from 'next/link'
import LogoutButton from './LogoutButton'
import { getCurrentUser } from '@/lib/server/user'

export default async function Navbar() {
  const user = await getCurrentUser()
  const userRole = user?.role?.name
  const userName = user?.customer?.firstName || user?.employee?.firstName || ''
  const portalPath = userRole === 'Customer' ? '/customer/dashboard' : userRole ? '/employee/dashboard' : null

  return (
    <header className="border-b border-brand-gold/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[0.18em] text-brand-maroon">
          [BRAND NAME]
        </Link>
        <nav className="hidden items-center gap-6 md:flex text-sm text-slate-700">
          <Link href="/">Home</Link>
          <Link href="/plans">Membership</Link>
          <Link href="/products">Products</Link>
          <Link href="/reward">Rewards</Link>
          <Link href="/offers">Offers</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/support">Support</Link>
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {portalPath ? (
                <Link href={portalPath} className="hidden rounded-full border border-brand-maroon px-4 py-2 text-sm font-medium text-brand-maroon transition hover:bg-brand-maroon hover:text-white md:inline-flex">
                  {userName ? `Hi, ${userName}` : 'Dashboard'}
                </Link>
              ) : null}
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="rounded-full border border-brand-maroon px-4 py-2 text-sm font-medium text-brand-maroon transition hover:bg-brand-maroon hover:text-white">
                Login
              </Link>
              <Link href="/signup" className="rounded-full bg-brand-maroon px-4 py-2 text-sm font-medium text-white shadow-sm shadow-brand-maroon/20">
                Join Now
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
