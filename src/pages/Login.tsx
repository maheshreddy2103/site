import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Lock, Mail, ShieldCheck, ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please provide both email and password.')
      return
    }

    login(email)

    // Redirect based on role inferred from email or default to customer
    if (email.toLowerCase().includes('ceo') || email.toLowerCase().includes('manager')) {
      navigate('/admin/dashboard')
    } else if (email.toLowerCase().includes('finance')) {
      navigate('/finance/dashboard')
    } else if (email.toLowerCase().includes('sales')) {
      navigate('/sales/dashboard')
    } else if (email.toLowerCase().includes('employee')) {
      navigate('/employee/dashboard')
    } else {
      navigate('/customer/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] px-4 py-16 text-slate-100 sm:px-6 lg:px-8 radial-mesh flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#131B2E]/80 p-8 shadow-2xl backdrop-blur-xl">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-emerald-400 p-[1px] shadow-lg shadow-indigo-500/20 mb-4">
            <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#0B0F19]">
              <Lock className="h-5 w-5 text-indigo-400" />
            </div>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">FinTech Portal Login</h1>
          <p className="mt-1 text-xs text-slate-400">Secure cryptographic access for members and managers</p>
        </div>
        
        {/* Quick Demo Accounts */}
        <div className="mt-6 rounded-2xl bg-[#0B0F19]/80 p-3.5 text-xs text-slate-300 border border-white/5 space-y-1">
          <p className="font-semibold text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5" /> Instant Demo Accounts:
          </p>
          <div className="text-[11px] text-slate-400">
            <p>Member: <code className="text-indigo-300 font-mono">demo.customer@brand.com</code></p>
            <p>Executive: <code className="text-indigo-300 font-mono">ceo@brand.com</code></p>
            <p className="text-slate-500">Password: (any value)</p>
          </div>
        </div>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
              Email Identifier
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#0B0F19]/80 pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                placeholder="you@domain.com"
                type="email"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
              Secure Password
            </label>
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
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition hover:from-indigo-600 hover:to-indigo-700 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Authenticate Session</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          New to the savings platform?{' '}
          <Link to="/signup" className="text-emerald-400 font-semibold hover:underline">
            Register Account
          </Link>
        </p>
      </div>
    </div>
  )
}
