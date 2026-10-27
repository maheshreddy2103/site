import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import {
  Lock,
  Mail,
  ShieldCheck,
  ArrowRight,
  User as UserIcon,
  Building2,
  Briefcase,
  Sparkles,
  CheckCircle2
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

interface LoginProps {
  defaultMode?: 'customer' | 'admin'
}

export default function Login({ defaultMode }: LoginProps) {
  const location = useLocation()
  const isExplicitAdminRoute =
    defaultMode === 'admin' ||
    location.pathname.includes('/admin') ||
    location.search.includes('role=admin')

  const [mode, setMode] = useState<'customer' | 'admin'>(
    isExplicitAdminRoute ? 'admin' : 'customer'
  )
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { user, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isExplicitAdminRoute) {
      setMode('admin')
    }
  }, [isExplicitAdminRoute])

  function handleQuickLogin(targetEmail: string, role: string, redirectPath: string) {
    setEmail(targetEmail)
    setPassword('••••••••••••')
    login(targetEmail, role)
    navigate(redirectPath)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please provide both email identifier and password credentials.')
      return
    }

    const emailLower = email.toLowerCase()

    if (mode === 'admin' || emailLower.includes('admin') || emailLower.includes('ceo')) {
      login(email, 'Admin')
      navigate('/admin/dashboard')
    } else if (emailLower.includes('manager')) {
      login(email, 'Manager')
      navigate('/manager/dashboard')
    } else if (emailLower.includes('finance')) {
      login(email, 'Finance Manager')
      navigate('/finance/dashboard')
    } else if (emailLower.includes('sales')) {
      login(email, 'Sales Manager')
      navigate('/sales/dashboard')
    } else if (emailLower.includes('employee')) {
      login(email, 'Employee')
      navigate('/employee/dashboard')
    } else {
      login(email, 'Customer')
      navigate('/customer/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] px-4 py-14 text-slate-100 sm:px-6 lg:px-8 radial-mesh flex items-center justify-center">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#131B2E]/90 p-8 shadow-2xl backdrop-blur-xl space-y-6">
        
        {/* Portal Mode Switcher */}
        <div className="grid grid-cols-2 rounded-2xl bg-[#0B0F19] p-1.5 border border-white/10">
          <button
            type="button"
            onClick={() => {
              setMode('customer')
              setError('')
              if (email.includes('admin') || email.includes('manager')) setEmail('')
            }}
            className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition cursor-pointer ${
              mode === 'customer'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserIcon className="h-4 w-4" />
            <span>Member Portal</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMode('admin')
              setError('')
              if (!email) setEmail('admin@lakshmi.com')
            }}
            className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition cursor-pointer ${
              mode === 'admin'
                ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Admin &amp; Management</span>
          </button>
        </div>

        {/* Portal Header */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-emerald-400 p-[1px] shadow-lg shadow-indigo-500/20 mb-3">
            <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#0B0F19]">
              {mode === 'admin' ? (
                <ShieldCheck className="h-6 w-6 text-indigo-400" />
              ) : (
                <Lock className="h-5 w-5 text-emerald-400" />
              )}
            </div>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            {mode === 'admin' ? 'Institutional Admin Gateway' : 'Member Savings Portal'}
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            {mode === 'admin'
              ? 'Multi-zone escrow governance, KYC auditing & executive command desk'
              : 'Secure cryptographic authentication for milestone savings & rewards'}
          </p>
        </div>

        {/* 1-Click Fast Presets */}
        <div className="rounded-2xl bg-[#0B0F19]/80 p-4 border border-white/5 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              1-Click Demo Login
            </span>
            <span className="text-[10px] text-slate-500">Auto authenticates instantly</span>
          </div>

          {mode === 'admin' ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() =>
                  handleQuickLogin('admin@lakshmi.com', 'Admin', '/admin/dashboard')
                }
                className="flex flex-col items-start rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-2.5 text-left hover:bg-indigo-500/20 hover:border-indigo-500/50 transition cursor-pointer"
              >
                <div className="flex items-center gap-1 text-xs font-bold text-indigo-300">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Super Admin</span>
                </div>
                <span className="text-[10px] text-slate-400 mt-0.5 truncate w-full">
                  admin@lakshmi.com
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleQuickLogin('manager@lakshmi.com', 'Manager', '/manager/dashboard')
                }
                className="flex flex-col items-start rounded-xl border border-teal-500/30 bg-teal-500/10 p-2.5 text-left hover:bg-teal-500/20 hover:border-teal-500/50 transition cursor-pointer"
              >
                <div className="flex items-center gap-1 text-xs font-bold text-teal-300">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>Ops Manager</span>
                </div>
                <span className="text-[10px] text-slate-400 mt-0.5 truncate w-full">
                  manager@lakshmi.com
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleQuickLogin('finance@lakshmi.com', 'Finance Manager', '/finance/dashboard')
                }
                className="flex flex-col items-start rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-left hover:bg-emerald-500/20 hover:border-emerald-500/50 transition cursor-pointer"
              >
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-300">
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>Finance Desk</span>
                </div>
                <span className="text-[10px] text-slate-400 mt-0.5 truncate w-full">
                  finance@lakshmi.com
                </span>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
              <div>
                <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <UserIcon className="h-3.5 w-3.5" /> Prime Platinum Member
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  demo.customer@brand.com
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleQuickLogin('demo.customer@brand.com', 'Customer', '/customer/dashboard')
                }
                className="rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-bold text-black hover:bg-emerald-400 transition cursor-pointer shadow-sm"
              >
                Auto Sign In
              </button>
            </div>
          )}
        </div>

        {/* Credentials Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
              {mode === 'admin' ? 'Institutional Email' : 'Member Email Identifier'}
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0B0F19]/80 pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                placeholder={mode === 'admin' ? 'admin@lakshmi.com' : 'you@domain.com'}
                type="email"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Password
              </label>
              <span className="text-[10px] text-slate-500">Encrypted AES-256</span>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0B0F19]/80 pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                placeholder="••••••••"
                type="password"
                required
              />
            </div>
          </div>

          {error && (
            <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 px-4 py-2.5 text-xs text-rose-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            className={`w-full rounded-xl px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2 shadow-lg ${
              mode === 'admin'
                ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-indigo-500/30 hover:from-indigo-600 hover:to-indigo-700'
                : 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-black shadow-emerald-500/30 hover:from-emerald-400 hover:to-emerald-500'
            }`}
          >
            <span>{mode === 'admin' ? 'Access Admin Console' : 'Authenticate Member Session'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition">
            ← Back to Home
          </Link>

          {mode === 'admin' ? (
            <Link
              to="/login"
              onClick={() => setMode('customer')}
              className="text-indigo-400 font-semibold hover:underline"
            >
              Member Sign In
            </Link>
          ) : (
            <Link to="/signup" className="text-emerald-400 font-semibold hover:underline">
              Create Savings Account →
            </Link>
          )}
        </div>

      </div>
    </div>
  )
}
