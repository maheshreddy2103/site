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
    : userRole === 'CEO' || userRole === 'Manager'
    ? '/admin/dashboard'
    : userRole === 'Finance Manager'
    ? '/finance/dashboard'
    : userRole === 'Sales Manager'
    ? '/sales/dashboard'
    : userRole
    ? '/employee/dashboard'
    : null

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Plans', path: '/plans' },
    { name: 'Products', path: '/products', badge: '100% Genuine' },
    { name: 'Rewards', path: '/reward' },
    { name: 'Partners', path: '/partners' },
    { name: 'Support', path: '/support' }
  ]

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 pt-4 pb-2">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl px-5 py-3 shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between">
          
          {/* Dual-Tone Geometric Tech Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-800 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0B0F19]">
                {/* Geometric Vector Glyph */}
                <svg className="w-5 h-5 text-indigo-400 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              {/* Pulsing indicator dot */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#0B0F19]"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-extrabold text-base tracking-tight text-white group-hover:text-indigo-200 transition">
                  LAKSHMI
                </span>
                <span className="rounded bg-indigo-500/10 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-indigo-400 border border-indigo-500/30">
                  FINTECH
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-[0.18em] text-slate-400">
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
                  className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-lg flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-white/5 border border-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400 border border-emerald-500/20">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-gradient-to-r from-emerald-400 to-indigo-500 rounded-full" />
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
                    className="flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all shadow-sm"
                  >
                    <UserIcon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{userName ? userName.split(' ')[0] : 'Portal'}</span>
                  </Link>
                )}
                <LogoutButton />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition hover:bg-white/[0.04]"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-indigo-500/40 active:scale-[0.98]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
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
