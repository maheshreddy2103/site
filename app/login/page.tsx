'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()
    if (response.ok) {
      const role = data.role as string
      const redirectPath =
        role === 'Customer'
          ? '/customer/dashboard'
          : role === 'CEO' || role === 'Manager'
          ? '/admin/dashboard'
          : role === 'Finance Manager' || role === 'Accountant'
          ? '/finance/dashboard'
          : role === 'Sales Manager' || role === 'Customer Acquisition Agent'
          ? '/sales/dashboard'
          : '/employee/dashboard'

      router.push(redirectPath)
    } else {
      setError(data.error || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen bg-cream px-4 py-12 text-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[2rem] border border-brand-gold/25 bg-white/90 p-8 shadow-lg shadow-brand-maroon/10">
        <h1 className="text-3xl font-semibold text-navy">Employee / Customer Login</h1>
        <p className="mt-2 text-sm text-slate-600">Secure access for members and employees.</p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
