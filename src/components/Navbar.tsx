import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LogoutButton from './LogoutButton'

export default function Navbar() {
  const { user } = useAuth()
  const userRole = user?.role
  const userName = user?.name || ''
  
  const portalPath = userRole === 'Customer' 
    ? '/customer/dashboard' 
    : userRole === 'CEO' || userRole === 'Manager'
    ? '/admin/dashboard'
    : userRole === 'Finance Manager'
    ? '/finance/dashboard'
    : userRole === 'Sales Manager'
    ? '/sales/dashboard'
    : userRole
    ? '/employee/dashboard'
    : null

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-[0.18em] text-brand-maroon">
          [BRAND NAME]
        </Link>
        <nav className="hidden items-center gap-6 md:flex text-sm text-slate-700">
          <Link to="/" className="hover:text-brand-maroon transition">Home</Link>
          <Link to="/plans" className="hover:text-brand-maroon transition">Membership</Link>
          <Link to="/products" className="hover:text-brand-maroon transition">Products</Link>
          <Link to="/reward" className="hover:text-brand-maroon transition">Rewards</Link>
          <Link to="/offers" className="hover:text-brand-maroon transition">Offers</Link>
          <Link to="/partners" className="hover:text-brand-maroon transition">Partners</Link>
          <Link to="/support" className="hover:text-brand-maroon transition">Support</Link>
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {portalPath && (
                <Link
                  to={portalPath}
                  className="rounded-full border border-brand-maroon px-4 py-2 text-sm font-medium text-brand-maroon transition hover:bg-brand-maroon hover:text-white"
                >
                  {userName ? `Hi, ${userName.split(' ')[0]}` : 'Dashboard'}
                </Link>
              )}
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-full border border-brand-maroon px-4 py-2 text-sm font-medium text-brand-maroon transition hover:bg-brand-maroon hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-brand-maroon px-4 py-2 text-sm font-medium text-white shadow-sm shadow-brand-maroon/20 hover:bg-[#431523] transition"
              >
                Join Now
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

