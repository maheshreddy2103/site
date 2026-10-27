import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LogoutButton from './LogoutButton'
import { ShieldCheck, Sparkles, ArrowRight, Layers, User as UserIcon } from 'lucide-react'

export default function Navbar() {
  const { user } = useAuth()
  const location = useLocation()
  const userRole = user?.role
  const userName = user?.name || ''

  const portalPath = userRole === 'Customer'
    ? '/customer/dashboard'
    : userRole === 'Admin' || userRole === 'CEO'
    ? '/admin/dashboard'
    : userRole === 'Manager'
    ? '/manager/dashboard'
    : userRole === 'Finance Manager' || userRole === 'Finance'
    ? '/finance/dashboard'
    : userRole === 'Sales Manager' || userRole === 'Sales'
    ? '/sales/dashboard'
    : userRole
    ? '/employee/dashboard'
    : null

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Auto-Save', path: '/plans', badge: '₹50/day' },
    { name: 'Appliances', path: '/products', badge: '0% EMI' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Track Orders', path: '/orders' },
    { name: 'Support', path: '/support' }
  ]

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 pt-4 pb-2">
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-xl px-5 py-3 shadow-md shadow-slate-200/50">
        <div className="flex items-center justify-between">
          
          {/* Dual-Tone Geometric Tech Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/30 transition-all duration-300">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white">
                <svg className="w-5 h-5 text-indigo-600 group-hover:text-emerald-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-extrabold text-base tracking-tight text-slate-900 group-hover:text-indigo-600 transition">
                  LAKSHMI
                </span>
                <span className="rounded bg-indigo-50 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-indigo-700 border border-indigo-200">
                  FINTECH
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-[0.18em] text-slate-500">
                Milestone Savings &amp; Finance
              </span>
            </div>
          </Link>

          {/* Navigation Links with animated indicator */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-xl flex items-center gap-1.5 ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50 border border-indigo-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-800 border border-emerald-200">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA & User Controls */}
          <div className="flex items-center gap-3">
            {user ? (
              <>
                {portalPath && (
                  <Link
                    to={portalPath}
                    className="flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold text-indigo-700 hover:bg-indigo-100 transition shadow-xs"
                  >
                    <UserIcon className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{userName ? userName.split(' ')[0] : 'Portal'}</span>
                  </Link>
                )}
                <LogoutButton />
              </>
            ) : (
              <>
                <Link
                  to="/admin/login"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
                  title="Institutional Admin Gateway"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Admin</span>
                </Link>
                <Link
                  to="/login"
                  className="rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 transition hover:bg-slate-100"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-md shadow-orange-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-orange-500/30 active:scale-[0.98]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-black" />
                  <span>Join Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
