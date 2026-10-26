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
    <header className="sticky top-0 z-50 border-b border-brand-gold/15 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-maroon text-white font-serif font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            L
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-serif font-bold tracking-tight text-navy leading-none">
              Lakshmi<span className="text-brand-maroon">Club</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold leading-none mt-1">
              Membership &amp; Savings
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex text-sm font-medium text-slate-700">
          <Link to="/" className="hover:text-brand-maroon transition">Home</Link>
          <Link to="/plans" className="hover:text-brand-maroon transition">Plans</Link>
          <Link to="/products" className="hover:text-brand-maroon transition font-semibold text-brand-maroon">
            Brands &amp; Products
          </Link>
          <Link to="/reward" className="hover:text-brand-maroon transition">Rewards</Link>
          <Link to="/offers" className="hover:text-brand-maroon transition">Offers</Link>
          <Link to="/partners" className="hover:text-brand-maroon transition">Retail Partners</Link>
          <Link to="/support" className="hover:text-brand-maroon transition">Support</Link>
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {portalPath && (
                <Link
                  to={portalPath}
                  className="rounded-full border border-brand-maroon px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-maroon transition hover:bg-brand-maroon hover:text-white"
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
                className="rounded-full border border-brand-maroon/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-maroon transition hover:bg-brand-maroon hover:text-white"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-brand-maroon px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-brand-maroon/20 hover:bg-[#431523] transition"
              >
                Become Member
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
