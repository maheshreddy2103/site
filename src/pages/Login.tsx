import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    <div className="min-h-screen bg-cream px-4 py-12 text-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[2rem] border border-brand-gold/25 bg-white/90 p-8 shadow-lg shadow-brand-maroon/10">
        <h1 className="text-3xl font-semibold text-navy">Employee / Customer Login</h1>
        <p className="mt-2 text-sm text-slate-600">Secure access for members and employees.</p>
        
        <div className="mt-4 rounded-2xl bg-brand-gold/10 p-3 text-xs text-slate-600 border border-brand-gold/20">
          <p className="font-semibold text-brand-maroon mb-1">Demo Accounts:</p>
          <p>Customer: <code className="text-brand-navy">demo.customer@brand.com</code></p>
          <p>Admin / CEO: <code className="text-brand-navy">ceo@brand.com</code></p>
          <p>Pass: Any password</p>
        </div>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-brand-maroon focus:ring-2 focus:ring-brand-gold/30"
              placeholder="you@example.com"
              type="email"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-brand-maroon focus:ring-2 focus:ring-brand-gold/30"
              placeholder="••••••••"
              type="password"
              required
            />
          </div>
          {error && <div className="rounded-3xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
          <button className="w-full rounded-full bg-brand-maroon px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#431523]">
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

